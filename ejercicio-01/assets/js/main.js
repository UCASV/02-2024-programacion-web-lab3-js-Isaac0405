const countVotes = (votes) => {
    const voteCount = {};
    votes.forEach(({ candidate }) => {
        if (voteCount[candidate]) {
            voteCount[candidate]++;
        } else {
            voteCount[candidate] = 1;
        }
    });
    return voteCount;
};


const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    const results = countVotes(votes);
    showResults(results);
}

main();
