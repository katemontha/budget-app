CreditsController.$inject = ['$http'];

function CreditsController($http) {

    let vm = this;

    vm.creditEntries = [
        {
            amount: 123,
            note: 123,
            createdAt: 123,
        },
        {
            amount: 456,
            note: 456,
            createdAt: 456,
        }
    ]

    vm.addCredit = function () {

        vm.creditEntries.push({
            amount: vm.newCreditAmount,
            note: vm.newCreditNote,
            createdAt: new Date()
        })

        resetForm();
    }

    function resetForm() {
        vm.newCreditAmount = '';
        vm.newCreditNote = '';
    }

}

module.exports = CreditsController;