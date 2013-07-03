Feature: Death star

  In order to destroy all enemies,
  As Darth Vader
  I want a death star with unlimited blast power

  Scenario: Upgrade death star
    Given   there is temporary piece
    When    close to mineral planet
    Then    get all minerals on planet and upgrade arms

  #sidenote: We are constantly looking for planets to blow up
  Scenario: Blow up planet
    Given   enemy planet within range
    When    firing giant laser gun
    Then    the enemy planet should be completely destroyed