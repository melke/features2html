Feature: Ninja, fight or flight
  In order to increase the <b>ninja</b> survival rate,
  As a ninja commander
  I want my ninjas to decide whether to take on an
  opponent based on their skill levels

  #sidenote: This is a sidenote that will be rendered beside the scenario
  Scenario: Weaker opponent
    Given the ninja has a third level black-belt
    When attacked by a samurai
    Then the ninja should engage the opponent

  Background: Chuck Norris is unbeatable
    This is a well-known fact.
  Scenario: Stronger opponent
    Given the ninja has a third level black-belt
    When attacked by Chuck Norris
    Then the ninja should run for his life