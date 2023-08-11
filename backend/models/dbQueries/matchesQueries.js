const insertIntoMatches = `
INSERT INTO matches (user_id, clothing_id)
VALUES ($1, $2); 
`
const getUserMatches = `
SELECT * 
`
