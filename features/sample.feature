Feature: Bowling game score
    Everybody wants to know how to calculate the score of a bowling game.

    Rule: A frame is composed of 1 try or 2 tries.

        Scenario Outline: Score of a simple game
            Given a game with frames <Frames>
            When the score is calculated
            Then the score is <Score>

            Examples:
                | Frames                          |  | Score |
                | '9- 9- 9- 9- 9- 9- 9- 9- 9- 9-' |  | 90    |
                | '2- 2- 2- 2- 2- 2- 8/ 2- 2- 2-' |  | 30    |
                | '9- 9- 9- 9- 9- 9- X 9- 9- 9-'  |  | 100   |
                | '9- -- 9- 9- 9- 9- X 9- 9- --'  |  | 82    |
                | '9- 9- 9- 9- 9- 9- X 9- 9- 9/ '  |  | 100   |

