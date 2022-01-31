const teamData = [
    {id: 1, name: 'Arizona Cardinals', division: '2nd NFC West', record: '11 Wins 6 Losses'},
    {id: 2, name: 'Atlanta Falcons', division: '3rd NFC South', record: '7 Wins 10 Losses'},
    {id: 3, name: 'Carolina Panthers', division: '4th NFC South', record: '5 Wins 12 Losses'},
    {id: 4, name: 'Chicago Bears', division: '3rd NFC North', record: '6 Wins 11 Losses'},
    {id: 5, name: 'Dallas Cowboys', division: '1st NFC East', record: '12 Wins 5 Losses'},
    {id: 6, name: 'Detroit Lions', division: '4th NFC North', record: '3 Wins 13 Losses 1 Tie'},
    {id: 7, name: 'Green Bay Packers', division: '1st NFC North', record: '13 Wins 4 Losses'},
    {id: 8, name: 'Los Angeles Rams', division: '1st NFC West', record: '12 Wins 5 Losses'},
    {id: 9, name: 'Minnesota Vikings', division: '2nd NFC North', record: '8 Wins 9 Losses'},
    {id: 10, name: 'New Orleans Saints', division: '2nd NFC South', record: '9 Wins 8 Losses'},
    {id: 11, name: 'New York Giants', division: '4th NFC East', record: '4 Wins 13 Losses'},
    {id: 12, name: 'Philadelphia Eagles', division: '2nd NFC East', record: '9 Wins 8 Losses'},
    {id: 13, name: 'San Franciso 49ers', division: '3rd NFC West', record: '10 Wins 7 Losses'},
    {id: 14, name: 'Seattle Seahawks', division: '4th NFC West', record: '7 Wins 10 Losses'},
    {id: 15, name: 'Tampa Bay Buccaneers', division: '1st NFC South', record: '13 Wins 4 Losses'},
    {id: 16, name: 'Washington Football Team', division: '3rd NFC East', record: '7 Wins 10 Losses'},
    {id: 17, name: 'Baltimore Ravens', division: '4th AFC North', record: '8 Wins 9 Losses'},
    {id: 18, name: 'Buffalo Bills', division: '1st AFC East', record: '11 Wins 6 Losses'},
    {id: 19, name: 'Cincinnati Bengals', division: '1st AFC North', record: '10 Wins 7 Losses'},
    {id: 20, name: 'Cleveland Browns', division: '3rd AFC North', record: '8 Wins 9 Losses'},
    {id: 21, name: 'Denver Broncos', division: '4th AFC West', record: '7 Wins 10 Losses'},
    {id: 22, name: 'Houston Texans', division: '3rd AFC South', record: '4 Wins 13 Losses'},
    {id: 23, name: 'Indianapolis Colts', division: '2nd AFC South', record: '9 Wins 8 Losses'},
    {id: 24, name: 'Jacksonville Jaguars', division: '4th AFC South', record: '3 Wins 14 Losses'},
    {id: 25, name: 'Kansas City Chiefs', division: '1st AFC West', record: '12 Wins 5 Losses'},
    {id: 26, name: 'Las Vegas Raiders', division: '2nd AFC West', record: '10 Wins 7 Losses'},
    {id: 27, name: 'Los Angeles Chargers', division: '3rd AFC West', record: '9 Wins 8 Losses'},
    {id: 28, name: 'Miami Dolphins', division: '3rd AFC East', record: '9 Wins 8 Losses'},
    {id: 29, name: 'New England Patriots', division: '2nd AFC East', record: '10 Wins 7 Losses'},
    {id: 30, name: 'New York Jets', division: '4th AFC East', record: '4 Wins 13 Losses'},
    {id: 31, name: 'Pittsburgh Steelers', division: '2nd AFC North', record: '9 Wins 7 Losses 1 Tie'},
    {id: 32, name: 'Tennesse Titans', division: '1st AFC South', record: '12 Wins 5 Losses'}
]

const list = () => {
    return [...teamData]
}

const find = (id) => {
    const post = teamData.find(team => team.id === +id)
    return {...post}
}

module.exports = {list: list, find: find}