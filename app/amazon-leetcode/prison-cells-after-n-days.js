/*
There are 8 prison cells in a row, and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:

If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.
(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)

We describe the current state of the prison in the following way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.

Given the initial state of the prison, return the state of the prison after N days (and N such changes described above.)
*/
// The idea
// Convert array to string for easier look up
// A nextDay function returns the next arrangement
// Keep a hashtable of history arrangements, if a new arrangement is seen in the history, that means we have found a cycle
// Use % to calculate how many extra moves do we still need after the cycle point
var prisonAfterNDays = function(cells, N) {
    let nextDay = function(cells) {
        let newPrison = "";
        for (let i=0;i<cells.length;i++) {
            if (cells[i-1]==cells[i+1]) newPrison+='1';
            else newPrison+='0';
        }
        return newPrison;
    }
    let prison = [...cells].join('');
    let history = [];
    while (N--) {
        prison = nextDay(prison);
        let lookUp = history.indexOf(prison); // cycle found, get the cycle position
        if (lookUp!=-1) {
            let mod = N%(history.length - lookUp); // check how many extra moves after the cycle
            return history[lookUp + mod].split('');
        }
        history.push(prison);
    }
    return prison.split('');
};