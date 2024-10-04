

This API module manages the scoreboard system for a website, ensuring live updates of top user scores. It includes features for updating scores based on user actions and provides real-time leaderboard updates.




1. PATCH /api/:userId/score/update/
- Description: This endpoint is responsible for updating the user’s score when they complete an action.



Headers:
- Authorization: Bearer Token to authenticate the user.



Body Parameters:


- Score: The new score or the score increment to be added to the user’s current score.



Response:

Success (200):
Body:
{
  "status": "success",
  "message": "Score updated successfully",
  "newScore": 1050
}




Failure (400/403/500):
Possible reasons: Invalid token, unauthorized user, missing required parameters, or internal server error.
Example error response:
{
  "status": "error",
  "message": "Unauthorized or invalid request"
}




2. GET /api/score/top
Description: This endpoint retrieves the top 10 scores from the database to display on the scoreboard.


- Headers: None if anyone can see the top scores , Bearer token if you need to be in the game to see the scores.



Response:

Success (200):
Body: 
{
  "status": "success",
  "topScores": [
    { "userId": 1, "username": "User1", "score": 2000 },
    { "userId": 2, "username": "User2", "score": 1950 },
    ...
  ]
}

Failure (500):
Example error response:
{
  "status": "error",
  "message": "Failed to retrieve scores"
}


## Security Considerations
- All score updates require an `Authorization` token.
- Rate-limiting and input validation are enforced to prevent abuse.


## Improvement Suggestions
- Implement caching for top scores.
- Add pagination support for leaderboard browsing.




+----------------------------+
|   User completes an action  |
+----------------------------+
              |
              v
+----------------------------+
| PATCH /api/:userId/score/update |
|  (Sends userId in URL and score in body) |
+----------------------------+
              |
              v
+----------------------------+
|  Verify Authorization Token |
|   (Ensure token matches userId)  |
+----------------------------+
         | Valid | Invalid
              v
+----------------------------+
|  Retrieve user's current    |
|  score from database        |
+----------------------------+
              |
              v
+----------------------------+
|  Update user's score        |
|  (Add the new score)        |
+----------------------------+
              |
              v
+----------------------------+
|   GET /api/score/top         |
|  (Retrieve top 10 scores)  |
+----------------------------+
              |
              v
+----------------------------+
|  Broadcast real-time update |
|  to all connected clients  |
+----------------------------+
