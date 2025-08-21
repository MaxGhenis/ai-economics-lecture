"""
Test to verify that NY CTC correctly implements TCJA sunset provisions.
The TCJA expires on December 31, 2025, so parameters should revert to
pre-TCJA values starting January 1, 2026.
"""

from policyengine_us import Simulation
from policyengine_core.periods import instant


def test_ny_ctc_tcja_sunset_date():
    """
    Test that TCJA CTC provisions expire correctly on January 1, 2026.
    This test should FAIL with PR #6426's changes that extend the stop date to 2035.
    """

    # Test scenario: Single parent with one qualifying child, moderate income
    test_household = {
        "tax_units": {
            "tax_unit": {
                "members": ["parent", "child"],
                "ny_agi": 50_000,  # Well below phase-out thresholds
            }
        },
        "people": {
            "parent": {
                "age": 35,
                "is_tax_unit_head": True,
            },
            "child": {
                "age": 10,  # Qualifying child age
                "is_tax_unit_dependent": True,
            }
        },
        "households": {
            "household": {
                "members": ["parent", "child"],
                "state_code": "NY",
            }
        }
    }

    # Test 1: Verify TCJA provisions are active in 2025
    sim_2025 = Simulation(
        situation=test_household,
        tax_benefit_system="us",
        dataset="cps",
        year=2025
    )

    # During TCJA (2018-2025), federal CTC should be $2,000 per child
    federal_ctc_2025 = sim_2025.calculate("ctc", 2025)

    # Test 2: Verify TCJA provisions expire in 2026
    sim_2026 = Simulation(
        situation=test_household,
        tax_benefit_system="us",
        dataset="cps",
        year=2026
    )

    # After TCJA expires (2026+), federal CTC should revert to $1,000 per child
    federal_ctc_2026 = sim_2026.calculate("ctc", 2026)

    # Test 3: Verify the parameter stop date is correct
    # This directly tests the code change in PR #6426
    # Note: This import is for documentation purposes
    # from policyengine_us.variables.gov.states.ny.tax.income.credits.ctc.\
    #     ny_ctc_pre_2024_eligible import ny_ctc_pre_2024_eligible

    # Create a mock simulation to test the parameter updates
    sim_test = Simulation(
        situation=test_household,
        tax_benefit_system="us",
        dataset="cps",
        year=2025
    )

    # Get the tax benefit system and check parameter updates
    tbs = sim_test.tax_benefit_system.clone()
    branch_parameters = tbs.parameters

    # Simulate what the ny_ctc_pre_2024_eligible formula does
    for ctc_parameter in branch_parameters.gov.irs.credits.ctc.get_descendants():
        if hasattr(ctc_parameter, 'update'):
            # The stop date should be 2026-01-01 (TCJA sunset), not 2035-01-01
            # This assertion will FAIL with PR #6426's changes
            assert ctc_parameter.stop == instant("2026-01-01"), \
                f"TCJA provisions should expire on 2026-01-01, not later. " \
                f"Found stop date: {ctc_parameter.stop}"

    # Additional assertions to verify correct behavior
    assert federal_ctc_2025 > federal_ctc_2026, \
        "Federal CTC should be higher during TCJA (2025) than after expiration (2026)"

    # The federal CTC during TCJA should be approximately $2,000
    # (may vary slightly based on other factors)
    assert 1900 <= federal_ctc_2025 <= 2100, \
        f"Federal CTC in 2025 should be around $2,000, got {federal_ctc_2025}"

    # The federal CTC after TCJA should be approximately $1,000
    assert 900 <= federal_ctc_2026 <= 1100, \
        f"Federal CTC in 2026 should be around $1,000, got {federal_ctc_2026}"


def test_ny_ctc_parameter_timeline():
    """
    Test that verifies the correct timeline of TCJA provisions.
    This ensures parameters are set correctly for the legal sunset date.
    """

    # Years to test around the TCJA sunset
    test_years = [2024, 2025, 2026, 2027]

    for year in test_years:
        sim = Simulation(
            situation={
                "tax_units": {"tu": {"members": ["p1"]}},
                "people": {"p1": {"age": 40}},
                "households": {"h": {"members": ["p1"], "state_code": "NY"}}
            },
            tax_benefit_system="us",
            dataset="cps",
            year=year
        )

        # Get the CTC parameters for this year
        params = sim.tax_benefit_system.parameters(f"{year}-01-01")
        ctc_params = params.gov.irs.credits.ctc

        if year <= 2025:
            # During TCJA period - should have TCJA values
            # Maximum credit should be $2,000
            assert ctc_params.amount.max == 2000, \
                f"In {year}, CTC max should be $2,000 (TCJA value)"
        else:
            # After TCJA expires - should revert to pre-TCJA values
            # Maximum credit should be $1,000
            assert ctc_params.amount.max == 1000, \
                f"In {year}, CTC max should be $1,000 (pre-TCJA value)"


if __name__ == "__main__":
    # Run the tests
    print("Testing NY CTC TCJA sunset provisions...")

    try:
        test_ny_ctc_tcja_sunset_date()
        print("✓ TCJA sunset date test passed")
    except AssertionError as e:
        print(f"✗ TCJA sunset date test FAILED: {e}")

    try:
        test_ny_ctc_parameter_timeline()
        print("✓ Parameter timeline test passed")
    except AssertionError as e:
        print(f"✗ Parameter timeline test FAILED: {e}")

    print("\nNote: With PR #6426's changes (extending stop to 2035-01-01),")
    print("these tests should FAIL because the PR incorrectly extends ")
    print("TCJA beyond its legal expiration.")
