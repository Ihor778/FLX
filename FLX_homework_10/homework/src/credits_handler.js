let defaultBalance = 100;
let defaultLim = 100;
let keys = 0;
let cards = [];
let time = new Date().toLocaleString('en-GB');

function userCard(id) {
    let hist = []
    cards[id] = {
        'keys': id,
        'balance': defaultBalance,
        'transactionLimit': defaultLim,
        'hist': hist[id]
    }
    function getCardOptions() {
        return cards[id];
    }
    function putCredits(moneyTake) {
        cards[id].balance += moneyTake;
        hist.push({
            'operationType': 'Received credits',
            'credits': moneyTake,
            'time': time
        })
        cards[id].hist = hist;
    }
    function takeCredits(moneyTake) {
        if (moneyTake <= cards[id].transactionLimit && moneyTake <= cards[id].balance) {
            cards[id].balance -= moneyTake;
            hist.push({
                'operationType': 'Withdrawal of credits',
                'credits': moneyTake,
                'time': time
            })
            cards[id].hist = hist;
        } else {
            console.error('Incorrect sum');
        }
    }
    function setTransactionLimit(transLim) {
        cards[id].transactionLimit = transLim;
        hist.push({
            'operationType': 'Transaction limit change',
            'credits': transLim,
            'time': time
        })
        cards[id].hist = hist;
    }
    function transferCredits(creditsSum, card) {
        let tax = 0.005;
        let sumTax = creditsSum + creditsSum * tax;
        if (creditsSum <= cards[id].transactionLimit && creditsSum <= cards[id].balance) {
            card.putCredits(creditsSum);
            this.takeCredits(sumTax);
        } else {
            console.error('Incorrect sum');
        }
    }
    return {
        getCardOptions: getCardOptions,
        putCredits: putCredits,
        takeCredits: takeCredits,
        setTransactionLimit: setTransactionLimit,
        transferCredits: transferCredits

    }
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.card = [];
        this.maxCards = 3;
    }
    addCard() {
        if (this.card.length < this.maxCards) {
            this.card.push(userCard(this.card.length + 1));
        } else {
            console.error('Max card 3')
        }
    }
    getCardByKey(key) {
        return this.card[key - 1];
    }
}