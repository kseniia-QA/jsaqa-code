Feature: Booking ticket
    Scenario: Should booking 1 ticket
        Given user is on 'http://qamid.tmweb.ru/client/index.php' page
        When user choose day '.page-nav > a:nth-child(3)'
        When user choose time 'a.movie-seances__time'
        When user choose chair '.buying-scheme__row > span:nth-child(7)'
        When user click booking 'button.acceptin-button'
        Then user sees text 'Вы выбрали билеты:'




    Scenario: Should booking 2 ticketы
        Given user goes to 'http://qamid.tmweb.ru/client/index.php' page
        When user chooses weekday '.page-nav > a:nth-child(3)'
        When user chooses movietime 'a.movie-seances__time'
        When user chooses seat '.buying-scheme__row > span:nth-child(9)'
        When user choose second chair '.buying-scheme__row > span:nth-child(10)'
        When user clicks affirmation 'button.acceptin-button'
        Then user sees success 'Вы выбрали билеты:'
