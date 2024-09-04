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

const showResults = (results) => {
    resultString = "Resultados de la votación: ";
    for (const candidate in results) {
        resultString += `${candidate}: ${results[candidate]} votos\n`;
    }
    alert(resultString);
};

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' },
    ];
    results = countVotes(votes);
    showResults(results);
}

main();
