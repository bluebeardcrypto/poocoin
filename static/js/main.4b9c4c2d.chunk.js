(this.webpackJsonpcharts = this.webpackJsonpcharts || []).push([[1], {
    113: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"holderInfo","outputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_size","type":"uint256"}],"name":"setTopHolderSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    115: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract CakeToken","name":"_cake","type":"address"},{"internalType":"contract SyrupBar","name":"_syrup","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_cakePerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract CakeToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract SyrupBar","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    159: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"address","name":"_tokenLpAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"string","name":"message","type":"string"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"messageLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"messages","outputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"string","name":"message","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenLpAddress","type":"address"}],"name":"setTokenLpAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenLpAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    16: function(e, t) {
        t.chainId = "56",
        t.graphqlUrl = "https://chartdata.poocoin.app",
        t.alwaysPremium = "1" === Object({
            NODE_ENV: "production",
            PUBLIC_URL: "https://poocoin.app",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_CHAIN_ID: "56",
            REACT_APP_NODE_1: "https://bsc-dataseed1.defibit.io",
            REACT_APP_NODE_2: "https://bsc-dataseed1.defibit.io",
            REACT_APP_NODE_3: "https://bsc-dataseed1.defibit.io"
        }).REACT_APP_ALWAYS_PREMIUM,
        t.cfUrl = "https://api1.poocoin.app"
    },
    161: function(e) {
        e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"AUTO","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUTOMaxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUTOPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUTOv2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_want","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"address","name":"_strat","type":"address"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_inputAmt","type":"uint256"}],"name":"migrateToAUTOv2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerAUTOReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingAUTO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"want","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accAUTOPerShare","type":"uint256"},{"internalType":"address","name":"strat","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"stakedWantTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    163: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract EggToken","name":"_egg","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256","name":"_eggPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"egg","outputs":[{"internalType":"contract EggToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eggPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingEgg","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accEggPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_eggPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    164: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract SlimeToken","name":"_st","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"_divPoolAddress","type":"address"},{"internalType":"uint256","name":"_slimesPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Burned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"userTo","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"ReferralPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_FEE_ALLOWED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"__lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"__fee","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_slimesPerBlock","type":"uint256"}],"name":"changeSlimiesPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"devAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"divPoolAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"divPoolFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"divdevfee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"divreferralfee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"bool","name":"enabled","type":"bool"}],"name":"enableMethod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"enablemethod","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"idsx","type":"uint256[]"}],"name":"massHarvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"idsx","type":"uint256[]"}],"name":"massStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardVote","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"__lastRewardBloc","type":"uint256"},{"internalType":"uint256","name":"__fee","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardReferral","type":"address"}],"name":"setRewardReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"setStakePoolId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_divPoolAddress","type":"address"}],"name":"setdivPoolAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"slimesPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"st","outputs":[{"internalType":"contract SlimeToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"stakeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakepoolId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_devFee","type":"uint256"},{"internalType":"uint256","name":"_refFee","type":"uint256"},{"internalType":"uint256","name":"_divPoolFee","type":"uint256"}],"name":"updateFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    183: function(e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]')
    },
    188: function(e) {
        e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_promotedAddress","type":"address"},{"internalType":"string","name":"_promotedMessage","type":"string"}],"name":"setProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"promotedAddress","type":"address"},{"internalType":"string","name":"promotedMessage","type":"string"}],"stateMutability":"view","type":"function"}]')
    },
    195: function(e, t, n) {
        e.exports = {
            clearfix: "TokenFeed_clearfix__2GsOj",
            "link-primary": "TokenFeed_link-primary__Jv12s",
            "link-secondary": "TokenFeed_link-secondary__t4jwN",
            "link-success": "TokenFeed_link-success__1d3VH",
            "link-info": "TokenFeed_link-info__3CbGA",
            "link-warning": "TokenFeed_link-warning__VH995",
            "link-danger": "TokenFeed_link-danger__33P93",
            "link-light": "TokenFeed_link-light__SL7ws",
            "link-dark": "TokenFeed_link-dark__2IeMO",
            "link-dark-1": "TokenFeed_link-dark-1__1kEl-",
            "link-dark-2": "TokenFeed_link-dark-2__2mDIQ",
            "link-blue-dark": "TokenFeed_link-blue-dark__3Nkoo",
            ratio: "TokenFeed_ratio__3_B0q",
            "ratio-1x1": "TokenFeed_ratio-1x1__3-RH9",
            "ratio-4x3": "TokenFeed_ratio-4x3__3ppo-",
            "ratio-16x9": "TokenFeed_ratio-16x9__3muJH",
            "ratio-21x9": "TokenFeed_ratio-21x9__2rTIA",
            "fixed-top": "TokenFeed_fixed-top__2YPbG",
            "fixed-bottom": "TokenFeed_fixed-bottom__825US",
            "sticky-top": "TokenFeed_sticky-top__3LZGG",
            "sticky-sm-top": "TokenFeed_sticky-sm-top__qkLKW",
            "sticky-md-top": "TokenFeed_sticky-md-top__f5g3J",
            "sticky-lg-top": "TokenFeed_sticky-lg-top__2VbG8",
            "sticky-xl-top": "TokenFeed_sticky-xl-top__3n2G1",
            "sticky-xxl-top": "TokenFeed_sticky-xxl-top__2eT58",
            "visually-hidden": "TokenFeed_visually-hidden__cXsew",
            "visually-hidden-focusable": "TokenFeed_visually-hidden-focusable__3A7k7",
            "stretched-link": "TokenFeed_stretched-link__2Wfi9",
            "text-truncate": "TokenFeed_text-truncate__3lWiN",
            "align-baseline": "TokenFeed_align-baseline__k65VT",
            "align-top": "TokenFeed_align-top__1o_-_",
            "align-middle": "TokenFeed_align-middle__1MM2e",
            "align-bottom": "TokenFeed_align-bottom__3zwwH",
            "align-text-bottom": "TokenFeed_align-text-bottom__1pL8W",
            "align-text-top": "TokenFeed_align-text-top__qqQMM",
            "float-start": "TokenFeed_float-start__36JuD",
            "float-end": "TokenFeed_float-end__q7C3f",
            "float-none": "TokenFeed_float-none__17HAZ",
            "overflow-auto": "TokenFeed_overflow-auto__10jFE",
            "overflow-hidden": "TokenFeed_overflow-hidden__1ZHm6",
            "overflow-visible": "TokenFeed_overflow-visible__2GOw9",
            "overflow-scroll": "TokenFeed_overflow-scroll__1Znpn",
            "d-inline": "TokenFeed_d-inline__RwBIN",
            "d-inline-block": "TokenFeed_d-inline-block__3hv8y",
            "d-block": "TokenFeed_d-block__1Cay6",
            "d-grid": "TokenFeed_d-grid__yvcuD",
            "d-table": "TokenFeed_d-table__2xcV0",
            "d-table-row": "TokenFeed_d-table-row__2Iaqf",
            "d-table-cell": "TokenFeed_d-table-cell__1jvPY",
            "d-flex": "TokenFeed_d-flex__LLUpP",
            "d-inline-flex": "TokenFeed_d-inline-flex__Lc7J0",
            "d-none": "TokenFeed_d-none__yyKQh",
            shadow: "TokenFeed_shadow__2Quv1",
            "shadow-sm": "TokenFeed_shadow-sm__38xN3",
            "shadow-lg": "TokenFeed_shadow-lg__vjEFC",
            "shadow-none": "TokenFeed_shadow-none__Cgi0M",
            "position-static": "TokenFeed_position-static__386MA",
            "position-relative": "TokenFeed_position-relative__3_aKt",
            "position-absolute": "TokenFeed_position-absolute__10JxB",
            "position-fixed": "TokenFeed_position-fixed__hrEQ2",
            "position-sticky": "TokenFeed_position-sticky__W8nEm",
            "top-0": "TokenFeed_top-0__GhFDO",
            "top-50": "TokenFeed_top-50__2XbVr",
            "top-100": "TokenFeed_top-100__3gUEY",
            "bottom-0": "TokenFeed_bottom-0__1I2Og",
            "bottom-50": "TokenFeed_bottom-50__32QRt",
            "bottom-100": "TokenFeed_bottom-100__2zUHo",
            "start-0": "TokenFeed_start-0__3qfVw",
            "start-50": "TokenFeed_start-50__1Nx_2",
            "start-100": "TokenFeed_start-100__-MUi4",
            "end-0": "TokenFeed_end-0__UJMmh",
            "end-50": "TokenFeed_end-50__X34t6",
            "end-100": "TokenFeed_end-100__4VzfG",
            "translate-middle": "TokenFeed_translate-middle__1ZusD",
            "translate-middle-x": "TokenFeed_translate-middle-x__1xtZT",
            "translate-middle-y": "TokenFeed_translate-middle-y__1UAvk",
            border: "TokenFeed_border__1V4Gl",
            "border-0": "TokenFeed_border-0__2mx-w",
            "border-top": "TokenFeed_border-top__1_675",
            "border-top-0": "TokenFeed_border-top-0__vfejd",
            "border-end": "TokenFeed_border-end__1o8aq",
            "border-end-0": "TokenFeed_border-end-0__-Pj-O",
            "border-bottom": "TokenFeed_border-bottom__2LNos",
            "border-bottom-0": "TokenFeed_border-bottom-0__3jr_T",
            "border-start": "TokenFeed_border-start__3Mo7C",
            "border-start-0": "TokenFeed_border-start-0__lgHLg",
            "border-primary": "TokenFeed_border-primary__1JNfX",
            "border-secondary": "TokenFeed_border-secondary__1H95n",
            "border-success": "TokenFeed_border-success__3q3DJ",
            "border-info": "TokenFeed_border-info__2lFpQ",
            "border-warning": "TokenFeed_border-warning__1OSjb",
            "border-danger": "TokenFeed_border-danger__1HTTv",
            "border-light": "TokenFeed_border-light__12Qzz",
            "border-dark": "TokenFeed_border-dark__1Uz-S",
            "border-dark-1": "TokenFeed_border-dark-1__3vZgw",
            "border-dark-2": "TokenFeed_border-dark-2__EyfjT",
            "border-blue-dark": "TokenFeed_border-blue-dark__Ck2gg",
            "border-white": "TokenFeed_border-white__1LcoG",
            "border-1": "TokenFeed_border-1__2zOTV",
            "border-2": "TokenFeed_border-2__1o2da",
            "border-3": "TokenFeed_border-3__2Gfp6",
            "border-4": "TokenFeed_border-4__2IdqU",
            "border-5": "TokenFeed_border-5__3zV_B",
            "w-25": "TokenFeed_w-25__qeBMD",
            "w-50": "TokenFeed_w-50__3GzoW",
            "w-75": "TokenFeed_w-75__1dFwg",
            "w-100": "TokenFeed_w-100__lI1YV",
            "w-auto": "TokenFeed_w-auto__2-D1v",
            "mw-100": "TokenFeed_mw-100__3OZ8G",
            "vw-100": "TokenFeed_vw-100__2TpPQ",
            "min-vw-100": "TokenFeed_min-vw-100___DH0n",
            "h-25": "TokenFeed_h-25__1249g",
            "h-50": "TokenFeed_h-50__1Zm0w",
            "h-75": "TokenFeed_h-75__2FFyO",
            "h-100": "TokenFeed_h-100__3J2BI",
            "h-auto": "TokenFeed_h-auto__2ASiC",
            "mh-100": "TokenFeed_mh-100__37QGK",
            "vh-100": "TokenFeed_vh-100__2lf9m",
            "min-vh-100": "TokenFeed_min-vh-100__2arFK",
            "flex-fill": "TokenFeed_flex-fill__1Kxo-",
            "flex-row": "TokenFeed_flex-row__3d1T3",
            "flex-column": "TokenFeed_flex-column__2yRhV",
            "flex-row-reverse": "TokenFeed_flex-row-reverse__2dr28",
            "flex-column-reverse": "TokenFeed_flex-column-reverse__34H54",
            "flex-grow-0": "TokenFeed_flex-grow-0__13lko",
            "flex-grow-1": "TokenFeed_flex-grow-1__TKfQJ",
            "flex-shrink-0": "TokenFeed_flex-shrink-0__3g6ZF",
            "flex-shrink-1": "TokenFeed_flex-shrink-1__1t-VZ",
            "flex-wrap": "TokenFeed_flex-wrap__2Is4p",
            "flex-nowrap": "TokenFeed_flex-nowrap__16iz9",
            "flex-wrap-reverse": "TokenFeed_flex-wrap-reverse__uhP6B",
            "gap-0": "TokenFeed_gap-0__1RvgT",
            "gap-1": "TokenFeed_gap-1__2tuvJ",
            "gap-2": "TokenFeed_gap-2__2J6Lm",
            "gap-3": "TokenFeed_gap-3__1lCkW",
            "gap-4": "TokenFeed_gap-4__28ZGM",
            "gap-5": "TokenFeed_gap-5__3D_cf",
            "justify-content-start": "TokenFeed_justify-content-start__2ft8O",
            "justify-content-end": "TokenFeed_justify-content-end__2Z31p",
            "justify-content-center": "TokenFeed_justify-content-center__32I6D",
            "justify-content-between": "TokenFeed_justify-content-between__zCXCm",
            "justify-content-around": "TokenFeed_justify-content-around__1V9Q-",
            "justify-content-evenly": "TokenFeed_justify-content-evenly__UuBf1",
            "align-items-start": "TokenFeed_align-items-start__3h3PH",
            "align-items-end": "TokenFeed_align-items-end__1yLq-",
            "align-items-center": "TokenFeed_align-items-center__AiwLw",
            "align-items-baseline": "TokenFeed_align-items-baseline__Vssl3",
            "align-items-stretch": "TokenFeed_align-items-stretch__1NraV",
            "align-content-start": "TokenFeed_align-content-start__2-LXO",
            "align-content-end": "TokenFeed_align-content-end__26dKD",
            "align-content-center": "TokenFeed_align-content-center__1kx-_",
            "align-content-between": "TokenFeed_align-content-between__iscKW",
            "align-content-around": "TokenFeed_align-content-around__2k067",
            "align-content-stretch": "TokenFeed_align-content-stretch__19fcE",
            "align-self-auto": "TokenFeed_align-self-auto__22QJ8",
            "align-self-start": "TokenFeed_align-self-start__3lwKG",
            "align-self-end": "TokenFeed_align-self-end__URY6_",
            "align-self-center": "TokenFeed_align-self-center__1Mvrn",
            "align-self-baseline": "TokenFeed_align-self-baseline__MGQwK",
            "align-self-stretch": "TokenFeed_align-self-stretch__QVLHn",
            "order-first": "TokenFeed_order-first__31SG2",
            "order-0": "TokenFeed_order-0__oSSO9",
            "order-1": "TokenFeed_order-1__EaxTt",
            "order-2": "TokenFeed_order-2__2mbxJ",
            "order-3": "TokenFeed_order-3__aQ_rA",
            "order-4": "TokenFeed_order-4__HEKPU",
            "order-5": "TokenFeed_order-5__PWqJO",
            "order-last": "TokenFeed_order-last__3NWhU",
            "m-0": "TokenFeed_m-0__13nde",
            "m-1": "TokenFeed_m-1__1Wb4V",
            "m-2": "TokenFeed_m-2__1ESmF",
            "m-3": "TokenFeed_m-3__YD9yX",
            "m-4": "TokenFeed_m-4__3ZAov",
            "m-5": "TokenFeed_m-5__1dGYP",
            "m-auto": "TokenFeed_m-auto__2vHex",
            "mx-0": "TokenFeed_mx-0__23esp",
            "mx-1": "TokenFeed_mx-1__tLImp",
            "mx-2": "TokenFeed_mx-2__LgTPh",
            "mx-3": "TokenFeed_mx-3__1LNoM",
            "mx-4": "TokenFeed_mx-4__9Zae3",
            "mx-5": "TokenFeed_mx-5__1JxVi",
            "mx-auto": "TokenFeed_mx-auto__2aoVD",
            "my-0": "TokenFeed_my-0__Afjsk",
            "my-1": "TokenFeed_my-1__3dJfO",
            "my-2": "TokenFeed_my-2__2oL-Y",
            "my-3": "TokenFeed_my-3__2wXBw",
            "my-4": "TokenFeed_my-4__Ku7Bd",
            "my-5": "TokenFeed_my-5__1Vg7n",
            "my-auto": "TokenFeed_my-auto__1I5lY",
            "mt-0": "TokenFeed_mt-0__Zj5YR",
            "mt-1": "TokenFeed_mt-1__1xoDM",
            "mt-2": "TokenFeed_mt-2__DiCCD",
            "mt-3": "TokenFeed_mt-3__2Vbpv",
            "mt-4": "TokenFeed_mt-4__2kPXY",
            "mt-5": "TokenFeed_mt-5__1GDXq",
            "mt-auto": "TokenFeed_mt-auto__tqKYN",
            "me-0": "TokenFeed_me-0__GGXO2",
            "me-1": "TokenFeed_me-1__2mhHh",
            "me-2": "TokenFeed_me-2__2Edev",
            "me-3": "TokenFeed_me-3__i9B1j",
            "me-4": "TokenFeed_me-4__fz9dd",
            "me-5": "TokenFeed_me-5__FjiKe",
            "me-auto": "TokenFeed_me-auto__39X7N",
            "mb-0": "TokenFeed_mb-0__10BND",
            "mb-1": "TokenFeed_mb-1__15hkf",
            "mb-2": "TokenFeed_mb-2__h5XHR",
            "mb-3": "TokenFeed_mb-3__1makA",
            "mb-4": "TokenFeed_mb-4__3Lg40",
            "mb-5": "TokenFeed_mb-5__bP4LZ",
            "mb-auto": "TokenFeed_mb-auto__3u2zn",
            "ms-0": "TokenFeed_ms-0__3OGYK",
            "ms-1": "TokenFeed_ms-1__-QkJ4",
            "ms-2": "TokenFeed_ms-2__1vZFN",
            "ms-3": "TokenFeed_ms-3__A9UQ7",
            "ms-4": "TokenFeed_ms-4__37kkR",
            "ms-5": "TokenFeed_ms-5__gMcuV",
            "ms-auto": "TokenFeed_ms-auto__3LhUt",
            "p-0": "TokenFeed_p-0__3yZU4",
            "p-1": "TokenFeed_p-1__3ksO9",
            "p-2": "TokenFeed_p-2__1o2qE",
            "p-3": "TokenFeed_p-3__fP65J",
            "p-4": "TokenFeed_p-4__3plha",
            "p-5": "TokenFeed_p-5__3rW35",
            "px-0": "TokenFeed_px-0__30dop",
            "px-1": "TokenFeed_px-1__3Q6KT",
            "px-2": "TokenFeed_px-2__2fph7",
            "px-3": "TokenFeed_px-3__3A-0E",
            "px-4": "TokenFeed_px-4__2lrxw",
            "px-5": "TokenFeed_px-5__cWdVA",
            "py-0": "TokenFeed_py-0__1DA2_",
            "py-1": "TokenFeed_py-1__-wBH4",
            "py-2": "TokenFeed_py-2__3r_8x",
            "py-3": "TokenFeed_py-3__3n_5L",
            "py-4": "TokenFeed_py-4__3CaT7",
            "py-5": "TokenFeed_py-5__3C8jC",
            "pt-0": "TokenFeed_pt-0__UNxZJ",
            "pt-1": "TokenFeed_pt-1__1M9Gx",
            "pt-2": "TokenFeed_pt-2__1kZSd",
            "pt-3": "TokenFeed_pt-3__3fxC5",
            "pt-4": "TokenFeed_pt-4__1tuT8",
            "pt-5": "TokenFeed_pt-5__V6pxo",
            "pe-0": "TokenFeed_pe-0__3Kvan",
            "pe-1": "TokenFeed_pe-1__ImfdS",
            "pe-2": "TokenFeed_pe-2__quNty",
            "pe-3": "TokenFeed_pe-3__1XBl8",
            "pe-4": "TokenFeed_pe-4__3pMr2",
            "pe-5": "TokenFeed_pe-5__1uh79",
            "pb-0": "TokenFeed_pb-0__2ld1O",
            "pb-1": "TokenFeed_pb-1__sUknk",
            "pb-2": "TokenFeed_pb-2__yQbg0",
            "pb-3": "TokenFeed_pb-3__1W7ML",
            "pb-4": "TokenFeed_pb-4__1BCNN",
            "pb-5": "TokenFeed_pb-5__1RuH0",
            "ps-0": "TokenFeed_ps-0__3mPSi",
            "ps-1": "TokenFeed_ps-1__1z5_z",
            "ps-2": "TokenFeed_ps-2__1xti8",
            "ps-3": "TokenFeed_ps-3__2sTxo",
            "ps-4": "TokenFeed_ps-4__3-kNO",
            "ps-5": "TokenFeed_ps-5__2Z20y",
            "fs-1": "TokenFeed_fs-1__2osQa",
            "fs-2": "TokenFeed_fs-2__1FKPB",
            "fs-3": "TokenFeed_fs-3__JaeeJ",
            "fs-4": "TokenFeed_fs-4__1zJnz",
            "fs-5": "TokenFeed_fs-5__3fFsk",
            "fs-6": "TokenFeed_fs-6__2QYRw",
            "fst-italic": "TokenFeed_fst-italic__1TcvC",
            "fst-normal": "TokenFeed_fst-normal__23jhk",
            "fw-light": "TokenFeed_fw-light__2KEmt",
            "fw-lighter": "TokenFeed_fw-lighter__3IdeT",
            "fw-normal": "TokenFeed_fw-normal__2ylHV",
            "fw-bold": "TokenFeed_fw-bold__2xMZ4",
            "fw-bolder": "TokenFeed_fw-bolder__3epSw",
            "text-lowercase": "TokenFeed_text-lowercase__3jItA",
            "text-uppercase": "TokenFeed_text-uppercase__NPtCd",
            "text-capitalize": "TokenFeed_text-capitalize__33RQv",
            "text-start": "TokenFeed_text-start__1OHUP",
            "text-end": "TokenFeed_text-end__2YEHp",
            "text-center": "TokenFeed_text-center__2uMAM",
            "text-primary": "TokenFeed_text-primary__dq7-K",
            "text-secondary": "TokenFeed_text-secondary__2Z9jc",
            "text-success": "TokenFeed_text-success__3weXO",
            "text-info": "TokenFeed_text-info__2c1s-",
            "text-warning": "TokenFeed_text-warning__3wGbK",
            "text-danger": "TokenFeed_text-danger__1DkLp",
            "text-light": "TokenFeed_text-light__1ECWy",
            "text-dark": "TokenFeed_text-dark__1qdST",
            "text-dark-1": "TokenFeed_text-dark-1__3bceV",
            "text-dark-2": "TokenFeed_text-dark-2__31aFL",
            "text-blue-dark": "TokenFeed_text-blue-dark__2_T1R",
            "text-white": "TokenFeed_text-white__iO5Lb",
            "text-body": "TokenFeed_text-body__113ul",
            "text-muted": "TokenFeed_text-muted__QF6tK",
            "text-black-50": "TokenFeed_text-black-50__MrzQS",
            "text-white-50": "TokenFeed_text-white-50__1RFWo",
            "text-reset": "TokenFeed_text-reset__zSOp5",
            "lh-1": "TokenFeed_lh-1__AAG4J",
            "lh-sm": "TokenFeed_lh-sm__1lrVM",
            "lh-base": "TokenFeed_lh-base__I0XSq",
            "lh-lg": "TokenFeed_lh-lg__bynvh",
            "bg-primary": "TokenFeed_bg-primary__dXwAe",
            "bg-secondary": "TokenFeed_bg-secondary__3QWH2",
            "bg-success": "TokenFeed_bg-success__U2De2",
            "bg-info": "TokenFeed_bg-info__3vO0e",
            "bg-warning": "TokenFeed_bg-warning__1FuTE",
            "bg-danger": "TokenFeed_bg-danger__Me74d",
            "bg-light": "TokenFeed_bg-light__2amDu",
            "bg-dark": "TokenFeed_bg-dark__30vG3",
            "bg-dark-1": "TokenFeed_bg-dark-1__2H5bl",
            "bg-dark-2": "TokenFeed_bg-dark-2__1rvvH",
            "bg-blue-dark": "TokenFeed_bg-blue-dark__3WOeU",
            "bg-body": "TokenFeed_bg-body__3I3XF",
            "bg-white": "TokenFeed_bg-white__2U1N0",
            "bg-transparent": "TokenFeed_bg-transparent__1S6i6",
            "bg-gradient": "TokenFeed_bg-gradient__3jAR5",
            "text-wrap": "TokenFeed_text-wrap__CRYRH",
            "text-nowrap": "TokenFeed_text-nowrap__22kEG",
            "text-decoration-none": "TokenFeed_text-decoration-none__3S4qN",
            "text-decoration-underline": "TokenFeed_text-decoration-underline__1fJln",
            "text-decoration-line-through": "TokenFeed_text-decoration-line-through__1Kdxg",
            "text-break": "TokenFeed_text-break__307aX",
            "font-monospace": "TokenFeed_font-monospace__2uZCM",
            "user-select-all": "TokenFeed_user-select-all__2dp2R",
            "user-select-auto": "TokenFeed_user-select-auto__X6J5E",
            "user-select-none": "TokenFeed_user-select-none__1TRK1",
            "pe-none": "TokenFeed_pe-none__1AMDT",
            "pe-auto": "TokenFeed_pe-auto__2de4q",
            rounded: "TokenFeed_rounded__3Zr5b",
            "rounded-0": "TokenFeed_rounded-0__3Rdtw",
            "rounded-1": "TokenFeed_rounded-1__3Ddpi",
            "rounded-2": "TokenFeed_rounded-2__3X0Os",
            "rounded-3": "TokenFeed_rounded-3__aNBmM",
            "rounded-circle": "TokenFeed_rounded-circle__2TZGU",
            "rounded-pill": "TokenFeed_rounded-pill__1TTN-",
            "rounded-top": "TokenFeed_rounded-top__3eTRw",
            "rounded-end": "TokenFeed_rounded-end__19yLa",
            "rounded-bottom": "TokenFeed_rounded-bottom__mRKyg",
            "rounded-start": "TokenFeed_rounded-start__Y6LKc",
            visible: "TokenFeed_visible__19o0b",
            invisible: "TokenFeed_invisible__1Hd1D",
            "float-sm-start": "TokenFeed_float-sm-start__2p-o2",
            "float-sm-end": "TokenFeed_float-sm-end__3KFgy",
            "float-sm-none": "TokenFeed_float-sm-none__1l5g_",
            "d-sm-inline": "TokenFeed_d-sm-inline__1Fy_W",
            "d-sm-inline-block": "TokenFeed_d-sm-inline-block__3tNmu",
            "d-sm-block": "TokenFeed_d-sm-block__3ehG-",
            "d-sm-grid": "TokenFeed_d-sm-grid__3mW0T",
            "d-sm-table": "TokenFeed_d-sm-table__Sq3wL",
            "d-sm-table-row": "TokenFeed_d-sm-table-row__3S8eJ",
            "d-sm-table-cell": "TokenFeed_d-sm-table-cell__PWW9u",
            "d-sm-flex": "TokenFeed_d-sm-flex__3Qmu6",
            "d-sm-inline-flex": "TokenFeed_d-sm-inline-flex__2tYjs",
            "d-sm-none": "TokenFeed_d-sm-none__1uILJ",
            "flex-sm-fill": "TokenFeed_flex-sm-fill__19KAu",
            "flex-sm-row": "TokenFeed_flex-sm-row__1Kj7u",
            "flex-sm-column": "TokenFeed_flex-sm-column__xtbSk",
            "flex-sm-row-reverse": "TokenFeed_flex-sm-row-reverse__3wDR2",
            "flex-sm-column-reverse": "TokenFeed_flex-sm-column-reverse__3QGCR",
            "flex-sm-grow-0": "TokenFeed_flex-sm-grow-0__SkELx",
            "flex-sm-grow-1": "TokenFeed_flex-sm-grow-1__hTb53",
            "flex-sm-shrink-0": "TokenFeed_flex-sm-shrink-0__Tc5Qs",
            "flex-sm-shrink-1": "TokenFeed_flex-sm-shrink-1__2Qnkr",
            "flex-sm-wrap": "TokenFeed_flex-sm-wrap__2YagN",
            "flex-sm-nowrap": "TokenFeed_flex-sm-nowrap__1KK88",
            "flex-sm-wrap-reverse": "TokenFeed_flex-sm-wrap-reverse__bmyB7",
            "gap-sm-0": "TokenFeed_gap-sm-0__1gj2q",
            "gap-sm-1": "TokenFeed_gap-sm-1__1HOIf",
            "gap-sm-2": "TokenFeed_gap-sm-2__he8s1",
            "gap-sm-3": "TokenFeed_gap-sm-3__1FHI1",
            "gap-sm-4": "TokenFeed_gap-sm-4__3ysFS",
            "gap-sm-5": "TokenFeed_gap-sm-5__1USj8",
            "justify-content-sm-start": "TokenFeed_justify-content-sm-start__1jg6E",
            "justify-content-sm-end": "TokenFeed_justify-content-sm-end__3UZEr",
            "justify-content-sm-center": "TokenFeed_justify-content-sm-center__KqRi2",
            "justify-content-sm-between": "TokenFeed_justify-content-sm-between__2Ww12",
            "justify-content-sm-around": "TokenFeed_justify-content-sm-around__XF_Uh",
            "justify-content-sm-evenly": "TokenFeed_justify-content-sm-evenly__ymRg6",
            "align-items-sm-start": "TokenFeed_align-items-sm-start__3xqAX",
            "align-items-sm-end": "TokenFeed_align-items-sm-end__TNRN4",
            "align-items-sm-center": "TokenFeed_align-items-sm-center__1Iw7s",
            "align-items-sm-baseline": "TokenFeed_align-items-sm-baseline__2mCE4",
            "align-items-sm-stretch": "TokenFeed_align-items-sm-stretch__DwvAm",
            "align-content-sm-start": "TokenFeed_align-content-sm-start__2szLO",
            "align-content-sm-end": "TokenFeed_align-content-sm-end__2q9-C",
            "align-content-sm-center": "TokenFeed_align-content-sm-center__2L2Aa",
            "align-content-sm-between": "TokenFeed_align-content-sm-between__3_HRQ",
            "align-content-sm-around": "TokenFeed_align-content-sm-around__10j3_",
            "align-content-sm-stretch": "TokenFeed_align-content-sm-stretch__3bZGv",
            "align-self-sm-auto": "TokenFeed_align-self-sm-auto__1QcrR",
            "align-self-sm-start": "TokenFeed_align-self-sm-start__st9np",
            "align-self-sm-end": "TokenFeed_align-self-sm-end__2cZ6p",
            "align-self-sm-center": "TokenFeed_align-self-sm-center__1mxZS",
            "align-self-sm-baseline": "TokenFeed_align-self-sm-baseline__1lqrQ",
            "align-self-sm-stretch": "TokenFeed_align-self-sm-stretch__l5ZW5",
            "order-sm-first": "TokenFeed_order-sm-first__3O55N",
            "order-sm-0": "TokenFeed_order-sm-0__2bdmO",
            "order-sm-1": "TokenFeed_order-sm-1__2lIak",
            "order-sm-2": "TokenFeed_order-sm-2__2e9ou",
            "order-sm-3": "TokenFeed_order-sm-3__3im_S",
            "order-sm-4": "TokenFeed_order-sm-4__1jcSO",
            "order-sm-5": "TokenFeed_order-sm-5__kQTwA",
            "order-sm-last": "TokenFeed_order-sm-last__1xfXX",
            "m-sm-0": "TokenFeed_m-sm-0__3sJEC",
            "m-sm-1": "TokenFeed_m-sm-1__1ktax",
            "m-sm-2": "TokenFeed_m-sm-2__15jUs",
            "m-sm-3": "TokenFeed_m-sm-3__3bpVG",
            "m-sm-4": "TokenFeed_m-sm-4__XQTjI",
            "m-sm-5": "TokenFeed_m-sm-5__3HEa8",
            "m-sm-auto": "TokenFeed_m-sm-auto__12wpz",
            "mx-sm-0": "TokenFeed_mx-sm-0__1mTUu",
            "mx-sm-1": "TokenFeed_mx-sm-1__1EIhk",
            "mx-sm-2": "TokenFeed_mx-sm-2__OLp9H",
            "mx-sm-3": "TokenFeed_mx-sm-3__2VYeI",
            "mx-sm-4": "TokenFeed_mx-sm-4__2413n",
            "mx-sm-5": "TokenFeed_mx-sm-5__GwlaH",
            "mx-sm-auto": "TokenFeed_mx-sm-auto__k67AI",
            "my-sm-0": "TokenFeed_my-sm-0__17-5f",
            "my-sm-1": "TokenFeed_my-sm-1__54yZG",
            "my-sm-2": "TokenFeed_my-sm-2__1mCxb",
            "my-sm-3": "TokenFeed_my-sm-3__AMA-o",
            "my-sm-4": "TokenFeed_my-sm-4__g-dmi",
            "my-sm-5": "TokenFeed_my-sm-5__2CQWp",
            "my-sm-auto": "TokenFeed_my-sm-auto__2fE2t",
            "mt-sm-0": "TokenFeed_mt-sm-0__1ZtbE",
            "mt-sm-1": "TokenFeed_mt-sm-1__2IEv-",
            "mt-sm-2": "TokenFeed_mt-sm-2__3YoQv",
            "mt-sm-3": "TokenFeed_mt-sm-3__3Z8Z8",
            "mt-sm-4": "TokenFeed_mt-sm-4__TE5RM",
            "mt-sm-5": "TokenFeed_mt-sm-5__n1Ldf",
            "mt-sm-auto": "TokenFeed_mt-sm-auto__1oOgM",
            "me-sm-0": "TokenFeed_me-sm-0__3H2g8",
            "me-sm-1": "TokenFeed_me-sm-1__24GAA",
            "me-sm-2": "TokenFeed_me-sm-2__19ikB",
            "me-sm-3": "TokenFeed_me-sm-3__3mVSy",
            "me-sm-4": "TokenFeed_me-sm-4__1ivLM",
            "me-sm-5": "TokenFeed_me-sm-5__3wW59",
            "me-sm-auto": "TokenFeed_me-sm-auto__s7PNo",
            "mb-sm-0": "TokenFeed_mb-sm-0__31ohq",
            "mb-sm-1": "TokenFeed_mb-sm-1__TSvZp",
            "mb-sm-2": "TokenFeed_mb-sm-2__73NVo",
            "mb-sm-3": "TokenFeed_mb-sm-3__1Hc_3",
            "mb-sm-4": "TokenFeed_mb-sm-4__2Xeps",
            "mb-sm-5": "TokenFeed_mb-sm-5__lqzPz",
            "mb-sm-auto": "TokenFeed_mb-sm-auto__4qjKy",
            "ms-sm-0": "TokenFeed_ms-sm-0__1e1m_",
            "ms-sm-1": "TokenFeed_ms-sm-1__Ht4ob",
            "ms-sm-2": "TokenFeed_ms-sm-2__1upk0",
            "ms-sm-3": "TokenFeed_ms-sm-3__2R2-B",
            "ms-sm-4": "TokenFeed_ms-sm-4__XdWH0",
            "ms-sm-5": "TokenFeed_ms-sm-5__2fbyF",
            "ms-sm-auto": "TokenFeed_ms-sm-auto__yW9Zx",
            "p-sm-0": "TokenFeed_p-sm-0__3yuBU",
            "p-sm-1": "TokenFeed_p-sm-1__3wBkS",
            "p-sm-2": "TokenFeed_p-sm-2__YPu4k",
            "p-sm-3": "TokenFeed_p-sm-3__3-qZq",
            "p-sm-4": "TokenFeed_p-sm-4__1JGZB",
            "p-sm-5": "TokenFeed_p-sm-5__1I4IA",
            "px-sm-0": "TokenFeed_px-sm-0__26OVy",
            "px-sm-1": "TokenFeed_px-sm-1__1eqo8",
            "px-sm-2": "TokenFeed_px-sm-2__1uvZb",
            "px-sm-3": "TokenFeed_px-sm-3__3Di1g",
            "px-sm-4": "TokenFeed_px-sm-4__1X3cY",
            "px-sm-5": "TokenFeed_px-sm-5__2GXg-",
            "py-sm-0": "TokenFeed_py-sm-0__sq4IM",
            "py-sm-1": "TokenFeed_py-sm-1__-rRz9",
            "py-sm-2": "TokenFeed_py-sm-2__1HbOn",
            "py-sm-3": "TokenFeed_py-sm-3___lg2g",
            "py-sm-4": "TokenFeed_py-sm-4__3m4pD",
            "py-sm-5": "TokenFeed_py-sm-5__3OHJj",
            "pt-sm-0": "TokenFeed_pt-sm-0__Hkj5P",
            "pt-sm-1": "TokenFeed_pt-sm-1__2X8KB",
            "pt-sm-2": "TokenFeed_pt-sm-2__2ZH_-",
            "pt-sm-3": "TokenFeed_pt-sm-3__wDYxj",
            "pt-sm-4": "TokenFeed_pt-sm-4__3VNtu",
            "pt-sm-5": "TokenFeed_pt-sm-5__3afqM",
            "pe-sm-0": "TokenFeed_pe-sm-0__dbJRD",
            "pe-sm-1": "TokenFeed_pe-sm-1__3QIgV",
            "pe-sm-2": "TokenFeed_pe-sm-2__3d0tx",
            "pe-sm-3": "TokenFeed_pe-sm-3__1eWj4",
            "pe-sm-4": "TokenFeed_pe-sm-4__1JNgI",
            "pe-sm-5": "TokenFeed_pe-sm-5__peHII",
            "pb-sm-0": "TokenFeed_pb-sm-0__3hIl3",
            "pb-sm-1": "TokenFeed_pb-sm-1__14W1P",
            "pb-sm-2": "TokenFeed_pb-sm-2__3e3u9",
            "pb-sm-3": "TokenFeed_pb-sm-3__28ok3",
            "pb-sm-4": "TokenFeed_pb-sm-4__3yzmc",
            "pb-sm-5": "TokenFeed_pb-sm-5__dl5YN",
            "ps-sm-0": "TokenFeed_ps-sm-0__3bsOQ",
            "ps-sm-1": "TokenFeed_ps-sm-1__9bjdE",
            "ps-sm-2": "TokenFeed_ps-sm-2__1rDXe",
            "ps-sm-3": "TokenFeed_ps-sm-3__1LEej",
            "ps-sm-4": "TokenFeed_ps-sm-4__27BrS",
            "ps-sm-5": "TokenFeed_ps-sm-5__4hvR8",
            "text-sm-start": "TokenFeed_text-sm-start__3LOqr",
            "text-sm-end": "TokenFeed_text-sm-end__3DCfh",
            "text-sm-center": "TokenFeed_text-sm-center__3G6jy",
            "float-md-start": "TokenFeed_float-md-start__1ojGv",
            "float-md-end": "TokenFeed_float-md-end__19KEn",
            "float-md-none": "TokenFeed_float-md-none__2-8ir",
            "d-md-inline": "TokenFeed_d-md-inline__1PU3x",
            "d-md-inline-block": "TokenFeed_d-md-inline-block__NFJWe",
            "d-md-block": "TokenFeed_d-md-block__2k3QJ",
            "d-md-grid": "TokenFeed_d-md-grid__2Z8zo",
            "d-md-table": "TokenFeed_d-md-table__2oSJl",
            "d-md-table-row": "TokenFeed_d-md-table-row__8PqCH",
            "d-md-table-cell": "TokenFeed_d-md-table-cell__184eL",
            "d-md-flex": "TokenFeed_d-md-flex__1jCUj",
            "d-md-inline-flex": "TokenFeed_d-md-inline-flex__2NQyl",
            "d-md-none": "TokenFeed_d-md-none__2xRtV",
            "flex-md-fill": "TokenFeed_flex-md-fill__2uI5b",
            "flex-md-row": "TokenFeed_flex-md-row__3pEJz",
            "flex-md-column": "TokenFeed_flex-md-column__2f34v",
            "flex-md-row-reverse": "TokenFeed_flex-md-row-reverse__1m-2o",
            "flex-md-column-reverse": "TokenFeed_flex-md-column-reverse__2e7FP",
            "flex-md-grow-0": "TokenFeed_flex-md-grow-0__3s9Ox",
            "flex-md-grow-1": "TokenFeed_flex-md-grow-1__3LI2-",
            "flex-md-shrink-0": "TokenFeed_flex-md-shrink-0__2Ykft",
            "flex-md-shrink-1": "TokenFeed_flex-md-shrink-1__2QB93",
            "flex-md-wrap": "TokenFeed_flex-md-wrap__CS6Ue",
            "flex-md-nowrap": "TokenFeed_flex-md-nowrap__374p1",
            "flex-md-wrap-reverse": "TokenFeed_flex-md-wrap-reverse__2jXJk",
            "gap-md-0": "TokenFeed_gap-md-0__16RmZ",
            "gap-md-1": "TokenFeed_gap-md-1__2dJGP",
            "gap-md-2": "TokenFeed_gap-md-2__2lTI8",
            "gap-md-3": "TokenFeed_gap-md-3__2V2uB",
            "gap-md-4": "TokenFeed_gap-md-4__2bqJD",
            "gap-md-5": "TokenFeed_gap-md-5__2n0wa",
            "justify-content-md-start": "TokenFeed_justify-content-md-start__JWNpk",
            "justify-content-md-end": "TokenFeed_justify-content-md-end__2DIOL",
            "justify-content-md-center": "TokenFeed_justify-content-md-center__1AACv",
            "justify-content-md-between": "TokenFeed_justify-content-md-between__2IqPI",
            "justify-content-md-around": "TokenFeed_justify-content-md-around__3_pN6",
            "justify-content-md-evenly": "TokenFeed_justify-content-md-evenly__2028K",
            "align-items-md-start": "TokenFeed_align-items-md-start__2Ld9q",
            "align-items-md-end": "TokenFeed_align-items-md-end__30PA7",
            "align-items-md-center": "TokenFeed_align-items-md-center__owM-s",
            "align-items-md-baseline": "TokenFeed_align-items-md-baseline__3eVXg",
            "align-items-md-stretch": "TokenFeed_align-items-md-stretch__35krm",
            "align-content-md-start": "TokenFeed_align-content-md-start__2rHBR",
            "align-content-md-end": "TokenFeed_align-content-md-end__3Z6U-",
            "align-content-md-center": "TokenFeed_align-content-md-center__2LoNH",
            "align-content-md-between": "TokenFeed_align-content-md-between__1NsbO",
            "align-content-md-around": "TokenFeed_align-content-md-around__HHOsH",
            "align-content-md-stretch": "TokenFeed_align-content-md-stretch__Smrlt",
            "align-self-md-auto": "TokenFeed_align-self-md-auto__2fc3G",
            "align-self-md-start": "TokenFeed_align-self-md-start__4NiLd",
            "align-self-md-end": "TokenFeed_align-self-md-end__2l-ww",
            "align-self-md-center": "TokenFeed_align-self-md-center__1akCe",
            "align-self-md-baseline": "TokenFeed_align-self-md-baseline__sMEqh",
            "align-self-md-stretch": "TokenFeed_align-self-md-stretch__3m7Go",
            "order-md-first": "TokenFeed_order-md-first__2_SaZ",
            "order-md-0": "TokenFeed_order-md-0__uzQ5_",
            "order-md-1": "TokenFeed_order-md-1__1yA1d",
            "order-md-2": "TokenFeed_order-md-2__3B_yI",
            "order-md-3": "TokenFeed_order-md-3__kDsQ3",
            "order-md-4": "TokenFeed_order-md-4__1RRiU",
            "order-md-5": "TokenFeed_order-md-5__3b5cj",
            "order-md-last": "TokenFeed_order-md-last__3XP2j",
            "m-md-0": "TokenFeed_m-md-0__3JSzE",
            "m-md-1": "TokenFeed_m-md-1__1uFzk",
            "m-md-2": "TokenFeed_m-md-2__3ZGUG",
            "m-md-3": "TokenFeed_m-md-3__3hFsj",
            "m-md-4": "TokenFeed_m-md-4__1dHC4",
            "m-md-5": "TokenFeed_m-md-5__i5BQl",
            "m-md-auto": "TokenFeed_m-md-auto__2Ccnl",
            "mx-md-0": "TokenFeed_mx-md-0__1Twvx",
            "mx-md-1": "TokenFeed_mx-md-1__3HLkA",
            "mx-md-2": "TokenFeed_mx-md-2__3Re7W",
            "mx-md-3": "TokenFeed_mx-md-3__13KSy",
            "mx-md-4": "TokenFeed_mx-md-4__3S1mM",
            "mx-md-5": "TokenFeed_mx-md-5__sw_jn",
            "mx-md-auto": "TokenFeed_mx-md-auto__7FubB",
            "my-md-0": "TokenFeed_my-md-0__13Hvk",
            "my-md-1": "TokenFeed_my-md-1__29A3F",
            "my-md-2": "TokenFeed_my-md-2__3oZAL",
            "my-md-3": "TokenFeed_my-md-3__3-L3K",
            "my-md-4": "TokenFeed_my-md-4__2INWG",
            "my-md-5": "TokenFeed_my-md-5__3v_1B",
            "my-md-auto": "TokenFeed_my-md-auto__dzb6q",
            "mt-md-0": "TokenFeed_mt-md-0__3gbax",
            "mt-md-1": "TokenFeed_mt-md-1__itvGR",
            "mt-md-2": "TokenFeed_mt-md-2__3Z4Zf",
            "mt-md-3": "TokenFeed_mt-md-3__187ZT",
            "mt-md-4": "TokenFeed_mt-md-4__1L0mL",
            "mt-md-5": "TokenFeed_mt-md-5__-6XFs",
            "mt-md-auto": "TokenFeed_mt-md-auto__2F5Dn",
            "me-md-0": "TokenFeed_me-md-0__2O6RP",
            "me-md-1": "TokenFeed_me-md-1__yH4tX",
            "me-md-2": "TokenFeed_me-md-2__X5RrF",
            "me-md-3": "TokenFeed_me-md-3__2llQl",
            "me-md-4": "TokenFeed_me-md-4__2bBk2",
            "me-md-5": "TokenFeed_me-md-5__MKfej",
            "me-md-auto": "TokenFeed_me-md-auto__3SDlx",
            "mb-md-0": "TokenFeed_mb-md-0__2CDjZ",
            "mb-md-1": "TokenFeed_mb-md-1__GcUUW",
            "mb-md-2": "TokenFeed_mb-md-2__2f1JN",
            "mb-md-3": "TokenFeed_mb-md-3__2QgtR",
            "mb-md-4": "TokenFeed_mb-md-4__J6OaD",
            "mb-md-5": "TokenFeed_mb-md-5__2IgUq",
            "mb-md-auto": "TokenFeed_mb-md-auto__13Czm",
            "ms-md-0": "TokenFeed_ms-md-0__RcxmV",
            "ms-md-1": "TokenFeed_ms-md-1__g2YUM",
            "ms-md-2": "TokenFeed_ms-md-2__KErmv",
            "ms-md-3": "TokenFeed_ms-md-3__wsnub",
            "ms-md-4": "TokenFeed_ms-md-4__Or1Dw",
            "ms-md-5": "TokenFeed_ms-md-5__2I42X",
            "ms-md-auto": "TokenFeed_ms-md-auto__FZw-k",
            "p-md-0": "TokenFeed_p-md-0__1rZzo",
            "p-md-1": "TokenFeed_p-md-1__4FN4y",
            "p-md-2": "TokenFeed_p-md-2__1ljW3",
            "p-md-3": "TokenFeed_p-md-3__3Fqiq",
            "p-md-4": "TokenFeed_p-md-4__3fUjT",
            "p-md-5": "TokenFeed_p-md-5__17GjF",
            "px-md-0": "TokenFeed_px-md-0__37M5o",
            "px-md-1": "TokenFeed_px-md-1__1U6o2",
            "px-md-2": "TokenFeed_px-md-2__1LFea",
            "px-md-3": "TokenFeed_px-md-3__3hT8h",
            "px-md-4": "TokenFeed_px-md-4__8TcBF",
            "px-md-5": "TokenFeed_px-md-5__hfjSM",
            "py-md-0": "TokenFeed_py-md-0__btN1j",
            "py-md-1": "TokenFeed_py-md-1__3ow1G",
            "py-md-2": "TokenFeed_py-md-2__Hbrs4",
            "py-md-3": "TokenFeed_py-md-3__2-ffT",
            "py-md-4": "TokenFeed_py-md-4__cKQc6",
            "py-md-5": "TokenFeed_py-md-5__tB07P",
            "pt-md-0": "TokenFeed_pt-md-0__3WW0W",
            "pt-md-1": "TokenFeed_pt-md-1__3WT0l",
            "pt-md-2": "TokenFeed_pt-md-2__1LvEk",
            "pt-md-3": "TokenFeed_pt-md-3__EWuX-",
            "pt-md-4": "TokenFeed_pt-md-4__2t-QP",
            "pt-md-5": "TokenFeed_pt-md-5__38Lik",
            "pe-md-0": "TokenFeed_pe-md-0__dzgwl",
            "pe-md-1": "TokenFeed_pe-md-1__3i7KS",
            "pe-md-2": "TokenFeed_pe-md-2__2ZJ2H",
            "pe-md-3": "TokenFeed_pe-md-3__3Virq",
            "pe-md-4": "TokenFeed_pe-md-4__ERobn",
            "pe-md-5": "TokenFeed_pe-md-5__1VIWi",
            "pb-md-0": "TokenFeed_pb-md-0__15dv3",
            "pb-md-1": "TokenFeed_pb-md-1__1OoRS",
            "pb-md-2": "TokenFeed_pb-md-2__3DyPN",
            "pb-md-3": "TokenFeed_pb-md-3__xg6g0",
            "pb-md-4": "TokenFeed_pb-md-4__37VBT",
            "pb-md-5": "TokenFeed_pb-md-5__DWy6W",
            "ps-md-0": "TokenFeed_ps-md-0__2Is7g",
            "ps-md-1": "TokenFeed_ps-md-1__3CoXp",
            "ps-md-2": "TokenFeed_ps-md-2__1SdQB",
            "ps-md-3": "TokenFeed_ps-md-3__V2zO1",
            "ps-md-4": "TokenFeed_ps-md-4__-r7xa",
            "ps-md-5": "TokenFeed_ps-md-5__3bFVD",
            "text-md-start": "TokenFeed_text-md-start__3nsPZ",
            "text-md-end": "TokenFeed_text-md-end__YdV2Y",
            "text-md-center": "TokenFeed_text-md-center__3RDBi",
            "float-lg-start": "TokenFeed_float-lg-start__3iRel",
            "float-lg-end": "TokenFeed_float-lg-end__1LfJ-",
            "float-lg-none": "TokenFeed_float-lg-none__MG6KB",
            "d-lg-inline": "TokenFeed_d-lg-inline__TIlnD",
            "d-lg-inline-block": "TokenFeed_d-lg-inline-block__3OoA_",
            "d-lg-block": "TokenFeed_d-lg-block__1TFpt",
            "d-lg-grid": "TokenFeed_d-lg-grid__1Bhq8",
            "d-lg-table": "TokenFeed_d-lg-table__1A2rj",
            "d-lg-table-row": "TokenFeed_d-lg-table-row__2TPi3",
            "d-lg-table-cell": "TokenFeed_d-lg-table-cell__2iea4",
            "d-lg-flex": "TokenFeed_d-lg-flex__4h0U_",
            "d-lg-inline-flex": "TokenFeed_d-lg-inline-flex__1qBnh",
            "d-lg-none": "TokenFeed_d-lg-none__1MXJp",
            "flex-lg-fill": "TokenFeed_flex-lg-fill__3nu5m",
            "flex-lg-row": "TokenFeed_flex-lg-row__1D-IV",
            "flex-lg-column": "TokenFeed_flex-lg-column__PC0c9",
            "flex-lg-row-reverse": "TokenFeed_flex-lg-row-reverse__1ZjvQ",
            "flex-lg-column-reverse": "TokenFeed_flex-lg-column-reverse__1lNoM",
            "flex-lg-grow-0": "TokenFeed_flex-lg-grow-0__HoMYO",
            "flex-lg-grow-1": "TokenFeed_flex-lg-grow-1__2BTQP",
            "flex-lg-shrink-0": "TokenFeed_flex-lg-shrink-0__1hZRl",
            "flex-lg-shrink-1": "TokenFeed_flex-lg-shrink-1__2Ai-c",
            "flex-lg-wrap": "TokenFeed_flex-lg-wrap__1uIsW",
            "flex-lg-nowrap": "TokenFeed_flex-lg-nowrap__3Hs7i",
            "flex-lg-wrap-reverse": "TokenFeed_flex-lg-wrap-reverse__3KV7x",
            "gap-lg-0": "TokenFeed_gap-lg-0__1hNhW",
            "gap-lg-1": "TokenFeed_gap-lg-1__2ZLs2",
            "gap-lg-2": "TokenFeed_gap-lg-2__3EF6w",
            "gap-lg-3": "TokenFeed_gap-lg-3__18kb0",
            "gap-lg-4": "TokenFeed_gap-lg-4__1iocX",
            "gap-lg-5": "TokenFeed_gap-lg-5__fUu_4",
            "justify-content-lg-start": "TokenFeed_justify-content-lg-start__ul5Qc",
            "justify-content-lg-end": "TokenFeed_justify-content-lg-end__1wsJS",
            "justify-content-lg-center": "TokenFeed_justify-content-lg-center__cuP5L",
            "justify-content-lg-between": "TokenFeed_justify-content-lg-between__2PwVv",
            "justify-content-lg-around": "TokenFeed_justify-content-lg-around__2s85j",
            "justify-content-lg-evenly": "TokenFeed_justify-content-lg-evenly__3tbqJ",
            "align-items-lg-start": "TokenFeed_align-items-lg-start__2QTek",
            "align-items-lg-end": "TokenFeed_align-items-lg-end__2OFWa",
            "align-items-lg-center": "TokenFeed_align-items-lg-center__1EgDW",
            "align-items-lg-baseline": "TokenFeed_align-items-lg-baseline__B_vFR",
            "align-items-lg-stretch": "TokenFeed_align-items-lg-stretch__2B2_A",
            "align-content-lg-start": "TokenFeed_align-content-lg-start__1EFxj",
            "align-content-lg-end": "TokenFeed_align-content-lg-end__2pvwz",
            "align-content-lg-center": "TokenFeed_align-content-lg-center__2O65h",
            "align-content-lg-between": "TokenFeed_align-content-lg-between__1-ogT",
            "align-content-lg-around": "TokenFeed_align-content-lg-around__2UwLB",
            "align-content-lg-stretch": "TokenFeed_align-content-lg-stretch__2wBqV",
            "align-self-lg-auto": "TokenFeed_align-self-lg-auto__RjYZK",
            "align-self-lg-start": "TokenFeed_align-self-lg-start__3fwOX",
            "align-self-lg-end": "TokenFeed_align-self-lg-end__1bmic",
            "align-self-lg-center": "TokenFeed_align-self-lg-center__1SdKM",
            "align-self-lg-baseline": "TokenFeed_align-self-lg-baseline__38PIA",
            "align-self-lg-stretch": "TokenFeed_align-self-lg-stretch__3qdWh",
            "order-lg-first": "TokenFeed_order-lg-first__3E-B_",
            "order-lg-0": "TokenFeed_order-lg-0__VG1cF",
            "order-lg-1": "TokenFeed_order-lg-1__1oH8k",
            "order-lg-2": "TokenFeed_order-lg-2__3wl7b",
            "order-lg-3": "TokenFeed_order-lg-3__1COVg",
            "order-lg-4": "TokenFeed_order-lg-4__2wM8C",
            "order-lg-5": "TokenFeed_order-lg-5__3QXa1",
            "order-lg-last": "TokenFeed_order-lg-last__1KFXM",
            "m-lg-0": "TokenFeed_m-lg-0__2H_bf",
            "m-lg-1": "TokenFeed_m-lg-1__2fCAm",
            "m-lg-2": "TokenFeed_m-lg-2__3ENur",
            "m-lg-3": "TokenFeed_m-lg-3__2PTkO",
            "m-lg-4": "TokenFeed_m-lg-4__2mkTu",
            "m-lg-5": "TokenFeed_m-lg-5__eDQzW",
            "m-lg-auto": "TokenFeed_m-lg-auto__3SZ2t",
            "mx-lg-0": "TokenFeed_mx-lg-0__wazoz",
            "mx-lg-1": "TokenFeed_mx-lg-1__2y4i2",
            "mx-lg-2": "TokenFeed_mx-lg-2__ER9xx",
            "mx-lg-3": "TokenFeed_mx-lg-3__3WM2J",
            "mx-lg-4": "TokenFeed_mx-lg-4__27Tep",
            "mx-lg-5": "TokenFeed_mx-lg-5__26ksR",
            "mx-lg-auto": "TokenFeed_mx-lg-auto__2wPiJ",
            "my-lg-0": "TokenFeed_my-lg-0__3G1rG",
            "my-lg-1": "TokenFeed_my-lg-1__13KdO",
            "my-lg-2": "TokenFeed_my-lg-2__3aGgg",
            "my-lg-3": "TokenFeed_my-lg-3__3tS6s",
            "my-lg-4": "TokenFeed_my-lg-4__2_dbV",
            "my-lg-5": "TokenFeed_my-lg-5__2VOHX",
            "my-lg-auto": "TokenFeed_my-lg-auto__36BWk",
            "mt-lg-0": "TokenFeed_mt-lg-0__2x3qp",
            "mt-lg-1": "TokenFeed_mt-lg-1__3JF3J",
            "mt-lg-2": "TokenFeed_mt-lg-2__1jdcp",
            "mt-lg-3": "TokenFeed_mt-lg-3__XQf2T",
            "mt-lg-4": "TokenFeed_mt-lg-4__cwV-h",
            "mt-lg-5": "TokenFeed_mt-lg-5__3WMmc",
            "mt-lg-auto": "TokenFeed_mt-lg-auto__1_H9J",
            "me-lg-0": "TokenFeed_me-lg-0__16ATm",
            "me-lg-1": "TokenFeed_me-lg-1__4BhO7",
            "me-lg-2": "TokenFeed_me-lg-2__4zSlc",
            "me-lg-3": "TokenFeed_me-lg-3__2A29B",
            "me-lg-4": "TokenFeed_me-lg-4__1sOLF",
            "me-lg-5": "TokenFeed_me-lg-5__1fseF",
            "me-lg-auto": "TokenFeed_me-lg-auto__1oyWr",
            "mb-lg-0": "TokenFeed_mb-lg-0__1mS6E",
            "mb-lg-1": "TokenFeed_mb-lg-1__2roS0",
            "mb-lg-2": "TokenFeed_mb-lg-2__3bw8H",
            "mb-lg-3": "TokenFeed_mb-lg-3__27SuK",
            "mb-lg-4": "TokenFeed_mb-lg-4__2EITE",
            "mb-lg-5": "TokenFeed_mb-lg-5__3eQQF",
            "mb-lg-auto": "TokenFeed_mb-lg-auto__iK3gK",
            "ms-lg-0": "TokenFeed_ms-lg-0__37KnQ",
            "ms-lg-1": "TokenFeed_ms-lg-1__1jC33",
            "ms-lg-2": "TokenFeed_ms-lg-2__1BENH",
            "ms-lg-3": "TokenFeed_ms-lg-3__37wxy",
            "ms-lg-4": "TokenFeed_ms-lg-4__1FPgQ",
            "ms-lg-5": "TokenFeed_ms-lg-5__sCjim",
            "ms-lg-auto": "TokenFeed_ms-lg-auto__1Ow2A",
            "p-lg-0": "TokenFeed_p-lg-0__Lf0SW",
            "p-lg-1": "TokenFeed_p-lg-1__BEDG8",
            "p-lg-2": "TokenFeed_p-lg-2__2K9iP",
            "p-lg-3": "TokenFeed_p-lg-3__2rTh7",
            "p-lg-4": "TokenFeed_p-lg-4__MRXDl",
            "p-lg-5": "TokenFeed_p-lg-5__3qtzQ",
            "px-lg-0": "TokenFeed_px-lg-0__1Hkvs",
            "px-lg-1": "TokenFeed_px-lg-1__Vlv8B",
            "px-lg-2": "TokenFeed_px-lg-2__3HyIv",
            "px-lg-3": "TokenFeed_px-lg-3__1R90d",
            "px-lg-4": "TokenFeed_px-lg-4__1L4xz",
            "px-lg-5": "TokenFeed_px-lg-5__2unwq",
            "py-lg-0": "TokenFeed_py-lg-0__2r93n",
            "py-lg-1": "TokenFeed_py-lg-1__3BWKw",
            "py-lg-2": "TokenFeed_py-lg-2__9Hxx_",
            "py-lg-3": "TokenFeed_py-lg-3__3pTJI",
            "py-lg-4": "TokenFeed_py-lg-4__3d8_F",
            "py-lg-5": "TokenFeed_py-lg-5__1BUU0",
            "pt-lg-0": "TokenFeed_pt-lg-0__3wque",
            "pt-lg-1": "TokenFeed_pt-lg-1__2yNrI",
            "pt-lg-2": "TokenFeed_pt-lg-2__1XTGA",
            "pt-lg-3": "TokenFeed_pt-lg-3__LCh-I",
            "pt-lg-4": "TokenFeed_pt-lg-4__1qP-2",
            "pt-lg-5": "TokenFeed_pt-lg-5__6J7oj",
            "pe-lg-0": "TokenFeed_pe-lg-0__3xFfx",
            "pe-lg-1": "TokenFeed_pe-lg-1__28Kyl",
            "pe-lg-2": "TokenFeed_pe-lg-2__14M92",
            "pe-lg-3": "TokenFeed_pe-lg-3__3hXwY",
            "pe-lg-4": "TokenFeed_pe-lg-4__UTjgo",
            "pe-lg-5": "TokenFeed_pe-lg-5__3O5c_",
            "pb-lg-0": "TokenFeed_pb-lg-0__1H3nk",
            "pb-lg-1": "TokenFeed_pb-lg-1__eh2UM",
            "pb-lg-2": "TokenFeed_pb-lg-2__1uRs1",
            "pb-lg-3": "TokenFeed_pb-lg-3__2rxxW",
            "pb-lg-4": "TokenFeed_pb-lg-4__UDpxo",
            "pb-lg-5": "TokenFeed_pb-lg-5__2wmYg",
            "ps-lg-0": "TokenFeed_ps-lg-0__3lNUm",
            "ps-lg-1": "TokenFeed_ps-lg-1__e2ou_",
            "ps-lg-2": "TokenFeed_ps-lg-2__2YfTY",
            "ps-lg-3": "TokenFeed_ps-lg-3__fZfwZ",
            "ps-lg-4": "TokenFeed_ps-lg-4__31sC9",
            "ps-lg-5": "TokenFeed_ps-lg-5__3Fnak",
            "text-lg-start": "TokenFeed_text-lg-start__JrN-E",
            "text-lg-end": "TokenFeed_text-lg-end__BqvQs",
            "text-lg-center": "TokenFeed_text-lg-center__35HIK",
            "float-xl-start": "TokenFeed_float-xl-start__u-HDU",
            "float-xl-end": "TokenFeed_float-xl-end__1cC1y",
            "float-xl-none": "TokenFeed_float-xl-none__2FzmI",
            "d-xl-inline": "TokenFeed_d-xl-inline__1soxW",
            "d-xl-inline-block": "TokenFeed_d-xl-inline-block__20ZKo",
            "d-xl-block": "TokenFeed_d-xl-block__DIrxN",
            "d-xl-grid": "TokenFeed_d-xl-grid__1fiSN",
            "d-xl-table": "TokenFeed_d-xl-table__26IH5",
            "d-xl-table-row": "TokenFeed_d-xl-table-row__1N3fP",
            "d-xl-table-cell": "TokenFeed_d-xl-table-cell__O3gEt",
            "d-xl-flex": "TokenFeed_d-xl-flex__Ug5yV",
            "d-xl-inline-flex": "TokenFeed_d-xl-inline-flex__1APbe",
            "d-xl-none": "TokenFeed_d-xl-none__6fcTE",
            "flex-xl-fill": "TokenFeed_flex-xl-fill__N96R3",
            "flex-xl-row": "TokenFeed_flex-xl-row__pORUl",
            "flex-xl-column": "TokenFeed_flex-xl-column__3Ga_m",
            "flex-xl-row-reverse": "TokenFeed_flex-xl-row-reverse__322kv",
            "flex-xl-column-reverse": "TokenFeed_flex-xl-column-reverse__9k5h7",
            "flex-xl-grow-0": "TokenFeed_flex-xl-grow-0__3S9xc",
            "flex-xl-grow-1": "TokenFeed_flex-xl-grow-1__12gcS",
            "flex-xl-shrink-0": "TokenFeed_flex-xl-shrink-0__a9BJb",
            "flex-xl-shrink-1": "TokenFeed_flex-xl-shrink-1__3zwxI",
            "flex-xl-wrap": "TokenFeed_flex-xl-wrap__2TTv8",
            "flex-xl-nowrap": "TokenFeed_flex-xl-nowrap__2HVHk",
            "flex-xl-wrap-reverse": "TokenFeed_flex-xl-wrap-reverse__2N_MN",
            "gap-xl-0": "TokenFeed_gap-xl-0__1Trfe",
            "gap-xl-1": "TokenFeed_gap-xl-1__2Hf1v",
            "gap-xl-2": "TokenFeed_gap-xl-2__1H7lD",
            "gap-xl-3": "TokenFeed_gap-xl-3__3yYrp",
            "gap-xl-4": "TokenFeed_gap-xl-4__2K0mt",
            "gap-xl-5": "TokenFeed_gap-xl-5__6ZCfa",
            "justify-content-xl-start": "TokenFeed_justify-content-xl-start__1xMKd",
            "justify-content-xl-end": "TokenFeed_justify-content-xl-end__bSgey",
            "justify-content-xl-center": "TokenFeed_justify-content-xl-center__2Skh-",
            "justify-content-xl-between": "TokenFeed_justify-content-xl-between__38cDJ",
            "justify-content-xl-around": "TokenFeed_justify-content-xl-around__1fLd9",
            "justify-content-xl-evenly": "TokenFeed_justify-content-xl-evenly__1tQyS",
            "align-items-xl-start": "TokenFeed_align-items-xl-start___1LeF",
            "align-items-xl-end": "TokenFeed_align-items-xl-end__1GE2E",
            "align-items-xl-center": "TokenFeed_align-items-xl-center__JfNXE",
            "align-items-xl-baseline": "TokenFeed_align-items-xl-baseline__PSBDl",
            "align-items-xl-stretch": "TokenFeed_align-items-xl-stretch__2BiHG",
            "align-content-xl-start": "TokenFeed_align-content-xl-start__twlTH",
            "align-content-xl-end": "TokenFeed_align-content-xl-end__3c7Gw",
            "align-content-xl-center": "TokenFeed_align-content-xl-center__Pa1o8",
            "align-content-xl-between": "TokenFeed_align-content-xl-between__DDc1y",
            "align-content-xl-around": "TokenFeed_align-content-xl-around__2BvYd",
            "align-content-xl-stretch": "TokenFeed_align-content-xl-stretch__fC0qM",
            "align-self-xl-auto": "TokenFeed_align-self-xl-auto__2Vvth",
            "align-self-xl-start": "TokenFeed_align-self-xl-start__3253Y",
            "align-self-xl-end": "TokenFeed_align-self-xl-end__1pUdT",
            "align-self-xl-center": "TokenFeed_align-self-xl-center__2tumB",
            "align-self-xl-baseline": "TokenFeed_align-self-xl-baseline__1G699",
            "align-self-xl-stretch": "TokenFeed_align-self-xl-stretch__We1wl",
            "order-xl-first": "TokenFeed_order-xl-first__1dJhj",
            "order-xl-0": "TokenFeed_order-xl-0__Aum2z",
            "order-xl-1": "TokenFeed_order-xl-1__389Yl",
            "order-xl-2": "TokenFeed_order-xl-2__2IJtv",
            "order-xl-3": "TokenFeed_order-xl-3__20HYR",
            "order-xl-4": "TokenFeed_order-xl-4__3byK0",
            "order-xl-5": "TokenFeed_order-xl-5__-qD-1",
            "order-xl-last": "TokenFeed_order-xl-last__12w0h",
            "m-xl-0": "TokenFeed_m-xl-0__1spLG",
            "m-xl-1": "TokenFeed_m-xl-1__3e0qP",
            "m-xl-2": "TokenFeed_m-xl-2__2dqZA",
            "m-xl-3": "TokenFeed_m-xl-3__3EsT-",
            "m-xl-4": "TokenFeed_m-xl-4__89wne",
            "m-xl-5": "TokenFeed_m-xl-5__3tG5D",
            "m-xl-auto": "TokenFeed_m-xl-auto__2nmDb",
            "mx-xl-0": "TokenFeed_mx-xl-0__3GsFn",
            "mx-xl-1": "TokenFeed_mx-xl-1__3AMpV",
            "mx-xl-2": "TokenFeed_mx-xl-2__1eUL-",
            "mx-xl-3": "TokenFeed_mx-xl-3__1b3gl",
            "mx-xl-4": "TokenFeed_mx-xl-4__38nkD",
            "mx-xl-5": "TokenFeed_mx-xl-5__1xd0W",
            "mx-xl-auto": "TokenFeed_mx-xl-auto__smh3L",
            "my-xl-0": "TokenFeed_my-xl-0__3SsU3",
            "my-xl-1": "TokenFeed_my-xl-1__2NBqM",
            "my-xl-2": "TokenFeed_my-xl-2__3L96W",
            "my-xl-3": "TokenFeed_my-xl-3__3tdFE",
            "my-xl-4": "TokenFeed_my-xl-4__2x6gF",
            "my-xl-5": "TokenFeed_my-xl-5__24H-C",
            "my-xl-auto": "TokenFeed_my-xl-auto__1HyOc",
            "mt-xl-0": "TokenFeed_mt-xl-0__1FLXg",
            "mt-xl-1": "TokenFeed_mt-xl-1__1Vby0",
            "mt-xl-2": "TokenFeed_mt-xl-2__3argf",
            "mt-xl-3": "TokenFeed_mt-xl-3__1ouqg",
            "mt-xl-4": "TokenFeed_mt-xl-4__20KkC",
            "mt-xl-5": "TokenFeed_mt-xl-5__3hruX",
            "mt-xl-auto": "TokenFeed_mt-xl-auto__3Phhz",
            "me-xl-0": "TokenFeed_me-xl-0__1Wf4K",
            "me-xl-1": "TokenFeed_me-xl-1__3jU2T",
            "me-xl-2": "TokenFeed_me-xl-2__2zv5V",
            "me-xl-3": "TokenFeed_me-xl-3__3Nlwx",
            "me-xl-4": "TokenFeed_me-xl-4__lTUan",
            "me-xl-5": "TokenFeed_me-xl-5__6HPan",
            "me-xl-auto": "TokenFeed_me-xl-auto__73YwJ",
            "mb-xl-0": "TokenFeed_mb-xl-0__2jCDP",
            "mb-xl-1": "TokenFeed_mb-xl-1__2Sr8H",
            "mb-xl-2": "TokenFeed_mb-xl-2__h4w_3",
            "mb-xl-3": "TokenFeed_mb-xl-3__15yXL",
            "mb-xl-4": "TokenFeed_mb-xl-4__3GqnC",
            "mb-xl-5": "TokenFeed_mb-xl-5__3Cit8",
            "mb-xl-auto": "TokenFeed_mb-xl-auto__1pw5W",
            "ms-xl-0": "TokenFeed_ms-xl-0__13111",
            "ms-xl-1": "TokenFeed_ms-xl-1__1Dm3s",
            "ms-xl-2": "TokenFeed_ms-xl-2__1jFGk",
            "ms-xl-3": "TokenFeed_ms-xl-3__2QWvh",
            "ms-xl-4": "TokenFeed_ms-xl-4__1FsOs",
            "ms-xl-5": "TokenFeed_ms-xl-5__1xwqe",
            "ms-xl-auto": "TokenFeed_ms-xl-auto__355xS",
            "p-xl-0": "TokenFeed_p-xl-0__BSOuZ",
            "p-xl-1": "TokenFeed_p-xl-1__PAXTA",
            "p-xl-2": "TokenFeed_p-xl-2__2vTpE",
            "p-xl-3": "TokenFeed_p-xl-3__1eA3Z",
            "p-xl-4": "TokenFeed_p-xl-4__2Yo4l",
            "p-xl-5": "TokenFeed_p-xl-5__1PDlf",
            "px-xl-0": "TokenFeed_px-xl-0__1i5qq",
            "px-xl-1": "TokenFeed_px-xl-1__2lYP8",
            "px-xl-2": "TokenFeed_px-xl-2__3mkKF",
            "px-xl-3": "TokenFeed_px-xl-3__3_uCZ",
            "px-xl-4": "TokenFeed_px-xl-4__Wu0g5",
            "px-xl-5": "TokenFeed_px-xl-5__3LYda",
            "py-xl-0": "TokenFeed_py-xl-0__2o0Ig",
            "py-xl-1": "TokenFeed_py-xl-1__bw40A",
            "py-xl-2": "TokenFeed_py-xl-2__ZTKqP",
            "py-xl-3": "TokenFeed_py-xl-3__WP97N",
            "py-xl-4": "TokenFeed_py-xl-4__3dHZS",
            "py-xl-5": "TokenFeed_py-xl-5__17a_w",
            "pt-xl-0": "TokenFeed_pt-xl-0__2lK7R",
            "pt-xl-1": "TokenFeed_pt-xl-1__1reFi",
            "pt-xl-2": "TokenFeed_pt-xl-2__rScCx",
            "pt-xl-3": "TokenFeed_pt-xl-3__2G-dC",
            "pt-xl-4": "TokenFeed_pt-xl-4__h55BY",
            "pt-xl-5": "TokenFeed_pt-xl-5__TcB70",
            "pe-xl-0": "TokenFeed_pe-xl-0__1mXcV",
            "pe-xl-1": "TokenFeed_pe-xl-1__MyrWO",
            "pe-xl-2": "TokenFeed_pe-xl-2__12TC7",
            "pe-xl-3": "TokenFeed_pe-xl-3__3Njo4",
            "pe-xl-4": "TokenFeed_pe-xl-4__zC_pu",
            "pe-xl-5": "TokenFeed_pe-xl-5__ScVi_",
            "pb-xl-0": "TokenFeed_pb-xl-0__275tR",
            "pb-xl-1": "TokenFeed_pb-xl-1__3uAwD",
            "pb-xl-2": "TokenFeed_pb-xl-2__128Oo",
            "pb-xl-3": "TokenFeed_pb-xl-3__I3xro",
            "pb-xl-4": "TokenFeed_pb-xl-4__1Topo",
            "pb-xl-5": "TokenFeed_pb-xl-5__WjRSk",
            "ps-xl-0": "TokenFeed_ps-xl-0__1kP2b",
            "ps-xl-1": "TokenFeed_ps-xl-1__MdKax",
            "ps-xl-2": "TokenFeed_ps-xl-2__iyoGc",
            "ps-xl-3": "TokenFeed_ps-xl-3__3u_PA",
            "ps-xl-4": "TokenFeed_ps-xl-4__vQd69",
            "ps-xl-5": "TokenFeed_ps-xl-5__xlLwL",
            "text-xl-start": "TokenFeed_text-xl-start__3nwmV",
            "text-xl-end": "TokenFeed_text-xl-end__5XpiW",
            "text-xl-center": "TokenFeed_text-xl-center__3wdGk",
            "float-xxl-start": "TokenFeed_float-xxl-start__RCoUA",
            "float-xxl-end": "TokenFeed_float-xxl-end__31rqq",
            "float-xxl-none": "TokenFeed_float-xxl-none__JVaFg",
            "d-xxl-inline": "TokenFeed_d-xxl-inline__S_ja_",
            "d-xxl-inline-block": "TokenFeed_d-xxl-inline-block__aPYUw",
            "d-xxl-block": "TokenFeed_d-xxl-block__Fqfww",
            "d-xxl-grid": "TokenFeed_d-xxl-grid__1728X",
            "d-xxl-table": "TokenFeed_d-xxl-table__2UmQV",
            "d-xxl-table-row": "TokenFeed_d-xxl-table-row__3djD5",
            "d-xxl-table-cell": "TokenFeed_d-xxl-table-cell__JCIEb",
            "d-xxl-flex": "TokenFeed_d-xxl-flex__3tbRj",
            "d-xxl-inline-flex": "TokenFeed_d-xxl-inline-flex__wyvJm",
            "d-xxl-none": "TokenFeed_d-xxl-none__3BMPT",
            "flex-xxl-fill": "TokenFeed_flex-xxl-fill__2dDWh",
            "flex-xxl-row": "TokenFeed_flex-xxl-row__1weoJ",
            "flex-xxl-column": "TokenFeed_flex-xxl-column__r4rT6",
            "flex-xxl-row-reverse": "TokenFeed_flex-xxl-row-reverse__1AOti",
            "flex-xxl-column-reverse": "TokenFeed_flex-xxl-column-reverse__FRRcu",
            "flex-xxl-grow-0": "TokenFeed_flex-xxl-grow-0__2k0nf",
            "flex-xxl-grow-1": "TokenFeed_flex-xxl-grow-1__Ou16w",
            "flex-xxl-shrink-0": "TokenFeed_flex-xxl-shrink-0__PTLyu",
            "flex-xxl-shrink-1": "TokenFeed_flex-xxl-shrink-1__12j22",
            "flex-xxl-wrap": "TokenFeed_flex-xxl-wrap__3_MTx",
            "flex-xxl-nowrap": "TokenFeed_flex-xxl-nowrap__3vBVv",
            "flex-xxl-wrap-reverse": "TokenFeed_flex-xxl-wrap-reverse__eINQ0",
            "gap-xxl-0": "TokenFeed_gap-xxl-0__34jcB",
            "gap-xxl-1": "TokenFeed_gap-xxl-1__2UqpW",
            "gap-xxl-2": "TokenFeed_gap-xxl-2__3PlHa",
            "gap-xxl-3": "TokenFeed_gap-xxl-3__2JL9e",
            "gap-xxl-4": "TokenFeed_gap-xxl-4__14JOu",
            "gap-xxl-5": "TokenFeed_gap-xxl-5__TZdPs",
            "justify-content-xxl-start": "TokenFeed_justify-content-xxl-start__3av96",
            "justify-content-xxl-end": "TokenFeed_justify-content-xxl-end__oS-33",
            "justify-content-xxl-center": "TokenFeed_justify-content-xxl-center__10pV_",
            "justify-content-xxl-between": "TokenFeed_justify-content-xxl-between__1veur",
            "justify-content-xxl-around": "TokenFeed_justify-content-xxl-around__3Nf40",
            "justify-content-xxl-evenly": "TokenFeed_justify-content-xxl-evenly__1vlxV",
            "align-items-xxl-start": "TokenFeed_align-items-xxl-start__2aXOX",
            "align-items-xxl-end": "TokenFeed_align-items-xxl-end__39n-F",
            "align-items-xxl-center": "TokenFeed_align-items-xxl-center__2Nb9p",
            "align-items-xxl-baseline": "TokenFeed_align-items-xxl-baseline__3d-YF",
            "align-items-xxl-stretch": "TokenFeed_align-items-xxl-stretch__v_BQS",
            "align-content-xxl-start": "TokenFeed_align-content-xxl-start__1GMk8",
            "align-content-xxl-end": "TokenFeed_align-content-xxl-end__1vCqX",
            "align-content-xxl-center": "TokenFeed_align-content-xxl-center__3srDR",
            "align-content-xxl-between": "TokenFeed_align-content-xxl-between__3tXgT",
            "align-content-xxl-around": "TokenFeed_align-content-xxl-around__2YA9H",
            "align-content-xxl-stretch": "TokenFeed_align-content-xxl-stretch__usSsG",
            "align-self-xxl-auto": "TokenFeed_align-self-xxl-auto__TcSis",
            "align-self-xxl-start": "TokenFeed_align-self-xxl-start__x_Oh0",
            "align-self-xxl-end": "TokenFeed_align-self-xxl-end__1YgWk",
            "align-self-xxl-center": "TokenFeed_align-self-xxl-center__18q8B",
            "align-self-xxl-baseline": "TokenFeed_align-self-xxl-baseline__2jbrf",
            "align-self-xxl-stretch": "TokenFeed_align-self-xxl-stretch__19SCx",
            "order-xxl-first": "TokenFeed_order-xxl-first__2G7u1",
            "order-xxl-0": "TokenFeed_order-xxl-0__2BF4k",
            "order-xxl-1": "TokenFeed_order-xxl-1__t6roB",
            "order-xxl-2": "TokenFeed_order-xxl-2__RP0YE",
            "order-xxl-3": "TokenFeed_order-xxl-3__1giCf",
            "order-xxl-4": "TokenFeed_order-xxl-4__1URkE",
            "order-xxl-5": "TokenFeed_order-xxl-5__1NXh2",
            "order-xxl-last": "TokenFeed_order-xxl-last__3Gdav",
            "m-xxl-0": "TokenFeed_m-xxl-0__Qh3Aa",
            "m-xxl-1": "TokenFeed_m-xxl-1__3BdSt",
            "m-xxl-2": "TokenFeed_m-xxl-2__cZoMj",
            "m-xxl-3": "TokenFeed_m-xxl-3__2K6od",
            "m-xxl-4": "TokenFeed_m-xxl-4__1pPa1",
            "m-xxl-5": "TokenFeed_m-xxl-5__27V4L",
            "m-xxl-auto": "TokenFeed_m-xxl-auto__2YKG8",
            "mx-xxl-0": "TokenFeed_mx-xxl-0__2CVpm",
            "mx-xxl-1": "TokenFeed_mx-xxl-1__3tJcf",
            "mx-xxl-2": "TokenFeed_mx-xxl-2__1_8pt",
            "mx-xxl-3": "TokenFeed_mx-xxl-3__Mqiyu",
            "mx-xxl-4": "TokenFeed_mx-xxl-4__3mYiH",
            "mx-xxl-5": "TokenFeed_mx-xxl-5__3D1br",
            "mx-xxl-auto": "TokenFeed_mx-xxl-auto__3d5A7",
            "my-xxl-0": "TokenFeed_my-xxl-0__3AcaU",
            "my-xxl-1": "TokenFeed_my-xxl-1__imuXJ",
            "my-xxl-2": "TokenFeed_my-xxl-2__1kl9h",
            "my-xxl-3": "TokenFeed_my-xxl-3__2v2oQ",
            "my-xxl-4": "TokenFeed_my-xxl-4__3q5mb",
            "my-xxl-5": "TokenFeed_my-xxl-5__3vl_Z",
            "my-xxl-auto": "TokenFeed_my-xxl-auto__2QuCw",
            "mt-xxl-0": "TokenFeed_mt-xxl-0__1gk0D",
            "mt-xxl-1": "TokenFeed_mt-xxl-1__2QORj",
            "mt-xxl-2": "TokenFeed_mt-xxl-2__14pzk",
            "mt-xxl-3": "TokenFeed_mt-xxl-3__2_DM-",
            "mt-xxl-4": "TokenFeed_mt-xxl-4__18JJq",
            "mt-xxl-5": "TokenFeed_mt-xxl-5__1V80L",
            "mt-xxl-auto": "TokenFeed_mt-xxl-auto__1bl99",
            "me-xxl-0": "TokenFeed_me-xxl-0__xI8aT",
            "me-xxl-1": "TokenFeed_me-xxl-1__18x5M",
            "me-xxl-2": "TokenFeed_me-xxl-2__1hpAv",
            "me-xxl-3": "TokenFeed_me-xxl-3__1K8ix",
            "me-xxl-4": "TokenFeed_me-xxl-4__3Yj69",
            "me-xxl-5": "TokenFeed_me-xxl-5__2Hhp1",
            "me-xxl-auto": "TokenFeed_me-xxl-auto__2DZ7J",
            "mb-xxl-0": "TokenFeed_mb-xxl-0__3cGOM",
            "mb-xxl-1": "TokenFeed_mb-xxl-1__3I10O",
            "mb-xxl-2": "TokenFeed_mb-xxl-2__3CVMj",
            "mb-xxl-3": "TokenFeed_mb-xxl-3__10ktB",
            "mb-xxl-4": "TokenFeed_mb-xxl-4__1vp6D",
            "mb-xxl-5": "TokenFeed_mb-xxl-5__bN4RA",
            "mb-xxl-auto": "TokenFeed_mb-xxl-auto__1JoVK",
            "ms-xxl-0": "TokenFeed_ms-xxl-0__BT3np",
            "ms-xxl-1": "TokenFeed_ms-xxl-1__2FH5h",
            "ms-xxl-2": "TokenFeed_ms-xxl-2__20Jzm",
            "ms-xxl-3": "TokenFeed_ms-xxl-3__1B77M",
            "ms-xxl-4": "TokenFeed_ms-xxl-4__3ZmaM",
            "ms-xxl-5": "TokenFeed_ms-xxl-5__2pCPR",
            "ms-xxl-auto": "TokenFeed_ms-xxl-auto__2Jdse",
            "p-xxl-0": "TokenFeed_p-xxl-0__8x_i7",
            "p-xxl-1": "TokenFeed_p-xxl-1__1HjXt",
            "p-xxl-2": "TokenFeed_p-xxl-2__2EpvS",
            "p-xxl-3": "TokenFeed_p-xxl-3__214ct",
            "p-xxl-4": "TokenFeed_p-xxl-4__1eLoO",
            "p-xxl-5": "TokenFeed_p-xxl-5__1Mpii",
            "px-xxl-0": "TokenFeed_px-xxl-0__1hHZ1",
            "px-xxl-1": "TokenFeed_px-xxl-1__4QOAu",
            "px-xxl-2": "TokenFeed_px-xxl-2__-JmZ5",
            "px-xxl-3": "TokenFeed_px-xxl-3__1iox_",
            "px-xxl-4": "TokenFeed_px-xxl-4__1ezaZ",
            "px-xxl-5": "TokenFeed_px-xxl-5__24KWR",
            "py-xxl-0": "TokenFeed_py-xxl-0__3x4SH",
            "py-xxl-1": "TokenFeed_py-xxl-1__3Cmxs",
            "py-xxl-2": "TokenFeed_py-xxl-2__1bF4x",
            "py-xxl-3": "TokenFeed_py-xxl-3__1Ntxf",
            "py-xxl-4": "TokenFeed_py-xxl-4__3_gZr",
            "py-xxl-5": "TokenFeed_py-xxl-5__2uGMs",
            "pt-xxl-0": "TokenFeed_pt-xxl-0__337W5",
            "pt-xxl-1": "TokenFeed_pt-xxl-1__2SKZ-",
            "pt-xxl-2": "TokenFeed_pt-xxl-2__2PRCL",
            "pt-xxl-3": "TokenFeed_pt-xxl-3__38oa3",
            "pt-xxl-4": "TokenFeed_pt-xxl-4__uD6L8",
            "pt-xxl-5": "TokenFeed_pt-xxl-5__2hAgS",
            "pe-xxl-0": "TokenFeed_pe-xxl-0__10vz8",
            "pe-xxl-1": "TokenFeed_pe-xxl-1__2OgDC",
            "pe-xxl-2": "TokenFeed_pe-xxl-2__2nmRc",
            "pe-xxl-3": "TokenFeed_pe-xxl-3__SVtMi",
            "pe-xxl-4": "TokenFeed_pe-xxl-4__2v2iN",
            "pe-xxl-5": "TokenFeed_pe-xxl-5__sqMH4",
            "pb-xxl-0": "TokenFeed_pb-xxl-0__2STy3",
            "pb-xxl-1": "TokenFeed_pb-xxl-1__2iPsb",
            "pb-xxl-2": "TokenFeed_pb-xxl-2__2YjGu",
            "pb-xxl-3": "TokenFeed_pb-xxl-3__1YtIl",
            "pb-xxl-4": "TokenFeed_pb-xxl-4__3Ox-U",
            "pb-xxl-5": "TokenFeed_pb-xxl-5__3Wm2q",
            "ps-xxl-0": "TokenFeed_ps-xxl-0__16M08",
            "ps-xxl-1": "TokenFeed_ps-xxl-1__3M6PQ",
            "ps-xxl-2": "TokenFeed_ps-xxl-2__Bby6z",
            "ps-xxl-3": "TokenFeed_ps-xxl-3__38LdL",
            "ps-xxl-4": "TokenFeed_ps-xxl-4__2n7AW",
            "ps-xxl-5": "TokenFeed_ps-xxl-5__17YVc",
            "text-xxl-start": "TokenFeed_text-xxl-start__5D75q",
            "text-xxl-end": "TokenFeed_text-xxl-end__1A952",
            "text-xxl-center": "TokenFeed_text-xxl-center__2BjjB",
            "d-print-inline": "TokenFeed_d-print-inline__2323y",
            "d-print-inline-block": "TokenFeed_d-print-inline-block__2sDsm",
            "d-print-block": "TokenFeed_d-print-block__2lawR",
            "d-print-grid": "TokenFeed_d-print-grid__3gmOO",
            "d-print-table": "TokenFeed_d-print-table__2bQ4O",
            "d-print-table-row": "TokenFeed_d-print-table-row__qqHt8",
            "d-print-table-cell": "TokenFeed_d-print-table-cell__3cG5y",
            "d-print-flex": "TokenFeed_d-print-flex__26h-7",
            "d-print-inline-flex": "TokenFeed_d-print-inline-flex__DFl7n",
            "d-print-none": "TokenFeed_d-print-none__1nzCi",
            tokenFeed: "TokenFeed_tokenFeed__10Pbr"
        }
    },
    196: function(e) {
        e.exports = JSON.parse('[{"pid":0,"name":"Cake","inactive":false},{"pid":1,"name":"Cake-BNB"},{"pid":2,"name":"BNB-BUSD"},{"pid":3,"name":"ADA-BNB"},{"pid":4,"name":"BAND-BNB"},{"pid":5,"name":"DOT-BNB"},{"pid":6,"name":"EOS-BNB"},{"pid":7,"name":"BNB-LINK"},{"pid":8,"name":"BNB-BAKE"},{"pid":9,"name":"BURGER-BNB"},{"pid":10,"name":"BNB-BAKE"},{"pid":11,"name":"USDT-BUSD"},{"pid":12,"name":"TWT-BNB"},{"pid":13,"name":"BNB-XVS"},{"pid":14,"name":"ETH-BNB"},{"pid":15,"name":"BTCB-BNB"},{"pid":16,"name":"ALPHA-BNB"},{"pid":17,"name":"USDT-BNB"},{"pid":18,"name":"XRP-BNB"},{"pid":19,"name":"ATOM-BNB"},{"pid":20,"name":"YFII-BNB"},{"pid":21,"name":"DAI-BNB"},{"pid":22,"name":"XTZ-BNB"},{"pid":23,"name":"BCH-BNB"},{"pid":24,"name":"YFI-BNB"},{"pid":25,"name":"BNB-UNI"},{"pid":26,"name":"FIL-BNB"},{"pid":27,"name":"INJ-BNB"},{"pid":28,"name":"INJ-BNB"},{"pid":29,"name":"USDC-BNB"},{"pid":30,"name":"SXP-BNB"},{"pid":31,"name":"CLR"},{"pid":32,"name":"CTK-BNB"},{"pid":33,"name":"DPT"},{"pid":34,"name":"STAX-Cake"},{"pid":35,"name":"Cake-NAR"},{"pid":36,"name":"Cake-NYA"},{"pid":37,"name":"BNB-HARD"},{"pid":38,"name":"Cake-bROOBEE"},{"pid":39,"name":"UNFI-BNB"},{"pid":40,"name":"blink-BNB"},{"pid":41,"name":"VAI-BUSD"},{"pid":42,"name":"BNB-PSG"},{"pid":43,"name":"BNB-JUV"},{"pid":44,"name":"DITTO-BNB"},{"pid":45,"name":"BNB-REEF"},{"pid":46,"name":"BNB-OG"},{"pid":47,"name":"ASR-BNB"},{"pid":48,"name":"ATM-BNB"},{"pid":49,"name":"bALBT-BNB"},{"pid":50,"name":"BNB-TEN"},{"pid":51,"name":"BSCX-BNB"},{"pid":52,"name":"DAI-BUSD"},{"pid":53,"name":"USDC-BUSD"},{"pid":54,"name":"LTC-BNB"},{"pid":55,"name":"BTCST-BNB"},{"pid":56,"name":"Helmet-BNB"},{"pid":57,"name":"FRONT-BNB"},{"pid":58,"name":"wSOTE-BNB"},{"pid":59,"name":"UST-mTSLA"},{"pid":60,"name":"UST-mNFLX"},{"pid":61,"name":"UST-mGOOGL"},{"pid":62,"name":"UST-mAMZN"},{"pid":63,"name":"UST-BUSD"},{"pid":64,"name":""},{"pid":65,"name":"BNB-EGLD"},{"pid":66,"name":"BDO-BNB"},{"pid":67,"name":"BNB-HGET"},{"pid":68,"name":"LIT-BNB"},{"pid":69,"name":"LINA-BUSD"},{"pid":70,"name":"ETH-BETH"},{"pid":71,"name":"BNB-SFP"},{"pid":72,"name":"ETH-COMP"},{"pid":73,"name":"BNB-SWGb"},{"pid":74,"name":"ZEE-BNB"},{"pid":75,"name":"BNB-BRY"},{"pid":76,"name":"SWINGBY-BNB"},{"pid":77,"name":"DODO-BNB"},{"pid":78,"name":"ETH-SUSHI"},{"pid":79,"name":"BNB-bOPEN"},{"pid":80,"name":"BOR-BNB"},{"pid":81,"name":"IOTX-BUSD"},{"pid":82,"name":"bMXX-BNB"},{"pid":83,"name":"xMARK-BUSD"},{"pid":84,"name":"WATCH-BNB"},{"pid":85,"name":"BUSD-TPT"},{"pid":86,"name":"BEL-BNB"},{"pid":87,"name":"DEXE-BUSD"},{"pid":88,"name":"BFI-BNB"},{"pid":89,"name":"RAMP-BUSD"},{"pid":90,"name":"BNB-BELT"},{"pid":91,"name":"NULS-BNB"},{"pid":92,"name":"NULS-BUSD"},{"pid":93,"name":"BUX-BNB"},{"pid":94,"name":"FOR-BUSD"},{"pid":95,"name":"ALICE-BNB"},{"pid":96,"name":"BNB-BUNNY"},{"pid":97,"name":"COS-BNB"},{"pid":98,"name":"TXL-BUSD"}]')
    },
    197: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"cancelSnipe","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x044a9e94"},{"inputs":[],"name":"firstOnlyInfo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe4f00248"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getAddressSnipes","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2bebd97d"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getPriority","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x1cc1befe"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"getSnipe","outputs":[{"components":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"enum ILimitedSniperInterface.SnipeStatus","name":"status","type":"uint8"},{"internalType":"enum ILimitedSniperInterface.CancelReason","name":"reason","type":"uint8"},{"internalType":"uint256","name":"placedAt","type":"uint256"},{"internalType":"uint256","name":"priority","type":"uint256"},{"internalType":"uint256","name":"priorityIndex","type":"uint256"},{"internalType":"uint256","name":"previousItemID","type":"uint256"},{"internalType":"uint256","name":"nextItemID","type":"uint256"}],"internalType":"struct ILimitedSniperInterface.Snipe","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x87b065cd"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getTokenPriorityList","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x532b9a93"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"beforePriorityIndex","type":"uint256"}],"name":"placeSnipe","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0xb132c085"}]')
    },
    255: function(e, t, n) {
        e.exports = {
            logo: "Navbar_logo__3jo1w",
            nav: "Navbar_nav__YcM5-"
        }
    },
    258: function(e, t, n) {
        e.exports = {
            tradingViewChart: "TradingViewChart_tradingViewChart__39mEQ"
        }
    },
    259: function(e, t, n) {
        e.exports = {
            clearfix: "TokenChart_clearfix__1FBb5",
            "link-primary": "TokenChart_link-primary__3YlKH",
            "link-secondary": "TokenChart_link-secondary__2llc1",
            "link-success": "TokenChart_link-success__2er7v",
            "link-info": "TokenChart_link-info__1SXPK",
            "link-warning": "TokenChart_link-warning__15fCG",
            "link-danger": "TokenChart_link-danger__3o4-t",
            "link-light": "TokenChart_link-light__unsoa",
            "link-dark": "TokenChart_link-dark__2S4kc",
            "link-dark-1": "TokenChart_link-dark-1__kWY3N",
            "link-dark-2": "TokenChart_link-dark-2__2I8zI",
            "link-blue-dark": "TokenChart_link-blue-dark__3Z4Ig",
            ratio: "TokenChart_ratio__4N1Zi",
            "ratio-1x1": "TokenChart_ratio-1x1__3e23O",
            "ratio-4x3": "TokenChart_ratio-4x3__14YcZ",
            "ratio-16x9": "TokenChart_ratio-16x9__2cdXq",
            "ratio-21x9": "TokenChart_ratio-21x9__2VXvZ",
            "fixed-top": "TokenChart_fixed-top__3xQAh",
            "fixed-bottom": "TokenChart_fixed-bottom__3k6i_",
            "sticky-top": "TokenChart_sticky-top__1Kml6",
            "sticky-sm-top": "TokenChart_sticky-sm-top__FmrzS",
            "sticky-md-top": "TokenChart_sticky-md-top__2q4wm",
            "sticky-lg-top": "TokenChart_sticky-lg-top__3tgLM",
            "sticky-xl-top": "TokenChart_sticky-xl-top__32sWv",
            "sticky-xxl-top": "TokenChart_sticky-xxl-top__2TgGW",
            "visually-hidden": "TokenChart_visually-hidden__3zCV8",
            "visually-hidden-focusable": "TokenChart_visually-hidden-focusable__fk601",
            "stretched-link": "TokenChart_stretched-link__1kfqq",
            "text-truncate": "TokenChart_text-truncate__z-4wS",
            "align-baseline": "TokenChart_align-baseline__2adAg",
            "align-top": "TokenChart_align-top__BLJGy",
            "align-middle": "TokenChart_align-middle__2EmCL",
            "align-bottom": "TokenChart_align-bottom__FizCY",
            "align-text-bottom": "TokenChart_align-text-bottom__khSyh",
            "align-text-top": "TokenChart_align-text-top__C7RXY",
            "float-start": "TokenChart_float-start__467Hd",
            "float-end": "TokenChart_float-end__I9T_s",
            "float-none": "TokenChart_float-none__2v2ZB",
            "overflow-auto": "TokenChart_overflow-auto__10x5P",
            "overflow-hidden": "TokenChart_overflow-hidden__3g2fj",
            "overflow-visible": "TokenChart_overflow-visible__ii7A7",
            "overflow-scroll": "TokenChart_overflow-scroll__3wKZ3",
            "d-inline": "TokenChart_d-inline__1rlc0",
            "d-inline-block": "TokenChart_d-inline-block__1rVA-",
            "d-block": "TokenChart_d-block__3EH2r",
            "d-grid": "TokenChart_d-grid__3e2Ig",
            "d-table": "TokenChart_d-table__2z4VH",
            "d-table-row": "TokenChart_d-table-row__yK2Y2",
            "d-table-cell": "TokenChart_d-table-cell__aAWjK",
            "d-flex": "TokenChart_d-flex__2c2rc",
            "d-inline-flex": "TokenChart_d-inline-flex__1vqGR",
            "d-none": "TokenChart_d-none__20Aqg",
            shadow: "TokenChart_shadow__3SBKF",
            "shadow-sm": "TokenChart_shadow-sm__3d-K4",
            "shadow-lg": "TokenChart_shadow-lg__lm5jy",
            "shadow-none": "TokenChart_shadow-none__1Lp98",
            "position-static": "TokenChart_position-static__3ar4z",
            "position-relative": "TokenChart_position-relative__1CtJN",
            "position-absolute": "TokenChart_position-absolute__j1Dcy",
            "position-fixed": "TokenChart_position-fixed__QWP-2",
            "position-sticky": "TokenChart_position-sticky__1IXaV",
            "top-0": "TokenChart_top-0__1v77-",
            "top-50": "TokenChart_top-50__24Ppj",
            "top-100": "TokenChart_top-100__34TLC",
            "bottom-0": "TokenChart_bottom-0__3yXQl",
            "bottom-50": "TokenChart_bottom-50__1IhF0",
            "bottom-100": "TokenChart_bottom-100__1fwGR",
            "start-0": "TokenChart_start-0__3fpLO",
            "start-50": "TokenChart_start-50__1GKYF",
            "start-100": "TokenChart_start-100__1tZZl",
            "end-0": "TokenChart_end-0__2Re_L",
            "end-50": "TokenChart_end-50__2kre8",
            "end-100": "TokenChart_end-100__2EchQ",
            "translate-middle": "TokenChart_translate-middle__34ogH",
            "translate-middle-x": "TokenChart_translate-middle-x__2LgAT",
            "translate-middle-y": "TokenChart_translate-middle-y__3Gs8Z",
            border: "TokenChart_border__2erQB",
            "border-0": "TokenChart_border-0__1mOKN",
            "border-top": "TokenChart_border-top__3KbLW",
            "border-top-0": "TokenChart_border-top-0__2FYSt",
            "border-end": "TokenChart_border-end__3W5wJ",
            "border-end-0": "TokenChart_border-end-0__3X6sL",
            "border-bottom": "TokenChart_border-bottom__JF-dU",
            "border-bottom-0": "TokenChart_border-bottom-0__1eiAB",
            "border-start": "TokenChart_border-start__1Sg-k",
            "border-start-0": "TokenChart_border-start-0__10aly",
            "border-primary": "TokenChart_border-primary__cmi80",
            "border-secondary": "TokenChart_border-secondary__3TKHD",
            "border-success": "TokenChart_border-success__3q3Rv",
            "border-info": "TokenChart_border-info__1QI_s",
            "border-warning": "TokenChart_border-warning__31DiG",
            "border-danger": "TokenChart_border-danger__3LB5L",
            "border-light": "TokenChart_border-light__1XzSw",
            "border-dark": "TokenChart_border-dark__2giBK",
            "border-dark-1": "TokenChart_border-dark-1__2CA9l",
            "border-dark-2": "TokenChart_border-dark-2__3cn8C",
            "border-blue-dark": "TokenChart_border-blue-dark__2Ylv9",
            "border-white": "TokenChart_border-white__2Uu7z",
            "border-1": "TokenChart_border-1__2E_zG",
            "border-2": "TokenChart_border-2__3sB3z",
            "border-3": "TokenChart_border-3__2hXD-",
            "border-4": "TokenChart_border-4__26h66",
            "border-5": "TokenChart_border-5__HPU5R",
            "w-25": "TokenChart_w-25__10dUP",
            "w-50": "TokenChart_w-50__IJLjg",
            "w-75": "TokenChart_w-75__24prJ",
            "w-100": "TokenChart_w-100__1ujPt",
            "w-auto": "TokenChart_w-auto__1KOCi",
            "mw-100": "TokenChart_mw-100__iVXgb",
            "vw-100": "TokenChart_vw-100__2Hooe",
            "min-vw-100": "TokenChart_min-vw-100__1QzaD",
            "h-25": "TokenChart_h-25__1dj_y",
            "h-50": "TokenChart_h-50__nzpA6",
            "h-75": "TokenChart_h-75___SSJw",
            "h-100": "TokenChart_h-100__2Q-vM",
            "h-auto": "TokenChart_h-auto__3DR35",
            "mh-100": "TokenChart_mh-100__26DfA",
            "vh-100": "TokenChart_vh-100__3EnkQ",
            "min-vh-100": "TokenChart_min-vh-100__arFQ_",
            "flex-fill": "TokenChart_flex-fill__2m7Mk",
            "flex-row": "TokenChart_flex-row__1ZoEY",
            "flex-column": "TokenChart_flex-column__IkwoY",
            "flex-row-reverse": "TokenChart_flex-row-reverse__1CaF0",
            "flex-column-reverse": "TokenChart_flex-column-reverse__WJYPr",
            "flex-grow-0": "TokenChart_flex-grow-0__3niEG",
            "flex-grow-1": "TokenChart_flex-grow-1__3U8S7",
            "flex-shrink-0": "TokenChart_flex-shrink-0__2VKLp",
            "flex-shrink-1": "TokenChart_flex-shrink-1__UHknQ",
            "flex-wrap": "TokenChart_flex-wrap__2Ru4Z",
            "flex-nowrap": "TokenChart_flex-nowrap__1_Vfk",
            "flex-wrap-reverse": "TokenChart_flex-wrap-reverse__1Z-Ak",
            "gap-0": "TokenChart_gap-0__2meyy",
            "gap-1": "TokenChart_gap-1__1dAiw",
            "gap-2": "TokenChart_gap-2__1svLu",
            "gap-3": "TokenChart_gap-3__3DLKb",
            "gap-4": "TokenChart_gap-4__2gkuu",
            "gap-5": "TokenChart_gap-5__Ee5tE",
            "justify-content-start": "TokenChart_justify-content-start__OKnwh",
            "justify-content-end": "TokenChart_justify-content-end__tin9t",
            "justify-content-center": "TokenChart_justify-content-center__Rsto-",
            "justify-content-between": "TokenChart_justify-content-between__3JeMn",
            "justify-content-around": "TokenChart_justify-content-around__Xdnzq",
            "justify-content-evenly": "TokenChart_justify-content-evenly__3ytJ2",
            "align-items-start": "TokenChart_align-items-start__73Qet",
            "align-items-end": "TokenChart_align-items-end__2ow2E",
            "align-items-center": "TokenChart_align-items-center__2ukgJ",
            "align-items-baseline": "TokenChart_align-items-baseline__dWKp4",
            "align-items-stretch": "TokenChart_align-items-stretch__1-aU6",
            "align-content-start": "TokenChart_align-content-start__3u06J",
            "align-content-end": "TokenChart_align-content-end__3uKCd",
            "align-content-center": "TokenChart_align-content-center__3BDRd",
            "align-content-between": "TokenChart_align-content-between__2pSEz",
            "align-content-around": "TokenChart_align-content-around__2ZYO-",
            "align-content-stretch": "TokenChart_align-content-stretch__dVytD",
            "align-self-auto": "TokenChart_align-self-auto__2VDGO",
            "align-self-start": "TokenChart_align-self-start__apyGC",
            "align-self-end": "TokenChart_align-self-end__LSwzn",
            "align-self-center": "TokenChart_align-self-center__rTtu1",
            "align-self-baseline": "TokenChart_align-self-baseline__2MyU9",
            "align-self-stretch": "TokenChart_align-self-stretch__2jqum",
            "order-first": "TokenChart_order-first__1MUT7",
            "order-0": "TokenChart_order-0__v9wB0",
            "order-1": "TokenChart_order-1__1mQ2C",
            "order-2": "TokenChart_order-2__1dcKH",
            "order-3": "TokenChart_order-3__2jYPH",
            "order-4": "TokenChart_order-4__2JF9p",
            "order-5": "TokenChart_order-5__2peJq",
            "order-last": "TokenChart_order-last__4fTcq",
            "m-0": "TokenChart_m-0__3qjx_",
            "m-1": "TokenChart_m-1__BTbIP",
            "m-2": "TokenChart_m-2__3P0T7",
            "m-3": "TokenChart_m-3__3ewFb",
            "m-4": "TokenChart_m-4__P-Hq7",
            "m-5": "TokenChart_m-5__3vnHJ",
            "m-auto": "TokenChart_m-auto__3dD05",
            "mx-0": "TokenChart_mx-0__E7oIQ",
            "mx-1": "TokenChart_mx-1__Y9HQw",
            "mx-2": "TokenChart_mx-2__1HBLs",
            "mx-3": "TokenChart_mx-3__RnrYo",
            "mx-4": "TokenChart_mx-4__25ltM",
            "mx-5": "TokenChart_mx-5__vqzLf",
            "mx-auto": "TokenChart_mx-auto__2nAyO",
            "my-0": "TokenChart_my-0__n_jo7",
            "my-1": "TokenChart_my-1__4fo8k",
            "my-2": "TokenChart_my-2__2sG9h",
            "my-3": "TokenChart_my-3__1hdWf",
            "my-4": "TokenChart_my-4___XN27",
            "my-5": "TokenChart_my-5__2PJhl",
            "my-auto": "TokenChart_my-auto__1ZPku",
            "mt-0": "TokenChart_mt-0__lLXmH",
            "mt-1": "TokenChart_mt-1__3VwdI",
            "mt-2": "TokenChart_mt-2__2FVdX",
            "mt-3": "TokenChart_mt-3__IxqLi",
            "mt-4": "TokenChart_mt-4__dWjL3",
            "mt-5": "TokenChart_mt-5__1-SXm",
            "mt-auto": "TokenChart_mt-auto__2m2re",
            "me-0": "TokenChart_me-0__Y1a-R",
            "me-1": "TokenChart_me-1__Su1AR",
            "me-2": "TokenChart_me-2__24WyH",
            "me-3": "TokenChart_me-3__FWLlU",
            "me-4": "TokenChart_me-4__1av4V",
            "me-5": "TokenChart_me-5__2-3sY",
            "me-auto": "TokenChart_me-auto__36TtH",
            "mb-0": "TokenChart_mb-0__2h59P",
            "mb-1": "TokenChart_mb-1__F33gH",
            "mb-2": "TokenChart_mb-2__2hl9u",
            "mb-3": "TokenChart_mb-3__3lRhe",
            "mb-4": "TokenChart_mb-4__xSyJr",
            "mb-5": "TokenChart_mb-5__FfiZz",
            "mb-auto": "TokenChart_mb-auto__3Iihz",
            "ms-0": "TokenChart_ms-0__5TOuB",
            "ms-1": "TokenChart_ms-1__3xVwY",
            "ms-2": "TokenChart_ms-2__3mp5t",
            "ms-3": "TokenChart_ms-3__r8EL_",
            "ms-4": "TokenChart_ms-4__2rfGb",
            "ms-5": "TokenChart_ms-5__htxC_",
            "ms-auto": "TokenChart_ms-auto__3PLgI",
            "p-0": "TokenChart_p-0__C6LLc",
            "p-1": "TokenChart_p-1__OiucF",
            "p-2": "TokenChart_p-2__1Tjz_",
            "p-3": "TokenChart_p-3__2nBP7",
            "p-4": "TokenChart_p-4__2Cplz",
            "p-5": "TokenChart_p-5__3IBDt",
            "px-0": "TokenChart_px-0__1hn_Z",
            "px-1": "TokenChart_px-1__1N8tj",
            "px-2": "TokenChart_px-2__2BokX",
            "px-3": "TokenChart_px-3__1tulN",
            "px-4": "TokenChart_px-4__1p2tP",
            "px-5": "TokenChart_px-5__BQ8Qc",
            "py-0": "TokenChart_py-0__2zYcW",
            "py-1": "TokenChart_py-1__I65jz",
            "py-2": "TokenChart_py-2__1acEN",
            "py-3": "TokenChart_py-3__1vFIp",
            "py-4": "TokenChart_py-4__2dkCQ",
            "py-5": "TokenChart_py-5__2PBEV",
            "pt-0": "TokenChart_pt-0__3IGXX",
            "pt-1": "TokenChart_pt-1__YlcJD",
            "pt-2": "TokenChart_pt-2__1gXkr",
            "pt-3": "TokenChart_pt-3__2qvYl",
            "pt-4": "TokenChart_pt-4__5soLd",
            "pt-5": "TokenChart_pt-5__UkPOq",
            "pe-0": "TokenChart_pe-0__SPq-j",
            "pe-1": "TokenChart_pe-1__1QWiE",
            "pe-2": "TokenChart_pe-2__dLgxx",
            "pe-3": "TokenChart_pe-3__UbL_s",
            "pe-4": "TokenChart_pe-4__2YRLR",
            "pe-5": "TokenChart_pe-5__3k7fP",
            "pb-0": "TokenChart_pb-0__11pma",
            "pb-1": "TokenChart_pb-1__3qgnE",
            "pb-2": "TokenChart_pb-2__2p3KY",
            "pb-3": "TokenChart_pb-3__2dQxE",
            "pb-4": "TokenChart_pb-4__jooho",
            "pb-5": "TokenChart_pb-5__3FawR",
            "ps-0": "TokenChart_ps-0__1sEgw",
            "ps-1": "TokenChart_ps-1__2-XpQ",
            "ps-2": "TokenChart_ps-2__3zPAD",
            "ps-3": "TokenChart_ps-3__19eZS",
            "ps-4": "TokenChart_ps-4__3pKhQ",
            "ps-5": "TokenChart_ps-5__1RaiJ",
            "fs-1": "TokenChart_fs-1__1a47b",
            "fs-2": "TokenChart_fs-2__XG-wf",
            "fs-3": "TokenChart_fs-3__3w5kV",
            "fs-4": "TokenChart_fs-4__3owKk",
            "fs-5": "TokenChart_fs-5__3Jh6c",
            "fs-6": "TokenChart_fs-6__1jZGL",
            "fst-italic": "TokenChart_fst-italic__3jku1",
            "fst-normal": "TokenChart_fst-normal__3Rol7",
            "fw-light": "TokenChart_fw-light__aXLMc",
            "fw-lighter": "TokenChart_fw-lighter__2Ywsa",
            "fw-normal": "TokenChart_fw-normal__2z9EQ",
            "fw-bold": "TokenChart_fw-bold__27F4v",
            "fw-bolder": "TokenChart_fw-bolder__1e3qD",
            "text-lowercase": "TokenChart_text-lowercase__14hMd",
            "text-uppercase": "TokenChart_text-uppercase__2oklj",
            "text-capitalize": "TokenChart_text-capitalize__1bFC7",
            "text-start": "TokenChart_text-start__1Xzuw",
            "text-end": "TokenChart_text-end__3uMAF",
            "text-center": "TokenChart_text-center__rssqe",
            "text-primary": "TokenChart_text-primary__3e8-3",
            "text-secondary": "TokenChart_text-secondary__1WT5u",
            "text-success": "TokenChart_text-success__1oRTb",
            "text-info": "TokenChart_text-info__1r6IO",
            "text-warning": "TokenChart_text-warning__CLFVx",
            "text-danger": "TokenChart_text-danger__zSUNt",
            "text-light": "TokenChart_text-light__205yr",
            "text-dark": "TokenChart_text-dark__2RBXU",
            "text-dark-1": "TokenChart_text-dark-1__1e1Tn",
            "text-dark-2": "TokenChart_text-dark-2__3P_ZK",
            "text-blue-dark": "TokenChart_text-blue-dark__2EzJC",
            "text-white": "TokenChart_text-white__2o11R",
            "text-body": "TokenChart_text-body__3XQFp",
            "text-muted": "TokenChart_text-muted__DiEdw",
            "text-black-50": "TokenChart_text-black-50__2JpX7",
            "text-white-50": "TokenChart_text-white-50__3Q9gM",
            "text-reset": "TokenChart_text-reset__1xReq",
            "lh-1": "TokenChart_lh-1__3LieI",
            "lh-sm": "TokenChart_lh-sm__1Ioas",
            "lh-base": "TokenChart_lh-base__O4fGc",
            "lh-lg": "TokenChart_lh-lg__Nse2z",
            "bg-primary": "TokenChart_bg-primary__36aen",
            "bg-secondary": "TokenChart_bg-secondary__1_X1C",
            "bg-success": "TokenChart_bg-success__Xi2Dj",
            "bg-info": "TokenChart_bg-info__1_9g2",
            "bg-warning": "TokenChart_bg-warning__31mmu",
            "bg-danger": "TokenChart_bg-danger__2PEcb",
            "bg-light": "TokenChart_bg-light__w1SPQ",
            "bg-dark": "TokenChart_bg-dark__2ocel",
            "bg-dark-1": "TokenChart_bg-dark-1__T4Tp4",
            "bg-dark-2": "TokenChart_bg-dark-2__1YHvs",
            "bg-blue-dark": "TokenChart_bg-blue-dark__1d33k",
            "bg-body": "TokenChart_bg-body__2E0Q4",
            "bg-white": "TokenChart_bg-white__pHI2-",
            "bg-transparent": "TokenChart_bg-transparent__2t5Xr",
            "bg-gradient": "TokenChart_bg-gradient__ZuTI9",
            "text-wrap": "TokenChart_text-wrap__24p4_",
            "text-nowrap": "TokenChart_text-nowrap__30Rv4",
            "text-decoration-none": "TokenChart_text-decoration-none__2hoCQ",
            "text-decoration-underline": "TokenChart_text-decoration-underline__3oVy7",
            "text-decoration-line-through": "TokenChart_text-decoration-line-through__2suVW",
            "text-break": "TokenChart_text-break__2jojn",
            "font-monospace": "TokenChart_font-monospace__28lwP",
            "user-select-all": "TokenChart_user-select-all__2J5Uf",
            "user-select-auto": "TokenChart_user-select-auto__UNg7f",
            "user-select-none": "TokenChart_user-select-none__3AoTm",
            "pe-none": "TokenChart_pe-none__10tHv",
            "pe-auto": "TokenChart_pe-auto__h6-SN",
            rounded: "TokenChart_rounded__1Bd19",
            "rounded-0": "TokenChart_rounded-0__1-PEF",
            "rounded-1": "TokenChart_rounded-1__3L6c4",
            "rounded-2": "TokenChart_rounded-2__3395H",
            "rounded-3": "TokenChart_rounded-3__1iCLu",
            "rounded-circle": "TokenChart_rounded-circle__3TIH7",
            "rounded-pill": "TokenChart_rounded-pill__2j4kl",
            "rounded-top": "TokenChart_rounded-top__3VoUG",
            "rounded-end": "TokenChart_rounded-end__2mEFW",
            "rounded-bottom": "TokenChart_rounded-bottom__3Nloa",
            "rounded-start": "TokenChart_rounded-start__1YPbz",
            visible: "TokenChart_visible__2ktUV",
            invisible: "TokenChart_invisible__3l5jd",
            "float-sm-start": "TokenChart_float-sm-start__3GEph",
            "float-sm-end": "TokenChart_float-sm-end__3LzN0",
            "float-sm-none": "TokenChart_float-sm-none__3hzGk",
            "d-sm-inline": "TokenChart_d-sm-inline__2UgFC",
            "d-sm-inline-block": "TokenChart_d-sm-inline-block__243fb",
            "d-sm-block": "TokenChart_d-sm-block__3WNnl",
            "d-sm-grid": "TokenChart_d-sm-grid__2BFVw",
            "d-sm-table": "TokenChart_d-sm-table__3QxA4",
            "d-sm-table-row": "TokenChart_d-sm-table-row__2w-dF",
            "d-sm-table-cell": "TokenChart_d-sm-table-cell__2SaPV",
            "d-sm-flex": "TokenChart_d-sm-flex__3bn1k",
            "d-sm-inline-flex": "TokenChart_d-sm-inline-flex__3xBsh",
            "d-sm-none": "TokenChart_d-sm-none__2sT8O",
            "flex-sm-fill": "TokenChart_flex-sm-fill__1dGy6",
            "flex-sm-row": "TokenChart_flex-sm-row__1Iyl5",
            "flex-sm-column": "TokenChart_flex-sm-column__jp97t",
            "flex-sm-row-reverse": "TokenChart_flex-sm-row-reverse__2_96o",
            "flex-sm-column-reverse": "TokenChart_flex-sm-column-reverse__1dPQ3",
            "flex-sm-grow-0": "TokenChart_flex-sm-grow-0__2ABJ7",
            "flex-sm-grow-1": "TokenChart_flex-sm-grow-1__2KTO5",
            "flex-sm-shrink-0": "TokenChart_flex-sm-shrink-0__2pzgY",
            "flex-sm-shrink-1": "TokenChart_flex-sm-shrink-1__1ZigP",
            "flex-sm-wrap": "TokenChart_flex-sm-wrap__eMx29",
            "flex-sm-nowrap": "TokenChart_flex-sm-nowrap__3u8SC",
            "flex-sm-wrap-reverse": "TokenChart_flex-sm-wrap-reverse__1D3DU",
            "gap-sm-0": "TokenChart_gap-sm-0__PB4Ys",
            "gap-sm-1": "TokenChart_gap-sm-1__2CrZY",
            "gap-sm-2": "TokenChart_gap-sm-2__RpmNt",
            "gap-sm-3": "TokenChart_gap-sm-3__2nkhK",
            "gap-sm-4": "TokenChart_gap-sm-4__1wr-w",
            "gap-sm-5": "TokenChart_gap-sm-5__1PeF0",
            "justify-content-sm-start": "TokenChart_justify-content-sm-start__1Zm9l",
            "justify-content-sm-end": "TokenChart_justify-content-sm-end__eA1dA",
            "justify-content-sm-center": "TokenChart_justify-content-sm-center__28UIa",
            "justify-content-sm-between": "TokenChart_justify-content-sm-between__hWaiJ",
            "justify-content-sm-around": "TokenChart_justify-content-sm-around__1Zvvp",
            "justify-content-sm-evenly": "TokenChart_justify-content-sm-evenly__252GY",
            "align-items-sm-start": "TokenChart_align-items-sm-start__3YZCk",
            "align-items-sm-end": "TokenChart_align-items-sm-end__QPf0l",
            "align-items-sm-center": "TokenChart_align-items-sm-center__ncORi",
            "align-items-sm-baseline": "TokenChart_align-items-sm-baseline__1IIcM",
            "align-items-sm-stretch": "TokenChart_align-items-sm-stretch__LG95A",
            "align-content-sm-start": "TokenChart_align-content-sm-start__2Ikp1",
            "align-content-sm-end": "TokenChart_align-content-sm-end__CJiNh",
            "align-content-sm-center": "TokenChart_align-content-sm-center__1TpWL",
            "align-content-sm-between": "TokenChart_align-content-sm-between__2t1-G",
            "align-content-sm-around": "TokenChart_align-content-sm-around__cohzk",
            "align-content-sm-stretch": "TokenChart_align-content-sm-stretch__uBwIl",
            "align-self-sm-auto": "TokenChart_align-self-sm-auto__15F9B",
            "align-self-sm-start": "TokenChart_align-self-sm-start__gs8xO",
            "align-self-sm-end": "TokenChart_align-self-sm-end__sCA4H",
            "align-self-sm-center": "TokenChart_align-self-sm-center__1848U",
            "align-self-sm-baseline": "TokenChart_align-self-sm-baseline__1utT2",
            "align-self-sm-stretch": "TokenChart_align-self-sm-stretch__1Dqo4",
            "order-sm-first": "TokenChart_order-sm-first__3__l8",
            "order-sm-0": "TokenChart_order-sm-0__3qDcC",
            "order-sm-1": "TokenChart_order-sm-1__2GEtv",
            "order-sm-2": "TokenChart_order-sm-2__1OsEj",
            "order-sm-3": "TokenChart_order-sm-3__3FuO8",
            "order-sm-4": "TokenChart_order-sm-4__2-pyq",
            "order-sm-5": "TokenChart_order-sm-5__3CDlA",
            "order-sm-last": "TokenChart_order-sm-last__anEHm",
            "m-sm-0": "TokenChart_m-sm-0__20VlM",
            "m-sm-1": "TokenChart_m-sm-1__26WKm",
            "m-sm-2": "TokenChart_m-sm-2__3Jacx",
            "m-sm-3": "TokenChart_m-sm-3__2WDkt",
            "m-sm-4": "TokenChart_m-sm-4__3NNEH",
            "m-sm-5": "TokenChart_m-sm-5__1Pl0I",
            "m-sm-auto": "TokenChart_m-sm-auto__1WDoI",
            "mx-sm-0": "TokenChart_mx-sm-0__16A8Y",
            "mx-sm-1": "TokenChart_mx-sm-1__3GPhJ",
            "mx-sm-2": "TokenChart_mx-sm-2__2ElOt",
            "mx-sm-3": "TokenChart_mx-sm-3__1H-Lm",
            "mx-sm-4": "TokenChart_mx-sm-4__2RLix",
            "mx-sm-5": "TokenChart_mx-sm-5__2t1Lo",
            "mx-sm-auto": "TokenChart_mx-sm-auto__22TrE",
            "my-sm-0": "TokenChart_my-sm-0__35Cyo",
            "my-sm-1": "TokenChart_my-sm-1__1uXiA",
            "my-sm-2": "TokenChart_my-sm-2__uuru1",
            "my-sm-3": "TokenChart_my-sm-3__3iMgp",
            "my-sm-4": "TokenChart_my-sm-4__3DjLV",
            "my-sm-5": "TokenChart_my-sm-5__307Ov",
            "my-sm-auto": "TokenChart_my-sm-auto__Rnl5h",
            "mt-sm-0": "TokenChart_mt-sm-0__3A5kV",
            "mt-sm-1": "TokenChart_mt-sm-1__28dJ6",
            "mt-sm-2": "TokenChart_mt-sm-2__2Fsdi",
            "mt-sm-3": "TokenChart_mt-sm-3__2oRFt",
            "mt-sm-4": "TokenChart_mt-sm-4__1UuUp",
            "mt-sm-5": "TokenChart_mt-sm-5___7NfT",
            "mt-sm-auto": "TokenChart_mt-sm-auto__3YWV8",
            "me-sm-0": "TokenChart_me-sm-0__37EdS",
            "me-sm-1": "TokenChart_me-sm-1__1AawC",
            "me-sm-2": "TokenChart_me-sm-2__iHL-L",
            "me-sm-3": "TokenChart_me-sm-3__1AtaI",
            "me-sm-4": "TokenChart_me-sm-4__1ds5n",
            "me-sm-5": "TokenChart_me-sm-5__1QgNp",
            "me-sm-auto": "TokenChart_me-sm-auto__2GodC",
            "mb-sm-0": "TokenChart_mb-sm-0__8bsOo",
            "mb-sm-1": "TokenChart_mb-sm-1__slwdn",
            "mb-sm-2": "TokenChart_mb-sm-2__2Rx6c",
            "mb-sm-3": "TokenChart_mb-sm-3__1SvKe",
            "mb-sm-4": "TokenChart_mb-sm-4__RUOAF",
            "mb-sm-5": "TokenChart_mb-sm-5__3FTp0",
            "mb-sm-auto": "TokenChart_mb-sm-auto__T9uUB",
            "ms-sm-0": "TokenChart_ms-sm-0__194I0",
            "ms-sm-1": "TokenChart_ms-sm-1__2JdyD",
            "ms-sm-2": "TokenChart_ms-sm-2__2TPXa",
            "ms-sm-3": "TokenChart_ms-sm-3__2UVkF",
            "ms-sm-4": "TokenChart_ms-sm-4__3ZoIo",
            "ms-sm-5": "TokenChart_ms-sm-5__39enX",
            "ms-sm-auto": "TokenChart_ms-sm-auto__1RrQM",
            "p-sm-0": "TokenChart_p-sm-0__1LZx3",
            "p-sm-1": "TokenChart_p-sm-1__1j6rc",
            "p-sm-2": "TokenChart_p-sm-2__3mGtg",
            "p-sm-3": "TokenChart_p-sm-3__32kIZ",
            "p-sm-4": "TokenChart_p-sm-4__1RmGh",
            "p-sm-5": "TokenChart_p-sm-5__HJ3_A",
            "px-sm-0": "TokenChart_px-sm-0__25qDC",
            "px-sm-1": "TokenChart_px-sm-1__34bl1",
            "px-sm-2": "TokenChart_px-sm-2__23Txv",
            "px-sm-3": "TokenChart_px-sm-3__1A0Wx",
            "px-sm-4": "TokenChart_px-sm-4__26iHd",
            "px-sm-5": "TokenChart_px-sm-5__2XT8q",
            "py-sm-0": "TokenChart_py-sm-0__PSeHD",
            "py-sm-1": "TokenChart_py-sm-1__2VxKN",
            "py-sm-2": "TokenChart_py-sm-2__I6zdb",
            "py-sm-3": "TokenChart_py-sm-3__3fpkY",
            "py-sm-4": "TokenChart_py-sm-4__1fGov",
            "py-sm-5": "TokenChart_py-sm-5__2dsPo",
            "pt-sm-0": "TokenChart_pt-sm-0__Ffom0",
            "pt-sm-1": "TokenChart_pt-sm-1__1HEEZ",
            "pt-sm-2": "TokenChart_pt-sm-2__3WasL",
            "pt-sm-3": "TokenChart_pt-sm-3__sJ00w",
            "pt-sm-4": "TokenChart_pt-sm-4__3RXcJ",
            "pt-sm-5": "TokenChart_pt-sm-5__2fCsZ",
            "pe-sm-0": "TokenChart_pe-sm-0__30KmE",
            "pe-sm-1": "TokenChart_pe-sm-1__1nrNL",
            "pe-sm-2": "TokenChart_pe-sm-2__32MFc",
            "pe-sm-3": "TokenChart_pe-sm-3__2US2q",
            "pe-sm-4": "TokenChart_pe-sm-4__1ySC3",
            "pe-sm-5": "TokenChart_pe-sm-5__4x1vo",
            "pb-sm-0": "TokenChart_pb-sm-0__2Vpxk",
            "pb-sm-1": "TokenChart_pb-sm-1__16KWe",
            "pb-sm-2": "TokenChart_pb-sm-2__zyz2G",
            "pb-sm-3": "TokenChart_pb-sm-3__1ECqN",
            "pb-sm-4": "TokenChart_pb-sm-4__1Bw4u",
            "pb-sm-5": "TokenChart_pb-sm-5__5jp-M",
            "ps-sm-0": "TokenChart_ps-sm-0__qOaRo",
            "ps-sm-1": "TokenChart_ps-sm-1__13K53",
            "ps-sm-2": "TokenChart_ps-sm-2__3PjVZ",
            "ps-sm-3": "TokenChart_ps-sm-3__2FcVr",
            "ps-sm-4": "TokenChart_ps-sm-4__3zdJJ",
            "ps-sm-5": "TokenChart_ps-sm-5__1RuC2",
            "text-sm-start": "TokenChart_text-sm-start__3AXOS",
            "text-sm-end": "TokenChart_text-sm-end__3SSLy",
            "text-sm-center": "TokenChart_text-sm-center__G6CXq",
            "float-md-start": "TokenChart_float-md-start__Eqo5q",
            "float-md-end": "TokenChart_float-md-end__2mDkT",
            "float-md-none": "TokenChart_float-md-none__3s6xV",
            "d-md-inline": "TokenChart_d-md-inline__2T48n",
            "d-md-inline-block": "TokenChart_d-md-inline-block__f_tp5",
            "d-md-block": "TokenChart_d-md-block__2Vmzl",
            "d-md-grid": "TokenChart_d-md-grid__2Ao5Q",
            "d-md-table": "TokenChart_d-md-table__1Cmc_",
            "d-md-table-row": "TokenChart_d-md-table-row__2rmsl",
            "d-md-table-cell": "TokenChart_d-md-table-cell__1NZcw",
            "d-md-flex": "TokenChart_d-md-flex__1vsTy",
            "d-md-inline-flex": "TokenChart_d-md-inline-flex__1lsni",
            "d-md-none": "TokenChart_d-md-none__Ise2Y",
            "flex-md-fill": "TokenChart_flex-md-fill__XMpOK",
            "flex-md-row": "TokenChart_flex-md-row__3UZHo",
            "flex-md-column": "TokenChart_flex-md-column__Qv5lU",
            "flex-md-row-reverse": "TokenChart_flex-md-row-reverse__1xEt7",
            "flex-md-column-reverse": "TokenChart_flex-md-column-reverse__8Vguk",
            "flex-md-grow-0": "TokenChart_flex-md-grow-0__AsDbi",
            "flex-md-grow-1": "TokenChart_flex-md-grow-1__qZ5za",
            "flex-md-shrink-0": "TokenChart_flex-md-shrink-0__1K_JC",
            "flex-md-shrink-1": "TokenChart_flex-md-shrink-1__1Cf90",
            "flex-md-wrap": "TokenChart_flex-md-wrap__1yn_T",
            "flex-md-nowrap": "TokenChart_flex-md-nowrap__2MuvX",
            "flex-md-wrap-reverse": "TokenChart_flex-md-wrap-reverse__1-Naa",
            "gap-md-0": "TokenChart_gap-md-0__2BVwZ",
            "gap-md-1": "TokenChart_gap-md-1__2Y8Nl",
            "gap-md-2": "TokenChart_gap-md-2__3d2oe",
            "gap-md-3": "TokenChart_gap-md-3__2jLib",
            "gap-md-4": "TokenChart_gap-md-4__16jqM",
            "gap-md-5": "TokenChart_gap-md-5__1KK6P",
            "justify-content-md-start": "TokenChart_justify-content-md-start__2dVoo",
            "justify-content-md-end": "TokenChart_justify-content-md-end__2No96",
            "justify-content-md-center": "TokenChart_justify-content-md-center__24lLd",
            "justify-content-md-between": "TokenChart_justify-content-md-between__2Wzfy",
            "justify-content-md-around": "TokenChart_justify-content-md-around__FYDf1",
            "justify-content-md-evenly": "TokenChart_justify-content-md-evenly__3_E6Q",
            "align-items-md-start": "TokenChart_align-items-md-start__2r9XN",
            "align-items-md-end": "TokenChart_align-items-md-end__8kgh-",
            "align-items-md-center": "TokenChart_align-items-md-center__EfyaJ",
            "align-items-md-baseline": "TokenChart_align-items-md-baseline__1-TJK",
            "align-items-md-stretch": "TokenChart_align-items-md-stretch__1cMRp",
            "align-content-md-start": "TokenChart_align-content-md-start__2_LlR",
            "align-content-md-end": "TokenChart_align-content-md-end__1nM3N",
            "align-content-md-center": "TokenChart_align-content-md-center__29lSG",
            "align-content-md-between": "TokenChart_align-content-md-between__3viBy",
            "align-content-md-around": "TokenChart_align-content-md-around__vf75I",
            "align-content-md-stretch": "TokenChart_align-content-md-stretch__1ti4U",
            "align-self-md-auto": "TokenChart_align-self-md-auto__33bJI",
            "align-self-md-start": "TokenChart_align-self-md-start__2LQT6",
            "align-self-md-end": "TokenChart_align-self-md-end__3Hd06",
            "align-self-md-center": "TokenChart_align-self-md-center__ra21O",
            "align-self-md-baseline": "TokenChart_align-self-md-baseline__58Zqb",
            "align-self-md-stretch": "TokenChart_align-self-md-stretch__3cuj4",
            "order-md-first": "TokenChart_order-md-first__3COoD",
            "order-md-0": "TokenChart_order-md-0__2Jofh",
            "order-md-1": "TokenChart_order-md-1__1CKbg",
            "order-md-2": "TokenChart_order-md-2__TPlR_",
            "order-md-3": "TokenChart_order-md-3__3NrNI",
            "order-md-4": "TokenChart_order-md-4__1E9bK",
            "order-md-5": "TokenChart_order-md-5__2T_k9",
            "order-md-last": "TokenChart_order-md-last__3VQCM",
            "m-md-0": "TokenChart_m-md-0__3vA4M",
            "m-md-1": "TokenChart_m-md-1__37avz",
            "m-md-2": "TokenChart_m-md-2__1X1Ce",
            "m-md-3": "TokenChart_m-md-3__3kSH2",
            "m-md-4": "TokenChart_m-md-4__2dmN0",
            "m-md-5": "TokenChart_m-md-5__8c_16",
            "m-md-auto": "TokenChart_m-md-auto__ON03U",
            "mx-md-0": "TokenChart_mx-md-0__18k1D",
            "mx-md-1": "TokenChart_mx-md-1__1L5jw",
            "mx-md-2": "TokenChart_mx-md-2__3DVv8",
            "mx-md-3": "TokenChart_mx-md-3__3WFuR",
            "mx-md-4": "TokenChart_mx-md-4__1BWX7",
            "mx-md-5": "TokenChart_mx-md-5__1lLsQ",
            "mx-md-auto": "TokenChart_mx-md-auto__iNjpB",
            "my-md-0": "TokenChart_my-md-0__2nEMR",
            "my-md-1": "TokenChart_my-md-1__32TNS",
            "my-md-2": "TokenChart_my-md-2__3bVVC",
            "my-md-3": "TokenChart_my-md-3__FCph0",
            "my-md-4": "TokenChart_my-md-4__2Ibx9",
            "my-md-5": "TokenChart_my-md-5__1pcgH",
            "my-md-auto": "TokenChart_my-md-auto__1zpGG",
            "mt-md-0": "TokenChart_mt-md-0__2i8EJ",
            "mt-md-1": "TokenChart_mt-md-1__2JNpW",
            "mt-md-2": "TokenChart_mt-md-2__3NveB",
            "mt-md-3": "TokenChart_mt-md-3__25wLP",
            "mt-md-4": "TokenChart_mt-md-4__3ZTZc",
            "mt-md-5": "TokenChart_mt-md-5__3_EDc",
            "mt-md-auto": "TokenChart_mt-md-auto__12esT",
            "me-md-0": "TokenChart_me-md-0__Hx3OH",
            "me-md-1": "TokenChart_me-md-1__1imdK",
            "me-md-2": "TokenChart_me-md-2__sMfop",
            "me-md-3": "TokenChart_me-md-3__2O3Ze",
            "me-md-4": "TokenChart_me-md-4__ljULo",
            "me-md-5": "TokenChart_me-md-5__34Pmw",
            "me-md-auto": "TokenChart_me-md-auto__3BUh6",
            "mb-md-0": "TokenChart_mb-md-0__3Txtt",
            "mb-md-1": "TokenChart_mb-md-1__8xKw8",
            "mb-md-2": "TokenChart_mb-md-2__QqeuB",
            "mb-md-3": "TokenChart_mb-md-3__3fQKx",
            "mb-md-4": "TokenChart_mb-md-4__1Mz7l",
            "mb-md-5": "TokenChart_mb-md-5__1Zi7Y",
            "mb-md-auto": "TokenChart_mb-md-auto__2Od3v",
            "ms-md-0": "TokenChart_ms-md-0__1TK5c",
            "ms-md-1": "TokenChart_ms-md-1__1gQU_",
            "ms-md-2": "TokenChart_ms-md-2__HNLQQ",
            "ms-md-3": "TokenChart_ms-md-3__326Zo",
            "ms-md-4": "TokenChart_ms-md-4__aHfFQ",
            "ms-md-5": "TokenChart_ms-md-5__yAnqy",
            "ms-md-auto": "TokenChart_ms-md-auto__18pAT",
            "p-md-0": "TokenChart_p-md-0__2rs9d",
            "p-md-1": "TokenChart_p-md-1__1WkLs",
            "p-md-2": "TokenChart_p-md-2__3zGU_",
            "p-md-3": "TokenChart_p-md-3__1u73G",
            "p-md-4": "TokenChart_p-md-4__3lYoM",
            "p-md-5": "TokenChart_p-md-5__34JYO",
            "px-md-0": "TokenChart_px-md-0__1l_WY",
            "px-md-1": "TokenChart_px-md-1__3771M",
            "px-md-2": "TokenChart_px-md-2__1w33V",
            "px-md-3": "TokenChart_px-md-3__2ohqW",
            "px-md-4": "TokenChart_px-md-4__pDrmd",
            "px-md-5": "TokenChart_px-md-5__1-GjA",
            "py-md-0": "TokenChart_py-md-0__1-ErF",
            "py-md-1": "TokenChart_py-md-1__1XlS7",
            "py-md-2": "TokenChart_py-md-2__3eDZ-",
            "py-md-3": "TokenChart_py-md-3__38zhD",
            "py-md-4": "TokenChart_py-md-4__2dZtQ",
            "py-md-5": "TokenChart_py-md-5__23ACA",
            "pt-md-0": "TokenChart_pt-md-0__3Fh7Q",
            "pt-md-1": "TokenChart_pt-md-1__3zvKn",
            "pt-md-2": "TokenChart_pt-md-2__2lm7a",
            "pt-md-3": "TokenChart_pt-md-3__1nXb1",
            "pt-md-4": "TokenChart_pt-md-4__VBLEP",
            "pt-md-5": "TokenChart_pt-md-5__2_Tbg",
            "pe-md-0": "TokenChart_pe-md-0__2igeJ",
            "pe-md-1": "TokenChart_pe-md-1__1dreo",
            "pe-md-2": "TokenChart_pe-md-2__13LFa",
            "pe-md-3": "TokenChart_pe-md-3__1wUK3",
            "pe-md-4": "TokenChart_pe-md-4__brYbb",
            "pe-md-5": "TokenChart_pe-md-5__1mzhC",
            "pb-md-0": "TokenChart_pb-md-0__2KqKb",
            "pb-md-1": "TokenChart_pb-md-1__2lvQF",
            "pb-md-2": "TokenChart_pb-md-2__FG8bp",
            "pb-md-3": "TokenChart_pb-md-3__KK5ty",
            "pb-md-4": "TokenChart_pb-md-4__3__4P",
            "pb-md-5": "TokenChart_pb-md-5__Q6ZdB",
            "ps-md-0": "TokenChart_ps-md-0__3aAW-",
            "ps-md-1": "TokenChart_ps-md-1__2-jRk",
            "ps-md-2": "TokenChart_ps-md-2__1936R",
            "ps-md-3": "TokenChart_ps-md-3__3RDcC",
            "ps-md-4": "TokenChart_ps-md-4__3_f8s",
            "ps-md-5": "TokenChart_ps-md-5__2j2oR",
            "text-md-start": "TokenChart_text-md-start__2-KM5",
            "text-md-end": "TokenChart_text-md-end__3zYPG",
            "text-md-center": "TokenChart_text-md-center__2Cv_A",
            "float-lg-start": "TokenChart_float-lg-start__1YmiE",
            "float-lg-end": "TokenChart_float-lg-end__1cjpz",
            "float-lg-none": "TokenChart_float-lg-none__9Lx4T",
            "d-lg-inline": "TokenChart_d-lg-inline__3cFmD",
            "d-lg-inline-block": "TokenChart_d-lg-inline-block__1TRzR",
            "d-lg-block": "TokenChart_d-lg-block__3FyFs",
            "d-lg-grid": "TokenChart_d-lg-grid__2fGw_",
            "d-lg-table": "TokenChart_d-lg-table__EYkxa",
            "d-lg-table-row": "TokenChart_d-lg-table-row__kXxAf",
            "d-lg-table-cell": "TokenChart_d-lg-table-cell__2QKa-",
            "d-lg-flex": "TokenChart_d-lg-flex__1Jjx2",
            "d-lg-inline-flex": "TokenChart_d-lg-inline-flex__1pPkw",
            "d-lg-none": "TokenChart_d-lg-none__2G-wf",
            "flex-lg-fill": "TokenChart_flex-lg-fill__1HyDh",
            "flex-lg-row": "TokenChart_flex-lg-row__2fyvw",
            "flex-lg-column": "TokenChart_flex-lg-column__3tDVf",
            "flex-lg-row-reverse": "TokenChart_flex-lg-row-reverse__3qXIh",
            "flex-lg-column-reverse": "TokenChart_flex-lg-column-reverse__18Ctz",
            "flex-lg-grow-0": "TokenChart_flex-lg-grow-0__BMSwW",
            "flex-lg-grow-1": "TokenChart_flex-lg-grow-1__275Or",
            "flex-lg-shrink-0": "TokenChart_flex-lg-shrink-0__2Zk1o",
            "flex-lg-shrink-1": "TokenChart_flex-lg-shrink-1__3VE0m",
            "flex-lg-wrap": "TokenChart_flex-lg-wrap__2bHbJ",
            "flex-lg-nowrap": "TokenChart_flex-lg-nowrap__352Bb",
            "flex-lg-wrap-reverse": "TokenChart_flex-lg-wrap-reverse__gZytV",
            "gap-lg-0": "TokenChart_gap-lg-0__2eplP",
            "gap-lg-1": "TokenChart_gap-lg-1__18Ila",
            "gap-lg-2": "TokenChart_gap-lg-2__JdMVJ",
            "gap-lg-3": "TokenChart_gap-lg-3__30VS-",
            "gap-lg-4": "TokenChart_gap-lg-4__3-QdX",
            "gap-lg-5": "TokenChart_gap-lg-5__3OX37",
            "justify-content-lg-start": "TokenChart_justify-content-lg-start__3W7Cx",
            "justify-content-lg-end": "TokenChart_justify-content-lg-end__A38GI",
            "justify-content-lg-center": "TokenChart_justify-content-lg-center__3PVxQ",
            "justify-content-lg-between": "TokenChart_justify-content-lg-between___Sdcc",
            "justify-content-lg-around": "TokenChart_justify-content-lg-around__2v98i",
            "justify-content-lg-evenly": "TokenChart_justify-content-lg-evenly__1mfzG",
            "align-items-lg-start": "TokenChart_align-items-lg-start__2ixer",
            "align-items-lg-end": "TokenChart_align-items-lg-end__16_Lg",
            "align-items-lg-center": "TokenChart_align-items-lg-center__286xS",
            "align-items-lg-baseline": "TokenChart_align-items-lg-baseline__3wiYw",
            "align-items-lg-stretch": "TokenChart_align-items-lg-stretch__dSmVt",
            "align-content-lg-start": "TokenChart_align-content-lg-start__2ZLNu",
            "align-content-lg-end": "TokenChart_align-content-lg-end__3GWVy",
            "align-content-lg-center": "TokenChart_align-content-lg-center__1ivUF",
            "align-content-lg-between": "TokenChart_align-content-lg-between__30QcV",
            "align-content-lg-around": "TokenChart_align-content-lg-around__wbLwJ",
            "align-content-lg-stretch": "TokenChart_align-content-lg-stretch__H5Ybz",
            "align-self-lg-auto": "TokenChart_align-self-lg-auto__1S1X1",
            "align-self-lg-start": "TokenChart_align-self-lg-start__3q54j",
            "align-self-lg-end": "TokenChart_align-self-lg-end__1q1It",
            "align-self-lg-center": "TokenChart_align-self-lg-center__3rpnS",
            "align-self-lg-baseline": "TokenChart_align-self-lg-baseline__1vDbw",
            "align-self-lg-stretch": "TokenChart_align-self-lg-stretch__2rJQu",
            "order-lg-first": "TokenChart_order-lg-first__1hIVr",
            "order-lg-0": "TokenChart_order-lg-0__2TU5A",
            "order-lg-1": "TokenChart_order-lg-1__nwKNq",
            "order-lg-2": "TokenChart_order-lg-2__1ExW7",
            "order-lg-3": "TokenChart_order-lg-3__i6afb",
            "order-lg-4": "TokenChart_order-lg-4__1bi_h",
            "order-lg-5": "TokenChart_order-lg-5__1rvWz",
            "order-lg-last": "TokenChart_order-lg-last__2W-X6",
            "m-lg-0": "TokenChart_m-lg-0__12Ow7",
            "m-lg-1": "TokenChart_m-lg-1__T1h5P",
            "m-lg-2": "TokenChart_m-lg-2__oQtbL",
            "m-lg-3": "TokenChart_m-lg-3__2QfP9",
            "m-lg-4": "TokenChart_m-lg-4__WAxcK",
            "m-lg-5": "TokenChart_m-lg-5__2L8TD",
            "m-lg-auto": "TokenChart_m-lg-auto__3jz8U",
            "mx-lg-0": "TokenChart_mx-lg-0__1nlFz",
            "mx-lg-1": "TokenChart_mx-lg-1__31Q8g",
            "mx-lg-2": "TokenChart_mx-lg-2__3efHG",
            "mx-lg-3": "TokenChart_mx-lg-3__OTxD9",
            "mx-lg-4": "TokenChart_mx-lg-4__xk_kg",
            "mx-lg-5": "TokenChart_mx-lg-5__1SIph",
            "mx-lg-auto": "TokenChart_mx-lg-auto__1EthC",
            "my-lg-0": "TokenChart_my-lg-0__U1TXv",
            "my-lg-1": "TokenChart_my-lg-1__30oTZ",
            "my-lg-2": "TokenChart_my-lg-2__7MPuU",
            "my-lg-3": "TokenChart_my-lg-3__1B2__",
            "my-lg-4": "TokenChart_my-lg-4__2D1zv",
            "my-lg-5": "TokenChart_my-lg-5__hACWR",
            "my-lg-auto": "TokenChart_my-lg-auto__2rquw",
            "mt-lg-0": "TokenChart_mt-lg-0__3s8cr",
            "mt-lg-1": "TokenChart_mt-lg-1__11eXU",
            "mt-lg-2": "TokenChart_mt-lg-2__1uvun",
            "mt-lg-3": "TokenChart_mt-lg-3__2dgO1",
            "mt-lg-4": "TokenChart_mt-lg-4__1X2an",
            "mt-lg-5": "TokenChart_mt-lg-5__2fIwU",
            "mt-lg-auto": "TokenChart_mt-lg-auto__3Sl86",
            "me-lg-0": "TokenChart_me-lg-0__2uwRu",
            "me-lg-1": "TokenChart_me-lg-1__3M3UT",
            "me-lg-2": "TokenChart_me-lg-2__1VoUb",
            "me-lg-3": "TokenChart_me-lg-3__30u-k",
            "me-lg-4": "TokenChart_me-lg-4__3xSpq",
            "me-lg-5": "TokenChart_me-lg-5__pWO7Z",
            "me-lg-auto": "TokenChart_me-lg-auto__bSdNO",
            "mb-lg-0": "TokenChart_mb-lg-0__19gIO",
            "mb-lg-1": "TokenChart_mb-lg-1__3vfn2",
            "mb-lg-2": "TokenChart_mb-lg-2__3dKcc",
            "mb-lg-3": "TokenChart_mb-lg-3__3A6-8",
            "mb-lg-4": "TokenChart_mb-lg-4__6yOT9",
            "mb-lg-5": "TokenChart_mb-lg-5__3YIBI",
            "mb-lg-auto": "TokenChart_mb-lg-auto__7mQgW",
            "ms-lg-0": "TokenChart_ms-lg-0__VVrD5",
            "ms-lg-1": "TokenChart_ms-lg-1__2BaNQ",
            "ms-lg-2": "TokenChart_ms-lg-2__1nGiz",
            "ms-lg-3": "TokenChart_ms-lg-3__3m0F7",
            "ms-lg-4": "TokenChart_ms-lg-4__14-qc",
            "ms-lg-5": "TokenChart_ms-lg-5__39xql",
            "ms-lg-auto": "TokenChart_ms-lg-auto__Eyvq6",
            "p-lg-0": "TokenChart_p-lg-0__NXyP1",
            "p-lg-1": "TokenChart_p-lg-1__Kh_fU",
            "p-lg-2": "TokenChart_p-lg-2__1DTG1",
            "p-lg-3": "TokenChart_p-lg-3__GRqge",
            "p-lg-4": "TokenChart_p-lg-4__16QJ1",
            "p-lg-5": "TokenChart_p-lg-5__1X-IA",
            "px-lg-0": "TokenChart_px-lg-0__3uHPS",
            "px-lg-1": "TokenChart_px-lg-1__3LnYJ",
            "px-lg-2": "TokenChart_px-lg-2__2nV9s",
            "px-lg-3": "TokenChart_px-lg-3__EBp8f",
            "px-lg-4": "TokenChart_px-lg-4__3R_BL",
            "px-lg-5": "TokenChart_px-lg-5__1P899",
            "py-lg-0": "TokenChart_py-lg-0__2fj7H",
            "py-lg-1": "TokenChart_py-lg-1__2S6JD",
            "py-lg-2": "TokenChart_py-lg-2__1oNKg",
            "py-lg-3": "TokenChart_py-lg-3__3vqH-",
            "py-lg-4": "TokenChart_py-lg-4__2rDgf",
            "py-lg-5": "TokenChart_py-lg-5__FO1gx",
            "pt-lg-0": "TokenChart_pt-lg-0__3hbOl",
            "pt-lg-1": "TokenChart_pt-lg-1__14fVz",
            "pt-lg-2": "TokenChart_pt-lg-2__wPfIS",
            "pt-lg-3": "TokenChart_pt-lg-3__1kYND",
            "pt-lg-4": "TokenChart_pt-lg-4__zu4hL",
            "pt-lg-5": "TokenChart_pt-lg-5__3ckjl",
            "pe-lg-0": "TokenChart_pe-lg-0__2yvK_",
            "pe-lg-1": "TokenChart_pe-lg-1__WAjE9",
            "pe-lg-2": "TokenChart_pe-lg-2__3lyZE",
            "pe-lg-3": "TokenChart_pe-lg-3__1-r1x",
            "pe-lg-4": "TokenChart_pe-lg-4__2fHrY",
            "pe-lg-5": "TokenChart_pe-lg-5__3v0ER",
            "pb-lg-0": "TokenChart_pb-lg-0__3UhyS",
            "pb-lg-1": "TokenChart_pb-lg-1__1GyKB",
            "pb-lg-2": "TokenChart_pb-lg-2__1hHs-",
            "pb-lg-3": "TokenChart_pb-lg-3__Oxz4g",
            "pb-lg-4": "TokenChart_pb-lg-4__3BCOn",
            "pb-lg-5": "TokenChart_pb-lg-5__1ksjS",
            "ps-lg-0": "TokenChart_ps-lg-0__xTvjQ",
            "ps-lg-1": "TokenChart_ps-lg-1__V5Rs4",
            "ps-lg-2": "TokenChart_ps-lg-2__2YJF_",
            "ps-lg-3": "TokenChart_ps-lg-3__1vPsr",
            "ps-lg-4": "TokenChart_ps-lg-4__2Gbsc",
            "ps-lg-5": "TokenChart_ps-lg-5__19zKh",
            "text-lg-start": "TokenChart_text-lg-start__2qI3t",
            "text-lg-end": "TokenChart_text-lg-end__E517u",
            "text-lg-center": "TokenChart_text-lg-center__1__SK",
            "float-xl-start": "TokenChart_float-xl-start__15V17",
            "float-xl-end": "TokenChart_float-xl-end__3O0PC",
            "float-xl-none": "TokenChart_float-xl-none__2Fp6R",
            "d-xl-inline": "TokenChart_d-xl-inline__1jnhY",
            "d-xl-inline-block": "TokenChart_d-xl-inline-block__3JXNt",
            "d-xl-block": "TokenChart_d-xl-block__2z3rp",
            "d-xl-grid": "TokenChart_d-xl-grid__2MB50",
            "d-xl-table": "TokenChart_d-xl-table__3S-W5",
            "d-xl-table-row": "TokenChart_d-xl-table-row__Yckxd",
            "d-xl-table-cell": "TokenChart_d-xl-table-cell___2OyQ",
            "d-xl-flex": "TokenChart_d-xl-flex__52liH",
            "d-xl-inline-flex": "TokenChart_d-xl-inline-flex__1-AB1",
            "d-xl-none": "TokenChart_d-xl-none__2Et_D",
            "flex-xl-fill": "TokenChart_flex-xl-fill__26w1g",
            "flex-xl-row": "TokenChart_flex-xl-row__3l-Oi",
            "flex-xl-column": "TokenChart_flex-xl-column__3cER6",
            "flex-xl-row-reverse": "TokenChart_flex-xl-row-reverse__2vgYZ",
            "flex-xl-column-reverse": "TokenChart_flex-xl-column-reverse__3hF1p",
            "flex-xl-grow-0": "TokenChart_flex-xl-grow-0__3VtUN",
            "flex-xl-grow-1": "TokenChart_flex-xl-grow-1__1ql25",
            "flex-xl-shrink-0": "TokenChart_flex-xl-shrink-0__1AO9a",
            "flex-xl-shrink-1": "TokenChart_flex-xl-shrink-1__2oQJm",
            "flex-xl-wrap": "TokenChart_flex-xl-wrap__3b5ay",
            "flex-xl-nowrap": "TokenChart_flex-xl-nowrap__11Pus",
            "flex-xl-wrap-reverse": "TokenChart_flex-xl-wrap-reverse__bVY3Z",
            "gap-xl-0": "TokenChart_gap-xl-0__3xnKZ",
            "gap-xl-1": "TokenChart_gap-xl-1__9CPjt",
            "gap-xl-2": "TokenChart_gap-xl-2__2miuI",
            "gap-xl-3": "TokenChart_gap-xl-3__1-amL",
            "gap-xl-4": "TokenChart_gap-xl-4__2JC9W",
            "gap-xl-5": "TokenChart_gap-xl-5__1fqgc",
            "justify-content-xl-start": "TokenChart_justify-content-xl-start__GEtFi",
            "justify-content-xl-end": "TokenChart_justify-content-xl-end__ZHhJA",
            "justify-content-xl-center": "TokenChart_justify-content-xl-center__eXkZQ",
            "justify-content-xl-between": "TokenChart_justify-content-xl-between__2efWc",
            "justify-content-xl-around": "TokenChart_justify-content-xl-around__GoV6M",
            "justify-content-xl-evenly": "TokenChart_justify-content-xl-evenly__1lBjU",
            "align-items-xl-start": "TokenChart_align-items-xl-start__3kIT0",
            "align-items-xl-end": "TokenChart_align-items-xl-end__15RBe",
            "align-items-xl-center": "TokenChart_align-items-xl-center__148cw",
            "align-items-xl-baseline": "TokenChart_align-items-xl-baseline__1A6qj",
            "align-items-xl-stretch": "TokenChart_align-items-xl-stretch__3-c6Z",
            "align-content-xl-start": "TokenChart_align-content-xl-start__3ubrT",
            "align-content-xl-end": "TokenChart_align-content-xl-end__2CRMf",
            "align-content-xl-center": "TokenChart_align-content-xl-center__vtGCO",
            "align-content-xl-between": "TokenChart_align-content-xl-between__2VyHK",
            "align-content-xl-around": "TokenChart_align-content-xl-around__3QC4k",
            "align-content-xl-stretch": "TokenChart_align-content-xl-stretch__172b4",
            "align-self-xl-auto": "TokenChart_align-self-xl-auto__1aRma",
            "align-self-xl-start": "TokenChart_align-self-xl-start__3M973",
            "align-self-xl-end": "TokenChart_align-self-xl-end__3txty",
            "align-self-xl-center": "TokenChart_align-self-xl-center__2Pv8H",
            "align-self-xl-baseline": "TokenChart_align-self-xl-baseline__KA2jm",
            "align-self-xl-stretch": "TokenChart_align-self-xl-stretch__2o_DF",
            "order-xl-first": "TokenChart_order-xl-first__15Y7T",
            "order-xl-0": "TokenChart_order-xl-0__1-a3h",
            "order-xl-1": "TokenChart_order-xl-1__YtHPF",
            "order-xl-2": "TokenChart_order-xl-2__1EDgo",
            "order-xl-3": "TokenChart_order-xl-3__2ETfc",
            "order-xl-4": "TokenChart_order-xl-4__1moLf",
            "order-xl-5": "TokenChart_order-xl-5__2m9_K",
            "order-xl-last": "TokenChart_order-xl-last__18XwI",
            "m-xl-0": "TokenChart_m-xl-0__2XYNd",
            "m-xl-1": "TokenChart_m-xl-1__2GU_r",
            "m-xl-2": "TokenChart_m-xl-2__2d0X9",
            "m-xl-3": "TokenChart_m-xl-3__2sUKv",
            "m-xl-4": "TokenChart_m-xl-4__3AhPZ",
            "m-xl-5": "TokenChart_m-xl-5__3nY2E",
            "m-xl-auto": "TokenChart_m-xl-auto__CMxaQ",
            "mx-xl-0": "TokenChart_mx-xl-0__9p2hN",
            "mx-xl-1": "TokenChart_mx-xl-1__S3jvD",
            "mx-xl-2": "TokenChart_mx-xl-2__192ew",
            "mx-xl-3": "TokenChart_mx-xl-3__3c8Hi",
            "mx-xl-4": "TokenChart_mx-xl-4__Gq1UT",
            "mx-xl-5": "TokenChart_mx-xl-5__3vrfO",
            "mx-xl-auto": "TokenChart_mx-xl-auto__139Z2",
            "my-xl-0": "TokenChart_my-xl-0__9NNt0",
            "my-xl-1": "TokenChart_my-xl-1__2ci0d",
            "my-xl-2": "TokenChart_my-xl-2__3ABq6",
            "my-xl-3": "TokenChart_my-xl-3__CpYsw",
            "my-xl-4": "TokenChart_my-xl-4__ahdMm",
            "my-xl-5": "TokenChart_my-xl-5__2eGdZ",
            "my-xl-auto": "TokenChart_my-xl-auto__3aclS",
            "mt-xl-0": "TokenChart_mt-xl-0__3QJ10",
            "mt-xl-1": "TokenChart_mt-xl-1__3mMtE",
            "mt-xl-2": "TokenChart_mt-xl-2__3d2Fi",
            "mt-xl-3": "TokenChart_mt-xl-3__hgLsX",
            "mt-xl-4": "TokenChart_mt-xl-4__3gFpl",
            "mt-xl-5": "TokenChart_mt-xl-5__euhet",
            "mt-xl-auto": "TokenChart_mt-xl-auto__3WFPq",
            "me-xl-0": "TokenChart_me-xl-0__3oqml",
            "me-xl-1": "TokenChart_me-xl-1__gvVny",
            "me-xl-2": "TokenChart_me-xl-2__AR3El",
            "me-xl-3": "TokenChart_me-xl-3__24Bxc",
            "me-xl-4": "TokenChart_me-xl-4__1TMeu",
            "me-xl-5": "TokenChart_me-xl-5__2lUU9",
            "me-xl-auto": "TokenChart_me-xl-auto__W-NDk",
            "mb-xl-0": "TokenChart_mb-xl-0__YQ0eI",
            "mb-xl-1": "TokenChart_mb-xl-1__15qKR",
            "mb-xl-2": "TokenChart_mb-xl-2__1pGhE",
            "mb-xl-3": "TokenChart_mb-xl-3__28FDu",
            "mb-xl-4": "TokenChart_mb-xl-4__1qyhe",
            "mb-xl-5": "TokenChart_mb-xl-5__2Dw6v",
            "mb-xl-auto": "TokenChart_mb-xl-auto__3QxuD",
            "ms-xl-0": "TokenChart_ms-xl-0__1WWub",
            "ms-xl-1": "TokenChart_ms-xl-1__2ui23",
            "ms-xl-2": "TokenChart_ms-xl-2__GS2sJ",
            "ms-xl-3": "TokenChart_ms-xl-3__BdTWF",
            "ms-xl-4": "TokenChart_ms-xl-4__cZNl2",
            "ms-xl-5": "TokenChart_ms-xl-5__3eOxv",
            "ms-xl-auto": "TokenChart_ms-xl-auto__2FbSo",
            "p-xl-0": "TokenChart_p-xl-0__3YI-z",
            "p-xl-1": "TokenChart_p-xl-1__Xjlu1",
            "p-xl-2": "TokenChart_p-xl-2__30H1K",
            "p-xl-3": "TokenChart_p-xl-3__1h4KA",
            "p-xl-4": "TokenChart_p-xl-4__2ReK5",
            "p-xl-5": "TokenChart_p-xl-5__3aVCV",
            "px-xl-0": "TokenChart_px-xl-0__3l66S",
            "px-xl-1": "TokenChart_px-xl-1__24NIt",
            "px-xl-2": "TokenChart_px-xl-2__2AVTt",
            "px-xl-3": "TokenChart_px-xl-3__1g_Cg",
            "px-xl-4": "TokenChart_px-xl-4__3EarR",
            "px-xl-5": "TokenChart_px-xl-5__11YL9",
            "py-xl-0": "TokenChart_py-xl-0__3WzT5",
            "py-xl-1": "TokenChart_py-xl-1__1g5iH",
            "py-xl-2": "TokenChart_py-xl-2__1BozT",
            "py-xl-3": "TokenChart_py-xl-3__Yvtzt",
            "py-xl-4": "TokenChart_py-xl-4__Qp6UK",
            "py-xl-5": "TokenChart_py-xl-5__3HoaK",
            "pt-xl-0": "TokenChart_pt-xl-0__rIvlY",
            "pt-xl-1": "TokenChart_pt-xl-1__1fneI",
            "pt-xl-2": "TokenChart_pt-xl-2__3sPSz",
            "pt-xl-3": "TokenChart_pt-xl-3__2F7i5",
            "pt-xl-4": "TokenChart_pt-xl-4__1mUP6",
            "pt-xl-5": "TokenChart_pt-xl-5__14H_j",
            "pe-xl-0": "TokenChart_pe-xl-0__1BIPU",
            "pe-xl-1": "TokenChart_pe-xl-1__3dFnM",
            "pe-xl-2": "TokenChart_pe-xl-2__Ft-Wa",
            "pe-xl-3": "TokenChart_pe-xl-3__joHLK",
            "pe-xl-4": "TokenChart_pe-xl-4__kCB1f",
            "pe-xl-5": "TokenChart_pe-xl-5__7P4KL",
            "pb-xl-0": "TokenChart_pb-xl-0__1_jK2",
            "pb-xl-1": "TokenChart_pb-xl-1__1StTv",
            "pb-xl-2": "TokenChart_pb-xl-2__ye6YD",
            "pb-xl-3": "TokenChart_pb-xl-3__1iGbN",
            "pb-xl-4": "TokenChart_pb-xl-4__25xp3",
            "pb-xl-5": "TokenChart_pb-xl-5__2HAya",
            "ps-xl-0": "TokenChart_ps-xl-0__31c9P",
            "ps-xl-1": "TokenChart_ps-xl-1__2bGzs",
            "ps-xl-2": "TokenChart_ps-xl-2__2k2JG",
            "ps-xl-3": "TokenChart_ps-xl-3__1RKPu",
            "ps-xl-4": "TokenChart_ps-xl-4__1at_E",
            "ps-xl-5": "TokenChart_ps-xl-5__QzeUT",
            "text-xl-start": "TokenChart_text-xl-start__PQYBA",
            "text-xl-end": "TokenChart_text-xl-end__r6iBp",
            "text-xl-center": "TokenChart_text-xl-center__3aYHj",
            "float-xxl-start": "TokenChart_float-xxl-start__27-em",
            "float-xxl-end": "TokenChart_float-xxl-end__2cz8S",
            "float-xxl-none": "TokenChart_float-xxl-none__34l8v",
            "d-xxl-inline": "TokenChart_d-xxl-inline__2e5g0",
            "d-xxl-inline-block": "TokenChart_d-xxl-inline-block__3d4bW",
            "d-xxl-block": "TokenChart_d-xxl-block__o2wdq",
            "d-xxl-grid": "TokenChart_d-xxl-grid__2aaXF",
            "d-xxl-table": "TokenChart_d-xxl-table__24KVe",
            "d-xxl-table-row": "TokenChart_d-xxl-table-row__3kuL3",
            "d-xxl-table-cell": "TokenChart_d-xxl-table-cell__3wd-M",
            "d-xxl-flex": "TokenChart_d-xxl-flex__2ozhp",
            "d-xxl-inline-flex": "TokenChart_d-xxl-inline-flex__3kAsg",
            "d-xxl-none": "TokenChart_d-xxl-none__1yzzH",
            "flex-xxl-fill": "TokenChart_flex-xxl-fill__3Oo-P",
            "flex-xxl-row": "TokenChart_flex-xxl-row__1RKwJ",
            "flex-xxl-column": "TokenChart_flex-xxl-column__1x1kH",
            "flex-xxl-row-reverse": "TokenChart_flex-xxl-row-reverse__1BkLG",
            "flex-xxl-column-reverse": "TokenChart_flex-xxl-column-reverse__2KZGZ",
            "flex-xxl-grow-0": "TokenChart_flex-xxl-grow-0__27O3O",
            "flex-xxl-grow-1": "TokenChart_flex-xxl-grow-1__2uAww",
            "flex-xxl-shrink-0": "TokenChart_flex-xxl-shrink-0__2Hcnh",
            "flex-xxl-shrink-1": "TokenChart_flex-xxl-shrink-1__2javB",
            "flex-xxl-wrap": "TokenChart_flex-xxl-wrap__8gDjI",
            "flex-xxl-nowrap": "TokenChart_flex-xxl-nowrap__1eNYC",
            "flex-xxl-wrap-reverse": "TokenChart_flex-xxl-wrap-reverse__3RqsX",
            "gap-xxl-0": "TokenChart_gap-xxl-0__2nB3v",
            "gap-xxl-1": "TokenChart_gap-xxl-1__SITfp",
            "gap-xxl-2": "TokenChart_gap-xxl-2__2aGjx",
            "gap-xxl-3": "TokenChart_gap-xxl-3__3lkSD",
            "gap-xxl-4": "TokenChart_gap-xxl-4__3xSl4",
            "gap-xxl-5": "TokenChart_gap-xxl-5__HmFm-",
            "justify-content-xxl-start": "TokenChart_justify-content-xxl-start__aAXmC",
            "justify-content-xxl-end": "TokenChart_justify-content-xxl-end__2oaRW",
            "justify-content-xxl-center": "TokenChart_justify-content-xxl-center__3JDUc",
            "justify-content-xxl-between": "TokenChart_justify-content-xxl-between__2Ow1m",
            "justify-content-xxl-around": "TokenChart_justify-content-xxl-around__3ibAq",
            "justify-content-xxl-evenly": "TokenChart_justify-content-xxl-evenly__27vMG",
            "align-items-xxl-start": "TokenChart_align-items-xxl-start__2BTc9",
            "align-items-xxl-end": "TokenChart_align-items-xxl-end__3QExZ",
            "align-items-xxl-center": "TokenChart_align-items-xxl-center__1jjU4",
            "align-items-xxl-baseline": "TokenChart_align-items-xxl-baseline__1q-tp",
            "align-items-xxl-stretch": "TokenChart_align-items-xxl-stretch__1hlQm",
            "align-content-xxl-start": "TokenChart_align-content-xxl-start__1gbnV",
            "align-content-xxl-end": "TokenChart_align-content-xxl-end__YRbq4",
            "align-content-xxl-center": "TokenChart_align-content-xxl-center__3Q2j3",
            "align-content-xxl-between": "TokenChart_align-content-xxl-between__2hnBf",
            "align-content-xxl-around": "TokenChart_align-content-xxl-around__2Bi0c",
            "align-content-xxl-stretch": "TokenChart_align-content-xxl-stretch__X4YSD",
            "align-self-xxl-auto": "TokenChart_align-self-xxl-auto__119En",
            "align-self-xxl-start": "TokenChart_align-self-xxl-start__3wlIV",
            "align-self-xxl-end": "TokenChart_align-self-xxl-end__2krQP",
            "align-self-xxl-center": "TokenChart_align-self-xxl-center__2CtpX",
            "align-self-xxl-baseline": "TokenChart_align-self-xxl-baseline__3Z-Vn",
            "align-self-xxl-stretch": "TokenChart_align-self-xxl-stretch__Hf2YV",
            "order-xxl-first": "TokenChart_order-xxl-first__3kxaF",
            "order-xxl-0": "TokenChart_order-xxl-0__3Khu0",
            "order-xxl-1": "TokenChart_order-xxl-1__K9X46",
            "order-xxl-2": "TokenChart_order-xxl-2__31z3C",
            "order-xxl-3": "TokenChart_order-xxl-3__1akxR",
            "order-xxl-4": "TokenChart_order-xxl-4__38t-u",
            "order-xxl-5": "TokenChart_order-xxl-5__2_l9_",
            "order-xxl-last": "TokenChart_order-xxl-last__1TOjf",
            "m-xxl-0": "TokenChart_m-xxl-0__2PAm7",
            "m-xxl-1": "TokenChart_m-xxl-1__1WtyY",
            "m-xxl-2": "TokenChart_m-xxl-2__1gSw3",
            "m-xxl-3": "TokenChart_m-xxl-3__2ckTR",
            "m-xxl-4": "TokenChart_m-xxl-4__1am7H",
            "m-xxl-5": "TokenChart_m-xxl-5__3yqt3",
            "m-xxl-auto": "TokenChart_m-xxl-auto__2baLl",
            "mx-xxl-0": "TokenChart_mx-xxl-0__37oB0",
            "mx-xxl-1": "TokenChart_mx-xxl-1__x4Zx-",
            "mx-xxl-2": "TokenChart_mx-xxl-2__1vvNj",
            "mx-xxl-3": "TokenChart_mx-xxl-3__18oWh",
            "mx-xxl-4": "TokenChart_mx-xxl-4__3aq_5",
            "mx-xxl-5": "TokenChart_mx-xxl-5__3ejaU",
            "mx-xxl-auto": "TokenChart_mx-xxl-auto__1_Mgo",
            "my-xxl-0": "TokenChart_my-xxl-0__3tfsI",
            "my-xxl-1": "TokenChart_my-xxl-1__3iF9D",
            "my-xxl-2": "TokenChart_my-xxl-2__3bOUF",
            "my-xxl-3": "TokenChart_my-xxl-3__2i1hY",
            "my-xxl-4": "TokenChart_my-xxl-4__3TM3R",
            "my-xxl-5": "TokenChart_my-xxl-5__2cKRe",
            "my-xxl-auto": "TokenChart_my-xxl-auto__3eVtC",
            "mt-xxl-0": "TokenChart_mt-xxl-0__yChtx",
            "mt-xxl-1": "TokenChart_mt-xxl-1__3uko0",
            "mt-xxl-2": "TokenChart_mt-xxl-2__N40P4",
            "mt-xxl-3": "TokenChart_mt-xxl-3__11PKk",
            "mt-xxl-4": "TokenChart_mt-xxl-4__32QTd",
            "mt-xxl-5": "TokenChart_mt-xxl-5__RnivJ",
            "mt-xxl-auto": "TokenChart_mt-xxl-auto__26_DM",
            "me-xxl-0": "TokenChart_me-xxl-0__2zq1T",
            "me-xxl-1": "TokenChart_me-xxl-1__2L4ls",
            "me-xxl-2": "TokenChart_me-xxl-2__EPrlH",
            "me-xxl-3": "TokenChart_me-xxl-3__3nWdn",
            "me-xxl-4": "TokenChart_me-xxl-4__3x3F3",
            "me-xxl-5": "TokenChart_me-xxl-5__lxTnP",
            "me-xxl-auto": "TokenChart_me-xxl-auto__3hGKp",
            "mb-xxl-0": "TokenChart_mb-xxl-0__a3auT",
            "mb-xxl-1": "TokenChart_mb-xxl-1__2_0jA",
            "mb-xxl-2": "TokenChart_mb-xxl-2__3uXXb",
            "mb-xxl-3": "TokenChart_mb-xxl-3__sCl8d",
            "mb-xxl-4": "TokenChart_mb-xxl-4__93FdU",
            "mb-xxl-5": "TokenChart_mb-xxl-5__3rnjd",
            "mb-xxl-auto": "TokenChart_mb-xxl-auto__2ocJT",
            "ms-xxl-0": "TokenChart_ms-xxl-0__r5gqU",
            "ms-xxl-1": "TokenChart_ms-xxl-1__NGBdq",
            "ms-xxl-2": "TokenChart_ms-xxl-2__2_jtN",
            "ms-xxl-3": "TokenChart_ms-xxl-3__3RrmD",
            "ms-xxl-4": "TokenChart_ms-xxl-4__GXhuz",
            "ms-xxl-5": "TokenChart_ms-xxl-5__3rqsD",
            "ms-xxl-auto": "TokenChart_ms-xxl-auto__ulNmz",
            "p-xxl-0": "TokenChart_p-xxl-0__1TjcI",
            "p-xxl-1": "TokenChart_p-xxl-1__2Twc1",
            "p-xxl-2": "TokenChart_p-xxl-2__2Ou0_",
            "p-xxl-3": "TokenChart_p-xxl-3__ZJ74e",
            "p-xxl-4": "TokenChart_p-xxl-4__eA_nR",
            "p-xxl-5": "TokenChart_p-xxl-5__1TaTA",
            "px-xxl-0": "TokenChart_px-xxl-0__2rM-p",
            "px-xxl-1": "TokenChart_px-xxl-1__2hz1A",
            "px-xxl-2": "TokenChart_px-xxl-2__3ixfG",
            "px-xxl-3": "TokenChart_px-xxl-3__1FHnN",
            "px-xxl-4": "TokenChart_px-xxl-4__3Eg7h",
            "px-xxl-5": "TokenChart_px-xxl-5__1x5_r",
            "py-xxl-0": "TokenChart_py-xxl-0__2mZd_",
            "py-xxl-1": "TokenChart_py-xxl-1__1R8ZI",
            "py-xxl-2": "TokenChart_py-xxl-2__GOmgY",
            "py-xxl-3": "TokenChart_py-xxl-3__feUdv",
            "py-xxl-4": "TokenChart_py-xxl-4__2ieFz",
            "py-xxl-5": "TokenChart_py-xxl-5__NKPgg",
            "pt-xxl-0": "TokenChart_pt-xxl-0__38z8F",
            "pt-xxl-1": "TokenChart_pt-xxl-1__16Yga",
            "pt-xxl-2": "TokenChart_pt-xxl-2__2-_am",
            "pt-xxl-3": "TokenChart_pt-xxl-3__Uot3I",
            "pt-xxl-4": "TokenChart_pt-xxl-4__1Drka",
            "pt-xxl-5": "TokenChart_pt-xxl-5__4KYjt",
            "pe-xxl-0": "TokenChart_pe-xxl-0__2SBIr",
            "pe-xxl-1": "TokenChart_pe-xxl-1__m_bHq",
            "pe-xxl-2": "TokenChart_pe-xxl-2__9gep1",
            "pe-xxl-3": "TokenChart_pe-xxl-3__wk-Nd",
            "pe-xxl-4": "TokenChart_pe-xxl-4__jKwYM",
            "pe-xxl-5": "TokenChart_pe-xxl-5__2n23I",
            "pb-xxl-0": "TokenChart_pb-xxl-0__3v5vb",
            "pb-xxl-1": "TokenChart_pb-xxl-1__SHdjU",
            "pb-xxl-2": "TokenChart_pb-xxl-2__1MhPk",
            "pb-xxl-3": "TokenChart_pb-xxl-3__1ywVw",
            "pb-xxl-4": "TokenChart_pb-xxl-4__1d1Mf",
            "pb-xxl-5": "TokenChart_pb-xxl-5__T7l1K",
            "ps-xxl-0": "TokenChart_ps-xxl-0__2nEAS",
            "ps-xxl-1": "TokenChart_ps-xxl-1__1getq",
            "ps-xxl-2": "TokenChart_ps-xxl-2__1zLWM",
            "ps-xxl-3": "TokenChart_ps-xxl-3__2kzNh",
            "ps-xxl-4": "TokenChart_ps-xxl-4__1Z3LO",
            "ps-xxl-5": "TokenChart_ps-xxl-5__1DZsP",
            "text-xxl-start": "TokenChart_text-xxl-start__kmsOe",
            "text-xxl-end": "TokenChart_text-xxl-end__2lHrK",
            "text-xxl-center": "TokenChart_text-xxl-center__1TCqd",
            "d-print-inline": "TokenChart_d-print-inline__3JJB_",
            "d-print-inline-block": "TokenChart_d-print-inline-block__3bFC2",
            "d-print-block": "TokenChart_d-print-block__3VQZl",
            "d-print-grid": "TokenChart_d-print-grid__3r4Ir",
            "d-print-table": "TokenChart_d-print-table__2lyMa",
            "d-print-table-row": "TokenChart_d-print-table-row__3sC25",
            "d-print-table-cell": "TokenChart_d-print-table-cell__LG-ae",
            "d-print-flex": "TokenChart_d-print-flex__3yZi5",
            "d-print-inline-flex": "TokenChart_d-print-inline-flex__X_O83",
            "d-print-none": "TokenChart_d-print-none__3hcDK",
            chart: "TokenChart_chart__1LgYj",
            walletTokens: "TokenChart_walletTokens__H93fw",
            stats: "TokenChart_stats__3732U"
        }
    },
    260: function(e) {
        e.exports = JSON.parse('[{"pid":0,"name":"","inactive":true},{"pid":1,"name":"WBNB"},{"pid":2,"name":"BUSD"},{"pid":3,"name":"BTCB"},{"pid":4,"name":"ETH"},{"pid":5,"name":"LINK"},{"pid":6,"name":"AUTO-WBNB"},{"pid":7,"name":"Cake"},{"pid":8,"name":"Cake-WBNB"},{"pid":9,"name":"sBDO-BUSD"},{"pid":10,"name":"WBNB-BUSD"},{"pid":11,"name":"BTCB-WBNB"},{"pid":12,"name":"BDO-BUSD"},{"pid":13,"name":"BDO-WBNB"},{"pid":14,"name":"KEBAB-BUSD"},{"pid":15,"name":"WBNB-BUSD"},{"pid":16,"name":"USDT"},{"pid":17,"name":"USDC"},{"pid":18,"name":"DOT"},{"pid":19,"name":"ETH-WBNB"},{"pid":20,"name":"USDT-BUSD"},{"pid":21,"name":"USDT-BUSD"},{"pid":22,"name":"VAI-BUSD"},{"pid":23,"name":"WBNB-LINK"},{"pid":24,"name":"WBNB-LINK"},{"pid":25,"name":"WBNB-UNI"},{"pid":26,"name":"BAND-WBNB"},{"pid":27,"name":"TWT-WBNB"},{"pid":28,"name":"SXP-WBNB"},{"pid":29,"name":"WBNB-XVS"},{"pid":30,"name":"ALPHA-WBNB"},{"pid":31,"name":"INJ-WBNB"},{"pid":32,"name":"UST-BUSD"},{"pid":33,"name":"BTCST-WBNB"},{"pid":34,"name":"wSOTE-WBNB"},{"pid":35,"name":"FRONT-WBNB"},{"pid":36,"name":"Helmet-WBNB"},{"pid":37,"name":"WBNB-EGLD"},{"pid":38,"name":"INJ-WBNB"},{"pid":39,"name":"KEBAB"},{"pid":40,"name":"KEBAB-WBNB"},{"pid":41,"name":"BTCB-BUSD"},{"pid":42,"name":"USDT-BUSD"},{"pid":43,"name":"DOT-BUSD"},{"pid":44,"name":"ETH-BETH"},{"pid":45,"name":"ETH-COMP"},{"pid":46,"name":"YFI-WBNB"},{"pid":47,"name":"XRP-WBNB"},{"pid":48,"name":"ADA-WBNB"},{"pid":49,"name":"EOS-WBNB"},{"pid":50,"name":"WBNB-SFP"},{"pid":51,"name":"UST-mAMZN"},{"pid":52,"name":"UST-mGOOGL"},{"pid":53,"name":"UST-mNFLX"},{"pid":54,"name":"UST-mTSLA"},{"pid":55,"name":"WBNB-REEF"},{"pid":56,"name":"WBNB-HARD"},{"pid":57,"name":"BSCX-WBNB"},{"pid":58,"name":"LIT-WBNB"},{"pid":59,"name":"UNFI-WBNB"},{"pid":60,"name":"BCH-WBNB"},{"pid":61,"name":"DITTO-WBNB"},{"pid":62,"name":"CTK-WBNB"},{"pid":63,"name":"WBNB-HGET"},{"pid":64,"name":"LINA-BUSD"},{"pid":65,"name":"ATOM-WBNB"},{"pid":66,"name":"XTZ-WBNB"},{"pid":67,"name":"bALBT-WBNB"},{"pid":68,"name":"ZEE-WBNB"},{"pid":69,"name":"WBNB-BRY"},{"pid":70,"name":"SWINGBY-WBNB"},{"pid":71,"name":"WBNB-TEN"},{"pid":72,"name":"WBNB-SWGb"},{"pid":73,"name":"BUSD-EGG"},{"pid":74,"name":"WBNB-EGG"},{"pid":75,"name":"vBSWAP-WBNB"},{"pid":76,"name":"vBSWAP-WBNB"},{"pid":77,"name":"vBSWAP-WBNB"},{"pid":78,"name":"vBSWAP-WBNB"},{"pid":79,"name":"VIKING-BUSD"},{"pid":80,"name":"VIKING-WBNB"},{"pid":81,"name":"DOT-WBNB"},{"pid":82,"name":"DODO-WBNB"},{"pid":83,"name":"WBNB-bOPEN"}]')
    },
    261: function(e) {
        e.exports = JSON.parse('[{"pid":0,"name":"SLME-BUSD","inactive":false},{"pid":1,"name":"SLME-WBNB"},{"pid":2,"name":"WBNB-BUSD"},{"pid":3,"name":"USDT-BUSD"},{"pid":4,"name":"BTCB-WBNB"},{"pid":5,"name":"ETH-WBNB"},{"pid":6,"name":"DAI-BUSD"},{"pid":7,"name":"DOT-WBNB"},{"pid":8,"name":"Cake-BUSD"},{"pid":9,"name":"Cake-WBNB"},{"pid":10,"name":"SLME"},{"pid":11,"name":"BUSD"},{"pid":12,"name":"WBNB"},{"pid":13,"name":"USDT"},{"pid":14,"name":"BTCB"},{"pid":15,"name":"ETH"},{"pid":16,"name":"DAI"},{"pid":17,"name":"DOT"},{"pid":18,"name":"Cake"},{"pid":19,"name":"vBSWAP"},{"pid":20,"name":"SLME-FLP"},{"pid":21,"name":"ADA-WBNB"},{"pid":22,"name":"ADA"},{"pid":23,"name":"DOGE-BUSD"},{"pid":24,"name":"DOGE"},{"pid":25,"name":"WBNB-BUSD"},{"pid":26,"name":"USDT-BUSD"},{"pid":27,"name":"Cake-WBNB"},{"pid":28,"name":"Cake-SLME"},{"pid":29,"name":"SLME-ALICE"},{"pid":30,"name":"SLME-FLP"},{"pid":31,"name":"SLME-WBNB"},{"pid":32,"name":"SLME-BUSD"},{"pid":33,"name":"ALICE"}]')
    },
    407: function(e, t, n) {
        e.exports = {
            "lds-spinner": "Loading_lds-spinner__pbVUk"
        }
    },
    414: function(e, t, n) {
        e.exports = {
            clearfix: "WalletTokens_clearfix__3-Ncr",
            "link-primary": "WalletTokens_link-primary__3QqjX",
            "link-secondary": "WalletTokens_link-secondary__lt2Ek",
            "link-success": "WalletTokens_link-success__35fM-",
            "link-info": "WalletTokens_link-info__3HmuF",
            "link-warning": "WalletTokens_link-warning__3wQr9",
            "link-danger": "WalletTokens_link-danger__1LCB9",
            "link-light": "WalletTokens_link-light__3XIFp",
            "link-dark": "WalletTokens_link-dark__3jFlN",
            "link-dark-1": "WalletTokens_link-dark-1__CGXSd",
            "link-dark-2": "WalletTokens_link-dark-2__11G2l",
            "link-blue-dark": "WalletTokens_link-blue-dark__GrZG6",
            ratio: "WalletTokens_ratio__2kTqx",
            "ratio-1x1": "WalletTokens_ratio-1x1__16WSh",
            "ratio-4x3": "WalletTokens_ratio-4x3__uEy3A",
            "ratio-16x9": "WalletTokens_ratio-16x9__vPsfw",
            "ratio-21x9": "WalletTokens_ratio-21x9__33cCX",
            "fixed-top": "WalletTokens_fixed-top__20SoI",
            "fixed-bottom": "WalletTokens_fixed-bottom__2Z5Ao",
            "sticky-top": "WalletTokens_sticky-top__1w9d2",
            "sticky-sm-top": "WalletTokens_sticky-sm-top__10ryh",
            "sticky-md-top": "WalletTokens_sticky-md-top__1dkWI",
            "sticky-lg-top": "WalletTokens_sticky-lg-top__1XRY6",
            "sticky-xl-top": "WalletTokens_sticky-xl-top__3lI4s",
            "sticky-xxl-top": "WalletTokens_sticky-xxl-top__2pWEE",
            "visually-hidden": "WalletTokens_visually-hidden__HcFmF",
            "visually-hidden-focusable": "WalletTokens_visually-hidden-focusable__1wubd",
            "stretched-link": "WalletTokens_stretched-link__1gZPJ",
            "text-truncate": "WalletTokens_text-truncate__JurWo",
            "align-baseline": "WalletTokens_align-baseline__Fmhfd",
            "align-top": "WalletTokens_align-top__kw2CM",
            "align-middle": "WalletTokens_align-middle__2Jdhl",
            "align-bottom": "WalletTokens_align-bottom__3Lx2i",
            "align-text-bottom": "WalletTokens_align-text-bottom__mr7QT",
            "align-text-top": "WalletTokens_align-text-top__WoNQz",
            "float-start": "WalletTokens_float-start__caM6S",
            "float-end": "WalletTokens_float-end__2h3i3",
            "float-none": "WalletTokens_float-none__3latI",
            "overflow-auto": "WalletTokens_overflow-auto__20wKJ",
            "overflow-hidden": "WalletTokens_overflow-hidden__2470o",
            "overflow-visible": "WalletTokens_overflow-visible__1XQsN",
            "overflow-scroll": "WalletTokens_overflow-scroll__2uJ5G",
            "d-inline": "WalletTokens_d-inline__2Oe9n",
            "d-inline-block": "WalletTokens_d-inline-block__UcqQe",
            "d-block": "WalletTokens_d-block__cmdEp",
            "d-grid": "WalletTokens_d-grid__1VbwR",
            "d-table": "WalletTokens_d-table__1vSAX",
            "d-table-row": "WalletTokens_d-table-row__hSfxj",
            "d-table-cell": "WalletTokens_d-table-cell__15G8r",
            "d-flex": "WalletTokens_d-flex__3YAgN",
            "d-inline-flex": "WalletTokens_d-inline-flex__37n1O",
            "d-none": "WalletTokens_d-none__3EJQg",
            shadow: "WalletTokens_shadow__h6Z2e",
            "shadow-sm": "WalletTokens_shadow-sm__2uOXP",
            "shadow-lg": "WalletTokens_shadow-lg__zLekU",
            "shadow-none": "WalletTokens_shadow-none__39Uoe",
            "position-static": "WalletTokens_position-static__1VOa9",
            "position-relative": "WalletTokens_position-relative__MLfA9",
            "position-absolute": "WalletTokens_position-absolute__TGLEj",
            "position-fixed": "WalletTokens_position-fixed__32Nm5",
            "position-sticky": "WalletTokens_position-sticky__1yleE",
            "top-0": "WalletTokens_top-0__3fVSl",
            "top-50": "WalletTokens_top-50__3ORvM",
            "top-100": "WalletTokens_top-100__2Euk4",
            "bottom-0": "WalletTokens_bottom-0__9y92M",
            "bottom-50": "WalletTokens_bottom-50__1xReP",
            "bottom-100": "WalletTokens_bottom-100__bqSqp",
            "start-0": "WalletTokens_start-0__2_Gjr",
            "start-50": "WalletTokens_start-50__2ifbq",
            "start-100": "WalletTokens_start-100__vU_5s",
            "end-0": "WalletTokens_end-0__2S_NE",
            "end-50": "WalletTokens_end-50__s4YXu",
            "end-100": "WalletTokens_end-100__7ZOz_",
            "translate-middle": "WalletTokens_translate-middle__2U57A",
            "translate-middle-x": "WalletTokens_translate-middle-x__1mP3G",
            "translate-middle-y": "WalletTokens_translate-middle-y__3Nw2p",
            border: "WalletTokens_border__3ACPo",
            "border-0": "WalletTokens_border-0__-l9pK",
            "border-top": "WalletTokens_border-top__352zI",
            "border-top-0": "WalletTokens_border-top-0__2Lmvf",
            "border-end": "WalletTokens_border-end__18dDx",
            "border-end-0": "WalletTokens_border-end-0__3kw0n",
            "border-bottom": "WalletTokens_border-bottom__2AlRn",
            "border-bottom-0": "WalletTokens_border-bottom-0__3G17p",
            "border-start": "WalletTokens_border-start__2ztqn",
            "border-start-0": "WalletTokens_border-start-0__1q-j2",
            "border-primary": "WalletTokens_border-primary__EGlQE",
            "border-secondary": "WalletTokens_border-secondary__qBPto",
            "border-success": "WalletTokens_border-success__2NTSX",
            "border-info": "WalletTokens_border-info__2-jVm",
            "border-warning": "WalletTokens_border-warning__2WGn1",
            "border-danger": "WalletTokens_border-danger__PSdtV",
            "border-light": "WalletTokens_border-light__23gYe",
            "border-dark": "WalletTokens_border-dark__2EhgL",
            "border-dark-1": "WalletTokens_border-dark-1__1yxEU",
            "border-dark-2": "WalletTokens_border-dark-2__qBimS",
            "border-blue-dark": "WalletTokens_border-blue-dark__1Ly8u",
            "border-white": "WalletTokens_border-white__1Rzfi",
            "border-1": "WalletTokens_border-1__3PLtN",
            "border-2": "WalletTokens_border-2__F6DMT",
            "border-3": "WalletTokens_border-3__2UvtT",
            "border-4": "WalletTokens_border-4__rwV_P",
            "border-5": "WalletTokens_border-5__1QfOP",
            "w-25": "WalletTokens_w-25__3fxjY",
            "w-50": "WalletTokens_w-50__3Ny35",
            "w-75": "WalletTokens_w-75__2rH37",
            "w-100": "WalletTokens_w-100__n6KXA",
            "w-auto": "WalletTokens_w-auto__sI3cq",
            "mw-100": "WalletTokens_mw-100__32Yp4",
            "vw-100": "WalletTokens_vw-100__3iHCO",
            "min-vw-100": "WalletTokens_min-vw-100__X00BF",
            "h-25": "WalletTokens_h-25__cfeHV",
            "h-50": "WalletTokens_h-50__32aj9",
            "h-75": "WalletTokens_h-75__33Gcz",
            "h-100": "WalletTokens_h-100__Jr7v5",
            "h-auto": "WalletTokens_h-auto__1m4vL",
            "mh-100": "WalletTokens_mh-100__1kmip",
            "vh-100": "WalletTokens_vh-100__2wlKD",
            "min-vh-100": "WalletTokens_min-vh-100__1QTK1",
            "flex-fill": "WalletTokens_flex-fill__10VpK",
            "flex-row": "WalletTokens_flex-row__1C4DL",
            "flex-column": "WalletTokens_flex-column__2lMJ5",
            "flex-row-reverse": "WalletTokens_flex-row-reverse__uuNFo",
            "flex-column-reverse": "WalletTokens_flex-column-reverse__2VAKl",
            "flex-grow-0": "WalletTokens_flex-grow-0__1XHUm",
            "flex-grow-1": "WalletTokens_flex-grow-1__3eF7N",
            "flex-shrink-0": "WalletTokens_flex-shrink-0__31yTg",
            "flex-shrink-1": "WalletTokens_flex-shrink-1__3_MZR",
            "flex-wrap": "WalletTokens_flex-wrap__1L_4Q",
            "flex-nowrap": "WalletTokens_flex-nowrap__1HkH8",
            "flex-wrap-reverse": "WalletTokens_flex-wrap-reverse__33yMy",
            "gap-0": "WalletTokens_gap-0__JBi9I",
            "gap-1": "WalletTokens_gap-1__bcXIU",
            "gap-2": "WalletTokens_gap-2__3kL5Q",
            "gap-3": "WalletTokens_gap-3__NQkow",
            "gap-4": "WalletTokens_gap-4__2wJDY",
            "gap-5": "WalletTokens_gap-5__txCRT",
            "justify-content-start": "WalletTokens_justify-content-start__3bj3g",
            "justify-content-end": "WalletTokens_justify-content-end__2V-GE",
            "justify-content-center": "WalletTokens_justify-content-center__2oy2y",
            "justify-content-between": "WalletTokens_justify-content-between__2ZtdJ",
            "justify-content-around": "WalletTokens_justify-content-around__180qe",
            "justify-content-evenly": "WalletTokens_justify-content-evenly__2Y-6c",
            "align-items-start": "WalletTokens_align-items-start__vqJ8j",
            "align-items-end": "WalletTokens_align-items-end__2sR-N",
            "align-items-center": "WalletTokens_align-items-center__3sQ87",
            "align-items-baseline": "WalletTokens_align-items-baseline__2Ebif",
            "align-items-stretch": "WalletTokens_align-items-stretch__2lFoK",
            "align-content-start": "WalletTokens_align-content-start__3WHry",
            "align-content-end": "WalletTokens_align-content-end__2JR_Q",
            "align-content-center": "WalletTokens_align-content-center__1rGz0",
            "align-content-between": "WalletTokens_align-content-between__G3a-U",
            "align-content-around": "WalletTokens_align-content-around__2Op7x",
            "align-content-stretch": "WalletTokens_align-content-stretch__2WJOc",
            "align-self-auto": "WalletTokens_align-self-auto__14gvo",
            "align-self-start": "WalletTokens_align-self-start__2hiWZ",
            "align-self-end": "WalletTokens_align-self-end__nsBUv",
            "align-self-center": "WalletTokens_align-self-center__JFGy-",
            "align-self-baseline": "WalletTokens_align-self-baseline__3sQU0",
            "align-self-stretch": "WalletTokens_align-self-stretch__3dL3I",
            "order-first": "WalletTokens_order-first__1DsPC",
            "order-0": "WalletTokens_order-0__3Q3ne",
            "order-1": "WalletTokens_order-1__1OBRm",
            "order-2": "WalletTokens_order-2__3ULG1",
            "order-3": "WalletTokens_order-3__2X7bC",
            "order-4": "WalletTokens_order-4__16zwQ",
            "order-5": "WalletTokens_order-5__1wTVX",
            "order-last": "WalletTokens_order-last__3cMzO",
            "m-0": "WalletTokens_m-0__1loWC",
            "m-1": "WalletTokens_m-1__e2mZC",
            "m-2": "WalletTokens_m-2__3QjCI",
            "m-3": "WalletTokens_m-3__3aueI",
            "m-4": "WalletTokens_m-4__2BQTF",
            "m-5": "WalletTokens_m-5__1Farh",
            "m-auto": "WalletTokens_m-auto__34MwG",
            "mx-0": "WalletTokens_mx-0__2FoNe",
            "mx-1": "WalletTokens_mx-1__xYrYS",
            "mx-2": "WalletTokens_mx-2__1QTWr",
            "mx-3": "WalletTokens_mx-3__2cK6J",
            "mx-4": "WalletTokens_mx-4__mwDY9",
            "mx-5": "WalletTokens_mx-5__1o559",
            "mx-auto": "WalletTokens_mx-auto__1u-G1",
            "my-0": "WalletTokens_my-0__1N42u",
            "my-1": "WalletTokens_my-1__1QPNw",
            "my-2": "WalletTokens_my-2__3O0IX",
            "my-3": "WalletTokens_my-3__JTt10",
            "my-4": "WalletTokens_my-4__2WrHi",
            "my-5": "WalletTokens_my-5__2TZu5",
            "my-auto": "WalletTokens_my-auto__1s7LF",
            "mt-0": "WalletTokens_mt-0__297TB",
            "mt-1": "WalletTokens_mt-1__1ivOr",
            "mt-2": "WalletTokens_mt-2__2bMHO",
            "mt-3": "WalletTokens_mt-3__1dp2z",
            "mt-4": "WalletTokens_mt-4__2bpjF",
            "mt-5": "WalletTokens_mt-5__3Xp8f",
            "mt-auto": "WalletTokens_mt-auto__3iN3K",
            "me-0": "WalletTokens_me-0__3ViMH",
            "me-1": "WalletTokens_me-1__2-YS1",
            "me-2": "WalletTokens_me-2__3_6Ze",
            "me-3": "WalletTokens_me-3__2xL3k",
            "me-4": "WalletTokens_me-4__25DQe",
            "me-5": "WalletTokens_me-5__369DB",
            "me-auto": "WalletTokens_me-auto__ekmhF",
            "mb-0": "WalletTokens_mb-0__3i9Rx",
            "mb-1": "WalletTokens_mb-1__2uA7i",
            "mb-2": "WalletTokens_mb-2__3bnSt",
            "mb-3": "WalletTokens_mb-3__3YBAs",
            "mb-4": "WalletTokens_mb-4__2SvmZ",
            "mb-5": "WalletTokens_mb-5__2Xtux",
            "mb-auto": "WalletTokens_mb-auto__3IcdN",
            "ms-0": "WalletTokens_ms-0__1bDCP",
            "ms-1": "WalletTokens_ms-1__3Edwb",
            "ms-2": "WalletTokens_ms-2__1GIZV",
            "ms-3": "WalletTokens_ms-3__iWTEs",
            "ms-4": "WalletTokens_ms-4__8LN-h",
            "ms-5": "WalletTokens_ms-5__2nmUV",
            "ms-auto": "WalletTokens_ms-auto__zhBjA",
            "p-0": "WalletTokens_p-0__1znjl",
            "p-1": "WalletTokens_p-1__1poq-",
            "p-2": "WalletTokens_p-2__1g208",
            "p-3": "WalletTokens_p-3__2BiQV",
            "p-4": "WalletTokens_p-4__3hMwu",
            "p-5": "WalletTokens_p-5__HqAFF",
            "px-0": "WalletTokens_px-0__6wUr4",
            "px-1": "WalletTokens_px-1__1hzbg",
            "px-2": "WalletTokens_px-2__2TM7n",
            "px-3": "WalletTokens_px-3__3dKem",
            "px-4": "WalletTokens_px-4__31jsC",
            "px-5": "WalletTokens_px-5__Y_VHe",
            "py-0": "WalletTokens_py-0__135Mr",
            "py-1": "WalletTokens_py-1__2sbKr",
            "py-2": "WalletTokens_py-2__BEld3",
            "py-3": "WalletTokens_py-3__34cC6",
            "py-4": "WalletTokens_py-4__31y_6",
            "py-5": "WalletTokens_py-5__dWyW_",
            "pt-0": "WalletTokens_pt-0__1yriB",
            "pt-1": "WalletTokens_pt-1__1Z6bI",
            "pt-2": "WalletTokens_pt-2__1ZXdj",
            "pt-3": "WalletTokens_pt-3__1Hf_C",
            "pt-4": "WalletTokens_pt-4__2FyP2",
            "pt-5": "WalletTokens_pt-5__2guR8",
            "pe-0": "WalletTokens_pe-0__1bs4M",
            "pe-1": "WalletTokens_pe-1__hx-Lw",
            "pe-2": "WalletTokens_pe-2__VwIYu",
            "pe-3": "WalletTokens_pe-3__1UrEr",
            "pe-4": "WalletTokens_pe-4__39rlK",
            "pe-5": "WalletTokens_pe-5__2dxhd",
            "pb-0": "WalletTokens_pb-0__3r1eZ",
            "pb-1": "WalletTokens_pb-1__1ZPDL",
            "pb-2": "WalletTokens_pb-2__1mXgU",
            "pb-3": "WalletTokens_pb-3__2FxDT",
            "pb-4": "WalletTokens_pb-4__3J8z5",
            "pb-5": "WalletTokens_pb-5__2mQ2L",
            "ps-0": "WalletTokens_ps-0__lfIlt",
            "ps-1": "WalletTokens_ps-1__1ccVv",
            "ps-2": "WalletTokens_ps-2__2gqTk",
            "ps-3": "WalletTokens_ps-3__RgY9Z",
            "ps-4": "WalletTokens_ps-4__1fkVU",
            "ps-5": "WalletTokens_ps-5__gBOkv",
            "fs-1": "WalletTokens_fs-1__1TVXJ",
            "fs-2": "WalletTokens_fs-2__2G5QB",
            "fs-3": "WalletTokens_fs-3__3AKx1",
            "fs-4": "WalletTokens_fs-4__34XrO",
            "fs-5": "WalletTokens_fs-5__3Vd6i",
            "fs-6": "WalletTokens_fs-6__2wfXI",
            "fst-italic": "WalletTokens_fst-italic__2ckY8",
            "fst-normal": "WalletTokens_fst-normal__1cA01",
            "fw-light": "WalletTokens_fw-light__-SLub",
            "fw-lighter": "WalletTokens_fw-lighter__66r7K",
            "fw-normal": "WalletTokens_fw-normal__3W16a",
            "fw-bold": "WalletTokens_fw-bold__3G_2i",
            "fw-bolder": "WalletTokens_fw-bolder__38efv",
            "text-lowercase": "WalletTokens_text-lowercase__33sVC",
            "text-uppercase": "WalletTokens_text-uppercase__29nm5",
            "text-capitalize": "WalletTokens_text-capitalize__20MiO",
            "text-start": "WalletTokens_text-start__11rzD",
            "text-end": "WalletTokens_text-end__2qoF-",
            "text-center": "WalletTokens_text-center__5KbSp",
            "text-primary": "WalletTokens_text-primary__1iCW0",
            "text-secondary": "WalletTokens_text-secondary__2mq4W",
            "text-success": "WalletTokens_text-success__1rHc3",
            "text-info": "WalletTokens_text-info__a1r6U",
            "text-warning": "WalletTokens_text-warning__1sdq3",
            "text-danger": "WalletTokens_text-danger__1AgFr",
            "text-light": "WalletTokens_text-light__2Nhlx",
            "text-dark": "WalletTokens_text-dark__2TNFM",
            "text-dark-1": "WalletTokens_text-dark-1__1yDwI",
            "text-dark-2": "WalletTokens_text-dark-2__1_xRi",
            "text-blue-dark": "WalletTokens_text-blue-dark__lMZO3",
            "text-white": "WalletTokens_text-white__2MLgw",
            "text-body": "WalletTokens_text-body__351u2",
            "text-muted": "WalletTokens_text-muted__1Vzpw",
            "text-black-50": "WalletTokens_text-black-50__2cNBh",
            "text-white-50": "WalletTokens_text-white-50__874I0",
            "text-reset": "WalletTokens_text-reset__25xBI",
            "lh-1": "WalletTokens_lh-1__Aeiig",
            "lh-sm": "WalletTokens_lh-sm__33wKP",
            "lh-base": "WalletTokens_lh-base__1neY7",
            "lh-lg": "WalletTokens_lh-lg__1vLD8",
            "bg-primary": "WalletTokens_bg-primary__3FCq9",
            "bg-secondary": "WalletTokens_bg-secondary__2E4mZ",
            "bg-success": "WalletTokens_bg-success__3HbB2",
            "bg-info": "WalletTokens_bg-info__IY8Ld",
            "bg-warning": "WalletTokens_bg-warning__2kNXZ",
            "bg-danger": "WalletTokens_bg-danger__2gVBe",
            "bg-light": "WalletTokens_bg-light__-ZHlA",
            "bg-dark": "WalletTokens_bg-dark__XifJQ",
            "bg-dark-1": "WalletTokens_bg-dark-1__2lYyx",
            "bg-dark-2": "WalletTokens_bg-dark-2__3b_uz",
            "bg-blue-dark": "WalletTokens_bg-blue-dark__1MX1d",
            "bg-body": "WalletTokens_bg-body__Wkomz",
            "bg-white": "WalletTokens_bg-white__2aMkR",
            "bg-transparent": "WalletTokens_bg-transparent__3msl6",
            "bg-gradient": "WalletTokens_bg-gradient__22qC7",
            "text-wrap": "WalletTokens_text-wrap__1Yyu7",
            "text-nowrap": "WalletTokens_text-nowrap__1E6n7",
            "text-decoration-none": "WalletTokens_text-decoration-none__3a1iB",
            "text-decoration-underline": "WalletTokens_text-decoration-underline__sAcX9",
            "text-decoration-line-through": "WalletTokens_text-decoration-line-through__3_o1y",
            "text-break": "WalletTokens_text-break__3YaaR",
            "font-monospace": "WalletTokens_font-monospace__2RGve",
            "user-select-all": "WalletTokens_user-select-all__1mOQn",
            "user-select-auto": "WalletTokens_user-select-auto__1jr10",
            "user-select-none": "WalletTokens_user-select-none__2UtvI",
            "pe-none": "WalletTokens_pe-none__aL4Te",
            "pe-auto": "WalletTokens_pe-auto__1QfZO",
            rounded: "WalletTokens_rounded__1HY9r",
            "rounded-0": "WalletTokens_rounded-0__18L4V",
            "rounded-1": "WalletTokens_rounded-1__2tmkt",
            "rounded-2": "WalletTokens_rounded-2__28hRK",
            "rounded-3": "WalletTokens_rounded-3__3r3NI",
            "rounded-circle": "WalletTokens_rounded-circle__3FWYS",
            "rounded-pill": "WalletTokens_rounded-pill__3axsa",
            "rounded-top": "WalletTokens_rounded-top__18BZV",
            "rounded-end": "WalletTokens_rounded-end__C6bbw",
            "rounded-bottom": "WalletTokens_rounded-bottom__1_Mtb",
            "rounded-start": "WalletTokens_rounded-start__1ZORX",
            visible: "WalletTokens_visible__2y1lY",
            invisible: "WalletTokens_invisible__3douy",
            "float-sm-start": "WalletTokens_float-sm-start__13ldt",
            "float-sm-end": "WalletTokens_float-sm-end__2S-SA",
            "float-sm-none": "WalletTokens_float-sm-none__59_Ym",
            "d-sm-inline": "WalletTokens_d-sm-inline__3VgjL",
            "d-sm-inline-block": "WalletTokens_d-sm-inline-block__2Hjp0",
            "d-sm-block": "WalletTokens_d-sm-block__13a5v",
            "d-sm-grid": "WalletTokens_d-sm-grid__o0haz",
            "d-sm-table": "WalletTokens_d-sm-table__UNZaG",
            "d-sm-table-row": "WalletTokens_d-sm-table-row__2TAX7",
            "d-sm-table-cell": "WalletTokens_d-sm-table-cell__1fbuP",
            "d-sm-flex": "WalletTokens_d-sm-flex__WS1Rp",
            "d-sm-inline-flex": "WalletTokens_d-sm-inline-flex__Cwa8T",
            "d-sm-none": "WalletTokens_d-sm-none__3zquz",
            "flex-sm-fill": "WalletTokens_flex-sm-fill__1S2aN",
            "flex-sm-row": "WalletTokens_flex-sm-row__3BJj8",
            "flex-sm-column": "WalletTokens_flex-sm-column__2vZLC",
            "flex-sm-row-reverse": "WalletTokens_flex-sm-row-reverse__1S078",
            "flex-sm-column-reverse": "WalletTokens_flex-sm-column-reverse__1pP1W",
            "flex-sm-grow-0": "WalletTokens_flex-sm-grow-0__1odzV",
            "flex-sm-grow-1": "WalletTokens_flex-sm-grow-1__30DmX",
            "flex-sm-shrink-0": "WalletTokens_flex-sm-shrink-0__3GsD_",
            "flex-sm-shrink-1": "WalletTokens_flex-sm-shrink-1__1Sv5-",
            "flex-sm-wrap": "WalletTokens_flex-sm-wrap__3_Zle",
            "flex-sm-nowrap": "WalletTokens_flex-sm-nowrap__1mPwW",
            "flex-sm-wrap-reverse": "WalletTokens_flex-sm-wrap-reverse__205vr",
            "gap-sm-0": "WalletTokens_gap-sm-0__x-zo5",
            "gap-sm-1": "WalletTokens_gap-sm-1__2c6Ao",
            "gap-sm-2": "WalletTokens_gap-sm-2__3q0yj",
            "gap-sm-3": "WalletTokens_gap-sm-3__1cEfe",
            "gap-sm-4": "WalletTokens_gap-sm-4__1PEyq",
            "gap-sm-5": "WalletTokens_gap-sm-5__2bCrW",
            "justify-content-sm-start": "WalletTokens_justify-content-sm-start__39gTV",
            "justify-content-sm-end": "WalletTokens_justify-content-sm-end__3sZg3",
            "justify-content-sm-center": "WalletTokens_justify-content-sm-center__3V9a-",
            "justify-content-sm-between": "WalletTokens_justify-content-sm-between__1Jfhy",
            "justify-content-sm-around": "WalletTokens_justify-content-sm-around__2Qf93",
            "justify-content-sm-evenly": "WalletTokens_justify-content-sm-evenly__1zz0W",
            "align-items-sm-start": "WalletTokens_align-items-sm-start__2fSGI",
            "align-items-sm-end": "WalletTokens_align-items-sm-end__1z7hZ",
            "align-items-sm-center": "WalletTokens_align-items-sm-center__2-4DK",
            "align-items-sm-baseline": "WalletTokens_align-items-sm-baseline__txow8",
            "align-items-sm-stretch": "WalletTokens_align-items-sm-stretch__2WCNo",
            "align-content-sm-start": "WalletTokens_align-content-sm-start__iB1c3",
            "align-content-sm-end": "WalletTokens_align-content-sm-end__1nwRv",
            "align-content-sm-center": "WalletTokens_align-content-sm-center__36ubh",
            "align-content-sm-between": "WalletTokens_align-content-sm-between__3vQfI",
            "align-content-sm-around": "WalletTokens_align-content-sm-around__15n_7",
            "align-content-sm-stretch": "WalletTokens_align-content-sm-stretch__36DuA",
            "align-self-sm-auto": "WalletTokens_align-self-sm-auto__1xs8C",
            "align-self-sm-start": "WalletTokens_align-self-sm-start__zfoMB",
            "align-self-sm-end": "WalletTokens_align-self-sm-end__3tGjn",
            "align-self-sm-center": "WalletTokens_align-self-sm-center__3uCMP",
            "align-self-sm-baseline": "WalletTokens_align-self-sm-baseline__1hDPA",
            "align-self-sm-stretch": "WalletTokens_align-self-sm-stretch__2MqtC",
            "order-sm-first": "WalletTokens_order-sm-first__3bAYp",
            "order-sm-0": "WalletTokens_order-sm-0__3bo2z",
            "order-sm-1": "WalletTokens_order-sm-1__37g_J",
            "order-sm-2": "WalletTokens_order-sm-2___FloV",
            "order-sm-3": "WalletTokens_order-sm-3__3MCCw",
            "order-sm-4": "WalletTokens_order-sm-4__17aMx",
            "order-sm-5": "WalletTokens_order-sm-5__qNPoi",
            "order-sm-last": "WalletTokens_order-sm-last___P7VI",
            "m-sm-0": "WalletTokens_m-sm-0__iI6AD",
            "m-sm-1": "WalletTokens_m-sm-1__1csA2",
            "m-sm-2": "WalletTokens_m-sm-2__29dvm",
            "m-sm-3": "WalletTokens_m-sm-3__3yyq7",
            "m-sm-4": "WalletTokens_m-sm-4__3gpDx",
            "m-sm-5": "WalletTokens_m-sm-5___b6Sn",
            "m-sm-auto": "WalletTokens_m-sm-auto__BaflV",
            "mx-sm-0": "WalletTokens_mx-sm-0__1kHfe",
            "mx-sm-1": "WalletTokens_mx-sm-1__wCYqs",
            "mx-sm-2": "WalletTokens_mx-sm-2__31Iat",
            "mx-sm-3": "WalletTokens_mx-sm-3__RgoOc",
            "mx-sm-4": "WalletTokens_mx-sm-4__1NXSU",
            "mx-sm-5": "WalletTokens_mx-sm-5__1FtVi",
            "mx-sm-auto": "WalletTokens_mx-sm-auto__117I9",
            "my-sm-0": "WalletTokens_my-sm-0__33qix",
            "my-sm-1": "WalletTokens_my-sm-1__17KG0",
            "my-sm-2": "WalletTokens_my-sm-2__2QV29",
            "my-sm-3": "WalletTokens_my-sm-3__1glLY",
            "my-sm-4": "WalletTokens_my-sm-4__3i-E9",
            "my-sm-5": "WalletTokens_my-sm-5__1StZz",
            "my-sm-auto": "WalletTokens_my-sm-auto__B8EbA",
            "mt-sm-0": "WalletTokens_mt-sm-0__1kxOp",
            "mt-sm-1": "WalletTokens_mt-sm-1__2jsSP",
            "mt-sm-2": "WalletTokens_mt-sm-2__3OQsK",
            "mt-sm-3": "WalletTokens_mt-sm-3__1EZY3",
            "mt-sm-4": "WalletTokens_mt-sm-4__pDiRT",
            "mt-sm-5": "WalletTokens_mt-sm-5__1Imme",
            "mt-sm-auto": "WalletTokens_mt-sm-auto__1ehLj",
            "me-sm-0": "WalletTokens_me-sm-0__1I512",
            "me-sm-1": "WalletTokens_me-sm-1__3XVqC",
            "me-sm-2": "WalletTokens_me-sm-2__3FYD_",
            "me-sm-3": "WalletTokens_me-sm-3__ovqzh",
            "me-sm-4": "WalletTokens_me-sm-4__1mnws",
            "me-sm-5": "WalletTokens_me-sm-5__1bjRa",
            "me-sm-auto": "WalletTokens_me-sm-auto__3J7y1",
            "mb-sm-0": "WalletTokens_mb-sm-0__1UYxO",
            "mb-sm-1": "WalletTokens_mb-sm-1__3OZKO",
            "mb-sm-2": "WalletTokens_mb-sm-2__3oPN5",
            "mb-sm-3": "WalletTokens_mb-sm-3__1mhUB",
            "mb-sm-4": "WalletTokens_mb-sm-4__nZrMc",
            "mb-sm-5": "WalletTokens_mb-sm-5__aNIlh",
            "mb-sm-auto": "WalletTokens_mb-sm-auto__1Ym6I",
            "ms-sm-0": "WalletTokens_ms-sm-0__TL_Uv",
            "ms-sm-1": "WalletTokens_ms-sm-1__2KnGa",
            "ms-sm-2": "WalletTokens_ms-sm-2__oOFLt",
            "ms-sm-3": "WalletTokens_ms-sm-3__E2OZP",
            "ms-sm-4": "WalletTokens_ms-sm-4__3cSiz",
            "ms-sm-5": "WalletTokens_ms-sm-5__1CR6i",
            "ms-sm-auto": "WalletTokens_ms-sm-auto__1nTQa",
            "p-sm-0": "WalletTokens_p-sm-0__YXtef",
            "p-sm-1": "WalletTokens_p-sm-1__1nZ5e",
            "p-sm-2": "WalletTokens_p-sm-2__2lr-B",
            "p-sm-3": "WalletTokens_p-sm-3__z2WMs",
            "p-sm-4": "WalletTokens_p-sm-4__1av5d",
            "p-sm-5": "WalletTokens_p-sm-5__l5mIf",
            "px-sm-0": "WalletTokens_px-sm-0__3AZ8h",
            "px-sm-1": "WalletTokens_px-sm-1__1I6b8",
            "px-sm-2": "WalletTokens_px-sm-2__--6Ol",
            "px-sm-3": "WalletTokens_px-sm-3__1VhxL",
            "px-sm-4": "WalletTokens_px-sm-4__3S-QU",
            "px-sm-5": "WalletTokens_px-sm-5__2RaRF",
            "py-sm-0": "WalletTokens_py-sm-0__azNmg",
            "py-sm-1": "WalletTokens_py-sm-1__E6_Qy",
            "py-sm-2": "WalletTokens_py-sm-2__38Vq0",
            "py-sm-3": "WalletTokens_py-sm-3__2TM0J",
            "py-sm-4": "WalletTokens_py-sm-4__1qg4p",
            "py-sm-5": "WalletTokens_py-sm-5__3YfQH",
            "pt-sm-0": "WalletTokens_pt-sm-0__3ffYX",
            "pt-sm-1": "WalletTokens_pt-sm-1__iGAfT",
            "pt-sm-2": "WalletTokens_pt-sm-2__1RYEB",
            "pt-sm-3": "WalletTokens_pt-sm-3__cuVru",
            "pt-sm-4": "WalletTokens_pt-sm-4__259fg",
            "pt-sm-5": "WalletTokens_pt-sm-5__2tILN",
            "pe-sm-0": "WalletTokens_pe-sm-0__22Ft7",
            "pe-sm-1": "WalletTokens_pe-sm-1__wIZMq",
            "pe-sm-2": "WalletTokens_pe-sm-2__2wDi_",
            "pe-sm-3": "WalletTokens_pe-sm-3__zD9yO",
            "pe-sm-4": "WalletTokens_pe-sm-4__HOVye",
            "pe-sm-5": "WalletTokens_pe-sm-5__1afPp",
            "pb-sm-0": "WalletTokens_pb-sm-0__2Wjyd",
            "pb-sm-1": "WalletTokens_pb-sm-1__3xSXl",
            "pb-sm-2": "WalletTokens_pb-sm-2__3QBbI",
            "pb-sm-3": "WalletTokens_pb-sm-3__2YzT-",
            "pb-sm-4": "WalletTokens_pb-sm-4__1wsje",
            "pb-sm-5": "WalletTokens_pb-sm-5__1kUe-",
            "ps-sm-0": "WalletTokens_ps-sm-0__2QjJO",
            "ps-sm-1": "WalletTokens_ps-sm-1__2SW7G",
            "ps-sm-2": "WalletTokens_ps-sm-2__3Kn5-",
            "ps-sm-3": "WalletTokens_ps-sm-3__36mz5",
            "ps-sm-4": "WalletTokens_ps-sm-4__2OaT6",
            "ps-sm-5": "WalletTokens_ps-sm-5__2qD4T",
            "text-sm-start": "WalletTokens_text-sm-start__SI9o-",
            "text-sm-end": "WalletTokens_text-sm-end__OGGSN",
            "text-sm-center": "WalletTokens_text-sm-center__3aFzo",
            "float-md-start": "WalletTokens_float-md-start__ueafp",
            "float-md-end": "WalletTokens_float-md-end__ea02P",
            "float-md-none": "WalletTokens_float-md-none__3y41p",
            "d-md-inline": "WalletTokens_d-md-inline__39afI",
            "d-md-inline-block": "WalletTokens_d-md-inline-block__1j6eM",
            "d-md-block": "WalletTokens_d-md-block__2q5ae",
            "d-md-grid": "WalletTokens_d-md-grid__3nVzN",
            "d-md-table": "WalletTokens_d-md-table__3hw3Y",
            "d-md-table-row": "WalletTokens_d-md-table-row__1gYG5",
            "d-md-table-cell": "WalletTokens_d-md-table-cell__jU3XW",
            "d-md-flex": "WalletTokens_d-md-flex__1DVs1",
            "d-md-inline-flex": "WalletTokens_d-md-inline-flex__1JZ-R",
            "d-md-none": "WalletTokens_d-md-none__2vy0C",
            "flex-md-fill": "WalletTokens_flex-md-fill__255ea",
            "flex-md-row": "WalletTokens_flex-md-row__3u-4a",
            "flex-md-column": "WalletTokens_flex-md-column__28ZJU",
            "flex-md-row-reverse": "WalletTokens_flex-md-row-reverse__3asEC",
            "flex-md-column-reverse": "WalletTokens_flex-md-column-reverse__2dsm3",
            "flex-md-grow-0": "WalletTokens_flex-md-grow-0__2gl31",
            "flex-md-grow-1": "WalletTokens_flex-md-grow-1__1nCEP",
            "flex-md-shrink-0": "WalletTokens_flex-md-shrink-0__2R74m",
            "flex-md-shrink-1": "WalletTokens_flex-md-shrink-1__28iap",
            "flex-md-wrap": "WalletTokens_flex-md-wrap__13jol",
            "flex-md-nowrap": "WalletTokens_flex-md-nowrap__18Pbi",
            "flex-md-wrap-reverse": "WalletTokens_flex-md-wrap-reverse__2KUnt",
            "gap-md-0": "WalletTokens_gap-md-0__1LtdD",
            "gap-md-1": "WalletTokens_gap-md-1__1fCa5",
            "gap-md-2": "WalletTokens_gap-md-2__3Sx-H",
            "gap-md-3": "WalletTokens_gap-md-3__3bs6U",
            "gap-md-4": "WalletTokens_gap-md-4__3VARQ",
            "gap-md-5": "WalletTokens_gap-md-5__36qxC",
            "justify-content-md-start": "WalletTokens_justify-content-md-start__2aQIs",
            "justify-content-md-end": "WalletTokens_justify-content-md-end__2PZTQ",
            "justify-content-md-center": "WalletTokens_justify-content-md-center__1AehX",
            "justify-content-md-between": "WalletTokens_justify-content-md-between__vCVUw",
            "justify-content-md-around": "WalletTokens_justify-content-md-around__39-RT",
            "justify-content-md-evenly": "WalletTokens_justify-content-md-evenly__1qJOJ",
            "align-items-md-start": "WalletTokens_align-items-md-start__jkLHF",
            "align-items-md-end": "WalletTokens_align-items-md-end__20reY",
            "align-items-md-center": "WalletTokens_align-items-md-center__a1hBH",
            "align-items-md-baseline": "WalletTokens_align-items-md-baseline__BL3en",
            "align-items-md-stretch": "WalletTokens_align-items-md-stretch__1Oof8",
            "align-content-md-start": "WalletTokens_align-content-md-start__2Bh9y",
            "align-content-md-end": "WalletTokens_align-content-md-end__1Lhac",
            "align-content-md-center": "WalletTokens_align-content-md-center__20R0c",
            "align-content-md-between": "WalletTokens_align-content-md-between__3AWov",
            "align-content-md-around": "WalletTokens_align-content-md-around__36PFc",
            "align-content-md-stretch": "WalletTokens_align-content-md-stretch__1HgHf",
            "align-self-md-auto": "WalletTokens_align-self-md-auto__1ArSB",
            "align-self-md-start": "WalletTokens_align-self-md-start__-fYdF",
            "align-self-md-end": "WalletTokens_align-self-md-end__SiiPn",
            "align-self-md-center": "WalletTokens_align-self-md-center__25GGf",
            "align-self-md-baseline": "WalletTokens_align-self-md-baseline__BKnxj",
            "align-self-md-stretch": "WalletTokens_align-self-md-stretch__2T_01",
            "order-md-first": "WalletTokens_order-md-first__saubG",
            "order-md-0": "WalletTokens_order-md-0__oyJeH",
            "order-md-1": "WalletTokens_order-md-1__11Kop",
            "order-md-2": "WalletTokens_order-md-2__Juq-X",
            "order-md-3": "WalletTokens_order-md-3__1yqjJ",
            "order-md-4": "WalletTokens_order-md-4__xRfjM",
            "order-md-5": "WalletTokens_order-md-5__1WfGX",
            "order-md-last": "WalletTokens_order-md-last__2IZ-9",
            "m-md-0": "WalletTokens_m-md-0__21U0t",
            "m-md-1": "WalletTokens_m-md-1__PNMSE",
            "m-md-2": "WalletTokens_m-md-2__3EZe3",
            "m-md-3": "WalletTokens_m-md-3__dX2mK",
            "m-md-4": "WalletTokens_m-md-4__3X1BM",
            "m-md-5": "WalletTokens_m-md-5__2XO6J",
            "m-md-auto": "WalletTokens_m-md-auto__2e6xx",
            "mx-md-0": "WalletTokens_mx-md-0__3iEQe",
            "mx-md-1": "WalletTokens_mx-md-1__32NFu",
            "mx-md-2": "WalletTokens_mx-md-2__fum6l",
            "mx-md-3": "WalletTokens_mx-md-3__qrwjH",
            "mx-md-4": "WalletTokens_mx-md-4__34Vo9",
            "mx-md-5": "WalletTokens_mx-md-5__1vD2x",
            "mx-md-auto": "WalletTokens_mx-md-auto__3H1Ky",
            "my-md-0": "WalletTokens_my-md-0__3sA6I",
            "my-md-1": "WalletTokens_my-md-1__3vSyb",
            "my-md-2": "WalletTokens_my-md-2__3Ltrr",
            "my-md-3": "WalletTokens_my-md-3__2K5mD",
            "my-md-4": "WalletTokens_my-md-4__2Ojff",
            "my-md-5": "WalletTokens_my-md-5__OX1pb",
            "my-md-auto": "WalletTokens_my-md-auto__2wcuR",
            "mt-md-0": "WalletTokens_mt-md-0__36Ny5",
            "mt-md-1": "WalletTokens_mt-md-1__1UxBp",
            "mt-md-2": "WalletTokens_mt-md-2__2cG2k",
            "mt-md-3": "WalletTokens_mt-md-3__3u6KY",
            "mt-md-4": "WalletTokens_mt-md-4__3v-BQ",
            "mt-md-5": "WalletTokens_mt-md-5__2oePa",
            "mt-md-auto": "WalletTokens_mt-md-auto__2sPOz",
            "me-md-0": "WalletTokens_me-md-0__3npyN",
            "me-md-1": "WalletTokens_me-md-1__36Lwe",
            "me-md-2": "WalletTokens_me-md-2__3KjAw",
            "me-md-3": "WalletTokens_me-md-3__SsmNH",
            "me-md-4": "WalletTokens_me-md-4__2aNzG",
            "me-md-5": "WalletTokens_me-md-5__2mrgs",
            "me-md-auto": "WalletTokens_me-md-auto__2rnK7",
            "mb-md-0": "WalletTokens_mb-md-0__12Q_3",
            "mb-md-1": "WalletTokens_mb-md-1__26hk7",
            "mb-md-2": "WalletTokens_mb-md-2__1EoaK",
            "mb-md-3": "WalletTokens_mb-md-3__6Lp9G",
            "mb-md-4": "WalletTokens_mb-md-4__2x9fz",
            "mb-md-5": "WalletTokens_mb-md-5__1QeP0",
            "mb-md-auto": "WalletTokens_mb-md-auto__1SNOH",
            "ms-md-0": "WalletTokens_ms-md-0__1HyGZ",
            "ms-md-1": "WalletTokens_ms-md-1__37RLK",
            "ms-md-2": "WalletTokens_ms-md-2__4V1o3",
            "ms-md-3": "WalletTokens_ms-md-3__2-7Uf",
            "ms-md-4": "WalletTokens_ms-md-4__2X3qQ",
            "ms-md-5": "WalletTokens_ms-md-5__2nQux",
            "ms-md-auto": "WalletTokens_ms-md-auto__wNGcV",
            "p-md-0": "WalletTokens_p-md-0__39KmA",
            "p-md-1": "WalletTokens_p-md-1__DBD00",
            "p-md-2": "WalletTokens_p-md-2__1hbIC",
            "p-md-3": "WalletTokens_p-md-3__OxhhR",
            "p-md-4": "WalletTokens_p-md-4__2uA17",
            "p-md-5": "WalletTokens_p-md-5__3mmef",
            "px-md-0": "WalletTokens_px-md-0__10uJ-",
            "px-md-1": "WalletTokens_px-md-1__1S1E9",
            "px-md-2": "WalletTokens_px-md-2__1TPFr",
            "px-md-3": "WalletTokens_px-md-3__HyaCD",
            "px-md-4": "WalletTokens_px-md-4__3GCPU",
            "px-md-5": "WalletTokens_px-md-5__2qpzg",
            "py-md-0": "WalletTokens_py-md-0__3YziM",
            "py-md-1": "WalletTokens_py-md-1__3cEZg",
            "py-md-2": "WalletTokens_py-md-2__FwyPC",
            "py-md-3": "WalletTokens_py-md-3__1xAxw",
            "py-md-4": "WalletTokens_py-md-4__qh3un",
            "py-md-5": "WalletTokens_py-md-5__3MP-z",
            "pt-md-0": "WalletTokens_pt-md-0__3RJBg",
            "pt-md-1": "WalletTokens_pt-md-1__3CTmP",
            "pt-md-2": "WalletTokens_pt-md-2__1KE4M",
            "pt-md-3": "WalletTokens_pt-md-3__2z9kp",
            "pt-md-4": "WalletTokens_pt-md-4__31GDb",
            "pt-md-5": "WalletTokens_pt-md-5__3aYv5",
            "pe-md-0": "WalletTokens_pe-md-0__7XWfe",
            "pe-md-1": "WalletTokens_pe-md-1__h6YF_",
            "pe-md-2": "WalletTokens_pe-md-2__35K37",
            "pe-md-3": "WalletTokens_pe-md-3__3n505",
            "pe-md-4": "WalletTokens_pe-md-4__tmalV",
            "pe-md-5": "WalletTokens_pe-md-5__1fV-8",
            "pb-md-0": "WalletTokens_pb-md-0__cGCJX",
            "pb-md-1": "WalletTokens_pb-md-1__2sXUE",
            "pb-md-2": "WalletTokens_pb-md-2__FdLsw",
            "pb-md-3": "WalletTokens_pb-md-3__2YDnm",
            "pb-md-4": "WalletTokens_pb-md-4__3vryG",
            "pb-md-5": "WalletTokens_pb-md-5__J_BnW",
            "ps-md-0": "WalletTokens_ps-md-0__3TAAk",
            "ps-md-1": "WalletTokens_ps-md-1__r4jfR",
            "ps-md-2": "WalletTokens_ps-md-2__3Upqc",
            "ps-md-3": "WalletTokens_ps-md-3__2zmOq",
            "ps-md-4": "WalletTokens_ps-md-4__2wvjA",
            "ps-md-5": "WalletTokens_ps-md-5__U4lUD",
            "text-md-start": "WalletTokens_text-md-start__eC_zT",
            "text-md-end": "WalletTokens_text-md-end__G6SN_",
            "text-md-center": "WalletTokens_text-md-center__CmCDo",
            "float-lg-start": "WalletTokens_float-lg-start__lpVcb",
            "float-lg-end": "WalletTokens_float-lg-end__1qTA2",
            "float-lg-none": "WalletTokens_float-lg-none__16b0B",
            "d-lg-inline": "WalletTokens_d-lg-inline__2M8Mh",
            "d-lg-inline-block": "WalletTokens_d-lg-inline-block__3msWG",
            "d-lg-block": "WalletTokens_d-lg-block__uaTNb",
            "d-lg-grid": "WalletTokens_d-lg-grid__3M4zF",
            "d-lg-table": "WalletTokens_d-lg-table__2XpVa",
            "d-lg-table-row": "WalletTokens_d-lg-table-row__2cc0W",
            "d-lg-table-cell": "WalletTokens_d-lg-table-cell__2qxct",
            "d-lg-flex": "WalletTokens_d-lg-flex__vPcnZ",
            "d-lg-inline-flex": "WalletTokens_d-lg-inline-flex__3nYxB",
            "d-lg-none": "WalletTokens_d-lg-none__2gSHQ",
            "flex-lg-fill": "WalletTokens_flex-lg-fill__3XW51",
            "flex-lg-row": "WalletTokens_flex-lg-row__2fqNq",
            "flex-lg-column": "WalletTokens_flex-lg-column__2ZtlI",
            "flex-lg-row-reverse": "WalletTokens_flex-lg-row-reverse__IP35B",
            "flex-lg-column-reverse": "WalletTokens_flex-lg-column-reverse__1ffpP",
            "flex-lg-grow-0": "WalletTokens_flex-lg-grow-0__1x0JG",
            "flex-lg-grow-1": "WalletTokens_flex-lg-grow-1__3p7ze",
            "flex-lg-shrink-0": "WalletTokens_flex-lg-shrink-0__2X2rI",
            "flex-lg-shrink-1": "WalletTokens_flex-lg-shrink-1__12fAK",
            "flex-lg-wrap": "WalletTokens_flex-lg-wrap__3MO-m",
            "flex-lg-nowrap": "WalletTokens_flex-lg-nowrap__33Xwl",
            "flex-lg-wrap-reverse": "WalletTokens_flex-lg-wrap-reverse__2lUTl",
            "gap-lg-0": "WalletTokens_gap-lg-0__2BhiM",
            "gap-lg-1": "WalletTokens_gap-lg-1__nQWnp",
            "gap-lg-2": "WalletTokens_gap-lg-2__3MgpK",
            "gap-lg-3": "WalletTokens_gap-lg-3__17e8v",
            "gap-lg-4": "WalletTokens_gap-lg-4__mivdk",
            "gap-lg-5": "WalletTokens_gap-lg-5__2Onv7",
            "justify-content-lg-start": "WalletTokens_justify-content-lg-start__3Gblo",
            "justify-content-lg-end": "WalletTokens_justify-content-lg-end__2Jf0G",
            "justify-content-lg-center": "WalletTokens_justify-content-lg-center__31Zd2",
            "justify-content-lg-between": "WalletTokens_justify-content-lg-between__2sVkh",
            "justify-content-lg-around": "WalletTokens_justify-content-lg-around__NgLkW",
            "justify-content-lg-evenly": "WalletTokens_justify-content-lg-evenly__3kPv6",
            "align-items-lg-start": "WalletTokens_align-items-lg-start__2Nq5X",
            "align-items-lg-end": "WalletTokens_align-items-lg-end__1WzLU",
            "align-items-lg-center": "WalletTokens_align-items-lg-center__nymbE",
            "align-items-lg-baseline": "WalletTokens_align-items-lg-baseline__2igZr",
            "align-items-lg-stretch": "WalletTokens_align-items-lg-stretch__3Q3NK",
            "align-content-lg-start": "WalletTokens_align-content-lg-start__1EweE",
            "align-content-lg-end": "WalletTokens_align-content-lg-end__e94nc",
            "align-content-lg-center": "WalletTokens_align-content-lg-center__NkO22",
            "align-content-lg-between": "WalletTokens_align-content-lg-between__2e1US",
            "align-content-lg-around": "WalletTokens_align-content-lg-around__1zufQ",
            "align-content-lg-stretch": "WalletTokens_align-content-lg-stretch__2q4VV",
            "align-self-lg-auto": "WalletTokens_align-self-lg-auto__1s7Uq",
            "align-self-lg-start": "WalletTokens_align-self-lg-start__h-MAp",
            "align-self-lg-end": "WalletTokens_align-self-lg-end__2a4VL",
            "align-self-lg-center": "WalletTokens_align-self-lg-center__1l2R7",
            "align-self-lg-baseline": "WalletTokens_align-self-lg-baseline__2xX8D",
            "align-self-lg-stretch": "WalletTokens_align-self-lg-stretch__1RIwV",
            "order-lg-first": "WalletTokens_order-lg-first__1CE6k",
            "order-lg-0": "WalletTokens_order-lg-0__1yUit",
            "order-lg-1": "WalletTokens_order-lg-1__1w4oV",
            "order-lg-2": "WalletTokens_order-lg-2__3RvXD",
            "order-lg-3": "WalletTokens_order-lg-3__1OZAj",
            "order-lg-4": "WalletTokens_order-lg-4__1tmYq",
            "order-lg-5": "WalletTokens_order-lg-5__1z42c",
            "order-lg-last": "WalletTokens_order-lg-last__wOs2A",
            "m-lg-0": "WalletTokens_m-lg-0__3ehXf",
            "m-lg-1": "WalletTokens_m-lg-1__1zD9-",
            "m-lg-2": "WalletTokens_m-lg-2__1xvmS",
            "m-lg-3": "WalletTokens_m-lg-3__1A-En",
            "m-lg-4": "WalletTokens_m-lg-4__2VVt2",
            "m-lg-5": "WalletTokens_m-lg-5__2Z8IF",
            "m-lg-auto": "WalletTokens_m-lg-auto__19-PW",
            "mx-lg-0": "WalletTokens_mx-lg-0__3rFki",
            "mx-lg-1": "WalletTokens_mx-lg-1__2bUlb",
            "mx-lg-2": "WalletTokens_mx-lg-2__3CM0n",
            "mx-lg-3": "WalletTokens_mx-lg-3__1DJ2C",
            "mx-lg-4": "WalletTokens_mx-lg-4__12vPV",
            "mx-lg-5": "WalletTokens_mx-lg-5__lp82n",
            "mx-lg-auto": "WalletTokens_mx-lg-auto__l4Q3v",
            "my-lg-0": "WalletTokens_my-lg-0__26eRo",
            "my-lg-1": "WalletTokens_my-lg-1__3yiEp",
            "my-lg-2": "WalletTokens_my-lg-2__1v6Pv",
            "my-lg-3": "WalletTokens_my-lg-3__2R11q",
            "my-lg-4": "WalletTokens_my-lg-4__3Ji3h",
            "my-lg-5": "WalletTokens_my-lg-5__2WEF5",
            "my-lg-auto": "WalletTokens_my-lg-auto__O1XVP",
            "mt-lg-0": "WalletTokens_mt-lg-0__13TnD",
            "mt-lg-1": "WalletTokens_mt-lg-1__2UXU-",
            "mt-lg-2": "WalletTokens_mt-lg-2__1XyCr",
            "mt-lg-3": "WalletTokens_mt-lg-3___uJGG",
            "mt-lg-4": "WalletTokens_mt-lg-4__100vp",
            "mt-lg-5": "WalletTokens_mt-lg-5__2HeWR",
            "mt-lg-auto": "WalletTokens_mt-lg-auto__dCHTi",
            "me-lg-0": "WalletTokens_me-lg-0__3tN2S",
            "me-lg-1": "WalletTokens_me-lg-1__2vODT",
            "me-lg-2": "WalletTokens_me-lg-2__1fCfi",
            "me-lg-3": "WalletTokens_me-lg-3__1O3RV",
            "me-lg-4": "WalletTokens_me-lg-4__3zxGw",
            "me-lg-5": "WalletTokens_me-lg-5__1A5kI",
            "me-lg-auto": "WalletTokens_me-lg-auto__3fVEj",
            "mb-lg-0": "WalletTokens_mb-lg-0__Dl0kv",
            "mb-lg-1": "WalletTokens_mb-lg-1__2Wyf8",
            "mb-lg-2": "WalletTokens_mb-lg-2__3ocVL",
            "mb-lg-3": "WalletTokens_mb-lg-3__jZxaT",
            "mb-lg-4": "WalletTokens_mb-lg-4__1qVO4",
            "mb-lg-5": "WalletTokens_mb-lg-5__2NFgY",
            "mb-lg-auto": "WalletTokens_mb-lg-auto__3XbSD",
            "ms-lg-0": "WalletTokens_ms-lg-0__1WAxW",
            "ms-lg-1": "WalletTokens_ms-lg-1___LGdR",
            "ms-lg-2": "WalletTokens_ms-lg-2__193Of",
            "ms-lg-3": "WalletTokens_ms-lg-3__3MCG5",
            "ms-lg-4": "WalletTokens_ms-lg-4__23TFl",
            "ms-lg-5": "WalletTokens_ms-lg-5__3sinS",
            "ms-lg-auto": "WalletTokens_ms-lg-auto__1L4Ir",
            "p-lg-0": "WalletTokens_p-lg-0__1Wd4s",
            "p-lg-1": "WalletTokens_p-lg-1__eF0Pu",
            "p-lg-2": "WalletTokens_p-lg-2__1--qV",
            "p-lg-3": "WalletTokens_p-lg-3__2trgY",
            "p-lg-4": "WalletTokens_p-lg-4__WfRxy",
            "p-lg-5": "WalletTokens_p-lg-5__1Jqdx",
            "px-lg-0": "WalletTokens_px-lg-0__11lfQ",
            "px-lg-1": "WalletTokens_px-lg-1__3haT2",
            "px-lg-2": "WalletTokens_px-lg-2__1eTGQ",
            "px-lg-3": "WalletTokens_px-lg-3__3YUkE",
            "px-lg-4": "WalletTokens_px-lg-4__35-kJ",
            "px-lg-5": "WalletTokens_px-lg-5__3wOw3",
            "py-lg-0": "WalletTokens_py-lg-0__2Iay0",
            "py-lg-1": "WalletTokens_py-lg-1__jXfpy",
            "py-lg-2": "WalletTokens_py-lg-2__1hYnq",
            "py-lg-3": "WalletTokens_py-lg-3__1hq9N",
            "py-lg-4": "WalletTokens_py-lg-4__2l_ix",
            "py-lg-5": "WalletTokens_py-lg-5__3uEZL",
            "pt-lg-0": "WalletTokens_pt-lg-0__3HC0h",
            "pt-lg-1": "WalletTokens_pt-lg-1__1AdRU",
            "pt-lg-2": "WalletTokens_pt-lg-2__1sThA",
            "pt-lg-3": "WalletTokens_pt-lg-3__j6tud",
            "pt-lg-4": "WalletTokens_pt-lg-4__2xrr2",
            "pt-lg-5": "WalletTokens_pt-lg-5__1vFMr",
            "pe-lg-0": "WalletTokens_pe-lg-0__3W-YQ",
            "pe-lg-1": "WalletTokens_pe-lg-1__2oi84",
            "pe-lg-2": "WalletTokens_pe-lg-2__3Vful",
            "pe-lg-3": "WalletTokens_pe-lg-3__1l5gv",
            "pe-lg-4": "WalletTokens_pe-lg-4__85RMb",
            "pe-lg-5": "WalletTokens_pe-lg-5__2_pte",
            "pb-lg-0": "WalletTokens_pb-lg-0__BpP4A",
            "pb-lg-1": "WalletTokens_pb-lg-1__1F073",
            "pb-lg-2": "WalletTokens_pb-lg-2__1bva_",
            "pb-lg-3": "WalletTokens_pb-lg-3__2xEHV",
            "pb-lg-4": "WalletTokens_pb-lg-4__2L0Up",
            "pb-lg-5": "WalletTokens_pb-lg-5__gZGwn",
            "ps-lg-0": "WalletTokens_ps-lg-0__2UQFk",
            "ps-lg-1": "WalletTokens_ps-lg-1__MJ9aq",
            "ps-lg-2": "WalletTokens_ps-lg-2__3mhxw",
            "ps-lg-3": "WalletTokens_ps-lg-3__27x2t",
            "ps-lg-4": "WalletTokens_ps-lg-4__1H2Te",
            "ps-lg-5": "WalletTokens_ps-lg-5__1dBwc",
            "text-lg-start": "WalletTokens_text-lg-start__18ibi",
            "text-lg-end": "WalletTokens_text-lg-end__PDmzM",
            "text-lg-center": "WalletTokens_text-lg-center__1ZQs2",
            "float-xl-start": "WalletTokens_float-xl-start__2yo0Z",
            "float-xl-end": "WalletTokens_float-xl-end__3u5lj",
            "float-xl-none": "WalletTokens_float-xl-none__29q0I",
            "d-xl-inline": "WalletTokens_d-xl-inline__2Jh2m",
            "d-xl-inline-block": "WalletTokens_d-xl-inline-block__2ttLx",
            "d-xl-block": "WalletTokens_d-xl-block__1yDD8",
            "d-xl-grid": "WalletTokens_d-xl-grid__3cMlC",
            "d-xl-table": "WalletTokens_d-xl-table__353aK",
            "d-xl-table-row": "WalletTokens_d-xl-table-row__Q8Bjq",
            "d-xl-table-cell": "WalletTokens_d-xl-table-cell__1Ufae",
            "d-xl-flex": "WalletTokens_d-xl-flex__2obbK",
            "d-xl-inline-flex": "WalletTokens_d-xl-inline-flex__1EyGn",
            "d-xl-none": "WalletTokens_d-xl-none__2bNdv",
            "flex-xl-fill": "WalletTokens_flex-xl-fill__1dag7",
            "flex-xl-row": "WalletTokens_flex-xl-row__2IQn9",
            "flex-xl-column": "WalletTokens_flex-xl-column__ngkYY",
            "flex-xl-row-reverse": "WalletTokens_flex-xl-row-reverse__26VM7",
            "flex-xl-column-reverse": "WalletTokens_flex-xl-column-reverse__d85tc",
            "flex-xl-grow-0": "WalletTokens_flex-xl-grow-0__h8Vur",
            "flex-xl-grow-1": "WalletTokens_flex-xl-grow-1__3u_PL",
            "flex-xl-shrink-0": "WalletTokens_flex-xl-shrink-0__1pp5p",
            "flex-xl-shrink-1": "WalletTokens_flex-xl-shrink-1__1DsXo",
            "flex-xl-wrap": "WalletTokens_flex-xl-wrap__2jh_1",
            "flex-xl-nowrap": "WalletTokens_flex-xl-nowrap__iNi3i",
            "flex-xl-wrap-reverse": "WalletTokens_flex-xl-wrap-reverse__37J4J",
            "gap-xl-0": "WalletTokens_gap-xl-0__2xkQT",
            "gap-xl-1": "WalletTokens_gap-xl-1__10eY3",
            "gap-xl-2": "WalletTokens_gap-xl-2__1prAI",
            "gap-xl-3": "WalletTokens_gap-xl-3__3KKp2",
            "gap-xl-4": "WalletTokens_gap-xl-4___8Z9B",
            "gap-xl-5": "WalletTokens_gap-xl-5__ykk-z",
            "justify-content-xl-start": "WalletTokens_justify-content-xl-start__1-VDD",
            "justify-content-xl-end": "WalletTokens_justify-content-xl-end__3hVGm",
            "justify-content-xl-center": "WalletTokens_justify-content-xl-center__1TFcI",
            "justify-content-xl-between": "WalletTokens_justify-content-xl-between__ycpnn",
            "justify-content-xl-around": "WalletTokens_justify-content-xl-around__1o9c_",
            "justify-content-xl-evenly": "WalletTokens_justify-content-xl-evenly__2v1yf",
            "align-items-xl-start": "WalletTokens_align-items-xl-start__CdkN-",
            "align-items-xl-end": "WalletTokens_align-items-xl-end__26mio",
            "align-items-xl-center": "WalletTokens_align-items-xl-center__3fXAY",
            "align-items-xl-baseline": "WalletTokens_align-items-xl-baseline__1ED-4",
            "align-items-xl-stretch": "WalletTokens_align-items-xl-stretch__2cH3d",
            "align-content-xl-start": "WalletTokens_align-content-xl-start__QpBBg",
            "align-content-xl-end": "WalletTokens_align-content-xl-end__38kQD",
            "align-content-xl-center": "WalletTokens_align-content-xl-center__3iR0B",
            "align-content-xl-between": "WalletTokens_align-content-xl-between__1AhNI",
            "align-content-xl-around": "WalletTokens_align-content-xl-around__5zGZt",
            "align-content-xl-stretch": "WalletTokens_align-content-xl-stretch__1ItLq",
            "align-self-xl-auto": "WalletTokens_align-self-xl-auto__LKg0F",
            "align-self-xl-start": "WalletTokens_align-self-xl-start__3M5b0",
            "align-self-xl-end": "WalletTokens_align-self-xl-end__K0s6C",
            "align-self-xl-center": "WalletTokens_align-self-xl-center__yWm2D",
            "align-self-xl-baseline": "WalletTokens_align-self-xl-baseline__2AD1f",
            "align-self-xl-stretch": "WalletTokens_align-self-xl-stretch__2Hgv2",
            "order-xl-first": "WalletTokens_order-xl-first__1eULG",
            "order-xl-0": "WalletTokens_order-xl-0__1H5zl",
            "order-xl-1": "WalletTokens_order-xl-1__14cuK",
            "order-xl-2": "WalletTokens_order-xl-2__1AwLV",
            "order-xl-3": "WalletTokens_order-xl-3__Kg3YS",
            "order-xl-4": "WalletTokens_order-xl-4__VAFGc",
            "order-xl-5": "WalletTokens_order-xl-5__jNRTa",
            "order-xl-last": "WalletTokens_order-xl-last__1msTP",
            "m-xl-0": "WalletTokens_m-xl-0__GrxIC",
            "m-xl-1": "WalletTokens_m-xl-1__3WS8M",
            "m-xl-2": "WalletTokens_m-xl-2__3PPZD",
            "m-xl-3": "WalletTokens_m-xl-3__39iGA",
            "m-xl-4": "WalletTokens_m-xl-4__3K0-m",
            "m-xl-5": "WalletTokens_m-xl-5__3MSDN",
            "m-xl-auto": "WalletTokens_m-xl-auto__2jf9d",
            "mx-xl-0": "WalletTokens_mx-xl-0__2kxEm",
            "mx-xl-1": "WalletTokens_mx-xl-1__F_EpN",
            "mx-xl-2": "WalletTokens_mx-xl-2__7KC4s",
            "mx-xl-3": "WalletTokens_mx-xl-3__35wVX",
            "mx-xl-4": "WalletTokens_mx-xl-4__1aS8F",
            "mx-xl-5": "WalletTokens_mx-xl-5__pl6dq",
            "mx-xl-auto": "WalletTokens_mx-xl-auto__ztE1E",
            "my-xl-0": "WalletTokens_my-xl-0__2dU4v",
            "my-xl-1": "WalletTokens_my-xl-1__1MlWl",
            "my-xl-2": "WalletTokens_my-xl-2__1Q9ZQ",
            "my-xl-3": "WalletTokens_my-xl-3__3ZEy4",
            "my-xl-4": "WalletTokens_my-xl-4__3U3f8",
            "my-xl-5": "WalletTokens_my-xl-5__3k28t",
            "my-xl-auto": "WalletTokens_my-xl-auto__3rcwR",
            "mt-xl-0": "WalletTokens_mt-xl-0__1BnoP",
            "mt-xl-1": "WalletTokens_mt-xl-1__5Ttdz",
            "mt-xl-2": "WalletTokens_mt-xl-2__yUZhe",
            "mt-xl-3": "WalletTokens_mt-xl-3__3vjUg",
            "mt-xl-4": "WalletTokens_mt-xl-4__2AD6y",
            "mt-xl-5": "WalletTokens_mt-xl-5__TvZr8",
            "mt-xl-auto": "WalletTokens_mt-xl-auto__15m87",
            "me-xl-0": "WalletTokens_me-xl-0__3Wftf",
            "me-xl-1": "WalletTokens_me-xl-1__L9b82",
            "me-xl-2": "WalletTokens_me-xl-2__ZpAIF",
            "me-xl-3": "WalletTokens_me-xl-3__3bOm8",
            "me-xl-4": "WalletTokens_me-xl-4__vER4P",
            "me-xl-5": "WalletTokens_me-xl-5__3RIrj",
            "me-xl-auto": "WalletTokens_me-xl-auto__14pp1",
            "mb-xl-0": "WalletTokens_mb-xl-0__1TrwT",
            "mb-xl-1": "WalletTokens_mb-xl-1__3xPnA",
            "mb-xl-2": "WalletTokens_mb-xl-2__1NNvt",
            "mb-xl-3": "WalletTokens_mb-xl-3__2ibej",
            "mb-xl-4": "WalletTokens_mb-xl-4__26GRD",
            "mb-xl-5": "WalletTokens_mb-xl-5__3VY96",
            "mb-xl-auto": "WalletTokens_mb-xl-auto__1JlEx",
            "ms-xl-0": "WalletTokens_ms-xl-0__1bXo3",
            "ms-xl-1": "WalletTokens_ms-xl-1__2G-kp",
            "ms-xl-2": "WalletTokens_ms-xl-2__S1rgX",
            "ms-xl-3": "WalletTokens_ms-xl-3__26adQ",
            "ms-xl-4": "WalletTokens_ms-xl-4__E07Hr",
            "ms-xl-5": "WalletTokens_ms-xl-5__2Fkdr",
            "ms-xl-auto": "WalletTokens_ms-xl-auto__3z2hE",
            "p-xl-0": "WalletTokens_p-xl-0__2u0ss",
            "p-xl-1": "WalletTokens_p-xl-1__1dVsg",
            "p-xl-2": "WalletTokens_p-xl-2__22iM4",
            "p-xl-3": "WalletTokens_p-xl-3__j7FS2",
            "p-xl-4": "WalletTokens_p-xl-4__xdQL9",
            "p-xl-5": "WalletTokens_p-xl-5__1TElV",
            "px-xl-0": "WalletTokens_px-xl-0__2mWfW",
            "px-xl-1": "WalletTokens_px-xl-1__9T_Bo",
            "px-xl-2": "WalletTokens_px-xl-2__2W2YG",
            "px-xl-3": "WalletTokens_px-xl-3__3HYvr",
            "px-xl-4": "WalletTokens_px-xl-4__XlS5s",
            "px-xl-5": "WalletTokens_px-xl-5__VJSWt",
            "py-xl-0": "WalletTokens_py-xl-0__gSDH-",
            "py-xl-1": "WalletTokens_py-xl-1__2Vy2L",
            "py-xl-2": "WalletTokens_py-xl-2__27HJP",
            "py-xl-3": "WalletTokens_py-xl-3__1vLCl",
            "py-xl-4": "WalletTokens_py-xl-4__2zZms",
            "py-xl-5": "WalletTokens_py-xl-5__23_hC",
            "pt-xl-0": "WalletTokens_pt-xl-0__b1x3-",
            "pt-xl-1": "WalletTokens_pt-xl-1__2Dn15",
            "pt-xl-2": "WalletTokens_pt-xl-2__2lbzb",
            "pt-xl-3": "WalletTokens_pt-xl-3__3gTBY",
            "pt-xl-4": "WalletTokens_pt-xl-4__2q1TQ",
            "pt-xl-5": "WalletTokens_pt-xl-5__2v_qd",
            "pe-xl-0": "WalletTokens_pe-xl-0__10fTP",
            "pe-xl-1": "WalletTokens_pe-xl-1__3YCdi",
            "pe-xl-2": "WalletTokens_pe-xl-2__3U2xE",
            "pe-xl-3": "WalletTokens_pe-xl-3__ipbyE",
            "pe-xl-4": "WalletTokens_pe-xl-4__Aumli",
            "pe-xl-5": "WalletTokens_pe-xl-5__2RAWI",
            "pb-xl-0": "WalletTokens_pb-xl-0__zwt6l",
            "pb-xl-1": "WalletTokens_pb-xl-1__Zyp22",
            "pb-xl-2": "WalletTokens_pb-xl-2__2T5BN",
            "pb-xl-3": "WalletTokens_pb-xl-3__2YZfF",
            "pb-xl-4": "WalletTokens_pb-xl-4__1eTge",
            "pb-xl-5": "WalletTokens_pb-xl-5__2-esc",
            "ps-xl-0": "WalletTokens_ps-xl-0__2RQuY",
            "ps-xl-1": "WalletTokens_ps-xl-1__1uP0T",
            "ps-xl-2": "WalletTokens_ps-xl-2__1W1o_",
            "ps-xl-3": "WalletTokens_ps-xl-3__1vZ2f",
            "ps-xl-4": "WalletTokens_ps-xl-4__2O-NB",
            "ps-xl-5": "WalletTokens_ps-xl-5__3lwYl",
            "text-xl-start": "WalletTokens_text-xl-start__1fR10",
            "text-xl-end": "WalletTokens_text-xl-end__3pKr0",
            "text-xl-center": "WalletTokens_text-xl-center__zYYg2",
            "float-xxl-start": "WalletTokens_float-xxl-start__2ANSD",
            "float-xxl-end": "WalletTokens_float-xxl-end__3qLvP",
            "float-xxl-none": "WalletTokens_float-xxl-none__3ABdy",
            "d-xxl-inline": "WalletTokens_d-xxl-inline__TGBGc",
            "d-xxl-inline-block": "WalletTokens_d-xxl-inline-block__3U-A8",
            "d-xxl-block": "WalletTokens_d-xxl-block__dyf2g",
            "d-xxl-grid": "WalletTokens_d-xxl-grid__1PGkb",
            "d-xxl-table": "WalletTokens_d-xxl-table__3J9k6",
            "d-xxl-table-row": "WalletTokens_d-xxl-table-row__3uHR4",
            "d-xxl-table-cell": "WalletTokens_d-xxl-table-cell__1oTBy",
            "d-xxl-flex": "WalletTokens_d-xxl-flex__1C18P",
            "d-xxl-inline-flex": "WalletTokens_d-xxl-inline-flex__1y3UA",
            "d-xxl-none": "WalletTokens_d-xxl-none__3u_Sc",
            "flex-xxl-fill": "WalletTokens_flex-xxl-fill__2gECk",
            "flex-xxl-row": "WalletTokens_flex-xxl-row__2GCxD",
            "flex-xxl-column": "WalletTokens_flex-xxl-column__2YLau",
            "flex-xxl-row-reverse": "WalletTokens_flex-xxl-row-reverse__6eA_b",
            "flex-xxl-column-reverse": "WalletTokens_flex-xxl-column-reverse__21RMW",
            "flex-xxl-grow-0": "WalletTokens_flex-xxl-grow-0__2I29-",
            "flex-xxl-grow-1": "WalletTokens_flex-xxl-grow-1__2Y348",
            "flex-xxl-shrink-0": "WalletTokens_flex-xxl-shrink-0__1NKKQ",
            "flex-xxl-shrink-1": "WalletTokens_flex-xxl-shrink-1__2WI2L",
            "flex-xxl-wrap": "WalletTokens_flex-xxl-wrap__2dV8N",
            "flex-xxl-nowrap": "WalletTokens_flex-xxl-nowrap__1Kv6X",
            "flex-xxl-wrap-reverse": "WalletTokens_flex-xxl-wrap-reverse__2GMiQ",
            "gap-xxl-0": "WalletTokens_gap-xxl-0__3KMZP",
            "gap-xxl-1": "WalletTokens_gap-xxl-1__1dJ0L",
            "gap-xxl-2": "WalletTokens_gap-xxl-2__3_azn",
            "gap-xxl-3": "WalletTokens_gap-xxl-3__30lLF",
            "gap-xxl-4": "WalletTokens_gap-xxl-4__19Zys",
            "gap-xxl-5": "WalletTokens_gap-xxl-5__328To",
            "justify-content-xxl-start": "WalletTokens_justify-content-xxl-start__3OA8n",
            "justify-content-xxl-end": "WalletTokens_justify-content-xxl-end__sTb92",
            "justify-content-xxl-center": "WalletTokens_justify-content-xxl-center__1wcUy",
            "justify-content-xxl-between": "WalletTokens_justify-content-xxl-between__2dkaL",
            "justify-content-xxl-around": "WalletTokens_justify-content-xxl-around__6je4C",
            "justify-content-xxl-evenly": "WalletTokens_justify-content-xxl-evenly__2EiNE",
            "align-items-xxl-start": "WalletTokens_align-items-xxl-start__bjw5a",
            "align-items-xxl-end": "WalletTokens_align-items-xxl-end__hf3iU",
            "align-items-xxl-center": "WalletTokens_align-items-xxl-center__3QYYR",
            "align-items-xxl-baseline": "WalletTokens_align-items-xxl-baseline__31hF8",
            "align-items-xxl-stretch": "WalletTokens_align-items-xxl-stretch__2-3-c",
            "align-content-xxl-start": "WalletTokens_align-content-xxl-start__1_Ffm",
            "align-content-xxl-end": "WalletTokens_align-content-xxl-end__2EhM5",
            "align-content-xxl-center": "WalletTokens_align-content-xxl-center__23ErY",
            "align-content-xxl-between": "WalletTokens_align-content-xxl-between__3cU1h",
            "align-content-xxl-around": "WalletTokens_align-content-xxl-around__1Ql76",
            "align-content-xxl-stretch": "WalletTokens_align-content-xxl-stretch__30NYL",
            "align-self-xxl-auto": "WalletTokens_align-self-xxl-auto__2biX_",
            "align-self-xxl-start": "WalletTokens_align-self-xxl-start__3Ofo2",
            "align-self-xxl-end": "WalletTokens_align-self-xxl-end__Kjb6t",
            "align-self-xxl-center": "WalletTokens_align-self-xxl-center__2V5La",
            "align-self-xxl-baseline": "WalletTokens_align-self-xxl-baseline__13O-9",
            "align-self-xxl-stretch": "WalletTokens_align-self-xxl-stretch__1OJFz",
            "order-xxl-first": "WalletTokens_order-xxl-first__2yUFF",
            "order-xxl-0": "WalletTokens_order-xxl-0__31iSs",
            "order-xxl-1": "WalletTokens_order-xxl-1__3uewO",
            "order-xxl-2": "WalletTokens_order-xxl-2__zjGyz",
            "order-xxl-3": "WalletTokens_order-xxl-3__S7KRa",
            "order-xxl-4": "WalletTokens_order-xxl-4__1BSC6",
            "order-xxl-5": "WalletTokens_order-xxl-5__2VJHK",
            "order-xxl-last": "WalletTokens_order-xxl-last__39pp2",
            "m-xxl-0": "WalletTokens_m-xxl-0__2vqdd",
            "m-xxl-1": "WalletTokens_m-xxl-1__3p0t5",
            "m-xxl-2": "WalletTokens_m-xxl-2__2DEty",
            "m-xxl-3": "WalletTokens_m-xxl-3__1NfC5",
            "m-xxl-4": "WalletTokens_m-xxl-4__iNmE7",
            "m-xxl-5": "WalletTokens_m-xxl-5__2wEEn",
            "m-xxl-auto": "WalletTokens_m-xxl-auto__1vCws",
            "mx-xxl-0": "WalletTokens_mx-xxl-0__5hLk8",
            "mx-xxl-1": "WalletTokens_mx-xxl-1__36gOq",
            "mx-xxl-2": "WalletTokens_mx-xxl-2__2gIOy",
            "mx-xxl-3": "WalletTokens_mx-xxl-3__29L5t",
            "mx-xxl-4": "WalletTokens_mx-xxl-4__3dipJ",
            "mx-xxl-5": "WalletTokens_mx-xxl-5__3HYrC",
            "mx-xxl-auto": "WalletTokens_mx-xxl-auto__14eAV",
            "my-xxl-0": "WalletTokens_my-xxl-0__3K8u0",
            "my-xxl-1": "WalletTokens_my-xxl-1__2uNMH",
            "my-xxl-2": "WalletTokens_my-xxl-2__3Be2-",
            "my-xxl-3": "WalletTokens_my-xxl-3__1F5i4",
            "my-xxl-4": "WalletTokens_my-xxl-4__1O4Zr",
            "my-xxl-5": "WalletTokens_my-xxl-5__38ne4",
            "my-xxl-auto": "WalletTokens_my-xxl-auto__66aO4",
            "mt-xxl-0": "WalletTokens_mt-xxl-0__1IlZU",
            "mt-xxl-1": "WalletTokens_mt-xxl-1__38Ltc",
            "mt-xxl-2": "WalletTokens_mt-xxl-2__1A_NM",
            "mt-xxl-3": "WalletTokens_mt-xxl-3__J3iFg",
            "mt-xxl-4": "WalletTokens_mt-xxl-4__Z3q9P",
            "mt-xxl-5": "WalletTokens_mt-xxl-5__1EvRz",
            "mt-xxl-auto": "WalletTokens_mt-xxl-auto__VGLI8",
            "me-xxl-0": "WalletTokens_me-xxl-0__11i7A",
            "me-xxl-1": "WalletTokens_me-xxl-1__2__Sb",
            "me-xxl-2": "WalletTokens_me-xxl-2__3YDUv",
            "me-xxl-3": "WalletTokens_me-xxl-3__TJ13N",
            "me-xxl-4": "WalletTokens_me-xxl-4__3rL0K",
            "me-xxl-5": "WalletTokens_me-xxl-5__1oJti",
            "me-xxl-auto": "WalletTokens_me-xxl-auto__2HO2k",
            "mb-xxl-0": "WalletTokens_mb-xxl-0__3EYsP",
            "mb-xxl-1": "WalletTokens_mb-xxl-1__BUdCc",
            "mb-xxl-2": "WalletTokens_mb-xxl-2__smjHJ",
            "mb-xxl-3": "WalletTokens_mb-xxl-3__2SV4M",
            "mb-xxl-4": "WalletTokens_mb-xxl-4__YKMpx",
            "mb-xxl-5": "WalletTokens_mb-xxl-5__nOpyi",
            "mb-xxl-auto": "WalletTokens_mb-xxl-auto__dIXJp",
            "ms-xxl-0": "WalletTokens_ms-xxl-0__3f5Qi",
            "ms-xxl-1": "WalletTokens_ms-xxl-1__13Ig2",
            "ms-xxl-2": "WalletTokens_ms-xxl-2__19YC6",
            "ms-xxl-3": "WalletTokens_ms-xxl-3__7cF9G",
            "ms-xxl-4": "WalletTokens_ms-xxl-4__3WFwH",
            "ms-xxl-5": "WalletTokens_ms-xxl-5__AoZ-t",
            "ms-xxl-auto": "WalletTokens_ms-xxl-auto__1296U",
            "p-xxl-0": "WalletTokens_p-xxl-0__1C677",
            "p-xxl-1": "WalletTokens_p-xxl-1__kQrut",
            "p-xxl-2": "WalletTokens_p-xxl-2__2XsZS",
            "p-xxl-3": "WalletTokens_p-xxl-3__p6k9u",
            "p-xxl-4": "WalletTokens_p-xxl-4__3xG5h",
            "p-xxl-5": "WalletTokens_p-xxl-5__2VzAi",
            "px-xxl-0": "WalletTokens_px-xxl-0__H1N9S",
            "px-xxl-1": "WalletTokens_px-xxl-1__1sRzl",
            "px-xxl-2": "WalletTokens_px-xxl-2__1BT0T",
            "px-xxl-3": "WalletTokens_px-xxl-3__19nuQ",
            "px-xxl-4": "WalletTokens_px-xxl-4__1E-p-",
            "px-xxl-5": "WalletTokens_px-xxl-5__2qceq",
            "py-xxl-0": "WalletTokens_py-xxl-0__2bv_j",
            "py-xxl-1": "WalletTokens_py-xxl-1__RAYKY",
            "py-xxl-2": "WalletTokens_py-xxl-2__1KP0F",
            "py-xxl-3": "WalletTokens_py-xxl-3__3fUFJ",
            "py-xxl-4": "WalletTokens_py-xxl-4__cGeUa",
            "py-xxl-5": "WalletTokens_py-xxl-5__mJymO",
            "pt-xxl-0": "WalletTokens_pt-xxl-0__3bucc",
            "pt-xxl-1": "WalletTokens_pt-xxl-1__2H66k",
            "pt-xxl-2": "WalletTokens_pt-xxl-2__rczFQ",
            "pt-xxl-3": "WalletTokens_pt-xxl-3__TUWH4",
            "pt-xxl-4": "WalletTokens_pt-xxl-4__1Gy37",
            "pt-xxl-5": "WalletTokens_pt-xxl-5__m-wfB",
            "pe-xxl-0": "WalletTokens_pe-xxl-0__QN24g",
            "pe-xxl-1": "WalletTokens_pe-xxl-1__2UDDQ",
            "pe-xxl-2": "WalletTokens_pe-xxl-2__1hRbe",
            "pe-xxl-3": "WalletTokens_pe-xxl-3__6wNmM",
            "pe-xxl-4": "WalletTokens_pe-xxl-4__3YxHa",
            "pe-xxl-5": "WalletTokens_pe-xxl-5__Acosn",
            "pb-xxl-0": "WalletTokens_pb-xxl-0__3Ibj_",
            "pb-xxl-1": "WalletTokens_pb-xxl-1__3N5ZU",
            "pb-xxl-2": "WalletTokens_pb-xxl-2__2mac9",
            "pb-xxl-3": "WalletTokens_pb-xxl-3__ceS2A",
            "pb-xxl-4": "WalletTokens_pb-xxl-4__9pAQy",
            "pb-xxl-5": "WalletTokens_pb-xxl-5__oNMYv",
            "ps-xxl-0": "WalletTokens_ps-xxl-0__3YtNd",
            "ps-xxl-1": "WalletTokens_ps-xxl-1__1BPs7",
            "ps-xxl-2": "WalletTokens_ps-xxl-2__eHNdB",
            "ps-xxl-3": "WalletTokens_ps-xxl-3__2DrDK",
            "ps-xxl-4": "WalletTokens_ps-xxl-4__8-dnS",
            "ps-xxl-5": "WalletTokens_ps-xxl-5__beYO-",
            "text-xxl-start": "WalletTokens_text-xxl-start__1r6vT",
            "text-xxl-end": "WalletTokens_text-xxl-end__2fPNA",
            "text-xxl-center": "WalletTokens_text-xxl-center__1vEfM",
            "d-print-inline": "WalletTokens_d-print-inline__3A87t",
            "d-print-inline-block": "WalletTokens_d-print-inline-block__3vwqT",
            "d-print-block": "WalletTokens_d-print-block__9RRIp",
            "d-print-grid": "WalletTokens_d-print-grid__3_7VD",
            "d-print-table": "WalletTokens_d-print-table__CbCSj",
            "d-print-table-row": "WalletTokens_d-print-table-row__THPDq",
            "d-print-table-cell": "WalletTokens_d-print-table-cell__1yIOu",
            "d-print-flex": "WalletTokens_d-print-flex__2Bxhn",
            "d-print-inline-flex": "WalletTokens_d-print-inline-flex__1fVRA",
            "d-print-none": "WalletTokens_d-print-none__3-ycC",
            walletTokensTable: "WalletTokens_walletTokensTable__2X44S"
        }
    },
    437: function(e, t, n) {},
    472: function(e, t) {},
    482: function(e, t) {},
    496: function(e, t) {},
    498: function(e, t) {},
    515: function(e, t) {},
    516: function(e, t) {},
    528: function(e, t) {},
    544: function(e, t) {},
    55: function(e) {
        e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
    },
    562: function(e, t) {},
    60: function(e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
    },
    627: function(e, t) {},
    650: function(e, t) {},
    665: function(e, t) {},
    667: function(e, t) {},
    676: function(e, t) {},
    678: function(e, t) {},
    703: function(e, t) {},
    705: function(e, t) {},
    706: function(e, t) {},
    712: function(e, t) {},
    725: function(e, t) {},
    737: function(e, t) {},
    740: function(e, t) {},
    754: function(e, t) {},
    792: function(e, t) {},
    847: function(e, t) {},
    876: function(e, t, n) {
        "use strict";
        n.r(t);
        n(431),
        n(432);
        var a = n(1)
          , l = n.n(a)
          , s = n(67)
          , o = n.n(s)
          , r = n(6)
          , i = (n(437),
        n(438),
        n(439),
        n(440),
        n(403))
          , _ = n.n(i)
          , d = n(24)
          , c = n.n(d)
          , m = n(16)
          , p = {
            poocoin: {
                56: "0xb27adaffb9fea1801459a1a81b17218288c097cc",
                97: ""
            },
            wbnb: {
                56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                97: ""
            },
            mulltiCall: {
                56: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
                97: "0x67adcb4df3931b0c5da724058adc2174a9844412"
            },
            busd: {
                56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                97: "0x5e31cebeab4bbea01dfe8c449f6cf2fe3db30f1e"
            },
            factory: {
                56: "0xbcfccbde45ce874adcb698cc183debcf17952812",
                97: ""
            },
            factory2: {
                56: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
                97: ""
            },
            router: {
                56: "0x05ff2b0db69458a0750badebc4f9e13add608c7f"
            },
            router2: {
                56: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
                97: "0xD99D1c33F9fC3444f8101754aBC46c52416550D1"
            },
            uFactory: {
                56: "0xA943eA143cd7E79806d670f4a7cf08F8922a454F",
                97: ""
            },
            profile: {
                56: "0xba90d15d6384e8223bb4d96fe9efb0f06194fb39",
                97: ""
            },
            topHoldersOld: {
                56: "0x502a50eb08acd1a571c2b0b9be7bcb895e82eb44",
                97: ""
            },
            topHolders: {
                56: "0xa750619bb8ea196fbe6da5022fd4eaf94075af1e",
                97: ""
            },
            topHolders2: {
                56: "0x1EcD8Ed7FFD03f38863f3b86EF3B9807A1999ff8",
                97: ""
            },
            poocoinBnbLp: {
                56: "0x746a3f1a3863cf839bf0702c083cca888aba6ee8",
                97: ""
            },
            poocoinBnbLp2: {
                56: "0x0c5da0f07962dd0256c079248633f2b43cad6f62",
                97: ""
            },
            promoList: {
                56: "0x3a05D30f7428fE2333fb23Afa9a2bF2dC012316B",
                97: ""
            },
            bogSniperV1: {
                56: "0x8dF246cB47FE6857D04c4402Ee3E4c50573CD40d"
            },
            bogSniperV2: {
                56: "0x8dC28bA111cDE2342c083936157F6a8e53fE5514"
            },
            bogSniperV2_2: {
                56: "0xc22E8592568fefc487B1CB0c44359D313e4fa7fc"
            }
        }
          , x = n(3)
          , u = n.n(x)
          , b = n(17)
          , k = n(117)
          , h = n(884)
          , T = n(13)
          , f = n(60)
          , g = n(93)
          , y = n(183)
          , j = n(113)
          , w = n(55);
        function O() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
              , t = arguments.length > 1 ? arguments[1] : void 0
              , n = Object(a.useState)((function() {
                var n = window.localStorage.getItem(t);
                return null !== n ? JSON.parse(n) : e
            }
            ))
              , l = Object(r.a)(n, 2)
              , s = l[0]
              , o = l[1];
            return Object(a.useEffect)((function() {
                null !== s && void 0 !== s ? window.localStorage.setItem(t, JSON.stringify(s)) : window.localStorage.removeItem(t)
            }
            ), [t, s]),
            [s, o]
        }
        var v = n(0)
          , C = l.a.createContext({
            fullWidth: !1,
            setFullWidth: null,
            starred: null,
            setStarred: null,
            deleted: null,
            setDeleted: null,
            history: null,
            setHistory: null,
            chartType: null,
            setChartType: null,
            walletTab: null,
            setWalletTab: null,
            disableAds: null,
            setDisableAds: null,
            convertToUsd: null,
            setConvertToUsd: null,
            chartInterval: null,
            setChartInterval: null,
            showInfo: null,
            setShowInfo: null,
            lpVersion: null,
            setLpVersion: null,
            mergeVersions: null,
            setMergeVersions: null,
            trendingTimeframe: null,
            setTrendingTimeframe: null,
            showWallet: null,
            setShowWallet: null,
            chartHeight: null,
            setChartHeight: null,
            multiChartAddresses: null,
            setMultiChartAddresses: null
        })
          , F = function(e) {
            var t = e.children
              , n = O(!1, "fullWidth")
              , l = Object(r.a)(n, 2)
              , s = l[0]
              , o = l[1]
              , i = O({}, "starred")
              , _ = Object(r.a)(i, 2)
              , d = _[0]
              , c = _[1]
              , m = O({}, "deleted")
              , p = Object(r.a)(m, 2)
              , x = p[0]
              , u = p[1]
              , b = O({}, "history")
              , k = Object(r.a)(b, 2)
              , h = k[0]
              , T = k[1]
              , f = O("TradingView", "chartType")
              , g = Object(r.a)(f, 2)
              , y = g[0]
              , j = g[1]
              , w = O(!1, "disableAds")
              , F = Object(r.a)(w, 2)
              , W = F[0]
              , N = F[1]
              , B = O(!1, "convertToUsd")
              , S = Object(r.a)(B, 2)
              , P = S[0]
              , I = S[1]
              , L = Object(a.useState)("promoted")
              , A = Object(r.a)(L, 2)
              , M = A[0]
              , D = A[1]
              , E = O(15, "chartInterval")
              , R = Object(r.a)(E, 2)
              , U = R[0]
              , H = R[1]
              , V = O(!(window.innerWidth < 480), "showInfo")
              , q = Object(r.a)(V, 2)
              , z = q[0]
              , G = q[1]
              , K = O(!(window.innerWidth < 480), "showWallet")
              , Y = Object(r.a)(K, 2)
              , Z = Y[0]
              , J = Y[1]
              , Q = O("1", "pancakeLpVersion")
              , X = Object(r.a)(Q, 2)
              , $ = X[0]
              , ee = X[1]
              , te = O(!1, "mergeVersions")
              , ne = Object(r.a)(te, 2)
              , ae = ne[0]
              , le = ne[1]
              , se = O(window.innerWidth < 480 ? 400 : 800, "chartHeight")
              , oe = Object(r.a)(se, 2)
              , re = oe[0]
              , ie = oe[1]
              , _e = Object(a.useState)("1d")
              , de = Object(r.a)(_e, 2)
              , ce = de[0]
              , me = de[1]
              , pe = O({
                addresses: ["0xb27adaffb9fea1801459a1a81b17218288c097cc"]
            }, "multiChartAddresses")
              , xe = Object(r.a)(pe, 2)
              , ue = xe[0]
              , be = xe[1]
              , ke = {};
            Object.entries(d).forEach((function(e) {
                var t = Object(r.a)(e, 2)
                  , n = t[0]
                  , a = t[1];
                ke[n.toLowerCase()] = a
            }
            ));
            var he = {};
            Object.entries(x).forEach((function(e) {
                var t = Object(r.a)(e, 2)
                  , n = t[0]
                  , a = t[1];
                he[n.toLowerCase()] = a
            }
            ));
            return Object(a.useEffect)((function() {
                var e = window.document.createEvent("UIEvents");
                e.initUIEvent("resize", !0, !1, window, 0),
                window.dispatchEvent(e)
            }
            ), [s]),
            Object(v.jsx)(C.Provider, {
                value: {
                    fullWidth: s,
                    setFullWidth: o,
                    starred: ke,
                    setStarred: c,
                    deleted: he,
                    setDeleted: u,
                    history: h,
                    setHistory: T,
                    chartType: y,
                    setChartType: j,
                    walletTab: M,
                    setWalletTab: D,
                    disableAds: W,
                    setDisableAds: N,
                    convertToUsd: P,
                    setConvertToUsd: I,
                    chartInterval: U,
                    setChartInterval: H,
                    showInfo: z,
                    setShowInfo: G,
                    lpVersion: $,
                    setLpVersion: function(e) {
                        ee(e)
                    },
                    mergeVersions: ae,
                    setMergeVersions: le,
                    trendingTimeframe: ce,
                    setTrendingTimeframe: me,
                    showWallet: Z,
                    setShowWallet: J,
                    chartHeight: re,
                    setChartHeight: ie,
                    multiChartAddresses: ue,
                    setMultiChartAddresses: be
                },
                children: t
            }, $)
        }
          , W = n(404)
          , N = n.n(W)
          , B = ["https://bsc-dataseed1.defibit.io", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed1.defibit.io"]
          , S = function() {
            var e = N()(0, B.length - 1);
            return B[e]
        }
          , P = n(114)
          , I = n.n(P)
          , L = n(407)
          , A = n.n(L);
        function M(e) {
            var t = e.size
              , n = {
                transform: {
                    large: "scale(1,1)",
                    regular: "scale(0.6,0.6)",
                    small: "scale(0.3,0.3) translate(-40px,-20px)"
                }[t]
            };
            return Object(v.jsx)("div", {
                className: "d-flex justify-content-center",
                style: {
                    small: {
                        width: 30,
                        height: 30
                    }
                }[t],
                children: Object(v.jsxs)("div", {
                    className: A.a["lds-spinner"],
                    style: n,
                    children: [Object(v.jsx)("div", {}), Object(v.jsx)("div", {}), Object(v.jsx)("div", {}), Object(v.jsx)("div", {}), Object(v.jsx)("div", {}), Object(v.jsx)("div", {}), Object(v.jsx)("div", {}), Object(v.jsx)("div", {}), Object(v.jsx)("div", {}), Object(v.jsx)("div", {}), Object(v.jsx)("div", {}), Object(v.jsx)("div", {})]
                })
            })
        }
        M.defaultProps = {
            size: "regular"
        };
        var D = l.a.createContext({
            web3: null,
            bnbPrice: null,
            factoryContract: null,
            poocoinPrice: null,
            bnbLiquidity: null,
            tokenLiquidity: null,
            lpPrice: null,
            lpPrice2: null,
            lpBalance: null,
            lpBalance2: null,
            poocoinBalance: null,
            account: null,
            trackingWallet: null,
            setTrackingWallet: null,
            showPremium: null,
            setShowPremium: null,
            tokenPerLp: null,
            bnbPerLp: null,
            hasPremium: !1,
            hasPremium2: !1,
            hasPremium3: !1,
            blockInfo: null,
            walletWeb3: null,
            pancakeUrl: null,
            cache: {},
            setCache: null
        })
          , E = "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
          , R = p.poocoin[m.chainId]
          , U = function(e) {
            var t = e.children
              , n = Object(k.m)()
              , l = n.account
              , s = n.connect
              , o = n.ethereum
              , i = Object(a.useState)(new T.a(0))
              , _ = Object(r.a)(i, 2)
              , d = _[0]
              , c = _[1]
              , x = Object(a.useState)(new T.a(0))
              , O = Object(r.a)(x, 2)
              , F = O[0]
              , W = O[1]
              , N = Object(a.useState)(new T.a(0))
              , B = Object(r.a)(N, 2)
              , P = B[0]
              , L = B[1]
              , A = Object(a.useState)(new T.a(0))
              , U = Object(r.a)(A, 2)
              , H = U[0]
              , V = U[1]
              , q = Object(a.useState)(null)
              , z = Object(r.a)(q, 2)
              , G = z[0]
              , K = z[1]
              , Y = Object(a.useState)(null)
              , Z = Object(r.a)(Y, 2)
              , J = Z[0]
              , Q = Z[1]
              , X = Object(a.useState)(null)
              , $ = Object(r.a)(X, 2)
              , ee = $[0]
              , te = $[1]
              , ne = Object(a.useState)(null)
              , ae = Object(r.a)(ne, 2)
              , le = ae[0]
              , se = ae[1]
              , oe = Object(a.useState)(null)
              , re = Object(r.a)(oe, 2)
              , ie = re[0]
              , _e = re[1]
              , de = Object(a.useState)(null)
              , ce = Object(r.a)(de, 2)
              , me = ce[0]
              , pe = ce[1]
              , xe = Object(a.useState)(null)
              , ue = Object(r.a)(xe, 2)
              , be = ue[0]
              , ke = ue[1]
              , he = Object(a.useState)(null)
              , Te = Object(r.a)(he, 2)
              , fe = Te[0]
              , ge = Te[1]
              , ye = S()
              , je = Object(a.useMemo)((function() {
                return new I.a.providers.HttpProvider(ye,{
                    keepAlive: !0,
                    withCredentials: !1,
                    timeout: 6e4
                })
            }
            ), [ye])
              , we = Object(a.useState)(null)
              , Oe = Object(r.a)(we, 2)
              , ve = Oe[0]
              , Ce = Oe[1]
              , Fe = Object(a.useState)(null)
              , We = Object(r.a)(Fe, 2)
              , Ne = We[0]
              , Be = We[1]
              , Se = Object(a.useState)(null)
              , Pe = Object(r.a)(Se, 2)
              , Ie = Pe[0]
              , Le = Pe[1]
              , Ae = Object(a.useRef)(!1)
              , Me = Object(a.useRef)(null)
              , De = Object(a.useState)(!1)
              , Ee = Object(r.a)(De, 2)
              , Re = Ee[0]
              , Ue = Ee[1]
              , He = Object(a.useState)(null)
              , Ve = Object(r.a)(He, 2)
              , qe = Ve[0]
              , ze = Ve[1]
              , Ge = Object(a.useState)(null)
              , Ke = Object(r.a)(Ge, 2)
              , Ye = Ke[0]
              , Ze = Ke[1]
              , Je = Object(a.useState)(!1)
              , Qe = Object(r.a)(Je, 2)
              , Xe = Qe[0]
              , $e = Qe[1]
              , et = Object(a.useState)(!1)
              , tt = Object(r.a)(et, 2)
              , nt = tt[0]
              , at = tt[1]
              , lt = Object(a.useState)(!1)
              , st = Object(r.a)(lt, 2)
              , ot = st[0]
              , rt = st[1]
              , it = Object(a.useState)(null)
              , _t = Object(r.a)(it, 2)
              , dt = _t[0]
              , ct = _t[1]
              , mt = Object(a.useState)({})
              , pt = Object(r.a)(mt, 2)
              , xt = pt[0]
              , ut = pt[1]
              , bt = Object(a.useContext)(C).lpVersion
              , kt = "2" === bt ? "https://exchange.pancakeswap.finance" : "https://v1exchange.pancakeswap.finance"
              , ht = "2" === bt ? p.poocoinBnbLp2[m.chainId] : p.poocoinBnbLp[m.chainId]
              , Tt = Object(a.useMemo)((function() {
                return function() {
                    var e = Object(b.a)(u.a.mark((function e(t, n) {
                        var a, l, s, o, r, i;
                        return u.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (Re) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return a = new ve.Contract(y,p.mulltiCall[m.chainId]),
                                    l = new h.b(t),
                                    s = n.map((function(e) {
                                        return [e.address.toLowerCase(), l.encodeFunctionData(e.name, e.params)]
                                    }
                                    )),
                                    e.next = 7,
                                    a.methods.aggregate(s).call();
                                case 7:
                                    return o = e.sent,
                                    r = o.returnData,
                                    i = r.map((function(e, t) {
                                        return l.decodeFunctionResult(n[t].name, e)
                                    }
                                    )),
                                    e.abrupt("return", i);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }
            ), [ve, Re]);
            return Object(a.useEffect)((function() {
                var e = new I.a(je);
                e.eth.getBlock("latest").then((function(e) {
                    return ct(e)
                }
                )),
                Ce(e.eth),
                Le(new e.eth.Contract(g,"2" === bt ? p.factory2[m.chainId] : p.factory[m.chainId]))
            }
            ), [je, bt]),
            Object(a.useEffect)((function() {
                if (o) {
                    var e = new I.a(o);
                    Be(e.eth)
                } else
                    Be(null)
            }
            ), [o]),
            Object(a.useEffect)((function() {
                if (!Ae.current && Tt && Re) {
                    Ae.current = !0,
                    t();
                    var e = setInterval((function() {
                        t()
                    }
                    ), 1e4);
                    return function() {
                        Ae.current = !1,
                        clearInterval(e)
                    }
                }
                function t() {
                    return n.apply(this, arguments)
                }
                function n() {
                    return (n = Object(b.a)(u.a.mark((function e() {
                        var t, n, a, l, s, o, i, _, d, x, b, k, h, f, g, y, j, O, v, C, F, N, B;
                        return u.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Tt(w, [{
                                        address: p.poocoinBnbLp[m.chainId],
                                        name: "getReserves"
                                    }, {
                                        address: p.poocoinBnbLp[m.chainId],
                                        name: "totalSupply"
                                    }, {
                                        address: E,
                                        name: "getReserves"
                                    }, {
                                        address: p.poocoinBnbLp2[m.chainId],
                                        name: "getReserves"
                                    }, {
                                        address: p.poocoinBnbLp2[m.chainId],
                                        name: "totalSupply"
                                    }]).catch((function() {}
                                    ));
                                case 2:
                                    t = e.sent,
                                    n = Object(r.a)(t, 5),
                                    a = n[0],
                                    l = Object(r.a)(n[1], 1),
                                    s = l[0],
                                    o = n[2],
                                    i = n[3],
                                    _ = Object(r.a)(n[4], 1),
                                    d = _[0],
                                    x = new T.a(o[1].toString()).div(new T.a(o[0].toString())),
                                    b = new T.a(0),
                                    k = new T.a(0),
                                    h = new T.a(s.toString()).div(new T.a(10).pow(18)),
                                    f = new T.a(d.toString()).div(new T.a(10).pow(18)),
                                    g = new T.a(a[0].toString()).div(new T.a(10).pow(8)),
                                    y = new T.a(a[1].toString()).div(new T.a(10).pow(18)),
                                    j = new T.a(i[0].toString()).div(new T.a(10).pow(8)),
                                    O = new T.a(i[1].toString()).div(new T.a(10).pow(18)),
                                    b = (b = y.div(g)).times(R !== p.wbnb[m.chainId] ? x : 1),
                                    k = (k = O.div(j)).times(R !== p.wbnb[m.chainId] ? x : 1),
                                    v = g.div(h),
                                    C = y.div(h),
                                    F = v.times(b).times(2),
                                    N = j.div(f),
                                    B = N.times(k).times(2),
                                    c(x),
                                    L(new T.a(i[1].toString())),
                                    V(new T.a(i[0].toString())),
                                    W(y.gt(O) ? b : k),
                                    K(F),
                                    Q(B),
                                    te(v),
                                    se(C);
                                case 30:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
            }
            ), [Tt, Re, ht]),
            Object(a.useEffect)((function() {
                function e() {
                    return (e = Object(b.a)(u.a.mark((function e() {
                        var t, n, a, s, o, i;
                        return u.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Tt(f, [{
                                        address: R,
                                        name: "balanceOf",
                                        params: [l]
                                    }, {
                                        address: p.poocoinBnbLp[m.chainId],
                                        name: "balanceOf",
                                        params: [l]
                                    }, {
                                        address: p.poocoinBnbLp2[m.chainId],
                                        name: "balanceOf",
                                        params: [l]
                                    }]).catch((function(e) {
                                        return console.log(e)
                                    }
                                    ));
                                case 2:
                                    return t = e.sent,
                                    n = Object(r.a)(t, 3),
                                    a = n[0],
                                    s = n[1],
                                    o = n[2],
                                    e.next = 6,
                                    Tt(j, [{
                                        address: p.topHolders2[m.chainId],
                                        name: "userInfo",
                                        params: [0, l]
                                    }]);
                                case 6:
                                    i = e.sent,
                                    ge(new T.a(a[0].toString()).div(new T.a(10).pow(8))),
                                    _e(new T.a(s[0].toString()).div(new T.a(10).pow(18))),
                                    pe(new T.a(o[0].toString()).div(new T.a(10).pow(18))),
                                    ke(new T.a(i[0].toString()).div(new T.a(10).pow(18)));
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                Re && l && Tt && Me.current !== l && (Me.current = l,
                function() {
                    e.apply(this, arguments)
                }())
            }
            ), [l, Tt, Re, ht]),
            Object(a.useEffect)((function() {
                if (!l) {
                    var e = window.localStorage.getItem("accountStatus");
                    "injected" === e ? s(e).then((function() {
                        return Ue(!0)
                    }
                    )) : "bsc" === e ? setTimeout((function() {
                        return s(e).then((function() {
                            return Ue(!0)
                        }
                        ))
                    }
                    ), 500) : Ue(!0)
                }
            }
            ), [l, s]),
            Object(a.useEffect)((function() {
                var e = null === ie || void 0 === ie ? void 0 : ie.plus(be)
                  , t = null === e || void 0 === e ? void 0 : e.times(G)
                  , n = null === me || void 0 === me ? void 0 : me.times(J)
                  , a = null === t || void 0 === t ? void 0 : t.plus(n);
                (null === a || void 0 === a ? void 0 : a.gt(100)) ? $e(!0) : $e(!1),
                (null === a || void 0 === a ? void 0 : a.gt(300)) ? at(!0) : at(!1),
                (null === a || void 0 === a ? void 0 : a.gt(2e3)) ? rt(!0) : rt(!1),
                m.alwaysPremium && ($e(!0),
                at(!0),
                rt(!0))
            }
            ), [ie, me, G, J, be]),
            ve && Re && dt && Ie && !d.isZero() && le ? Object(v.jsx)(D.Provider, {
                value: {
                    web3: ve,
                    bnbPrice: d,
                    factoryContract: Ie,
                    poocoinPrice: F,
                    bnbLiquidity: P,
                    tokenLiquidity: H,
                    lpPrice: G,
                    lpPrice2: J,
                    lpBalance: ie,
                    lpBalance2: me,
                    poocoinBalance: fe,
                    account: l,
                    trackingWallet: qe,
                    setTrackingWallet: ze,
                    showPremium: Ye,
                    setShowPremium: Ze,
                    tokenPerLp: ee,
                    bnbPerLp: le,
                    hasPremium: Xe,
                    hasPremium2: nt,
                    hasPremium3: ot,
                    blockInfo: dt,
                    walletWeb3: Ne,
                    pancakeUrl: kt,
                    cache: xt,
                    setCache: ut
                },
                children: t
            }) : Object(v.jsxs)("div", {
                className: "d-flex flex-column justify-content-center align-items-center flex-grow-1 h-100",
                children: [Object(v.jsx)("div", {
                    children: Object(v.jsx)("img", {
                        height: 50,
                        width: 50,
                        src: "/images/logo/poocoin512.png",
                        alt: ""
                    })
                }), Object(v.jsx)("div", {
                    children: Object(v.jsx)(M, {
                        size: "small"
                    })
                })]
            })
        }
          , H = n(140)
          , V = n.n(H)
          , q = n(28)
          , z = n(255)
          , G = n.n(z)
          , K = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)"
            }
        };
        function Y() {
            var e = Object(k.m)()
              , t = e.reset
              , n = e.connect
              , l = e.account
              , s = e.status
              , o = "accountStatus"
              , i = Object(a.useState)(!1)
              , _ = Object(r.a)(i, 2)
              , d = _[0]
              , c = _[1]
              , x = Object(a.useState)("")
              , u = Object(r.a)(x, 2)
              , b = u[0]
              , h = u[1]
              , f = Object(a.useContext)(D)
              , g = f.lpPrice
              , y = f.poocoinPrice
              , j = f.bnbLiquidity
              , w = f.bnbPrice
              , O = f.poocoinBalance
              , C = f.lpBalance
              , F = f.lpBalance2
              , W = f.lpPrice2
              , N = p.poocoin[m.chainId]
              , B = function(e) {
                h(e),
                n(e),
                c(!1)
            };
            return Object(a.useEffect)((function() {
                l && b && window.localStorage.setItem(o, b)
            }
            ), [l, b]),
            Object(v.jsxs)("nav", {
                className: "".concat(G.a.nav, " bg-dark py-2 text-center shadow shadow-sm text-light"),
                children: [Object(v.jsx)("div", {
                    className: "container px-xl-0",
                    children: Object(v.jsxs)("div", {
                        className: "row justify-content-center align-items-center",
                        children: [Object(v.jsxs)("div", {
                            className: "mb-lg-0 col-lg-3 text-lg-left d-flex justify-content-center",
                            "data-aos-duration": "600",
                            "data-aos": "fade-down",
                            "data-aos-delay": "300",
                            children: [Object(v.jsxs)(q.c, {
                                to: "/",
                                className: "".concat(G.a.logo, " d-flex justify-content-center text-light"),
                                children: [Object(v.jsx)("img", {
                                    src: "/images/logo/poocoin512.png",
                                    className: "me-2",
                                    height: 30
                                }), Object(v.jsxs)("span", {
                                    className: "text-small lh-1",
                                    style: {
                                        paddingTop: 2
                                    },
                                    children: ["PooCoin", Object(v.jsx)("br", {}), "Charts"]
                                })]
                            }), Object(v.jsxs)(q.c, {
                                to: "/tokens/".concat(N),
                                style: {
                                    lineHeight: 1
                                },
                                className: "ps-3 d-flex align-items-center text-small text-muted ms-3",
                                children: [Object(v.jsx)("span", {
                                    className: "bg-white border border-secondary p-1",
                                    style: {
                                        borderRadius: 999
                                    },
                                    children: Object(v.jsx)("img", {
                                        src: "/images/logo/poocoin512.png",
                                        height: 18
                                    })
                                }), Object(v.jsxs)("span", {
                                    className: "text-success ps-1",
                                    children: ["$", null === y || void 0 === y ? void 0 : y.toFormat(2)]
                                })]
                            }), Object(v.jsx)("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://t.me/poocointokenchat",
                                children: Object(v.jsx)("img", {
                                    src: "/images/logos/telegram.svg",
                                    height: 25
                                })
                            })]
                        }), Object(v.jsxs)("div", {
                            className: "col-lg-5 mt-3 mt-lg-0 main-nav",
                            "data-aos-duration": "600",
                            "data-aos": "fade-down",
                            "data-aos-delay": "0",
                            children: [Object(v.jsx)(q.c, {
                                exact: !0,
                                to: "/",
                                className: "btn btn-sm btn-link shadow-0 mx-3",
                                children: "Charts"
                            }), Object(v.jsxs)(q.c, {
                                exact: !0,
                                to: "/multi-chart",
                                className: "btn btn-sm btn-link shadow-0 mx-3",
                                children: ["Multi Chart ", Object(v.jsx)("span", {
                                    className: "text-success text-xs",
                                    children: "(New)"
                                })]
                            }), Object(v.jsx)(q.c, {
                                exact: !0,
                                to: "/poocoin",
                                className: "btn btn-sm btn-link shadow-0 mx-3",
                                children: "Buy PooCoin"
                            }), Object(v.jsxs)(q.c, {
                                exact: !0,
                                to: "/trending",
                                className: "btn btn-sm btn-link shadow-0 mx-3",
                                children: ["Trending ", Object(v.jsx)("span", {
                                    className: "text-success text-xs",
                                    children: "(New)"
                                })]
                            }), Object(v.jsx)(q.c, {
                                exact: !0,
                                to: "/tools",
                                className: "btn btn-sm btn-link shadow-0 mx-3",
                                children: "Tools"
                            }), Object(v.jsx)(q.c, {
                                exact: !0,
                                to: "/premium",
                                className: "btn btn-sm btn-link shadow-0 mx-3",
                                children: "Premium"
                            }), Object(v.jsx)(q.c, {
                                exact: !0,
                                to: "/promote",
                                className: "btn btn-sm btn-link shadow-0 mx-3",
                                children: "Promote"
                            })]
                        }), Object(v.jsx)("div", {
                            className: "mt-2 mt-lg-0 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center",
                            "data-aos-duration": "600",
                            "data-aos": "fade-down",
                            "data-aos-delay": "300",
                            children: "connected" === s ? Object(v.jsxs)(v.Fragment, {
                                children: [Object(v.jsxs)("div", {
                                    className: "me-2 ms-3 font-size-sm d-flex flex-column text-start",
                                    children: [Object(v.jsxs)("a", {
                                        style: {
                                            lineHeight: 1
                                        },
                                        className: "text-muted",
                                        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=".concat(N),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: ["Your ", Object(v.jsx)("img", {
                                            src: "/images/logo/poocoin512.png",
                                            height: 18
                                        }), ": ", null === O || void 0 === O ? void 0 : O.toFormat(0), " ", O && !(null === O || void 0 === O ? void 0 : O.isNaN()) && Object(v.jsxs)("span", {
                                            className: "text-success",
                                            children: ["$", T.a.min(null === y || void 0 === y ? void 0 : y.times(O), null === w || void 0 === w ? void 0 : w.times(j).div(new T.a(10).pow(18))).toFormat(2)]
                                        })]
                                    }), Object(v.jsxs)("a", {
                                        style: {
                                            lineHeight: 1
                                        },
                                        className: "text-muted",
                                        href: "https://v1exchange.pancakeswap.finance/#/add/BNB/".concat(N),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: ["Your", " ", Object(v.jsxs)("div", {
                                            className: "d-inline-block position-relative",
                                            style: {
                                                width: 28,
                                                height: 18
                                            },
                                            children: [Object(v.jsx)("img", {
                                                style: {
                                                    position: "absolute",
                                                    top: 1,
                                                    left: 5
                                                },
                                                src: "/images/logos/bnb.svg",
                                                height: 18
                                            }), Object(v.jsx)("img", {
                                                style: {
                                                    position: "absolute",
                                                    top: 1,
                                                    left: 0
                                                },
                                                src: "/images/logo/poocoin512.png",
                                                height: 18
                                            })]
                                        }), "LP V1: ", null === C || void 0 === C ? void 0 : C.toFormat(6), " ", Object(v.jsxs)("span", {
                                            className: "text-success",
                                            children: ["$", null === C || void 0 === C ? void 0 : C.times(g).toFormat(2)]
                                        })]
                                    }), Object(v.jsxs)("a", {
                                        style: {
                                            lineHeight: 1
                                        },
                                        className: "text-muted",
                                        href: "https://exchange.pancakeswap.finance/#/add/BNB/".concat(N),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: ["Your", " ", Object(v.jsxs)("div", {
                                            className: "d-inline-block position-relative",
                                            style: {
                                                width: 28,
                                                height: 18
                                            },
                                            children: [Object(v.jsx)("img", {
                                                style: {
                                                    position: "absolute",
                                                    top: 1,
                                                    left: 5
                                                },
                                                src: "/images/logos/bnb.svg",
                                                height: 18
                                            }), Object(v.jsx)("img", {
                                                style: {
                                                    position: "absolute",
                                                    top: 1,
                                                    left: 0
                                                },
                                                src: "/images/logo/poocoin512.png",
                                                height: 18
                                            })]
                                        }), "LP V2: ", null === F || void 0 === F ? void 0 : F.toFormat(6), " ", Object(v.jsxs)("span", {
                                            className: "text-success",
                                            children: ["$", null === F || void 0 === F ? void 0 : F.times(W).toFormat(2)]
                                        })]
                                    })]
                                }), Object(v.jsx)("button", {
                                    className: "btn btn-sm rounded btn-light mx-1 mt-xl-0 mt-2",
                                    onClick: function() {
                                        window.localStorage.removeItem(o),
                                        t()
                                    },
                                    children: "Logout"
                                })]
                            }) : Object(v.jsx)("button", {
                                className: "btn btn-sm rounded btn-light",
                                onClick: function() {
                                    return c(!0)
                                },
                                children: "Connect"
                            })
                        })]
                    })
                }), Object(v.jsx)(V.a, {
                    style: K,
                    isOpen: d,
                    onRequestClose: function() {
                        return c(!1)
                    },
                    children: Object(v.jsxs)("div", {
                        className: "d-flex flex-column",
                        children: [Object(v.jsx)("button", {
                            className: "btn btn-dark mb-2",
                            onClick: function() {
                                return B("injected")
                            },
                            children: "Metamask / TrustWallet"
                        }), Object(v.jsx)("button", {
                            className: "btn btn-dark mb-2",
                            onClick: function() {
                                return B("bsc")
                            },
                            children: "Binance Chain Wallet"
                        }), Object(v.jsx)("button", {
                            className: "btn btn-dark",
                            onClick: function() {
                                return c(!1)
                            },
                            children: "Close"
                        })]
                    })
                })]
            })
        }
        var Z = n(187);
        function J(e) {
            var t = e.children
              , n = e.title;
            return Object(v.jsxs)(v.Fragment, {
                children: [Object(v.jsx)(Z.a, {
                    children: Object(v.jsx)("title", {
                        children: n
                    })
                }), Object(v.jsx)("div", {
                    className: "container flex-grow-1",
                    children: t
                })]
            })
        }
        function Q() {
            return Object(v.jsx)(J, {
                children: Object(v.jsxs)("div", {
                    children: [Object(v.jsx)("iframe", {
                        "data-aa": "1602827",
                        src: "//ad.a-ads.com/1602827?size=320x100",
                        scrolling: "no",
                        style: {
                            width: 320,
                            height: 100,
                            border: 0,
                            padding: 0,
                            overflow: "hidden"
                        }
                    }), Object(v.jsx)("iframe", {
                        "data-aa": "1604625",
                        src: "//ad.a-ads.com/1604625?size=300x250",
                        scrolling: "no",
                        className: "ms-3",
                        style: {
                            width: 300,
                            height: 250,
                            border: 0,
                            padding: 0,
                            overflow: "hidden"
                        }
                    })]
                })
            })
        }
        J.defaultProps = {
            title: "PooCoin BSC Charts"
        };
        var X = n(112);
        function $(e) {
            var t = e.small
              , n = Object(X.a)()
              , l = Object(a.useContext)(D).hasPremium
              , s = Object(a.useContext)(C).disableAds;
            return !l || !s ? Object(v.jsxs)(v.Fragment, {
                children: [n >= 1200 && Object(v.jsxs)(v.Fragment, {
                    children: [t && Object(v.jsxs)("div", {
                        className: "d-flex flex-grow-1 justify-content-center",
                        children: [Object(v.jsx)("div", {
                            className: "text-center mx-2",
                            children: Object(v.jsx)("iframe", {
                                "data-aa": "1602827",
                                src: "//ad.a-ads.com/1602827?size=320x100",
                                scrolling: "no",
                                style: {
                                    width: 320,
                                    height: 100,
                                    border: 0,
                                    padding: 0,
                                    overflow: "hidden"
                                }
                            })
                        }), Object(v.jsx)("div", {
                            className: "text-center mx-2",
                            children: Object(v.jsx)("iframe", {
                                "data-aa": "1602827",
                                src: "//ad.a-ads.com/1602827?size=320x100",
                                scrolling: "no",
                                style: {
                                    width: 320,
                                    height: 100,
                                    border: 0,
                                    padding: 0,
                                    overflow: "hidden"
                                }
                            })
                        })]
                    }), !t && Object(v.jsx)("iframe", {
                        "data-aa": "1604690",
                        src: "//ad.a-ads.com/1604690?size=970x250",
                        scrolling: "no",
                        style: {
                            width: 970,
                            height: 250,
                            border: 0,
                            padding: 0,
                            overflow: "hidden"
                        }
                    })]
                }), n < 1200 && Object(v.jsxs)("div", {
                    className: "d-flex flex-grow-1 justify-content-center",
                    children: [Object(v.jsx)("div", {
                        className: "text-center mb-2 mx-2",
                        children: Object(v.jsx)("iframe", {
                            "data-aa": "1604350",
                            src: "//ad.a-ads.com/1604350?size=120x60",
                            scrolling: "no",
                            style: {
                                width: 120,
                                height: 60,
                                border: 0,
                                padding: 0,
                                overflow: "hidden"
                            }
                        })
                    }), Object(v.jsx)("div", {
                        className: "text-center mb-2 mx-2",
                        children: Object(v.jsx)("iframe", {
                            "data-aa": "1604350",
                            src: "//ad.a-ads.com/1604350?size=120x60",
                            scrolling: "no",
                            style: {
                                width: 120,
                                height: 60,
                                border: 0,
                                padding: 0,
                                overflow: "hidden"
                            }
                        })
                    })]
                })]
            }) : Object(v.jsx)(v.Fragment, {})
        }
        $.defaultProps = {
            small: !1
        };
        var ee = n(19)
          , te = n(421)
          , ne = n(142)
          , ae = n.n(ne)
          , le = m.graphqlUrl;
        var se = 'query GetCandleData(\n  $baseCurrency: String!,\n  $since: ISO8601DateTime,\n  $till: ISO8601DateTime,\n  $quoteCurrency: String!,\n  $exchangeAddresses: [String!]\n  $minTrade: Float\n  $window: Int) {\n    ethereum(network: bsc) {\n        dexTrades(\n            options: {asc: "timeInterval.minute"}\n            date: {since: $since, till: $till}\n            exchangeAddress: {in: $exchangeAddresses}\n            baseCurrency: {is: $baseCurrency}\n            quoteCurrency: {is: $quoteCurrency} # WBNB\n            tradeAmountUsd: {gt: $minTrade}\n        ) {\n            timeInterval {\n                minute(count: $window, format: "%Y-%m-%dT%H:%M:%SZ")\n            }\n            baseCurrency {\n                symbol\n                address\n            }\n            quoteCurrency {\n                symbol\n                address\n            }\n\n            tradeAmount(in: USD)\n            trades: count\n            quotePrice\n            maximum_price: quotePrice(calculate: maximum)\n            minimum_price: quotePrice(calculate: minimum)\n            open_price: minimum(of: block, get: quote_price)\n            close_price: maximum(of: block, get: quote_price)\n        }\n    }\n}\n';
        function oe(e, t, n, a, l) {
            return re.apply(this, arguments)
        }
        function re() {
            return (re = Object(b.a)(u.a.mark((function e(t, n, a, l, s) {
                var o, i, _, d, c, m, p, x, b = arguments;
                return u.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return o = b.length > 5 && void 0 !== b[5] ? b[5] : 10,
                            i = t.split("-"),
                            _ = Object(r.a)(i, 2),
                            d = _[0],
                            c = _[1],
                            m = {
                                query: se,
                                variables: {
                                    baseCurrency: d,
                                    quoteCurrency: c,
                                    since: be(n),
                                    till: be(a),
                                    window: l,
                                    exchangeAddresses: s,
                                    minTrade: o
                                }
                            },
                            e.next = 5,
                            fetch(le, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(m)
                            });
                        case 5:
                            return p = e.sent,
                            e.next = 8,
                            p.json();
                        case 8:
                            return x = e.sent,
                            e.abrupt("return", ke(x.data.ethereum.dexTrades, d));
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function ie(e) {
            return _e.apply(this, arguments)
        }
        function _e() {
            return (_e = Object(b.a)(u.a.mark((function e(t) {
                var n, a, l;
                return u.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = {
                                search: t,
                                l: void 0
                            },
                            window.location.host.indexOf("localhost") > -1 && (n.l = 1),
                            a = ae.a.stringify(n),
                            e.next = 5,
                            fetch("".concat(m.cfUrl, "/tokens?").concat(a), {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        case 5:
                            return l = e.sent,
                            e.abrupt("return", l.json());
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function de() {
            return ce.apply(this, arguments)
        }
        function ce() {
            return (ce = Object(b.a)(u.a.mark((function e() {
                var t, n, a;
                return u.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = {
                                l: void 0
                            },
                            window.location.host.indexOf("localhost") > -1 && (t.l = 1),
                            n = ae.a.stringify(t),
                            e.next = 5,
                            fetch("".concat(m.cfUrl, "/rofl").concat(t.l ? "?".concat(n) : ""), {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        case 5:
                            return a = e.sent,
                            e.abrupt("return", a.json());
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function me(e) {
            return pe.apply(this, arguments)
        }
        function pe() {
            return (pe = Object(b.a)(u.a.mark((function e(t) {
                var n, a, l;
                return u.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = {
                                l: void 0,
                                address: t
                            },
                            window.location.host.indexOf("localhost") > -1 && (n.l = 1),
                            a = ae.a.stringify(n),
                            e.next = 5,
                            fetch("".concat(m.cfUrl, "/top-holders?").concat(a), {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        case 5:
                            return l = e.sent,
                            e.abrupt("return", l.json());
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function xe(e) {
            return ue.apply(this, arguments)
        }
        function ue() {
            return (ue = Object(b.a)(u.a.mark((function e(t) {
                var n, a, l, s;
                return u.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return "query($tokens: [String!]) {\n    ethereum(network: bsc) {\n      address(address: {in: $tokens}){\n        address\n        smartContract {\n          currency{\n            symbol\n            name\n          }\n        }\n      }\n    }\n  }",
                            n = t.filter((function(e) {
                                return I.a.utils.isAddress(e)
                            }
                            )),
                            a = {
                                query: "query($tokens: [String!]) {\n    ethereum(network: bsc) {\n      address(address: {in: $tokens}){\n        address\n        smartContract {\n          currency{\n            symbol\n            name\n          }\n        }\n      }\n    }\n  }",
                                variables: {
                                    tokens: n
                                }
                            },
                            e.next = 5,
                            fetch(le, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(a)
                            });
                        case 5:
                            return l = e.sent,
                            e.next = 8,
                            l.json();
                        case 8:
                            return s = e.sent,
                            e.abrupt("return", s);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function be(e) {
            return new Date(1e3 * e).toISOString()
        }
        function ke(e, t) {
            var n = [];
            return null === e || void 0 === e || e.forEach((function(a, l) {
                var s = {
                    time: Date.parse(a.timeInterval.minute),
                    open: l > 0 ? n[l - 1].close : new T.a(a.open_price).toNumber(),
                    close: new T.a(a.close_price).toNumber(),
                    low: a.minimum_price,
                    high: a.maximum_price,
                    volume: a.trades,
                    tradeAmount: a.tradeAmount
                };
                l > 0 && ((s.high > 1.2 * a.quotePrice || s.high < .8 * a.quotePrice) && (s.high = T.a.max(s.open, s.close)),
                (s.low < .8 * a.quotePrice || s.low < .8 * a.quotePrice) && (s.low = T.a.min(s.open, s.close)),
                (s.close > 1.2 * a.quotePrice || s.close < .8 * a.quotePrice) && (s.close = a.quotePrice,
                s.high = T.a.max(s.open, s.close),
                s.low = T.a.min(s.open, s.close))),
                t === p.poocoin[m.chainId] && a.maximum_price > 800 && (s.close = e[l - 1].close,
                s.high = e[l - 1].high,
                s.low = e[l - 1].low,
                s.open = e[l - 1].low),
                n.push(s)
            }
            )),
            n
        }
        function he(e, t) {
            return Te.apply(this, arguments)
        }
        function Te() {
            return (Te = Object(b.a)(u.a.mark((function e(t, n) {
                var a, l, s;
                return u.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = {
                                l: void 0,
                                address: n,
                                wallet: t
                            },
                            window.location.host.indexOf("localhost") > -1 && (a.l = 1),
                            l = ae.a.stringify(a),
                            e.next = 5,
                            fetch("".concat(m.cfUrl, "/wallet-tx?").concat(l), {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        case 5:
                            return s = e.sent,
                            e.abrupt("return", s.json());
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function fe(e) {
            return ge.apply(this, arguments)
        }
        function ge() {
            return (ge = Object(b.a)(u.a.mark((function e(t) {
                var n, a, l, s, o;
                return u.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.age,
                            a = t.premium,
                            l = {
                                age: n
                            },
                            a && (l[13] = 37),
                            e.next = 5,
                            fetch("".concat(m.cfUrl, "/top-requests"), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(l)
                            });
                        case 5:
                            return s = e.sent,
                            e.next = 8,
                            s.json();
                        case 8:
                            return o = e.sent,
                            e.abrupt("return", o.data);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function ye(e) {
            return je.apply(this, arguments)
        }
        function je() {
            return (je = Object(b.a)(u.a.mark((function e(t) {
                var n, a, l, s;
                return u.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.token,
                            a = {
                                token: n
                            },
                            e.next = 4,
                            fetch("".concat(m.cfUrl, "/token-visits"), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(a)
                            });
                        case 4:
                            return l = e.sent,
                            e.next = 7,
                            l.json();
                        case 7:
                            return s = e.sent,
                            e.abrupt("return", s.data);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var we = n(26)
          , Oe = n.n(we);
        function ve(e) {
            var t = e.onSubmit
              , n = e.defaultValue
              , l = Object(a.useState)(n)
              , s = Object(r.a)(l, 2)
              , o = s[0]
              , i = s[1]
              , _ = Object(a.useRef)(null)
              , d = Object(a.useState)(!1)
              , c = Object(r.a)(d, 2)
              , m = c[0]
              , p = c[1];
            Object(a.useEffect)((function() {
                i(n)
            }
            ), [n]);
            var x = function() {
                var e = Object(b.a)(u.a.mark((function e(t) {
                    var n;
                    return u.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && !(t.length < 2)) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", []);
                            case 2:
                                return e.next = 4,
                                new Promise((function(e) {
                                    clearTimeout(_.current),
                                    _.current = setTimeout(e, 300)
                                }
                                ));
                            case 4:
                                return e.next = 6,
                                ie(t);
                            case 6:
                                if ((n = e.sent).length || !Object(we.isAddress)(t)) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", [{
                                    label: t.toLowerCase(),
                                    value: t.toLowerCase()
                                }]);
                            case 9:
                                return e.abrupt("return", n.map((function(e) {
                                    return {
                                        label: "".concat(e.name, " (").concat(e.symbol, ")"),
                                        value: e.address
                                    }
                                }
                                )));
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return Object(v.jsxs)("form", {
                onSubmit: function(e) {
                    e.preventDefault(),
                    o && t(o)
                },
                className: "d-flex",
                children: [Object(v.jsxs)("div", {
                    className: "input-group",
                    style: {
                        minWidth: 250
                    },
                    children: [!m && Object(v.jsx)(te.a, {
                        placeholder: "Enter token name / address...",
                        styles: {
                            container: function() {
                                return {
                                    fontSize: 14,
                                    flexGrow: 1,
                                    zIndex: 20,
                                    color: "#333"
                                }
                            },
                            placeholder: function(e) {
                                return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                    pointerEvents: "none",
                                    userSelect: "none",
                                    MozUserSelect: "none",
                                    WebkitUserSelect: "none",
                                    msUserSelect: "none"
                                })
                            },
                            input: function(e) {
                                return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                    flex: "1 1 auto",
                                    "> div": {
                                        width: "100%"
                                    },
                                    input: {
                                        width: "100% !important",
                                        textAlign: "left"
                                    }
                                })
                            }
                        },
                        cacheOptions: !0,
                        defaultOptions: !0,
                        loadOptions: x,
                        onChange: function(e) {
                            var n = e.value;
                            t(n)
                        }
                    }), m && Object(v.jsxs)(v.Fragment, {
                        children: [Object(v.jsx)("input", {
                            type: "text",
                            className: "form-control",
                            onChange: function(e) {
                                var t = e.target.value;
                                return i(t)
                            },
                            value: o,
                            placeholder: "Token Address..."
                        }), Object(v.jsx)("button", {
                            className: "btn btn-sm btn-success",
                            disabled: !o,
                            children: "Go"
                        })]
                    })]
                }), Object(v.jsx)("button", {
                    onClick: function() {
                        return p(!m)
                    },
                    className: "btn btn-light btn-sm ms-1",
                    children: Object(v.jsx)("i", {
                        className: "far fa-edit"
                    })
                })]
            })
        }
        ve.defaultProps = {
            onSubmit: function() {},
            defaultValue: ""
        };
        var Ce = n(35)
          , Fe = n(57)
          , We = n(188)
          , Ne = n(159)
          , Be = function() {
            return Object(a.useContext)(D).web3
        };
        function Se(e, t, n) {
            var l = Be()
              , s = Object(a.useState)(void 0)
              , o = Object(r.a)(s, 2)
              , i = o[0]
              , _ = o[1];
            return Object(a.useEffect)((function() {
                var a = t;
                "-" === t && (a = p.wbnb[m.chainId]),
                Object(we.isAddress)(a) && _(new l.Contract(e,a,n))
            }
            ), [e, t, n, l]),
            i
        }
        function Pe() {
            var e = Be();
            return Object(a.useMemo)((function() {
                return function() {
                    var t = Object(b.a)(u.a.mark((function t(n, a) {
                        var l, s, o, r, i, _;
                        return u.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return l = new e.Contract(y,p.mulltiCall[m.chainId]),
                                    s = new h.b(n),
                                    o = a.map((function(e) {
                                        return [e.address.toLowerCase(), s.encodeFunctionData(e.name, e.params)]
                                    }
                                    )),
                                    t.next = 5,
                                    l.methods.aggregate(o).call();
                                case 5:
                                    return r = t.sent,
                                    i = r.returnData,
                                    _ = i.map((function(e, t) {
                                        return s.decodeFunctionResult(a[t].name, e)
                                    }
                                    )),
                                    t.abrupt("return", _);
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }()
            }
            ), [e])
        }
        function Ie(e) {
            return Le.apply(this, arguments)
        }
        function Le() {
            return (Le = Object(b.a)(u.a.mark((function e(t) {
                var n, a, l, s, o, r;
                return u.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            xe(t);
                        case 2:
                            if (n = e.sent) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", {});
                        case 5:
                            for (a = {},
                            l = 0; l < n.data.ethereum.address.length; l += 1)
                                o = n.data.ethereum.address[l],
                                r = o.address.toLowerCase(),
                                a[r] = Object(ee.a)(Object(ee.a)({}, null === (s = o.smartContract) || void 0 === s ? void 0 : s.currency), {}, {
                                    address: r
                                }),
                                "0xd07cb33d1c9d75349eb72359022d7be5d8350c0a" === r && (a[r].name = "Fortun",
                                a[r].symbol = "FTN");
                            return e.abrupt("return", a);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Ae, Me = l.a.createContext({
            promotedTokens: null,
            promotedTokenInfo: null,
            banners: null,
            whitelist: null,
            blacklist: null,
            highRiskList: null,
            highRiskTokenInfo: null,
            ready: !1
        }), De = function(e) {
            var t = e.children
              , n = Pe()
              , l = Object(a.useRef)(null)
              , s = Object(a.useState)(null)
              , o = Object(r.a)(s, 2)
              , i = o[0]
              , _ = o[1]
              , d = Object(a.useState)({})
              , c = Object(r.a)(d, 2)
              , x = c[0]
              , k = c[1]
              , h = Object(a.useState)(null)
              , f = Object(r.a)(h, 2)
              , g = f[0]
              , y = f[1]
              , w = Object(a.useState)(null)
              , O = Object(r.a)(w, 2)
              , C = O[0]
              , F = O[1]
              , W = Object(a.useState)(null)
              , N = Object(r.a)(W, 2)
              , B = N[0]
              , S = N[1]
              , P = Se(Ne, p.promoList[m.chainId])
              , I = Object(a.useState)(null)
              , L = Object(r.a)(I, 2)
              , A = L[0]
              , M = L[1]
              , D = Object(a.useState)({})
              , E = Object(r.a)(D, 2)
              , R = E[0]
              , U = E[1]
              , H = Object(a.useState)(!1)
              , V = Object(r.a)(H, 2)
              , q = V[0]
              , z = V[1];
            return Object(a.useEffect)((function() {
                function e() {
                    return (e = Object(b.a)(u.a.mark((function e() {
                        var t, a, l, s, o, i, d, c, x, b, h, f, g, w, O, v, C, W, N, B, I, L, A, D, E, R, H, V, q, G, K, Y, Z, J, Q, X;
                        return u.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    for (t = [],
                                    a = 0; a <= 9; a += 1)
                                        t.push({
                                            address: p.topHolders2[m.chainId],
                                            name: "holderInfo",
                                            params: [0, a]
                                        });
                                    return e.next = 4,
                                    n(j, t);
                                case 4:
                                    for (l = e.sent,
                                    s = l.reduce((function(e, t) {
                                        return Object(ee.a)(Object(ee.a)({}, e), {}, Object(Fe.a)({}, t.userAddress, t))
                                    }
                                    ), {}),
                                    l = Object.values(s),
                                    o = [],
                                    i = 0; i < l.length; i += 1)
                                        o.push({
                                            address: p.topHolders2[m.chainId],
                                            name: "userInfo",
                                            params: [0, l[i].userAddress]
                                        });
                                    return e.next = 11,
                                    n(j, o);
                                case 11:
                                    for (d = (d = e.sent).map((function(e, t) {
                                        return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                            userAddress: l[t].userAddress
                                        })
                                    }
                                    )).sort((function(e, t) {
                                        return t[0].gt(e[0]) ? 1 : -1
                                    }
                                    )).slice(0, 10),
                                    c = [],
                                    x = 0; x < d.length; x += 1)
                                        c.push({
                                            address: p.profile[m.chainId],
                                            name: "userInfo",
                                            params: [d[x].userAddress]
                                        });
                                    return e.next = 17,
                                    n(We, c);
                                case 17:
                                    return b = e.sent,
                                    h = b.map((function(e, t) {
                                        return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                            promotedAddress: e.promotedAddress.toLowerCase(),
                                            amount: new T.a(d[t][0].toString()),
                                            userAddress: d[t].userAddress.toLowerCase()
                                        })
                                    }
                                    )),
                                    e.next = 21,
                                    Ie(h.map((function(e) {
                                        return e.promotedAddress
                                    }
                                    )));
                                case 21:
                                    return f = e.sent,
                                    e.next = 24,
                                    Promise.all([fetch("/blacklist-tokens.json"), fetch("/whitelist1-tokens.json"), fetch("/promo-overrides.json")]);
                                case 24:
                                    return g = e.sent,
                                    w = Object(r.a)(g, 3),
                                    O = w[0],
                                    v = w[1],
                                    C = w[2],
                                    e.next = 31,
                                    O.json();
                                case 31:
                                    return W = e.sent,
                                    e.next = 34,
                                    v.json();
                                case 34:
                                    for (N = e.sent,
                                    B = [],
                                    I = 0; I < h.length; I += 1)
                                        "0x000" !== h[I].promotedAddress.substr(0, 5) && (L = h[I].promotedAddress.toLowerCase(),
                                        (A = N[L]) && A.banner && B.push(Object(ee.a)(Object(ee.a)({}, A), {}, {
                                            amount: h[I].amount
                                        })),
                                        f[L] && (f[L].blacklisted = W[L],
                                        f[L].pending = !A));
                                    return e.next = 39,
                                    C.json();
                                case 39:
                                    return D = e.sent,
                                    e.next = 42,
                                    P.methods.messageLength().call();
                                case 42:
                                    for (E = e.sent,
                                    R = [],
                                    H = [],
                                    V = E - 1; V >= 0 && V >= E - 10; V -= 1)
                                        R.push({
                                            address: p.promoList[m.chainId],
                                            name: "messages",
                                            params: [V]
                                        }),
                                        H.unshift(V);
                                    return e.next = 48,
                                    n(Ne, R);
                                case 48:
                                    return q = e.sent,
                                    G = [],
                                    K = q.map((function(e, t) {
                                        var n = Object(ee.a)({}, e)
                                          , a = H[t];
                                        return G.push(e.token),
                                        D[a] && D[a].token && (n.token = D[a].token,
                                        G.push(D[a].token)),
                                        D[a] && D[a].message && (n.message = D[a].message),
                                        n
                                    }
                                    )),
                                    e.next = 53,
                                    Ie(G);
                                case 53:
                                    for (Y = e.sent,
                                    Z = 0; Z < K.length; Z += 1)
                                        Q = null === (J = K[Z].token) || void 0 === J ? void 0 : J.toLowerCase(),
                                        X = K[Z].message,
                                        Y[Q] && (Y[Q].telegram = X,
                                        Y[Q].name = Y[Q].name,
                                        Y[Q].symbol = Y[Q].symbol);
                                    k(f),
                                    _(h),
                                    y(B),
                                    F(N),
                                    S(W),
                                    U(Y),
                                    M(K),
                                    z(!0);
                                case 63:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                n && !l.current && P && (l.current = !0,
                function() {
                    e.apply(this, arguments)
                }())
            }
            ), [n, P]),
            Object(v.jsx)(Me.Provider, {
                value: {
                    promotedTokens: i,
                    promotedTokenInfo: x,
                    banners: g,
                    whitelist: C,
                    blacklist: B,
                    highRiskList: A,
                    highRiskTokenInfo: R,
                    ready: q
                },
                children: t
            })
        }, Ee = n(189), Re = n(73), Ue = Object(Re.gql)(Ae || (Ae = Object(Ee.a)(["\n  query GetWalletTokens($network: EthereumNetwork!, $address: String!) {\n    ethereum(network: $network) {\n      address(address: { is: $address }) {\n        address\n        balances {\n          value\n          currency {\n            address\n            name\n            symbol\n            tokenType\n          }\n        }\n      }\n    }\n  }\n"]))), He = n(193), Ve = n.n(He);
        function qe(e, t) {
            var n = t.variables
              , l = t.skip
              , s = void 0 !== l && l
              , o = t.onCompleted
              , i = void 0 === o ? void 0 : o
              , _ = Object(a.useState)(!1)
              , d = Object(r.a)(_, 2)
              , c = d[0]
              , m = d[1]
              , p = Object(a.useState)(null)
              , x = Object(r.a)(p, 2)
              , u = x[0]
              , b = x[1]
              , k = Object(a.useState)(null)
              , h = Object(r.a)(k, 2)
              , T = h[0]
              , f = h[1]
              , g = Object(Re.useApolloClient)()
              , y = Object(a.useCallback)((function() {
                m(!0),
                b(n),
                g.query({
                    query: e,
                    variables: n
                }).then((function(e) {
                    var t = e.data;
                    f(t),
                    m(!1),
                    i && i(t)
                }
                )).catch((function() {
                    f(null)
                }
                ))
            }
            ), [g, i, e, n]);
            return Object(a.useEffect)((function() {
                Ve.a.isEqual(u, n) || s || y()
            }
            ), [y, s, n, u]),
            {
                loading: c,
                data: T,
                refetch: function() {
                    y()
                }
            }
        }
        var ze = n(412)
          , Ge = n(38)
          , Ke = n(414)
          , Ye = n.n(Ke);
        function Ze(e) {
            var t = e.data
              , n = e.isPromoted
              , l = e.isHidden
              , s = e.isStarred
              , o = e.isHistory
              , i = e.onOpen
              , _ = n ? {
                sortBy: ["rank"],
                sortDirection: {
                    rank: "ASC"
                }
            } : {
                sortBy: ["balancePriceFormatted"],
                sortDirection: {
                    balancePriceFormatted: "DESC"
                }
            }
              , d = !n && !l
              , c = !n && !s
              , m = Object(a.useState)(_)
              , p = Object(r.a)(m, 2)
              , x = p[0]
              , u = p[1]
              , b = Object(a.useState)(!1)
              , k = Object(r.a)(b, 2)
              , h = k[0]
              , T = k[1]
              , f = Object(a.useState)(null)
              , g = Object(r.a)(f, 2)
              , y = g[0]
              , j = g[1]
              , w = Object(a.useMemo)((function() {
                return Object(Ge.e)((function(e) {
                    var t = e.sortBy
                      , n = e.sortDirection;
                    u({
                        sortBy: t,
                        sortDirection: n
                    }),
                    T(!0)
                }
                ), {
                    defaultSortBy: ["balancePriceFormatted"],
                    defaultSortDirection: {
                        balancePriceFormatted: "DESC"
                    }
                })
            }
            ), [])
              , O = Object(a.useContext)(C)
              , F = O.starred
              , W = O.setStarred
              , N = O.deleted
              , B = O.setDeleted;
            Object(a.useEffect)((function() {
                var e = x.sortBy.map((function(e) {
                    var t;
                    return t = {},
                    Object(Fe.a)(t, x.sortDirection[e].toLowerCase(), e),
                    Object(Fe.a)(t, "comparer", new Intl.Collator(void 0,{
                        numeric: "symbol" !== e,
                        sensitivity: "base"
                    }).compare),
                    t
                }
                ))
                  , n = Object(ze.a)(t).by(e);
                j(n),
                T(!1)
            }
            ), [x, t, h]);
            var S = function(e) {
                var t = e.dataKey
                  , n = e.label
                  , a = d && w.sortBy.includes(t);
                return Object(v.jsxs)(v.Fragment, {
                    children: [Object(v.jsx)("span", {
                        title: n,
                        children: n
                    }), a && Object(v.jsx)(Ge.c, {
                        sortDirection: w.sortDirection[t]
                    })]
                })
            };
            return Object(v.jsx)("div", {
                className: "h-100 border shadow shadow-sm",
                children: Object(v.jsx)(Ge.a, {
                    children: function(e) {
                        var t = e.width
                          , n = e.height;
                        return Object(v.jsxs)(Ge.d, {
                            headerHeight: 25,
                            rowGetter: function(e) {
                                var t = e.index;
                                return y[t]
                            },
                            height: n,
                            rowHeight: 36,
                            rowCount: (null === y || void 0 === y ? void 0 : y.length) || 0,
                            width: t,
                            className: Ye.a.walletTokensTable,
                            sort: w.sort,
                            children: [Object(v.jsx)(Ge.b, {
                                disableSort: !d,
                                headerRenderer: S,
                                dataKey: "symbol",
                                width: l ? t : t / 2,
                                label: "Tokens",
                                cellRenderer: function(e) {
                                    var t, n, a = e.rowData;
                                    return i ? Object(v.jsxs)("span", {
                                        className: "text-light cursor-pointer no-select",
                                        onClick: function() {
                                            return i(a.address)
                                        },
                                        children: [a.symbol, " ", Object(v.jsx)("small", {
                                            className: "text-success",
                                            children: !!a.price && Object(v.jsxs)(v.Fragment, {
                                                children: ["$", null === (n = a.price) || void 0 === n ? void 0 : n.toFormat(4)]
                                            })
                                        }), Object(v.jsx)("br", {}), Object(v.jsx)("small", {
                                            className: "text-muted",
                                            children: a.name
                                        })]
                                    }) : Object(v.jsxs)(q.b, {
                                        to: "/tokens/".concat(a.address.toLowerCase()),
                                        className: "text-light",
                                        children: [a.symbol, " ", Object(v.jsx)("small", {
                                            className: "text-success",
                                            children: !!a.price && Object(v.jsxs)(v.Fragment, {
                                                children: ["$", null === (t = a.price) || void 0 === t ? void 0 : t.toFormat(4)]
                                            })
                                        }), Object(v.jsx)("br", {}), Object(v.jsx)("small", {
                                            className: "text-muted",
                                            children: a.name
                                        })]
                                    })
                                }
                            }), !l && !o && Object(v.jsx)(Ge.b, {
                                disableSort: !d,
                                headerRenderer: S,
                                dataKey: "balancePriceFormatted",
                                width: t / 2,
                                label: "Balance",
                                cellRenderer: function(e) {
                                    var t, n = e.rowData;
                                    return Object(v.jsxs)("div", {
                                        children: [null === (t = n.balance) || void 0 === t ? void 0 : t.toFormat(2), Object(v.jsx)("br", {}), !!n.balancePrice && n.balance && Object(v.jsxs)("small", {
                                            className: "text-success",
                                            children: ["$", n.balancePrice.toFormat(2)]
                                        })]
                                    })
                                },
                                flexGrow: 1
                            }), !o && Object(v.jsx)(Ge.b, {
                                width: 50,
                                disableSort: !0,
                                dataKey: "name",
                                cellRenderer: function(e) {
                                    var t = e.rowData;
                                    return Object(v.jsxs)(v.Fragment, {
                                        children: [!l && !F[t.address] && Object(v.jsx)("i", {
                                            className: "far fa-star cursor-pointer",
                                            onClick: function() {
                                                return W(Object(ee.a)(Object(ee.a)({}, F), {}, Object(Fe.a)({}, t.address.toLowerCase(), {
                                                    name: t.name,
                                                    symbol: t.symbol
                                                })))
                                            }
                                        }), !l && F[t.address] && Object(v.jsx)("i", {
                                            className: "fas fa-star text-warning cursor-pointer",
                                            onClick: function() {
                                                return W(Object(ee.a)(Object(ee.a)({}, F), {}, Object(Fe.a)({}, t.address.toLowerCase(), void 0)))
                                            }
                                        }), c && Object(v.jsx)("i", {
                                            className: "ms-2 fas fa-toilet text-muted cursor-pointer",
                                            onClick: function() {
                                                return B(Object(ee.a)(Object(ee.a)({}, N), {}, Object(Fe.a)({}, t.address.toLowerCase(), l ? void 0 : {
                                                    name: t.name,
                                                    symbol: t.symbol
                                                })))
                                            }
                                        })]
                                    })
                                }
                            })]
                        })
                    }
                })
            })
        }
        function Je(e) {
            var t, n = e.onOpen, l = Object(a.useState)(""), s = Object(r.a)(l, 2), o = s[0], i = s[1], _ = Pe(), c = Object(a.useState)([]), x = Object(r.a)(c, 2), k = x[0], h = x[1], T = Object(a.useContext)(D), y = T.bnbPrice, j = T.account, O = T.trackingWallet, F = T.setTrackingWallet, W = T.setShowPremium, N = T.web3, B = T.hasPremium, S = T.poocoinBalance, P = T.lpBalance, I = T.lpBalance2, L = T.pancakeUrl, A = T.lpPrice2, E = O || j, R = "wallet-".concat(E), U = qe(Ue, {
                variables: {
                    network: "bsc",
                    address: E
                },
                skip: !0,
                onCompleted: function(e) {
                    var t, n;
                    O || window.localStorage.setItem(R, JSON.stringify(null === e || void 0 === e || null === (n = e.ethereum) || void 0 === n ? void 0 : n.address));
                    h(null === e || void 0 === e || null === (t = e.ethereum) || void 0 === t ? void 0 : t.address),
                    _e.current = ""
                }
            }), H = U.loading, V = U.refetch, z = Object(a.useState)({}), G = Object(r.a)(z, 2), K = G[0], Y = G[1], Z = Object(a.useState)({}), J = Object(r.a)(Z, 2), Q = J[0], X = J[1], $ = Object(a.useState)({}), te = Object(r.a)($, 2), ne = te[0], ae = te[1], le = Object(a.useState)({}), se = Object(r.a)(le, 2), oe = se[0], re = se[1], ie = Object(ee.a)(Object(ee.a)(Object(ee.a)(Object(ee.a)({}, K), Q), ne), oe), _e = Object(a.useRef)(""), de = Object(a.useContext)(C), ce = de.starred, me = de.deleted, pe = de.walletTab, xe = de.setWalletTab, ue = de.history, be = de.lpVersion, ke = Object(a.useRef)(null), he = Object(a.useContext)(Me), Te = he.promotedTokens, fe = he.promotedTokenInfo, ge = he.highRiskList, ye = he.highRiskTokenInfo, je = he.blacklist, we = he.ready, ve = Object(a.useState)(!1), Ce = Object(r.a)(ve, 2), Fe = Ce[0], We = Ce[1], Ne = Object(a.useState)(O || ""), Be = Object(r.a)(Ne, 2), Se = Be[0], Ie = Be[1], Le = Object(a.useState)(null), Ae = Object(r.a)(Le, 2), De = Ae[0], Ee = Ae[1], Re = (null === k || void 0 === k ? void 0 : k.length) ? k[0].balances.slice().filter((function(e) {
                return !me[e.currency.address] && "Cake-LP" !== e.currency.symbol
            }
            )).sort((function(e, t) {
                return e.currency.symbol.toLowerCase() > t.currency.symbol.toLowerCase() ? 1 : -1
            }
            )) : [];
            Re.find((function(e) {
                return "WBNB" === e.currency.symbol
            }
            )) || Re.push({
                currency: {
                    symbol: "WBNB",
                    name: "WBNB",
                    address: p.wbnb[m.chainId].toLowerCase()
                }
            });
            var He = Object.entries(ce).filter((function(e) {
                var t = Object(r.a)(e, 2)[1];
                return !!t && (!o || -1 !== t.symbol.toLowerCase().indexOf(o.toLowerCase()) || -1 !== t.name.toLowerCase().indexOf(o.toLowerCase()))
            }
            )).sort((function(e, t) {
                var n = Object(r.a)(e, 2)[1]
                  , a = Object(r.a)(t, 2)[1];
                return n.symbol.toLowerCase() > a.symbol.toLowerCase() ? 1 : -1
            }
            )).map((function(e) {
                var t = Object(r.a)(e, 2)
                  , n = t[0]
                  , a = t[1];
                return {
                    currency: {
                        symbol: a.symbol,
                        name: a.name,
                        address: n.toLowerCase()
                    }
                }
            }
            ))
              , Ve = null === Te || void 0 === Te ? void 0 : Te.filter((function(e) {
                var t, n, a;
                return !e.amount.div(new d.BigNumber(10).pow(18)).times(A).lt(4e4) && ((null === (t = fe[e.promotedAddress]) || void 0 === t ? void 0 : t.symbol) && !(null === (n = fe[e.promotedAddress]) || void 0 === n ? void 0 : n.blacklisted) && !(null === (a = fe[e.promotedAddress]) || void 0 === a ? void 0 : a.pending))
            }
            )).map((function(e) {
                return {
                    currency: {
                        symbol: fe[e.promotedAddress].symbol,
                        name: fe[e.promotedAddress].name,
                        address: e.promotedAddress.toLowerCase()
                    }
                }
            }
            ))
              , ze = null === ge || void 0 === ge ? void 0 : ge.filter((function(e) {
                return !je[e.token.toLowerCase()]
            }
            )).map((function(e) {
                return {
                    currency: {
                        symbol: ye[e.token.toLowerCase()].symbol,
                        name: ye[e.token.toLowerCase()].name,
                        address: e.token.toLowerCase()
                    }
                }
            }
            ))
              , Ge = Object.entries(me).filter((function(e) {
                var t = Object(r.a)(e, 2)[1];
                return !!t && (!o || -1 !== t.symbol.toLowerCase().indexOf(o.toLowerCase()) || -1 !== t.name.toLowerCase().indexOf(o.toLowerCase()))
            }
            )).map((function(e) {
                var t = Object(r.a)(e, 2)
                  , n = t[0]
                  , a = t[1];
                return Object(ee.a)(Object(ee.a)({}, a), {}, {
                    address: n.toLowerCase()
                })
            }
            ))
              , Ke = null === ue || void 0 === ue || null === (t = ue.tokens) || void 0 === t ? void 0 : t.filter((function(e) {
                return !!e && (!o || -1 !== e.symbol.toLowerCase().indexOf(o.toLowerCase()) || -1 !== e.name.toLowerCase().indexOf(o.toLowerCase()))
            }
            )).map((function(e) {
                return Object(ee.a)(Object(ee.a)({}, e), {}, {
                    address: e.address.toLowerCase()
                })
            }
            ));
            Object(a.useEffect)((function() {
                if (ke.current !== R && E) {
                    _e.current = "",
                    ke.current = R,
                    O && Ie(O),
                    N.getBalance(E).then((function(e) {
                        return Ee(e)
                    }
                    ));
                    var e = O ? null : window.localStorage.getItem(R);
                    if (e)
                        try {
                            var t = JSON.parse(e);
                            h(t)
                        } catch (n) {}
                    else
                        V()
                }
            }
            ), [V, R, E, N, O]),
            Object(a.useEffect)((function() {
                function e(e, n) {
                    return t.apply(this, arguments)
                }
                function t() {
                    return (t = Object(b.a)(u.a.mark((function e(t, n) {
                        var a, l, s, o;
                        return u.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o = function() {
                                        return (o = Object(b.a)(u.a.mark((function e(t, n, a) {
                                            var l, s, o, r, i, c, x, b, k, h, T, y, j, O, v, C, F, W, N, B, S, P;
                                            return u.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        for (l = [],
                                                        s = [],
                                                        o = [],
                                                        r = [],
                                                        i = 0; i < t.length; i += 1)
                                                            n[t[i].currency.address] = {},
                                                            n[t[i].currency.address].price = new d.BigNumber(0),
                                                            n[t[i].currency.address].bnbLiquidity = new d.BigNumber(0),
                                                            s[i] = {
                                                                address: "1" === a ? p.factory[m.chainId] : p.factory2[m.chainId],
                                                                name: "getPair",
                                                                params: [p.wbnb[m.chainId], "-" !== t[i].currency.address ? t[i].currency.address : p.busd[m.chainId]]
                                                            };
                                                        return e.next = 7,
                                                        _(g, s);
                                                    case 7:
                                                        c = e.sent,
                                                        x = [],
                                                        b = 0;
                                                    case 10:
                                                        if (!(b < c.length)) {
                                                            e.next = 21;
                                                            break
                                                        }
                                                        if ("0x0000000000000000000000000000000000000000" !== (k = c[b][0])) {
                                                            e.next = 14;
                                                            break
                                                        }
                                                        return e.abrupt("continue", 18);
                                                    case 14:
                                                        x.push(k),
                                                        r.push(t[b].currency.address),
                                                        l.push({
                                                            address: "-" !== t[b].currency.address ? t[b].currency.address : p.wbnb[m.chainId],
                                                            name: "balanceOf",
                                                            params: [E]
                                                        }),
                                                        o.push({
                                                            address: "-" !== t[b].currency.address ? t[b].currency.address : p.wbnb[m.chainId],
                                                            name: "decimals"
                                                        });
                                                    case 18:
                                                        b += 1,
                                                        e.next = 10;
                                                        break;
                                                    case 21:
                                                        return e.next = 23,
                                                        _(f, l);
                                                    case 23:
                                                        return h = e.sent,
                                                        e.next = 26,
                                                        _(f, o);
                                                    case 26:
                                                        for (T = e.sent,
                                                        y = [],
                                                        j = [],
                                                        O = 0; O < l.length; O += 1)
                                                            n[r[O]].balance = h[O][0],
                                                            n[r[O]].decimals = T[O][0],
                                                            v = x[O],
                                                            y.push({
                                                                address: v,
                                                                name: "getReserves"
                                                            }),
                                                            j.push({
                                                                address: v,
                                                                name: "token1"
                                                            });
                                                        return e.next = 32,
                                                        _(w, y);
                                                    case 32:
                                                        return C = e.sent,
                                                        e.next = 35,
                                                        _(w, j);
                                                    case 35:
                                                        for (F = e.sent,
                                                        W = 0; W < C.length; W += 1)
                                                            N = !1,
                                                            B = new d.BigNumber(0),
                                                            F[W][0].toLowerCase() === r[W].toLowerCase() && (N = !0),
                                                            S = new d.BigNumber(T[W][0].toString()).minus(new d.BigNumber(18)),
                                                            B = N ? new d.BigNumber(C[W][0].toString()).div(new d.BigNumber(C[W][1].toString())).times(new d.BigNumber(10).pow(S)) : new d.BigNumber(C[W][1].toString()).div(new d.BigNumber(C[W][0].toString())).times(new d.BigNumber(10).pow(S)),
                                                            P = new d.BigNumber(N ? C[W][0].toString() : C[W][1].toString()).div(new d.BigNumber(10).pow(18)),
                                                            n[r[W]].price = B,
                                                            n[r[W]].bnbLiquidity = P;
                                                    case 37:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )))).apply(this, arguments)
                                    }
                                    ,
                                    s = function(e, t, n) {
                                        return o.apply(this, arguments)
                                    }
                                    ,
                                    a = {},
                                    l = {},
                                    e.next = 6,
                                    s(t, a, "1");
                                case 6:
                                    return e.next = 8,
                                    s(t, l, "2");
                                case 8:
                                    Object.keys(a).forEach((function(e) {
                                        var t;
                                        (null === (t = l[e]) || void 0 === t ? void 0 : t.bnbLiquidity.gt(a[e].bnbLiquidity)) && (a[e] = l[e])
                                    }
                                    )),
                                    n(a);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                E && (null === k || void 0 === k ? void 0 : k.length) && _e.current !== E && !H && Ve && ze && (_e.current = E,
                e(k[0].balances.filter((function(e) {
                    var t = e.currency.address.toLowerCase();
                    return !me[t] && "0xdbe4cc36d0c19858d8cc7c5030593e9922ac680d" !== t
                }
                )), Y),
                e(He, X),
                e(Ve, ae),
                e(ze, re))
            }
            ), [E, k, _, H, He, Ve, ze, be, me]);
            var Ye = function() {
                _e.current = "",
                V()
            }
              , Je = function(e) {
                return null === e || void 0 === e ? void 0 : e.map((function(e, t) {
                    var n, a, l, s, o, r, i, _, c, x, u = new d.BigNumber(0);
                    ("WBNB" === e.currency.symbol && E && (u = new d.BigNumber(De).div(new d.BigNumber(10).pow(18))),
                    "WBNB" !== e.currency.symbol && (null === (n = ie[e.currency.address]) || void 0 === n ? void 0 : n.balance)) && (u = new d.BigNumber(null === (c = ie[e.currency.address]) || void 0 === c ? void 0 : c.balance.toString()).div(new d.BigNumber(10).pow(new d.BigNumber(null === (x = ie[e.currency.address]) || void 0 === x ? void 0 : x.decimals.toString()))));
                    var b = new d.BigNumber(0);
                    if ("WBNB" === e.currency.symbol || e.currency.address === p.wbnb[m.chainId] || "-" === e.currency.address)
                        b = y;
                    else if (null === (a = ie[e.currency.address]) || void 0 === a ? void 0 : a.price) {
                        var k, h;
                        b = null === (k = ie[e.currency.address]) || void 0 === k || null === (h = k.price) || void 0 === h ? void 0 : h.times(y)
                    }
                    var T, f = new d.BigNumber(0), g = null === (l = ie[e.currency.address]) || void 0 === l ? void 0 : l.bnbLiquidity;
                    "WBNB" !== e.currency.symbol && b && g ? f = d.BigNumber.min(b.times(u), g.times(y)) : f = null === (T = b) || void 0 === T ? void 0 : T.times(u);
                    var j = null === (s = e.currency) || void 0 === s ? void 0 : s.symbol
                      , w = e.currency.name;
                    "BNB" === (null === (o = e.currency) || void 0 === o ? void 0 : o.symbol) && (j = "WBNB",
                    w = "WBNB"),
                    "WBNB" === (null === (r = e.currency) || void 0 === r ? void 0 : r.symbol) && (j = "BNB",
                    w = "BNB");
                    var O = "BNB" === (null === (i = e.currency) || void 0 === i ? void 0 : i.symbol) ? p.wbnb[m.chainId] : null === (_ = e.currency) || void 0 === _ ? void 0 : _.address;
                    return {
                        balance: u,
                        price: b,
                        balancePrice: f,
                        balancePriceFormatted: f.toFormat(2, {
                            groupSeparator: ""
                        }),
                        currency: e.currency,
                        name: w,
                        symbol: j,
                        address: O,
                        rank: t
                    }
                }
                ))
            }
              , Qe = {
                wallet: Je(Re),
                starred: Je(He),
                promoted: Je(Ve),
                highRisk: Je(ze)
            }
              , Xe = Qe.wallet.filter((function(e) {
                return !o || -1 !== e.symbol.toLowerCase().indexOf(o.toLowerCase()) || -1 !== e.name.toLowerCase().indexOf(o.toLowerCase())
            }
            ))
              , $e = function() {
                var e, t = new d.BigNumber(0);
                return null === (e = Qe.wallet) || void 0 === e || e.forEach((function(e) {
                    var n;
                    e.balancePrice && !(null === (n = e.balancePrice) || void 0 === n ? void 0 : n.isNaN()) && (t = t.plus(e.balancePrice))
                }
                )),
                t
            }();
            return Object(v.jsxs)("div", {
                className: "flex-grow-1 d-flex flex-column",
                children: [Object(v.jsxs)("div", {
                    className: "d-flex mb-1 px-2",
                    style: {
                        maxWidth: 500
                    },
                    children: [Object(v.jsx)("input", {
                        className: "form-control form-control-sm",
                        type: "text",
                        placeholder: "Filter...",
                        value: o,
                        onChange: function(e) {
                            var t = e.target.value;
                            return i(t)
                        }
                    }), E && Object(v.jsx)("button", {
                        className: "btn btn-sm btn-secondary ms-2",
                        onClick: Ye,
                        children: "Reload"
                    })]
                }), E && $e.gt(0) && Object(v.jsx)("div", {
                    className: "mb-1 text-center",
                    children: Object(v.jsxs)("small", {
                        children: ["Estimated Wallet Balance: ", Object(v.jsxs)("span", {
                            className: "text-success",
                            children: ["$", $e.toFormat(2)]
                        })]
                    })
                }), Object(v.jsxs)("ul", {
                    className: "nav nav-tabs justify-content-center",
                    children: [Object(v.jsx)("li", {
                        className: "nav-item font-size-sm",
                        children: Object(v.jsx)("button", {
                            onClick: function() {
                                return xe("promoted")
                            },
                            className: "btn-sm p-2 nav-link ".concat("promoted" === pe || "highRisk" === pe ? "active" : ""),
                            children: "Promoted"
                        })
                    }), Object(v.jsx)("li", {
                        className: "nav-item font-size-sm",
                        children: Object(v.jsx)("button", {
                            onClick: function() {
                                return xe("wallet")
                            },
                            className: "btn-sm p-2 nav-link ".concat("wallet" === pe ? "active" : ""),
                            children: "Wallet"
                        })
                    }), Object(v.jsx)("li", {
                        className: "nav-item font-size-sm",
                        children: Object(v.jsx)("button", {
                            onClick: function() {
                                return xe("starred")
                            },
                            className: "btn-sm p-2 nav-link ".concat("starred" === pe ? "active" : ""),
                            children: "Starred"
                        })
                    }), Object(v.jsx)("li", {
                        className: "nav-item font-size-sm",
                        children: Object(v.jsx)("button", {
                            onClick: function() {
                                return xe("history")
                            },
                            className: "btn-sm p-2 nav-link ".concat("history" === pe ? "active" : ""),
                            children: "History"
                        })
                    })]
                }), (!E || S && S.isZero() && P && P.isZero() && I && I.isZero()) && Object(v.jsxs)("div", {
                    className: "text-small border p-2 mt-1 shadow rounded bg-black",
                    children: ["You have 0", " ", Object(v.jsx)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: "".concat(L, "/#/swap?outputCurrency=0xb27adaffb9fea1801459a1a81b17218288c097cc"),
                        children: "POOCOIN."
                    }), Object(v.jsx)("br", {}), "Consider buying some", " ", Object(v.jsx)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: "".concat(L, "/#/swap?outputCurrency=0xb27adaffb9fea1801459a1a81b17218288c097cc"),
                        children: "POOCOIN"
                    }), " ", "to support", Object(v.jsx)("br", {}), "the site and gain ", Object(v.jsx)(q.b, {
                        to: "/premium",
                        children: "premium"
                    }), " features."]
                }), "wallet" === pe && Object(v.jsx)("div", {
                    className: "text-end",
                    children: Object(v.jsx)("button", {
                        onClick: function() {
                            return xe("hidden")
                        },
                        className: "btn btn-link text-primary btn-sm",
                        children: "Restore Hidden"
                    })
                }), ("promoted" === pe || "highRisk" === pe) && Object(v.jsxs)("div", {
                    className: "text-center",
                    children: [Object(v.jsx)("div", {
                        className: "text-small text-center px-2",
                        children: Object(v.jsx)(q.b, {
                            to: "/promote",
                            children: "Promote your token"
                        })
                    }), Object(v.jsxs)("div", {
                        className: "btn-group my-1",
                        role: "group",
                        children: [Object(v.jsx)("button", {
                            onClick: function() {
                                return xe("promoted")
                            },
                            className: "btn btn-secondary btn-sm ".concat("promoted" === pe ? "active" : ""),
                            children: "Vetted"
                        }), Object(v.jsx)("button", {
                            onClick: function() {
                                return xe("highRisk")
                            },
                            className: "btn btn-secondary btn-sm ".concat("highRisk" === pe ? "active" : ""),
                            children: "Un-Vetted"
                        })]
                    })]
                }), Object(v.jsxs)("div", {
                    children: ["wallet" === pe && !E && Object(v.jsx)("div", {
                        className: "d-flex justify-content-center mt-3",
                        children: "Connect your wallet to see your tokens."
                    }), "wallet" === pe && E && Object(v.jsxs)(v.Fragment, {
                        children: [Object(v.jsxs)("div", {
                            className: "d-flex justify-content-between",
                            children: [Object(v.jsxs)("div", {
                                onClick: function() {
                                    B ? We(!Fe) : W(!0)
                                },
                                className: "d-flex text-small justify-content-center text-primary cursor-pointer ms-2",
                                children: [!O && Object(v.jsx)(v.Fragment, {
                                    children: "Track another wallet"
                                }), O && Object(v.jsxs)(v.Fragment, {
                                    children: ["Tracking: ", O.substr(0, 4), "...", O.substr(-4, 4)]
                                })]
                            }), Object(v.jsx)("div", {
                                onClick: Ye,
                                className: "d-flex text-small justify-content-center text-primary cursor-pointer me-2",
                                children: "Load new tokens"
                            })]
                        }), Fe && Object(v.jsx)("div", {
                            className: "py-1 px-1",
                            children: Object(v.jsxs)("form", {
                                onSubmit: function(e) {
                                    e.preventDefault(),
                                    Oe.a.isAddress(Se) && F(Se)
                                },
                                className: "input-group",
                                children: [Object(v.jsx)("input", {
                                    className: "form-control form-control-sm",
                                    type: "text",
                                    placeholder: "Wallet Address",
                                    value: Se,
                                    onChange: function(e) {
                                        var t = e.target.value;
                                        return Ie(t)
                                    }
                                }), !O && Object(v.jsx)("button", {
                                    type: "submit",
                                    disabled: !Oe.a.isAddress(Se),
                                    className: "btn btn-sm btn-success",
                                    children: "Go"
                                }), O && Object(v.jsx)("button", {
                                    type: "button",
                                    onClick: function() {
                                        return F(null)
                                    },
                                    className: "btn btn-sm btn-dark border text-light",
                                    children: "Clear"
                                })]
                            })
                        })]
                    }), (H || !k || !we) && Object(v.jsx)("div", {
                        className: "d-flex justify-content-center",
                        children: Object(v.jsx)(M, {
                            size: "small"
                        })
                    }), Object(v.jsxs)("div", {
                        style: {
                            height: 420
                        },
                        children: ["wallet" === pe && !!E && Object(v.jsx)(Ze, {
                            onOpen: n,
                            data: Xe
                        }), "starred" === pe && Object(v.jsx)(Ze, {
                            onOpen: n,
                            data: Qe.starred,
                            isStarred: !0
                        }), "promoted" === pe && Object(v.jsx)(Ze, {
                            onOpen: n,
                            data: Qe.promoted,
                            isPromoted: !0
                        }), "highRisk" === pe && Object(v.jsx)(Ze, {
                            onOpen: n,
                            data: Qe.highRisk,
                            isPromoted: !0
                        }), "history" === pe && Object(v.jsx)(Ze, {
                            onOpen: n,
                            data: Ke,
                            isHistory: !0
                        }), "hidden" === pe && Object(v.jsx)(Ze, {
                            onOpen: n,
                            data: Ge,
                            isHidden: !0
                        })]
                    })]
                })]
            })
        }
        function Qe() {
            var e = Object(Ce.h)()
              , t = Object(a.useContext)(D).account;
            return Object(v.jsx)(J, {
                children: Object(v.jsxs)("div", {
                    className: "text-center mt-3",
                    "data-aos": "fade-down",
                    "data-aos-delay": "100",
                    children: [Object(v.jsx)($, {}), Object(v.jsx)("h1", {
                        children: "BSC Charts"
                    }), Object(v.jsx)("h2", {
                        children: "View price charts for any token in your wallet (binance smart chain)"
                    }), Object(v.jsx)("div", {
                        className: "mb-3 d-flex justify-content-center",
                        children: Object(v.jsx)("div", {
                            style: {
                                flexBasis: 450
                            },
                            children: Object(v.jsx)(ve, {
                                onSubmit: function(t) {
                                    return e.push(Object(Ce.f)("/tokens/:address", {
                                        address: t
                                    }))
                                }
                            })
                        })
                    }), Object(v.jsx)("div", {
                        className: "bg-dark d-flex flex-column p-3 bg-dark-1",
                        children: Object(v.jsx)(Je, {}, t)
                    }), Object(v.jsx)("div", {
                        children: Object(v.jsx)("iframe", {
                            style: {
                                maxWidth: 700
                            },
                            className: "my-4",
                            width: "100%",
                            height: "400",
                            src: "https://www.youtube.com/embed/2JgXcQZs_Oo",
                            title: "YouTube video player",
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0
                        })
                    })]
                })
            })
        }
        Ze.defaultProps = {
            data: [],
            isPromoted: !1,
            isHidden: !1,
            isStarred: !1
        },
        Je.defaultProps = {
            onClickToken: function() {}
        };
        var Xe = n(68)
          , $e = n(53)
          , et = n.n($e)
          , tt = n(54)
          , nt = n(424);
        function at(e) {
            return "".concat(Ve.a.padStart(e.blockNumber, 12, 0), "-").concat(e.transactionHash)
        }
        var lt = n(258)
          , st = n.n(lt);
        function ot(e) {
            var t = e.selectedToken
              , n = e.quoteCurrency
              , l = e.tokenSymbol
              , s = e.quoteSymbol
              , o = e.decimals
              , i = e.events
              , _ = e.price
              , d = e.transactions
              , c = e.lpSymbols
              , x = e.account
              , k = e.enableTx
              , h = e.onRefetch
              , f = e.bnbLiquidity
              , g = e.mainLpVersion
              , y = e.mini
              , j = Object(a.useState)(tt.DateTime.now())
              , w = Object(r.a)(j, 2)
              , O = w[0]
              , F = w[1]
              , W = "".concat("tv-chart-container", "-").concat(O)
              , N = Object(a.useContext)(D).bnbPrice
              , B = Object(a.useContext)(C)
              , S = B.chartInterval
              , P = B.setChartInterval
              , I = B.mergeVersions
              , L = B.setMergeVersions
              , A = B.chartHeight
              , M = B.setChartHeight
              , E = Object(a.useRef)(null)
              , R = Object(a.useRef)(new et.a)
              , U = Object(a.useRef)({
                time: null,
                open: null,
                close: null,
                high: null,
                low: null,
                volume: null,
                tradeAmount: null
            })
              , H = Object(a.useState)(!1)
              , V = Object(r.a)(H, 2)
              , q = V[0]
              , z = V[1]
              , G = Object(a.useState)(!0)
              , K = Object(r.a)(G, 2)
              , Y = K[0]
              , Z = K[1]
              , J = Object(a.useRef)([])
              , Q = Object(a.useRef)(1e5)
              , X = Object(a.useRef)([])
              , $ = Object(a.useRef)(null)
              , te = Object(a.useRef)(N)
              , ne = Object(a.useRef)(_)
              , ae = Object(a.useRef)(f)
              , le = Object(a.useRef)(15)
              , se = Object(a.useRef)(null)
              , re = Object(a.useRef)(null)
              , ie = Object(a.useRef)(null)
              , _e = Object(a.useRef)(10)
              , de = Object(a.useRef)(null)
              , ce = Object(a.useMemo)((function() {
                return ["1", "5", "10", "15", "30", "60", "240", "720", "1440"]
            }
            ), [])
              , me = Object(a.useCallback)((function(e) {
                var t = Object(ee.a)(Object(ee.a)({}, e), {}, {
                    timestamp: e.timestamp
                })
                  , a = Object(ee.a)({}, t.returnValues);
                e.reverse && (a.amount0In = t.returnValues.amount1In,
                a.amount1In = t.returnValues.amount0In,
                a.amount0Out = t.returnValues.amount1Out,
                a.amount1Out = t.returnValues.amount0Out);
                var l = "Sell";
                "0" !== a.amount0Out && (l = "Buy");
                var s = new T.a("Sell" === l ? a.amount1Out : a.amount1In).div(new T.a(10).pow(18))
                  , r = new T.a("Sell" === l ? a.amount0In : a.amount0Out).div(new T.a(10).pow(o));
                return {
                    time: t.timestamp,
                    price: s.div(r),
                    tradeAmount: s.times(n === p.wbnb[m.chainId] ? te.current : 1).toNumber()
                }
            }
            ), [o, n])
              , pe = Object(a.useMemo)((function() {
                return {
                    onReady: function(e) {
                        var t = {
                            supported_resolutions: ce,
                            exchanges: [{
                                value: "Pancake",
                                name: "Pancake Swap",
                                description: "Binance smart chain DEX"
                            }],
                            symbols_types: [{
                                value: "crypto",
                                name: "crypto"
                            }],
                            supportsTime: !0,
                            supports_marks: k,
                            supports_timescale_marks: k,
                            currency_codes: n !== p.wbnb[m.chainId] || y ? [] : ["USD", "BNB"],
                            currency_code: n === p.wbnb[m.chainId] ? "USD" : "BNB"
                        };
                        setTimeout((function() {
                            return e(t)
                        }
                        ))
                    },
                    resolveSymbol: function() {
                        var e = Object(b.a)(u.a.mark((function e(t, a, l, s) {
                            var o, i, _, d, c;
                            return u.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        o = t.split("-"),
                                        i = Object(r.a)(o, 4),
                                        _ = i[2],
                                        d = i[3],
                                        c = {
                                            ticker: t,
                                            name: "".concat(_, "/").concat(d),
                                            description: "".concat(_, "/").concat(d),
                                            type: "crypto",
                                            session: "24x7",
                                            timezone: "Etc/UTC",
                                            minmov: 1,
                                            pricescale: Q.current > 1e16 ? 1e16 : Q.current,
                                            has_intraday: !0,
                                            has_weekly_and_monthly: !1,
                                            intraday_multipliers: ce,
                                            data_status: "streaming",
                                            currency_code: s.currencyCode || (n === p.wbnb[m.chainId] ? "USD" : "BNB"),
                                            original_currency_code: n === p.wbnb[m.chainId] ? "USD" : "BNB"
                                        },
                                        setTimeout((function() {
                                            a(c)
                                        }
                                        ));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function(t, n, a, l) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getMarks: function() {
                        var e = Object(b.a)(u.a.mark((function e(t, n, a, l) {
                            var s;
                            return u.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        s = se.current ? se.current.map((function(e) {
                                            var t = 0 === e.usdAmountSell ? "Buy" : "Sell"
                                              , n = tt.DateTime.fromISO(e.timestamp).toLocaleString(tt.DateTime.DATETIME_SHORT_WITH_SECONDS)
                                              , a = new T.a(e.amount)
                                              , l = new T.a(ne.current).times(a).toFormat(2)
                                              , s = e.usdAmountBuy > 0 ? e.usdAmountBuy : e.usdAmountSell
                                              , o = new T.a(s).toFormat(2);
                                            return {
                                                id: e.transaction,
                                                time: tt.DateTime.fromISO(e.timestamp).toSeconds(),
                                                color: "Buy" === t ? {
                                                    border: "black",
                                                    background: "green"
                                                } : {
                                                    border: "black",
                                                    background: "red"
                                                },
                                                text: "".concat(t, " at ").concat(n, "<br /><br />Amount: ").concat(a.toFormat(4), "<br /><br />Price: $").concat(o, "<br /><br />Current value $").concat(l),
                                                label: "Buy" === t ? "B" : "S"
                                            }
                                        }
                                        )) : [],
                                        l(k ? s : []);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function(t, n, a, l) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getTimescaleMarks: function() {
                        var e = Object(b.a)(u.a.mark((function e(t, n, a, l) {
                            var s;
                            return u.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        s = se.current ? se.current.map((function(e) {
                                            var t = 0 === e.usdAmountSell ? "Buy" : "Sell"
                                              , n = tt.DateTime.fromISO(e.timestamp).toLocaleString(tt.DateTime.DATETIME_SHORT_WITH_SECONDS)
                                              , a = new T.a(e.amount)
                                              , l = new T.a(ne.current).times(a).toFormat(2)
                                              , s = e.usdAmountBuy > 0 ? e.usdAmountBuy : e.usdAmountSell
                                              , o = new T.a(s).toFormat(2);
                                            return {
                                                id: e.transaction,
                                                time: tt.DateTime.fromISO(e.timestamp).toSeconds(),
                                                color: "Buy" === t ? "green" : "red",
                                                label: t,
                                                tooltip: "".concat(t, " at ").concat(n, "<br /><br />Amount: ").concat(a.toFormat(4), "<br /><br />Price: $").concat(o, "<br /><br />Current value $").concat(l)
                                            }
                                        }
                                        )) : [],
                                        l(k ? s : []);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function(t, n, a, l) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getBars: function() {
                        var e = Object(b.a)(u.a.mark((function e(t, a, l, s, o, i, _) {
                            var d, c, x, b, k, h, f, y, j, w, O, v, C, F, W, N;
                            return u.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (c = function() {
                                            var e, a = {
                                                time: null,
                                                open: null,
                                                close: null,
                                                high: null,
                                                low: null,
                                                volume: null
                                            }, l = [];
                                            return (null === (e = J.current) || void 0 === e ? void 0 : e.slice().reverse()).forEach((function(e) {
                                                var s;
                                                if (e.quoteCurrency.toLowerCase() === n.toLowerCase() && (e.lpVersion === g || I)) {
                                                    var o = me(e);
                                                    if ("Infinity" !== o.price.toString() && !("USD" === t.currency_code && o.tradeAmount < _e.current)) {
                                                        var r = q ? o.time.toMillis() : Math.floor(o.time.toMillis() / (6e4 * d)) * (6e4 * d)
                                                          , i = !(null === (s = U.current) || void 0 === s ? void 0 : s.time) || a.time < r;
                                                        a.time = i ? r : a.time,
                                                        a.open = i ? a.close || o.price : a.open,
                                                        a.close = o.price,
                                                        a.high = i || a.high.isLessThan(o.price) ? o.price : a.high,
                                                        a.low = i || a.low.isGreaterThan(o.price) ? o.price : a.low,
                                                        a.volume = i ? o.tradeAmount : a.volume + o.tradeAmount;
                                                        var _ = {
                                                            time: a.time,
                                                            close: a.close.toNumber(),
                                                            open: a.open.toNumber(),
                                                            high: a.high.toNumber(),
                                                            low: a.low.toNumber(),
                                                            volume: a.volume
                                                        };
                                                        n === p.wbnb[m.chainId] && "USD" === t.currency_code && (_.close = a.close.times(te.current).toNumber(),
                                                        _.open = l.length > 0 ? l[l.length - 1].close : a.open.times(te.current).toNumber(),
                                                        _.high = a.high.times(te.current).toNumber(),
                                                        _.low = a.low.times(te.current).toNumber()),
                                                        l.length > 0 && l[l.length - 1].time === a.time ? l[l.length - 1] = _ : l.push(_)
                                                    }
                                                }
                                            }
                                            )),
                                            l
                                        }
                                        ,
                                        d = parseInt(a),
                                        $.current = Date.now() - 6e3,
                                        x = c(),
                                        !q) {
                                            e.next = 12;
                                            break
                                        }
                                        if (_) {
                                            e.next = 8;
                                            break
                                        }
                                        return o([], {
                                            noData: !0
                                        }),
                                        e.abrupt("return");
                                    case 8:
                                        return o(x, {
                                            noData: !x.length
                                        }),
                                        X.current = J.current.slice().reverse(),
                                        $.current = J.current.length ? J.current[0].timestamp.ts : $.current,
                                        e.abrupt("return");
                                    case 12:
                                        if (ce.includes(a)) {
                                            e.next = 15;
                                            break
                                        }
                                        return i("getBars error"),
                                        e.abrupt("return");
                                    case 15:
                                        return b = 300 * Math.floor(l / 300),
                                        k = 300 * Math.floor(s / 300),
                                        (h = []).push("2" === g ? p.factory2[m.chainId] : p.factory[m.chainId]),
                                        I && h.push("2" === g ? p.factory[m.chainId] : p.factory2[m.chainId]),
                                        e.next = 22,
                                        Promise.all([oe(t.ticker, b, k, d, h, _e.current), oe("".concat(p.wbnb[m.chainId], "-").concat(p.busd[m.chainId]), b, k, d, h, _e.current)]);
                                    case 22:
                                        for (f = e.sent,
                                        y = Object(r.a)(f, 2),
                                        j = y[0],
                                        w = y[1],
                                        O = j,
                                        v = {},
                                        C = 0; C < w.length; C += 1)
                                            v[w[C].time] = w[C];
                                        n === p.wbnb[m.chainId] && "USD" === t.currency_code ? (F = [],
                                        O.forEach((function(e, t) {
                                            var n = v[e.time] ? new T.a(v[e.time].close) : null
                                              , a = Object(ee.a)(Object(ee.a)({}, e), {}, {
                                                volume: e.tradeAmount || e.volume,
                                                close: new T.a(e.close).times(n || te.current).toNumber(),
                                                open: t > 0 ? F[t - 1].close : new T.a(e.open).times(n || te.current).toNumber(),
                                                high: new T.a(e.high).times(n || te.current).toNumber(),
                                                low: new T.a(e.low).times(n || te.current).toNumber()
                                            });
                                            F.push(a)
                                        }
                                        )),
                                        O = F) : O = O.map((function(e) {
                                            return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                                volume: e.tradeAmount || e.volume
                                            })
                                        }
                                        )),
                                        W = x.filter((function(e) {
                                            return !O.length || e.time > O[O.length - 1].time
                                        }
                                        )),
                                        N = O.concat(W),
                                        o(_ ? N : O, {
                                            noData: !O.length
                                        }),
                                        X.current = [],
                                        $.current = N.length ? N[N.length - 1].time : Date.now() - 18e4;
                                    case 35:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function(t, n, a, l, s, o, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    subscribeBars: function(e, t, a) {
                        R.current.removeAllListeners("price"),
                        R.current.on("price", (function(l) {
                            var s;
                            if ("Infinity" !== l.price.toString() && $.current && !("USD" === e.currency_code && l.tradeAmount < _e.current)) {
                                var o = q ? l.time.toMillis() : Math.floor(l.time.toMillis() / (6e4 * t)) * (6e4 * t)
                                  , r = !(null === (s = U.current) || void 0 === s ? void 0 : s.time) || U.current.time < o;
                                U.current.time = r ? o : U.current.time,
                                U.current.open = r ? U.current.close || l.price : U.current.open,
                                U.current.close = l.price,
                                U.current.high = r || U.current.high.isLessThan(l.price) ? l.price : U.current.high,
                                U.current.low = r || U.current.low.isGreaterThan(l.price) ? l.price : U.current.low,
                                U.current.volume = r ? l.tradeAmount : U.current.volume + l.tradeAmount;
                                var i = {
                                    time: U.current.time,
                                    close: U.current.close.toNumber(),
                                    open: U.current.open.toNumber(),
                                    high: U.current.high.toNumber(),
                                    low: U.current.low.toNumber(),
                                    volume: U.current.volume
                                };
                                n === p.wbnb[m.chainId] && "USD" === e.currency_code && (i.close = U.current.close.times(te.current).toNumber(),
                                i.open = U.current.open.times(te.current).toNumber(),
                                i.high = U.current.high.times(te.current).toNumber(),
                                i.low = U.current.low.times(te.current).toNumber(),
                                i.volume = U.current.volume),
                                a(i)
                            }
                        }
                        ))
                    },
                    unsubscribeBars: function() {
                        R.current.removeAllListeners("price")
                    }
                }
            }
            ), [q, k, me, g, I, y, n, ce]);
            Object(a.useEffect)((function() {
                var e, t = null === (e = de.current) || void 0 === e ? void 0 : e.activeChart();
                t && (Y ? t.refreshMarks() : t.clearMarks())
            }
            ), [Y]),
            Object(a.useEffect)((function() {
                J.current = i,
                Q.current = new T.a(10).pow(_.toFormat().split("").findIndex((function(e) {
                    return "0" !== e && "." !== e
                }
                )) + 4).toNumber(),
                Q.current > 1e4 && (Q.current = new T.a(10).pow(_.toFormat().split("").findIndex((function(e) {
                    return "0" !== e && "." !== e
                }
                )) + 2).toNumber()),
                le.current = S,
                ne.current = _
            }
            ), [S, i, _]),
            Object(a.useEffect)((function() {
                c && d && (re.current !== t || ie.current !== x) && (re.current = t,
                ie.current = x,
                se.current = d)
            }
            ), [x, c, t, d]),
            Object(a.useEffect)((function() {
                te.current = N,
                ae.current = f,
                _e.current = ae.current.div(new T.a(10).pow(18)).times(te.current).gt(1e7) ? 100 : 10
            }
            ), [f, N]),
            Object(a.useEffect)((function() {
                var e = "".concat(t, "-").concat(n, "-").concat(g, "-").concat(I);
                if ($.current)
                    if (E.current === e) {
                        for (var a = X.current.length ? X.current[X.current.length - 1] : null, l = [], s = 0; s < i.length; s += 1)
                            i[s].quoteCurrency.toLowerCase() === n.toLowerCase() && (!$.current || $.current >= i[s].timestamp.ts || (i[s].lpVersion === g || I) && (!a || at(i[s]) > at(a)) && l.unshift(i[s]));
                        l.forEach((function(e) {
                            X.current.push(e),
                            R.current.emit("price", me(e))
                        }
                        ))
                    } else
                        E.current = e
            }
            ), [i, me, g, I, n, t]),
            Object(a.useEffect)((function() {
                if (!(de.current || q && !J)) {
                    var e = ["header_symbol_search", "header_compare", "symbol_info", "display_market_status"];
                    q && (e.push("timeframes_toolbar"),
                    e.push("header_resolutions"));
                    var a = {
                        autosize: !0,
                        symbol: "".concat(t, "-").concat(n, "-").concat(l, "-").concat(s),
                        interval: le.current,
                        clientId: "bsc",
                        container_id: W,
                        datafeed: pe,
                        disabled_features: e,
                        enabled_features: y ? void 0 : ["pricescale_currency"],
                        locale: "en",
                        library_path: "/charting_library/",
                        theme: "Dark",
                        timeframe: "2D",
                        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                        time_frames: q ? [] : [{
                            text: "1m",
                            resolution: "60",
                            description: "1 Month"
                        }, {
                            text: "1w",
                            resolution: "15",
                            description: "5 Days"
                        }, {
                            text: "1d",
                            resolution: "1",
                            description: "1 Day"
                        }]
                    };
                    return de.current = new window.TradingView.widget(a),
                    de.current.onChartReady((function() {
                        var e = de.current.activeChart();
                        e.executeActionById("drawingToolbarAction"),
                        e.onIntervalChanged().subscribe(null, (function(e) {
                            P(e)
                        }
                        ))
                    }
                    )),
                    function() {
                        de.current = null
                    }
                }
            }
            ), [q, W, pe, n, s, t, l, J, P, y]);
            var xe = function() {
                var e = Object(b.a)(u.a.mark((function e() {
                    return u.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!h) {
                                    e.next = 3;
                                    break
                                }
                                return e.next = 3,
                                h();
                            case 3:
                                F(tt.DateTime.now().plus({
                                    minutes: 5
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return Object(v.jsxs)("div", {
                style: {
                    position: "relative",
                    height: y ? "100%" : void 0
                },
                children: [!y && Object(v.jsxs)(v.Fragment, {
                    children: [Object(v.jsxs)("div", {
                        className: "d-flex align-items-end mb-1 flex-wrap",
                        children: [Object(v.jsx)("button", {
                            className: "btn btn-dark-1 text-light btn-sm rounded me-2",
                            onClick: xe,
                            children: "Reload"
                        }), Object(v.jsxs)("div", {
                            className: "form-check form-switch d-flex align-items-end mb-1",
                            children: [Object(v.jsx)("input", {
                                className: "form-check-input me-1",
                                type: "checkbox",
                                id: "blockChart",
                                checked: q,
                                onChange: function() {
                                    U.current = {
                                        time: null,
                                        open: null,
                                        close: null,
                                        high: null,
                                        low: null,
                                        volume: null,
                                        tradeAmount: null
                                    },
                                    $.current = null,
                                    z(!q)
                                }
                            }), Object(v.jsx)("label", {
                                className: "form-check-label font-size-sm",
                                htmlFor: "blockChart",
                                children: "Single blocks"
                            })]
                        }), Object(v.jsxs)("div", {
                            className: "form-check form-switch ms-2 d-flex align-items-end mb-1",
                            children: [Object(v.jsx)("input", {
                                className: "form-check-input me-1",
                                type: "checkbox",
                                id: "mergeVersions",
                                checked: I,
                                onChange: function() {
                                    return L(!I)
                                }
                            }), Object(v.jsx)("label", {
                                className: "form-check-label font-size-sm",
                                htmlFor: "mergeVersions",
                                children: "Merge V1/V2"
                            })]
                        }), Object(v.jsxs)("div", {
                            className: "form-check form-switch ms-2 d-flex align-items-end mb-1",
                            children: [Object(v.jsx)("input", {
                                className: "form-check-input me-1",
                                type: "checkbox",
                                id: "showTrades",
                                checked: k && Y,
                                onChange: function() {
                                    return Z(!Y)
                                },
                                disabled: !k
                            }), Object(v.jsx)("label", {
                                className: "form-check-label font-size-sm",
                                htmlFor: "showTrades",
                                children: "Show trades"
                            })]
                        })]
                    }), Object(v.jsxs)("div", {
                        style: {
                            position: "absolute",
                            top: 165,
                            left: 15,
                            zIndex: 10,
                            fontSize: 12,
                            lineHeight: 1.3,
                            backgroundColor: "rgba(0,0,0,0.3)",
                            borderRadius: 5
                        },
                        className: "d-flex text-light px-2 shadow fw-bold justify-content-center align-items-center",
                        children: [Object(v.jsx)("img", {
                            height: 18,
                            className: "me-1",
                            src: "/images/logo/poocoin512.png"
                        }), Object(v.jsx)("div", {
                            className: "text-center",
                            children: "poocoin.app"
                        })]
                    })]
                }), y && Object(v.jsx)("div", {
                    className: "d-flex flex-column h-100",
                    children: Object(v.jsx)("div", {
                        className: "".concat(st.a.tradingViewChart, " flex-grow-1"),
                        id: W
                    }, O)
                }), !y && Object(v.jsx)(nt.a, {
                    defaultSize: {
                        width: "auto",
                        height: A
                    },
                    onResizeStop: function(e, t, n) {
                        M(n.offsetHeight)
                    },
                    minHeight: "300px",
                    enable: {
                        bottom: !0
                    },
                    handleComponent: {
                        bottom: Object(v.jsx)("div", {
                            className: "text-center position-relative",
                            children: Object(v.jsx)("i", {
                                className: "fas fa-arrows-alt-v position-absolute px-3",
                                style: {
                                    top: 12,
                                    fontSize: 24
                                }
                            })
                        })
                    },
                    children: Object(v.jsx)("div", {
                        className: st.a.tradingViewChart,
                        id: W
                    }, O)
                })]
            })
        }
        function rt(e, t) {
            return "0x670de9f45561a2d02f283248f65cbd26ead861c8" === e ? "1" === t ? "0xA943eA143cd7E79806d670f4a7cf08F8922a454F" : p.factory2[m.chainId] : "2" === t ? p.factory2[m.chainId] : p.factory[m.chainId]
        }
        function it(e, t, n, a, l, s, o, r) {
            if (r)
                return {
                    price: new T.a(0),
                    calcLpPrice: new T.a(0),
                    calcLpSupply: new T.a(0),
                    reverse: !1,
                    lpTokenSupply: new T.a(0),
                    lpBnbSupply: new T.a(0)
                };
            var i, _, d = new T.a(o.toString()).div(new T.a(10).pow(18)), c = new T.a(0), x = !1;
            t.toLowerCase() === n.toLowerCase() && (x = !0),
            x ? (i = new T.a(e[1].toString()).div(new T.a(10).pow(l)),
            _ = new T.a(e[0].toString()).div(new T.a(10).pow(18))) : (i = new T.a(e[0].toString()).div(new T.a(10).pow(l)),
            _ = new T.a(e[1].toString()).div(new T.a(10).pow(18))),
            c = _.div(i),
            a || (c = c.times(n !== p.wbnb[m.chainId] ? s : 1));
            var u = i.div(d).times(c).times(2)
              , b = new T.a(x ? e[0].toString() : e[1].toString());
            return {
                price: c,
                calcLpPrice: u,
                calcLpSupply: d,
                reverse: x,
                lpTokenSupply: new T.a(x ? e[1].toString() : e[0].toString()),
                lpBnbSupply: b
            }
        }
        function _t(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = Object(a.useState)(null)
              , l = Object(r.a)(n, 2)
              , s = l[0]
              , o = l[1]
              , i = Object(a.useContext)(D)
              , _ = i.bnbPrice
              , d = i.factoryContract
              , c = i.web3
              , x = Object(a.useContext)(C)
              , k = x.lpVersion
              , h = Object(a.useState)(new T.a(0))
              , y = Object(r.a)(h, 2)
              , j = y[0]
              , O = y[1]
              , v = Object(a.useState)(null)
              , F = Object(r.a)(v, 2)
              , W = F[0]
              , N = F[1]
              , B = Object(a.useState)(null)
              , S = Object(r.a)(B, 2)
              , P = S[0]
              , I = S[1]
              , L = Object(a.useState)(!1)
              , A = Object(r.a)(L, 2)
              , M = A[0]
              , E = A[1]
              , R = Object(a.useState)(new T.a(0))
              , U = Object(r.a)(R, 2)
              , H = U[0]
              , V = U[1]
              , q = Object(a.useState)(new T.a(0))
              , z = Object(r.a)(q, 2)
              , G = z[0]
              , K = z[1]
              , Y = Object(a.useState)(null)
              , Z = Object(r.a)(Y, 2)
              , J = Z[0]
              , Q = Z[1]
              , X = Object(a.useState)(null)
              , $ = Object(r.a)(X, 2)
              , ee = $[0]
              , te = $[1]
              , ne = Object(a.useState)(null)
              , ae = Object(r.a)(ne, 2)
              , le = ae[0]
              , se = ae[1]
              , oe = Object(a.useState)(!1)
              , re = Object(r.a)(oe, 2)
              , ie = re[0]
              , _e = re[1]
              , de = Object(a.useState)(new T.a(0))
              , ce = Object(r.a)(de, 2)
              , me = ce[0]
              , pe = ce[1]
              , xe = Object(a.useState)(new T.a(0))
              , ue = Object(r.a)(xe, 2)
              , be = ue[0]
              , ke = ue[1]
              , he = Object(a.useState)(null)
              , Te = Object(r.a)(he, 2)
              , fe = Te[0]
              , ge = Te[1]
              , ye = Object(a.useState)(new T.a(0))
              , je = Object(r.a)(ye, 2)
              , Oe = je[0]
              , ve = je[1]
              , Ce = Object(a.useRef)(null)
              , Fe = Object(a.useRef)(null)
              , We = Object(a.useRef)(!1)
              , Ne = Pe()
              , Be = Object(a.useState)(!1)
              , Se = Object(r.a)(Be, 2)
              , Ie = Se[0]
              , Le = Se[1]
              , Ae = Object(a.useState)(null)
              , Me = Object(r.a)(Ae, 2)
              , De = Me[0]
              , Ee = Me[1]
              , Re = Object(a.useState)(null)
              , Ue = Object(r.a)(Re, 2)
              , He = Ue[0]
              , Ve = Ue[1]
              , qe = Object(a.useState)(null)
              , ze = Object(r.a)(qe, 2)
              , Ge = ze[0]
              , Ke = ze[1]
              , Ye = Object(a.useState)("")
              , Ze = Object(r.a)(Ye, 2)
              , Je = Ze[0]
              , Qe = Ze[1]
              , Xe = Object(a.useState)("")
              , $e = Object(r.a)(Xe, 2)
              , et = $e[0]
              , tt = $e[1]
              , nt = Object(a.useState)(null)
              , at = Object(r.a)(nt, 2)
              , lt = at[0]
              , st = at[1]
              , ot = Object(a.useState)(!1)
              , _t = Object(r.a)(ot, 2)
              , dt = _t[0]
              , ct = _t[1]
              , mt = Object(a.useRef)(!1)
              , pt = Object(a.useRef)(!1)
              , xt = Object(a.useState)(null)
              , ut = Object(r.a)(xt, 2)
              , bt = ut[0]
              , kt = ut[1]
              , ht = Object(a.useState)(null)
              , Tt = Object(r.a)(ht, 2)
              , ft = Tt[0]
              , gt = Tt[1]
              , yt = Object(a.useState)(null)
              , jt = Object(r.a)(yt, 2)
              , wt = jt[0]
              , Ot = jt[1]
              , vt = Object(a.useState)(null)
              , Ct = Object(r.a)(vt, 2)
              , Ft = Ct[0]
              , Wt = Ct[1];
            Object(a.useEffect)((function() {
                function n() {
                    return (n = Object(b.a)(u.a.mark((function n() {
                        var a, l, s, i, d, m, p, x, b, k, h, g, y, j, v, C, F, W, B, S, P, L, A, M, D, R, U, H, q, z, G, Y, Z, J, X, $, ee, ne, ae, le, oe, re, ie, de, ce, me, xe, ue, be;
                        return u.a.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    Ne(f, [{
                                        address: e,
                                        name: "owner"
                                    }]).catch((function() {}
                                    ));
                                case 2:
                                    if (a = n.sent,
                                    l = !1,
                                    !a || -1 !== a[0][0].indexOf("0x000")) {
                                        n.next = 9;
                                        break
                                    }
                                    return n.next = 7,
                                    c.getCode(a[0][0]);
                                case 7:
                                    s = n.sent,
                                    l = "0x" === s;
                                case 9:
                                    return i = [{
                                        address: Ce.current,
                                        name: "getReserves"
                                    }, {
                                        address: Ce.current,
                                        name: "token1"
                                    }, {
                                        address: Ce.current,
                                        name: "totalSupply"
                                    }, {
                                        address: e,
                                        name: "decimals"
                                    }, {
                                        address: e,
                                        name: "totalSupply"
                                    }, {
                                        address: e,
                                        name: "symbol"
                                    }, {
                                        address: e,
                                        name: "name"
                                    }, {
                                        address: e,
                                        name: "balanceOf",
                                        params: ["0x000000000000000000000000000000000000dead"]
                                    }, {
                                        address: e,
                                        name: "balanceOf",
                                        params: ["0x0000000000000000000000000000000000000ded"]
                                    }, {
                                        address: e,
                                        name: "balanceOf",
                                        params: ["0x0000000000000000000000000000000000000001"]
                                    }, {
                                        address: Fe.current,
                                        name: "getReserves"
                                    }, {
                                        address: Fe.current,
                                        name: "token1"
                                    }, {
                                        address: Fe.current,
                                        name: "totalSupply"
                                    }],
                                    a && l && (i.push({
                                        address: Ce.current,
                                        name: "balanceOf",
                                        params: [a[0][0]]
                                    }),
                                    i.push({
                                        address: Fe.current,
                                        name: "balanceOf",
                                        params: [a[0][0]]
                                    })),
                                    n.next = 13,
                                    Ne(w, i).catch((function() {}
                                    ));
                                case 13:
                                    if (d = n.sent) {
                                        n.next = 16;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 16:
                                    m = Object(r.a)(d, 13),
                                    p = m[0],
                                    x = Object(r.a)(m[1], 1),
                                    b = x[0],
                                    k = Object(r.a)(m[2], 1),
                                    h = k[0],
                                    g = Object(r.a)(m[3], 1),
                                    y = g[0],
                                    j = Object(r.a)(m[4], 1),
                                    v = j[0],
                                    C = Object(r.a)(m[5], 1),
                                    F = C[0],
                                    W = Object(r.a)(m[6], 1),
                                    B = W[0],
                                    S = Object(r.a)(m[7], 1),
                                    P = S[0],
                                    L = Object(r.a)(m[8], 1),
                                    A = L[0],
                                    M = Object(r.a)(m[9], 1),
                                    D = M[0],
                                    R = m[10],
                                    U = Object(r.a)(m[11], 1),
                                    H = U[0],
                                    q = Object(r.a)(m[12], 1),
                                    z = q[0],
                                    G = l ? new T.a(d[d.length - 2][0].toString()).div(new T.a(10).pow(18)) : new T.a(0),
                                    Y = l ? new T.a(d[d.length - 1][0].toString()).div(new T.a(10).pow(18)) : new T.a(0),
                                    Z = new T.a(y.toString()),
                                    J = it(p, b, e, t, Z, _, h, mt.current),
                                    X = J.price,
                                    $ = J.calcLpPrice,
                                    ee = J.calcLpSupply,
                                    ne = J.reverse,
                                    ae = J.lpBnbSupply,
                                    le = J.lpTokenSupply,
                                    oe = it(R, H, e, t, Z, _, z, pt.current),
                                    re = oe.price,
                                    ie = oe.calcLpPrice,
                                    de = oe.calcLpSupply,
                                    ce = oe.reverse,
                                    me = oe.lpBnbSupply,
                                    xe = oe.lpTokenSupply,
                                    ue = [P, A, D].reduce((function(e, t) {
                                        return e.plus(new T.a(t.toString()).div(new T.a(10).pow(Z)))
                                    }
                                    ), new T.a(0)),
                                    O(ae.gt(me) ? X : re),
                                    N($),
                                    I(ee),
                                    E(ne),
                                    V(ae),
                                    K(le),
                                    Q(G),
                                    te(ie),
                                    se(de),
                                    _e(ce),
                                    pe(me),
                                    ke(xe),
                                    ge(Y),
                                    o(Z),
                                    Qe(F),
                                    tt(B),
                                    ve(ue),
                                    Ee(new T.a(v.toString()).div(new T.a(10).pow(Z))),
                                    Ve(mt.current ? null : Ce.current),
                                    Ke(pt.current ? null : Fe.current),
                                    st(e),
                                    be = ae.gt(me) ? "1" : "2",
                                    kt(be),
                                    gt("1" === be ? Ce.current : Fe.current),
                                    Ot("1" === be ? h : z),
                                    Wt("1" === be ? G : Y),
                                    Le(!0);
                                case 50:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))).apply(this, arguments)
                }
                function a() {
                    return (a = Object(b.a)(u.a.mark((function n() {
                        var a, l, s, o, i, _, d, c, x, b, k, h, T, f, y, j, w, O, v, C;
                        return u.a.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (!e || We.current === e) {
                                        n.next = 49;
                                        break
                                    }
                                    if (Le(!1),
                                    ct(!1),
                                    We.current = e,
                                    Ce.current = null,
                                    Fe.current = null,
                                    Object(we.isAddress)(e)) {
                                        n.next = 9;
                                        break
                                    }
                                    return ct(!0),
                                    n.abrupt("return");
                                case 9:
                                    if (a = rt(e, "1"),
                                    l = rt(e, "2"),
                                    !t) {
                                        n.next = 23;
                                        break
                                    }
                                    return n.next = 14,
                                    Ne(g, [{
                                        address: a,
                                        name: "getPair",
                                        params: [p.busd[m.chainId], e]
                                    }, {
                                        address: l,
                                        name: "getPair",
                                        params: [p.busd[m.chainId], e]
                                    }]);
                                case 14:
                                    return s = n.sent,
                                    o = Object(r.a)(s, 2),
                                    i = Object(r.a)(o[0], 1),
                                    _ = i[0],
                                    d = Object(r.a)(o[1], 1),
                                    c = d[0],
                                    Ce.current = _,
                                    Fe.current = c,
                                    n.abrupt("return");
                                case 23:
                                    if (e === p.wbnb[m.chainId]) {
                                        n.next = 39;
                                        break
                                    }
                                    return n.next = 26,
                                    Ne(g, [{
                                        address: a,
                                        name: "getPair",
                                        params: [p.wbnb[m.chainId], e]
                                    }, {
                                        address: l,
                                        name: "getPair",
                                        params: [p.wbnb[m.chainId], e]
                                    }]);
                                case 26:
                                    x = n.sent,
                                    b = Object(r.a)(x, 2),
                                    k = Object(r.a)(b[0], 1),
                                    h = k[0],
                                    T = Object(r.a)(b[1], 1),
                                    f = T[0],
                                    "0x0000000000000000000000000000000000000000" === h && "0x0000000000000000000000000000000000000000" === f && ct(!0),
                                    "0x0000000000000000000000000000000000000000" === h && "0x0000000000000000000000000000000000000000" !== f ? (h = f,
                                    mt.current = !0) : mt.current = !1,
                                    "0x0000000000000000000000000000000000000000" === f && "0x0000000000000000000000000000000000000000" !== h ? (f = h,
                                    pt.current = !0) : pt.current = !1,
                                    Ce.current = h,
                                    Fe.current = f,
                                    n.next = 49;
                                    break;
                                case 39:
                                    return n.next = 41,
                                    Ne(g, [{
                                        address: a,
                                        name: "getPair",
                                        params: [p.wbnb[m.chainId], p.busd[m.chainId]]
                                    }, {
                                        address: l,
                                        name: "getPair",
                                        params: [p.wbnb[m.chainId], p.busd[m.chainId]]
                                    }]);
                                case 41:
                                    y = n.sent,
                                    j = Object(r.a)(y, 2),
                                    w = Object(r.a)(j[0], 1),
                                    O = w[0],
                                    v = Object(r.a)(j[1], 1),
                                    C = v[0],
                                    Ce.current = O,
                                    Fe.current = C;
                                case 49:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))).apply(this, arguments)
                }
                d && _ && e && Ne && c && function() {
                    return a.apply(this, arguments)
                }().then((function() {
                    !function() {
                        n.apply(this, arguments)
                    }()
                }
                ))
            }
            ), [e, _, t, d, k, Ne, c]);
            var Nt = {
                "0x118f073796821da3e9901061b05c0b36377b877e": !0,
                "0x7e5d52c3335c91af0da392bea4bb9e43f2aba62c": !0,
                "0xe826e07d3c1b112d8278d68caaf5b38bba47d3dc": !0,
                "0xeb953eda0dc65e3246f43dc8fa13f35623bdd5ed": !0
            }
              , Bt = !Nt[e];
            return {
                price: j,
                decimals: s,
                bnbPrice: _,
                bnbLiquidity: H,
                tokenLiquidity: G,
                lpSupply: P,
                ownerLpBalance: J,
                lpPrice: W,
                ready: Ie,
                reverse: M,
                tokenTotalSupply: De,
                tokenBnbLpAddress: He,
                tokenBnbLpAddress2: Ge,
                symbol: Je,
                name: et,
                burnedBalance: Oe,
                priceForAddress: lt,
                noLp: dt,
                lpPrice2: ee,
                lpSupply2: le,
                reverse2: ie,
                bnbLiquidity2: me,
                tokenLiquidity2: be,
                ownerLpBalance2: fe,
                mainLpVersion: bt,
                mainLpAddress: ft,
                mainLpSupply: wt,
                mainOwnerLpBalance: Ft,
                showBnbLp: Bt
            }
        }
        function dt(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , l = Object(a.useState)(null)
              , s = Object(r.a)(l, 2)
              , o = s[0]
              , i = s[1]
              , _ = Object(a.useState)(null)
              , d = Object(r.a)(_, 2)
              , c = d[0]
              , m = d[1]
              , p = Object(a.useState)(null)
              , x = Object(r.a)(p, 2)
              , k = x[0]
              , h = x[1]
              , T = Object(a.useCallback)(Object(b.a)(u.a.mark((function n() {
                var a;
                return u.a.wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return i(null),
                            n.next = 3,
                            he(e, t);
                        case 3:
                            a = n.sent,
                            i(a),
                            m(e),
                            h(t);
                        case 7:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            ))), [e, t]);
            Object(a.useEffect)((function() {
                e && !n && t ? T() : (i(null),
                m(null),
                h(null))
            }
            ), [e, T, n, t]);
            var f = function() {
                if (!n)
                    return T()
            };
            return {
                transactions: o,
                transactionsAccount: c,
                transactionsToken: k,
                refetch: f
            }
        }
        var ct = ["0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822"]
          , mt = [{
            symbol: "BNB",
            address: p.wbnb[m.chainId],
            lpVersion: "1"
        }, {
            symbol: "BUSD",
            address: p.busd[m.chainId],
            lpVersion: "1"
        }, {
            symbol: "BNB",
            address: p.wbnb[m.chainId],
            lpVersion: "2"
        }, {
            symbol: "BUSD",
            address: p.busd[m.chainId],
            lpVersion: "2"
        }];
        function pt(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3
              , n = Object(a.useState)([])
              , l = Object(r.a)(n, 2)
              , s = l[0]
              , o = l[1]
              , i = Object(a.useState)(null)
              , _ = Object(r.a)(i, 2)
              , d = _[0]
              , c = _[1]
              , x = Object(a.useContext)(D)
              , k = x.factoryContract
              , h = x.web3
              , T = Object(a.useRef)([])
              , f = Object(a.useRef)(null)
              , y = Object(a.useRef)({})
              , j = Object(a.useRef)({})
              , O = Pe();
            return Object(a.useEffect)((function() {
                var n, a = e, l = [];
                function s() {
                    return i.apply(this, arguments)
                }
                function i() {
                    return (i = Object(b.a)(u.a.mark((function t() {
                        var n, s, i, _, d, m;
                        return u.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return s = {},
                                    t.next = 3,
                                    h.getBlock("latest");
                                case 3:
                                    return i = t.sent,
                                    _ = tt.DateTime.fromSeconds(i.timestamp),
                                    d = i.number,
                                    m = [],
                                    t.next = 9,
                                    Promise.all(mt.map(function() {
                                        var t = Object(b.a)(u.a.mark((function t(n) {
                                            var o, i, c, p, x, b, k, T, v, C, F, W, N;
                                            return u.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        if (o = "".concat(n.address, "-").concat(e, "-").concat(n.lpVersion),
                                                        i = rt(e, n.lpVersion),
                                                        !y.current[o]) {
                                                            t.next = 6;
                                                            break
                                                        }
                                                        c = y.current[o],
                                                        t.next = 13;
                                                        break;
                                                    case 6:
                                                        return t.next = 8,
                                                        O(g, [{
                                                            address: i,
                                                            name: "getPair",
                                                            params: [n.address, e]
                                                        }]);
                                                    case 8:
                                                        p = t.sent,
                                                        x = Object(r.a)(p, 1),
                                                        b = Object(r.a)(x[0], 1),
                                                        k = b[0],
                                                        c = k;
                                                    case 13:
                                                        if (y.current[o] = c,
                                                        "0x0000000000000000000000000000000000000000" !== c) {
                                                            t.next = 16;
                                                            break
                                                        }
                                                        return t.abrupt("return");
                                                    case 16:
                                                        return s[c.toLowerCase()] = n.symbol,
                                                        T = new h.Contract(w,c),
                                                        t.next = 20,
                                                        T.getPastEvents("allEvents", {
                                                            topics: ct,
                                                            fromBlock: l.length ? l[0].blockNumber + 1 : d - 2e3,
                                                            toBlock: "latest"
                                                        });
                                                    case 20:
                                                        if (v = t.sent,
                                                        !j.current[c]) {
                                                            t.next = 25;
                                                            break
                                                        }
                                                        t.t0 = j.current[c],
                                                        t.next = 28;
                                                        break;
                                                    case 25:
                                                        return t.next = 27,
                                                        T.methods.token1().call();
                                                    case 27:
                                                        t.t0 = t.sent;
                                                    case 28:
                                                        if (C = t.t0,
                                                        j.current[c] = C,
                                                        F = !1,
                                                        C.toLowerCase() === e.toLowerCase() && (F = !0),
                                                        W = {},
                                                        N = v.map((function(e) {
                                                            return W[e.id] = !0,
                                                            Object(ee.a)(Object(ee.a)({
                                                                lpVersion: n.lpVersion
                                                            }, e), {}, {
                                                                quoteCurrency: n.address,
                                                                reverse: F,
                                                                timestamp: _.plus({
                                                                    seconds: 3 * (e.blockNumber - d)
                                                                })
                                                            })
                                                        }
                                                        )).filter((function(t) {
                                                            return "0x1ba292a599f9c4f5618616c14ba38daec29e7e08" !== e || "150000000000000000" !== t.returnValues.amount0In
                                                        }
                                                        )),
                                                        f.current === a) {
                                                            t.next = 36;
                                                            break
                                                        }
                                                        return t.abrupt("return");
                                                    case 36:
                                                        m = m.concat(N);
                                                    case 37:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }()));
                                case 9:
                                    m = m.sort((function(e, t) {
                                        return at(e) < at(t) ? 1 : -1
                                    }
                                    )),
                                    (n = m).push.apply(n, Object(Xe.a)(l)),
                                    o(l = m),
                                    c(s);
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))).apply(this, arguments)
                }
                return Object(we.isAddress)(e) && O && e && f.current !== a && k && e !== p.wbnb[m.chainId] && (f.current = a,
                T.current.splice(0, T.current.length),
                o([]),
                c(null),
                s(),
                n = setInterval((function() {
                    s()
                }
                ), t)),
                function() {
                    clearInterval(n)
                }
            }
            ), [e, k, h, O, t]),
            {
                events: s,
                lpSymbols: d
            }
        }
        var xt = n(195)
          , ut = n.n(xt);
        function bt(e) {
            var t = e.account
              , n = e.address
              , l = e.lpSymbols
              , s = e.transactions
              , o = e.price
              , i = Object(a.useState)(null)
              , _ = Object(r.a)(i, 2)
              , d = _[0]
              , c = _[1]
              , m = Object(a.useRef)(null)
              , p = Object(a.useRef)(null);
            Object(a.useEffect)((function() {
                if (!s || !l)
                    return c(null),
                    m.current = null,
                    void (p.current = null);
                m.current === n && p.current === t || (m.current = n,
                p.current = t,
                c(s))
            }
            ), [t, n, l, s]);
            var x = function(e) {
                var t = e.index;
                return d[t]
            };
            if (!d)
                return Object(v.jsx)(M, {});
            return Object(v.jsx)("div", {
                className: "fw-bold flex-grow-1 table-responsive ".concat(ut.a.tokenFeed),
                style: {
                    minHeight: 400
                },
                children: Object(v.jsx)(Ge.a, {
                    children: function(e) {
                        var t = e.width
                          , n = e.height
                          , a = t < 600 ? 600 : t;
                        return Object(v.jsxs)(Ge.d, {
                            width: a,
                            height: n,
                            rowGetter: x,
                            rowCount: (null === d || void 0 === d ? void 0 : d.length) || 0,
                            rowHeight: 42,
                            headerHeight: 25,
                            rowClassName: "bg-blue-dark",
                            children: [a > 1e3 && Object(v.jsx)(Ge.b, {
                                cellRenderer: function(e) {
                                    var t = e.cellData;
                                    return Object(v.jsx)("span", {
                                        className: "Buy" === t ? "text-success" : "text-danger",
                                        children: t
                                    })
                                },
                                className: "table-col-wrap text-end",
                                dataKey: "type",
                                width: 30,
                                label: "",
                                headerClassName: "text-end"
                            }), Object(v.jsx)(Ge.b, {
                                cellRenderer: function(e) {
                                    var t = e.rowData;
                                    return Object(v.jsxs)("span", {
                                        className: 0 === t.usdAmountSell ? "text-success" : "text-danger",
                                        children: [new T.a(t.amount).toFormat(4), a > 600 && Object(v.jsxs)(v.Fragment, {
                                            children: [Object(v.jsx)("br", {}), Object(v.jsx)("small", {
                                                className: "text-muted",
                                                children: t.symbol
                                            })]
                                        })]
                                    })
                                },
                                className: "table-col-wrap text-end",
                                dataKey: "transaction",
                                width: a / 3 - 250 / 3,
                                label: "Tokens",
                                headerClassName: "text-end"
                            }), Object(v.jsx)(Ge.b, {
                                cellRenderer: function(e) {
                                    var t = e.rowData;
                                    return Object(v.jsxs)(v.Fragment, {
                                        children: [t.priceUnknown && Object(v.jsx)("span", {
                                            className: "Buy" === t.type ? "text-success" : "text-danger",
                                            children: "-"
                                        }), !t.priceUnknown && Object(v.jsxs)("span", {
                                            className: "Buy" === t.type ? "text-success" : "text-danger",
                                            children: ["$", new T.a(t.usdAmount).toFormat(2), Object(v.jsx)("br", {}), Object(v.jsxs)("small", {
                                                className: "text-muted",
                                                children: [new T.a(t.fromAmount).toFormat(4), " ", "WBNB" === t.fromSymbol ? "BNB" : t.fromSymbol]
                                            })]
                                        })]
                                    })
                                },
                                className: "table-col-wrap text-end",
                                dataKey: "transaction",
                                width: a / 3 - 250 / 3,
                                label: "Price",
                                headerClassName: "text-end"
                            }), Object(v.jsx)(Ge.b, {
                                cellRenderer: function(e) {
                                    var t = e.cellData
                                      , n = e.rowData;
                                    return Object(v.jsxs)("span", {
                                        className: "Buy" === n.type ? "text-success" : "text-danger",
                                        children: ["$", new T.a(o).times(new T.a(t)).toFormat(2)]
                                    })
                                },
                                className: "table-col-wrap text-end",
                                dataKey: "amount",
                                width: a / 3 - 250 / 3,
                                label: "Current value",
                                headerClassName: "text-end"
                            }), Object(v.jsx)(Ge.b, {
                                cellRenderer: function(e) {
                                    var t = e.cellData
                                      , n = e.rowData;
                                    return Object(v.jsx)("span", {
                                        className: "Buy" === n.type ? "text-success" : "text-danger",
                                        children: tt.DateTime.fromISO(t).toLocaleString(tt.DateTime.DATETIME_SHORT_WITH_SECONDS)
                                    })
                                },
                                className: "table-col-wrap text-end",
                                dataKey: "timestamp",
                                width: 160,
                                label: "Date/Time",
                                headerClassName: "text-end"
                            }), Object(v.jsx)(Ge.b, {
                                cellRenderer: function(e) {
                                    var t = e.cellData;
                                    return Object(v.jsx)(v.Fragment, {
                                        children: Object(v.jsx)("a", {
                                            target: "_blank",
                                            rel: "noreferrer",
                                            href: "https://bscscan.com/tx/".concat(t),
                                            children: t.substr(0, 6)
                                        })
                                    })
                                },
                                className: "table-col-wrap",
                                dataKey: "transaction",
                                width: 60,
                                label: "Tx"
                            })]
                        })
                    }
                })
            })
        }
        var kt = n(259)
          , ht = n.n(kt)
          , Tt = n(415)
          , ft = n.n(Tt)
          , gt = n(416)
          , yt = n.n(gt);
        function jt(e) {
            var t = e.token
              , n = Object(a.useState)(null)
              , l = Object(r.a)(n, 2)
              , s = l[0]
              , o = l[1]
              , i = Object(a.useState)(null)
              , _ = Object(r.a)(i, 2)
              , d = _[0]
              , c = _[1];
            return Object(a.useEffect)((function() {
                function e() {
                    return (e = Object(b.a)(u.a.mark((function e() {
                        var n, a, l, s, r, i;
                        return u.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    ye({
                                        token: t
                                    }).catch((function() {}
                                    ));
                                case 2:
                                    if (n = e.sent) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 5:
                                    a = n.viewer.accounts[0].visits,
                                    l = a.sort((function(e, t) {
                                        return e.dimensions.ts > t.dimensions.ts ? 1 : -1
                                    }
                                    )),
                                    s = 0,
                                    r = Date.now() - 864e5,
                                    i = l.map((function(e) {
                                        var t = new Date(e.dimensions.ts).getTime();
                                        return t >= r && (s += e.sum.visits),
                                        [t, e.sum.visits]
                                    }
                                    )),
                                    o({
                                        rangeSelector: {
                                            inputEnabled: !1,
                                            labelStyle: {
                                                display: "none"
                                            },
                                            buttons: [{
                                                type: "day",
                                                count: 1,
                                                text: "1d"
                                            }, {
                                                type: "all",
                                                count: 2,
                                                text: "2d"
                                            }]
                                        },
                                        chart: {
                                            height: 200
                                        },
                                        navigator: {
                                            enabled: !1
                                        },
                                        scrollbar: {
                                            enabled: !1
                                        },
                                        xAxis: {
                                            range: "2d"
                                        },
                                        yAxis: [{
                                            labels: {
                                                align: "left"
                                            },
                                            height: "100%"
                                        }],
                                        series: [{
                                            name: "Visits",
                                            data: i,
                                            dataGrouping: {
                                                enabled: !1
                                            }
                                        }],
                                        time: {
                                            useUTC: !1
                                        }
                                    }),
                                    c(s);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                o(null),
                c(null),
                function() {
                    e.apply(this, arguments)
                }()
            }
            ), [t]),
            s ? Object(v.jsxs)("div", {
                children: [Object(v.jsx)("p", {
                    className: "text-small m-0",
                    children: null !== d && Object(v.jsxs)(v.Fragment, {
                        children: [new T.a(d).toFormat(), " in 24 hours"]
                    })
                }), !!s && Object(v.jsx)(yt.a, {
                    highcharts: ft.a,
                    options: s,
                    constructorType: "stockChart"
                })]
            }) : Object(v.jsx)(M, {
                size: "small"
            })
        }
        function wt(e) {
            var t = e.showChartAd
              , n = e.tokenTotalSupply
              , l = e.burnedBalance
              , s = e.price
              , o = e.symbol
              , i = e.bnbLpTotal
              , _ = e.bnbLpTotalPrice
              , d = e.bnbLiquidity
              , c = e.bnbLiquidity2
              , m = e.address
              , p = e.showChartAdDesktop
              , x = e.tokenBnbLpAddress
              , k = e.tokenBnbLpAddress2
              , h = e.mainLpAddress
              , f = e.mainLpSupply
              , g = e.mainOwnerLpBalance
              , y = e.ready
              , j = e.showBnbLp
              , O = Object(a.useContext)(D)
              , F = O.bnbPrice
              , W = O.web3
              , N = Object(a.useContext)(C).showInfo
              , B = Object(a.useState)(null)
              , S = Object(r.a)(B, 2)
              , P = S[0]
              , I = S[1]
              , L = m === P
              , A = Object(a.useState)(null)
              , M = Object(r.a)(A, 2)
              , E = M[0]
              , R = M[1]
              , U = function(e) {
                var t = Object(a.useState)(null)
                  , n = Object(r.a)(t, 2)
                  , l = n[0]
                  , s = n[1]
                  , o = Object(a.useState)(!0)
                  , i = Object(r.a)(o, 2)
                  , _ = i[0]
                  , d = i[1];
                return Object(a.useEffect)((function() {
                    function t() {
                        return (t = Object(b.a)(u.a.mark((function t() {
                            var n;
                            return u.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return s(null),
                                        d(!0),
                                        t.next = 4,
                                        me(e);
                                    case 4:
                                        n = t.sent,
                                        s(n),
                                        d(!1);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))).apply(this, arguments)
                    }
                    e && function() {
                        t.apply(this, arguments)
                    }()
                }
                ), [e]),
                {
                    topHolders: l,
                    loading: _
                }
            }(h).topHolders
              , H = Object(a.useState)(null)
              , V = Object(r.a)(H, 2)
              , z = V[0]
              , G = V[1]
              , K = Object(a.useRef)(null)
              , Y = Se(w, h)
              , Z = "".concat(m, "-").concat(h, "-").concat(g, "-").concat(y);
            Object(a.useEffect)((function() {
                var e = "".concat(m, "-").concat(h, "-").concat(g, "-").concat(y);
                function t() {
                    return (t = Object(b.a)(u.a.mark((function t() {
                        var n, a, l, s;
                        return u.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    K.current = e,
                                    a = 0;
                                case 2:
                                    if (!(a < U.length)) {
                                        t.next = 21;
                                        break
                                    }
                                    if (l = new T.a(U[a].balance).div(new T.a(10).pow(18)),
                                    0 !== U[a].address.indexOf("0x000") && !l.lt(g)) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("continue", 18);
                                case 6:
                                    return t.next = 8,
                                    W.getCode(U[a].address);
                                case 8:
                                    if ("0x" === t.sent) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.abrupt("continue", 18);
                                case 13:
                                    return t.next = 15,
                                    Y.methods.balanceOf(U[a].address).call();
                                case 15:
                                    return s = t.sent,
                                    n = new T.a(s).div(new T.a(10).pow(18)),
                                    t.abrupt("break", 21);
                                case 18:
                                    a += 1,
                                    t.next = 2;
                                    break;
                                case 21:
                                    n || (n = g),
                                    G(n);
                                case 23:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))).apply(this, arguments)
                }
                y || G(null),
                y && U && W && m && K.current !== e && h && Y && function() {
                    t.apply(this, arguments)
                }()
            }
            ), [m, h, g, y, Y, U, W]),
            Object(a.useEffect)((function() {
                I(null)
            }
            ), [m]),
            Object(a.useEffect)((function() {
                var e = Math.floor(2 * Math.random());
                R(e)
            }
            ), []);
            var J = K.current === Z && z && y ? z.div(new T.a(f.toString()).div(new T.a(10).pow(18))).times(100) : new T.a(0);
            return Object(v.jsxs)(v.Fragment, {
                children: [t && N && Object(v.jsx)("div", {
                    className: "overflow-auto",
                    style: {
                        maxWidth: "100vw"
                    },
                    children: Object(v.jsx)("iframe", {
                        className: "mt-3",
                        "data-aa": "1602827",
                        src: "//ad.a-ads.com/1602827?size=320x100",
                        scrolling: "no",
                        style: {
                            width: 320,
                            height: 100,
                            border: 0,
                            padding: 0,
                            overflow: "hidden"
                        }
                    })
                }), Object(v.jsx)("hr", {}), Object(v.jsxs)("div", {
                    className: "px-3",
                    children: ["Total Supply:", Object(v.jsx)("br", {}), null === n || void 0 === n ? void 0 : n.toFormat(0), Object(v.jsx)("br", {}), Object(v.jsx)("br", {}), "Market Cap:", Object(v.jsx)("br", {}), Object(v.jsxs)("span", {
                        className: "text-success",
                        children: ["$", null === n || void 0 === n ? void 0 : n.minus(l).times(s).toFormat(0)]
                    }), Object(v.jsx)("hr", {
                        className: "unpad-3"
                    }), j && Object(v.jsxs)(v.Fragment, {
                        children: [o, "/BNB LP BNB Holdings:", Object(v.jsx)("br", {}), null === i || void 0 === i ? void 0 : i.toFormat(2), " BNB ", Object(v.jsxs)("span", {
                            className: "text-success",
                            children: ["($", null === _ || void 0 === _ ? void 0 : _.toFormat(0), ")"]
                        }), Object(v.jsx)("br", {}), Object(v.jsxs)("small", {
                            className: "text-xs text-muted",
                            children: ["V1: ", d.div(new T.a(10).pow(18)).toFormat(2), " BNB", " ", Object(v.jsxs)("span", {
                                className: "text-success",
                                children: ["($", null === F || void 0 === F ? void 0 : F.times(d).div(new T.a(10).pow(18)).toFormat(0), ")"]
                            }), " ", "|", " ", Object(v.jsx)("a", {
                                className: "text-muted",
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c?a=".concat(x, "#tokenAnalytics"),
                                children: "Chart"
                            }), " ", "|", " ", Object(v.jsx)("a", {
                                className: "text-muted",
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://bscscan.com/token/".concat(x, "#balances"),
                                children: "Holders"
                            }), Object(v.jsx)("br", {}), "V2: ", c.div(new T.a(10).pow(18)).toFormat(2), " BNB", " ", Object(v.jsxs)("span", {
                                className: "text-success",
                                children: ["($", null === F || void 0 === F ? void 0 : F.times(c).div(new T.a(10).pow(18)).toFormat(0), ")"]
                            }), " ", "|", " ", Object(v.jsx)("a", {
                                className: "text-muted",
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c?a=".concat(k, "#tokenAnalytics"),
                                children: "Chart"
                            }), " ", "|", " ", Object(v.jsx)("a", {
                                className: "text-muted",
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://bscscan.com/token/".concat(k, "#balances"),
                                children: "Holders"
                            })]
                        }), Object(v.jsx)("br", {}), J.gt(30) && Object(v.jsxs)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://bscscan.com/token/".concat(h, "#balances"),
                            className: "text-danger bg-dark rounded p-2 mt-1 d-inline-block text-decoration-underline",
                            children: ["An unlocked wallet is holding ", J.toFormat(2), "% of the ", o, "/BNB LP ", Object(v.jsx)("br", {}), "(click to view LP holders)"]
                        }), Object(v.jsx)("hr", {
                            className: "unpad-3"
                        })]
                    }), Object(v.jsx)("p", {
                        className: "text-small",
                        children: Object(v.jsxs)("a", {
                            className: "text-light",
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://bscscan.com/token/".concat(m),
                            children: [Object(v.jsx)("img", {
                                className: "circle me-2",
                                src: "/images/logos/bscscan.png",
                                height: 16
                            }), o, " Transactions"]
                        })
                    }), Object(v.jsx)("hr", {
                        className: "unpad-3"
                    }), Object(v.jsx)("p", {
                        className: "text-small",
                        children: Object(v.jsxs)("a", {
                            className: "text-light",
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://bscscan.com/address/".concat(m, "#code"),
                            children: [Object(v.jsx)("img", {
                                className: "circle me-2",
                                src: "/images/logos/bscscan.png",
                                height: 16
                            }), o, " Contract"]
                        })
                    }), Object(v.jsx)("hr", {
                        className: "unpad-3"
                    }), Object(v.jsx)("p", {
                        className: "text-small",
                        children: Object(v.jsxs)("a", {
                            className: "text-light",
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://bscscan.com/token/".concat(m, "#balances"),
                            children: [Object(v.jsx)("img", {
                                className: "circle me-2",
                                src: "/images/logos/bscscan.png",
                                height: 16
                            }), o, " Holders"]
                        })
                    }), Object(v.jsx)("hr", {
                        className: "unpad-3"
                    }), Object(v.jsx)("p", {
                        className: "text-small",
                        children: Object(v.jsxs)("a", {
                            className: "text-light",
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://explorer.bitquery.io/bsc/token/".concat(m),
                            children: [Object(v.jsx)("img", {
                                className: "circle me-2",
                                src: "https://bitquery.io/wp-content/uploads/2020/09/bitquery_logo_w.png",
                                height: 20
                            }), " ", "Bitquery Explorer", " "]
                        })
                    }), Object(v.jsx)("hr", {
                        className: "unpad-3"
                    }), Object(v.jsx)("p", {
                        className: "text-small",
                        children: Object(v.jsx)(q.b, {
                            className: "text-light",
                            to: "/rugcheck/".concat(m),
                            children: "Rug check"
                        })
                    }), Object(v.jsx)("hr", {
                        className: "unpad-3"
                    }), Object(v.jsxs)("p", {
                        className: "text-small cursor-pointer no-select",
                        onClick: function() {
                            return I(L ? null : m)
                        },
                        children: ["PooCoin Visits chart ", Object(v.jsx)("i", {
                            className: "ms-1 fas fa-caret-".concat(L ? "down" : "right")
                        })]
                    }), L && Object(v.jsx)(jt, {
                        token: m
                    }), Object(v.jsx)("hr", {
                        className: "unpad-3"
                    }), p && N && Object(v.jsx)(v.Fragment, {
                        children: Object(v.jsx)("iframe", {
                            className: "unpad",
                            "data-aa": "1602827",
                            src: "//ad.a-ads.com/1602827?size=320x100",
                            scrolling: "no",
                            style: {
                                marginLeft: -10,
                                width: 320,
                                height: 100,
                                border: 0,
                                padding: 0,
                                overflow: "hidden"
                            }
                        })
                    }), (t || p) && Object(v.jsx)("div", {
                        className: "mt-2",
                        children: Object(v.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://www.binance.com/en/register?ref=15819790",
                            children: Object(v.jsx)("img", {
                                className: "img-fluid",
                                src: "/images/promotions/binance".concat(1 === E ? "2" : "", ".jpg"),
                                alt: "Binance"
                            })
                        })
                    })]
                })]
            })
        }
        function Ot(e) {
            var t = e.symbol
              , n = e.decimals
              , l = e.events
              , s = e.lpSymbols
              , o = Object(a.useContext)(D)
              , r = o.bnbPrice
              , i = o.web3
              , _ = o.setTrackingWallet
              , d = o.setShowPremium
              , c = o.hasPremium
              , m = s ? l : []
              , p = function(e) {
                var a = e.index
                  , l = m[a]
                  , o = Object(ee.a)({}, l.returnValues);
                l.reverse && (o.amount0In = l.returnValues.amount1In,
                o.amount1In = l.returnValues.amount0In,
                o.amount0Out = l.returnValues.amount1Out,
                o.amount1Out = l.returnValues.amount0Out);
                var i = "Sell";
                "0" !== o.amount0Out && (i = "Buy");
                var _ = new T.a("Sell" === i ? o.amount1Out : o.amount1In).div(new T.a(10).pow(18))
                  , d = new T.a("Sell" === i ? o.amount0In : o.amount0Out).div(new T.a(10).pow(n))
                  , c = null
                  , p = "";
                "BUSD" === t && (p = "$".concat(_.toFormat(2)),
                c = d),
                "BNB" === t && (p = "$".concat((c = d).toFormat(2)),
                d = _),
                "BNB" === s[l.address.toLowerCase()] && (c = _.times(r),
                p = "$".concat(c.toFormat(2))),
                "BUSD" === s[l.address.toLowerCase()] && (p = "$".concat((c = _).toFormat(2)));
                var x = "$".concat(c ? c.toFormat(2) : _.toFormat(2))
                  , u = "BNB" === s[l.address.toLowerCase()] ? c.div(d) : _.div(d);
                return {
                    type: i,
                    symbol: t,
                    tokens: "".concat(d.toFormat(4)),
                    price: "".concat(_.toFormat(4), " ").concat(s[l.address.toLowerCase()]),
                    busdPriceStr: p,
                    priceShort: x,
                    priceToken: "$".concat(u.toFormat(u.toFormat().split("").findIndex((function(e) {
                        return "0" !== e && "." !== e
                    }
                    )) + 2)),
                    time: "".concat(l.timestamp.toLocaleString(tt.DateTime.TIME_WITH_SECONDS)),
                    tx: l.transactionHash,
                    lpVersion: l.lpVersion
                }
            }
              , x = function() {
                var e = Object(b.a)(u.a.mark((function e(t) {
                    var n, a;
                    return u.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!c) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 3,
                                i.getTransactionReceipt(t);
                            case 3:
                                n = e.sent,
                                a = n.from,
                                _(a),
                                e.next = 9;
                                break;
                            case 8:
                                d(!0);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return s ? Object(v.jsx)("div", {
                className: "fw-bold flex-grow-1 ".concat(ut.a.tokenFeed),
                style: {
                    minHeight: 400
                },
                children: Object(v.jsx)(Ge.a, {
                    children: function(e) {
                        var t = e.width
                          , n = e.height
                          , a = 42;
                        return t < 1e3 && (a = 42),
                        t < 500 && (a = 70),
                        Object(v.jsxs)(Ge.d, {
                            width: t,
                            height: n,
                            rowGetter: p,
                            rowCount: m.length,
                            rowHeight: a,
                            headerHeight: 25,
                            rowClassName: "bg-blue-dark",
                            children: [t > 1e3 && Object(v.jsx)(Ge.b, {
                                cellRenderer: function(e) {
                                    var t = e.cellData
                                      , n = e.rowData;
                                    return Object(v.jsx)("span", {
                                        className: "Buy" === n.type ? "text-success" : "text-danger",
                                        children: t
                                    })
                                },
                                className: "table-col-wrap",
                                dataKey: "type",
                                width: 30,
                                label: ""
                            }), Object(v.jsx)(Ge.b, {
                                cellRenderer: function(e) {
                                    var n = e.cellData
                                      , a = e.rowData;
                                    return Object(v.jsxs)("span", {
                                        className: "Buy" === a.type ? "text-success" : "text-danger",
                                        children: [n, t > 600 && Object(v.jsxs)(v.Fragment, {
                                            children: [Object(v.jsx)("br", {}), Object(v.jsx)("small", {
                                                className: "text-muted",
                                                children: a.symbol
                                            })]
                                        })]
                                    })
                                },
                                className: "table-col-wrap text-end",
                                dataKey: "tokens",
                                width: t / 3 - 175 / 3,
                                label: "Tokens",
                                headerClassName: "text-end"
                            }), Object(v.jsx)(Ge.b, {
                                cellRenderer: function(e) {
                                    var n = e.cellData
                                      , a = e.rowData;
                                    return Object(v.jsx)("span", {
                                        className: "Buy" === a.type ? "text-success" : "text-danger",
                                        children: Object(v.jsxs)("span", {
                                            children: [Object(v.jsx)("span", {
                                                children: a.busdPriceStr
                                            }), t > 600 && Object(v.jsxs)(v.Fragment, {
                                                children: [Object(v.jsx)("br", {}), Object(v.jsx)("small", {
                                                    className: "text-muted",
                                                    children: n
                                                })]
                                            })]
                                        })
                                    })
                                },
                                className: "table-col-wrap text-end",
                                dataKey: "price",
                                width: t / 3 - 175 / 3,
                                label: "Price",
                                headerClassName: "text-end"
                            }), Object(v.jsx)(Ge.b, {
                                cellRenderer: function(e) {
                                    var n = e.cellData
                                      , a = e.rowData;
                                    return Object(v.jsxs)("span", {
                                        className: "Buy" === a.type ? "text-success" : "text-danger",
                                        children: [n, t > 600 && Object(v.jsxs)(v.Fragment, {
                                            children: [Object(v.jsx)("br", {}), Object(v.jsx)("small", {
                                                className: "text-muted",
                                                children: "1" === a.lpVersion ? "LP v1" : "LP v2"
                                            })]
                                        })]
                                    })
                                },
                                className: "table-col-wrap text-end",
                                dataKey: "priceToken",
                                width: t / 3 - 175 / 3,
                                label: "Price / Token",
                                headerClassName: "text-end"
                            }), Object(v.jsx)(Ge.b, {
                                cellRenderer: function(e) {
                                    var t = e.cellData
                                      , n = e.rowData;
                                    return Object(v.jsx)("span", {
                                        className: "Buy" === n.type ? "text-success" : "text-danger",
                                        children: t
                                    })
                                },
                                className: "table-col-wrap text-end",
                                dataKey: "time",
                                width: 75,
                                label: "Time",
                                headerClassName: "text-end"
                            }), Object(v.jsx)(Ge.b, {
                                cellRenderer: function(e) {
                                    var t = e.cellData;
                                    return Object(v.jsxs)(v.Fragment, {
                                        children: [Object(v.jsx)("a", {
                                            target: "_blank",
                                            rel: "noreferrer",
                                            href: "https://bscscan.com/tx/".concat(t),
                                            children: t.substr(0, 6)
                                        }), Object(v.jsx)("br", {}), Object(v.jsx)("span", {
                                            className: "cursor-pointer text-primary",
                                            onClick: function() {
                                                return x(t)
                                            },
                                            children: "Track"
                                        })]
                                    })
                                },
                                className: "table-col-wrap",
                                dataKey: "tx",
                                width: 70,
                                label: "Tx"
                            })]
                        })
                    }
                })
            }) : Object(v.jsx)("div", {
                className: "d-flex justify-content-center",
                children: Object(v.jsx)(M, {
                    size: "small"
                })
            })
        }
        function vt(e) {
            var t, n = e.address, l = e.onChangeAddress, s = e.showChartAd, o = e.showChartAdDesktop, i = Object(a.useState)("BNB"), _ = Object(r.a)(i, 2), d = _[0], c = _[1], x = _t(n), u = x.price, b = x.bnbLiquidity, k = x.bnbLiquidity2, h = x.decimals, g = x.ready, y = x.tokenTotalSupply, j = x.burnedBalance, w = x.tokenBnbLpAddress, O = x.tokenBnbLpAddress2, F = x.symbol, W = x.name, N = x.priceForAddress, B = x.noLp, S = x.mainLpVersion, P = x.mainLpAddress, L = x.mainLpSupply, A = x.mainOwnerLpBalance, M = x.showBnbLp, E = Object(a.useState)(null), R = Object(r.a)(E, 2), U = R[0], H = R[1], V = Se(f, n), q = Pe(), z = Object(a.useRef)(null), G = Object(a.useContext)(D), K = G.bnbPrice, Y = G.web3, J = G.account, Q = G.trackingWallet, X = G.hasPremium2, $ = G.setShowPremium, te = Object(a.useContext)(C), ne = te.starred, ae = te.setStarred, le = te.history, se = te.setHistory, oe = te.showInfo, re = te.setShowInfo, ie = te.showWallet, _e = te.setShowWallet, de = Object(a.useContext)(Me), ce = de.whitelist, me = de.blacklist, pe = de.highRiskTokenInfo, xe = "BNB" === d ? p.wbnb[m.chainId] : p.busd[m.chainId], ue = Q || J, be = pt(n), ke = be.events, he = be.lpSymbols, Te = Object(a.useState)(null), fe = Object(r.a)(Te, 2), ge = fe[0], ye = fe[1], je = Object(a.useRef)(null), we = ue && n === p.poocoin[m.chainId];
            X && (we = !0);
            var Oe = dt(ue, n, !we)
              , Ce = Oe.transactions
              , We = Oe.transactionsAccount
              , Ne = Oe.transactionsToken
              , Be = Oe.refetch
              , Ie = Object(a.useState)("token")
              , Le = Object(r.a)(Ie, 2)
              , Ae = Le[0]
              , De = Le[1];
            Object(a.useEffect)((function() {
                Y && V && q && z.current !== "".concat(n, "-").concat(ue) && g && (ye(null),
                z.current = "".concat(n, "-").concat(ue),
                H(null),
                ue ? q(f, [{
                    address: n,
                    name: "balanceOf",
                    params: [ue]
                }]).then((function(e) {
                    H(new T.a(e[0][0].toString()))
                }
                )).catch((function(e) {
                    return console.log(e)
                }
                )) : H(null))
            }
            ), [ue, n, V, q, z, Y, le, se, F, W, g]),
            Object(a.useEffect)((function() {
                var e, t;
                if (N === n && F && W && n && (!(null === le || void 0 === le ? void 0 : le.tokens) || (null === le || void 0 === le || null === (e = le.tokens[0]) || void 0 === e || null === (t = e.address) || void 0 === t ? void 0 : t.toLowerCase()) !== (null === n || void 0 === n ? void 0 : n.toLowerCase())) && g) {
                    window.gtag("event", "view_chart", {
                        address: n.toLowerCase().substr(2),
                        symbol: F,
                        name: W
                    });
                    var a = le.tokens ? Object(Xe.a)(le.tokens) : []
                      , l = a.findIndex((function(e) {
                        return e.address.toLowerCase() === n.toLowerCase()
                    }
                    ));
                    l > -1 && a.splice(l, 1),
                    a.unshift({
                        symbol: F,
                        name: W,
                        address: n.toLowerCase()
                    }),
                    se({
                        tokens: a.slice(0, 50)
                    })
                }
            }
            ), [F, W, n, le, se, N, g]);
            var Ee = ce ? ce[n] : {}
              , Re = Ee || {}
              , Ue = Re.telegram
              , He = Re.notes
              , Ve = (Ee || {}).website;
            "0x1f546ad641b56b86fd9dceac473d1c7a357276b7" === n && (Ve = "https://pantherswap.com/?ref=d2zea7aekwddsjwakggkggq6cbn7va2yo72ktbzb5"),
            "0x4a3524936db5c310d852266033589d3f6f30ba5d" === n && (Ve = "https://jaguarswap.com/?ref=0k33Nr0q2s9P450So64N52Q3937O28PQO162No3qPR"),
            "0x0fc013e24ae732fcec9eb6bf8cae12782a56be7e" === n && (Ve = "https://llamaswap.finance?lama-friend=d3937b28cd33aE0D2F9cb162aB3Dce450fB64a52");
            var qe = me ? null === (t = me[n]) || void 0 === t ? void 0 : t.notes : null
              , ze = Ce && We === ue && Ne === n ? Ce : null;
            Object(a.useEffect)((function() {
                we || "account" !== Ae || De("token")
            }
            ), [we, Ae]);
            var Ge = b.plus(k).div(new T.a(10).pow(18))
              , Ke = null === K || void 0 === K ? void 0 : K.times(b).plus(null === K || void 0 === K ? void 0 : K.times(k)).div(new T.a(10).pow(18))
              , Ye = u.times(U).div(new T.a(10).pow(h))
              , Ze = M ? T.a.min(Ye, K.times(T.a.max(b, k)).div(new T.a(10).pow(18))) : Ye;
            return Object(v.jsxs)("div", {
                className: "d-flex flex-column flex-grow-1 pe-2",
                children: [Object(v.jsxs)(Z.a, {
                    children: [Object(v.jsxs)("title", {
                        children: [W, " price chart (", F, ") $", u.toFormat(4)]
                    }), Object(v.jsx)("meta", {
                        name: "description",
                        content: "".concat(F, " - PooCoin live streaming charts DAPP for Binance Smart Chain (BSC) tokens.")
                    })]
                }), B && Object(v.jsxs)("div", {
                    className: "text-center flex-grow-1",
                    children: ["BNB LP does not exist for this token. Create one on pancakeswap by providing BNB liquidity with the token.", Object(v.jsx)("br", {}), Object(v.jsx)("div", {
                        className: "d-flex justify-content-center",
                        children: Object(v.jsx)(ve, {
                            onSubmit: function(e) {
                                return l(e)
                            },
                            defaultValue: n
                        })
                    })]
                }), Object(v.jsxs)("div", {
                    className: "d-flex flex-grow-1 flex-row position-relative",
                    children: [Object(v.jsxs)("div", {
                        className: "".concat(ht.a.stats, " ").concat(oe ? "d-block" : "d-none", " bg-dark-1 shadow pt-3 text-small"),
                        children: [Object(v.jsx)("div", {
                            className: "d-flex align-items-center justify-content-end",
                            children: Object(v.jsxs)("button", {
                                className: "btn btn-light btn-sm fw-bold me-2",
                                onClick: function() {
                                    return re(!oe)
                                },
                                children: [Object(v.jsx)("i", {
                                    className: "fas fa-angle-double-left"
                                }), " Info"]
                            })
                        }), Object(v.jsx)(wt, {
                            showChartAd: s,
                            tokenTotalSupply: y,
                            burnedBalance: j,
                            price: u,
                            symbol: F,
                            bnbLpTotal: Ge,
                            bnbLpTotalPrice: Ke,
                            bnbLiquidity: b,
                            bnbLiquidity2: k,
                            address: n,
                            showChartAdDesktop: o,
                            tokenBnbLpAddress: w,
                            tokenBnbLpAddress2: O,
                            mainLpAddress: P,
                            mainLpSupply: L,
                            mainOwnerLpBalance: A,
                            ready: g,
                            showBnbLp: M
                        })]
                    }), Object(v.jsxs)("div", {
                        className: "d-flex flex-column flex-grow-1 ps-2 pt-2 lh-1",
                        children: [g && Object(v.jsxs)("div", {
                            className: "d-flex align-items-start flex-wrap",
                            children: [!oe && Object(v.jsxs)("button", {
                                className: "btn btn-light btn-sm fw-bold mb-2",
                                onClick: function() {
                                    return re(!oe)
                                },
                                children: [Object(v.jsx)("i", {
                                    className: "fas fa-angle-double-right"
                                }), " Info"]
                            }), Object(v.jsx)("div", {
                                className: "mt-1 ps-2 d-flex align-items-center flex-grow-1",
                                children: F && W && Object(v.jsxs)("div", {
                                    children: [Object(v.jsxs)("div", {
                                        className: "d-flex flex-wrap",
                                        children: [Object(v.jsx)("img", {
                                            onError: function(e) {
                                                e.target.style = "display: none;"
                                            },
                                            height: 32,
                                            width: 32,
                                            className: "me-2",
                                            src: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(I.a.utils.toChecksumAddress(n), "/logo.png")
                                        }), Object(v.jsxs)("div", {
                                            className: "mb-1 d-flex flex-column lh-1",
                                            children: [Object(v.jsxs)("h1", {
                                                className: "lh-1 m-0 font-size-base",
                                                children: [W, " (", F, "/", d, ")"]
                                            }), Object(v.jsxs)("span", {
                                                className: "text-success",
                                                children: ["$", u.toFormat(u.toFormat().split("").findIndex((function(e) {
                                                    return "0" !== e && "." !== e
                                                }
                                                )) + 4)]
                                            })]
                                        }), !ne[n.toLowerCase()] && W && F && Object(v.jsx)("i", {
                                            className: "far fa-star cursor-pointer px-2",
                                            onClick: function() {
                                                return ae(Object(ee.a)(Object(ee.a)({}, ne), {}, Object(Fe.a)({}, n.toLowerCase(), {
                                                    name: W,
                                                    symbol: F
                                                })))
                                            }
                                        }), ne[n.toLowerCase()] && Object(v.jsx)("i", {
                                            className: "fas fa-star text-warning cursor-pointer px-2",
                                            onClick: function() {
                                                return ae(Object(ee.a)(Object(ee.a)({}, ne), {}, Object(Fe.a)({}, n.toLowerCase(), void 0)))
                                            }
                                        }), !!U && !U.isNaN() && U.gt(0) && Object(v.jsxs)("div", {
                                            className: "mb-1 d-flex flex-column lh-1",
                                            children: [Object(v.jsxs)("p", {
                                                className: "m-0 fw-bold font-size-base",
                                                children: ["Balance: ", U.div(new T.a(10).pow(h)).toFormat(4)]
                                            }), Object(v.jsxs)("span", {
                                                className: "text-success",
                                                children: ["$", Ze.toFormat(2)]
                                            })]
                                        })]
                                    }), Object(v.jsx)("div", {
                                        className: "my-2 unpad-2 me-1",
                                        children: Object(v.jsx)(ve, {
                                            onSubmit: function(e) {
                                                return l(e)
                                            },
                                            defaultValue: n
                                        })
                                    })]
                                })
                            }), Object(v.jsx)("div", {
                                className: "flex-grow-1",
                                children: Object(v.jsxs)("div", {
                                    className: "text-end",
                                    children: [Object(v.jsxs)("div", {
                                        children: [Object(v.jsx)("span", {
                                            className: "d-inline-block ms-1 mt-1",
                                            children: Object(v.jsxs)("select", {
                                                className: "d-inline-block form-select form-select-sm h-100",
                                                value: d,
                                                onChange: function(e) {
                                                    var t = e.target.value;
                                                    return c(t || "BNB")
                                                },
                                                style: {
                                                    width: 80
                                                },
                                                children: [Object(v.jsx)("option", {
                                                    value: "",
                                                    children: "Select LP Pair..."
                                                }), Object(v.jsx)("option", {
                                                    value: "BNB",
                                                    children: "BNB"
                                                }), Object(v.jsx)("option", {
                                                    value: "BUSD",
                                                    children: "BUSD"
                                                })]
                                            })
                                        }), Object(v.jsx)("span", {
                                            className: "d-inline-block ms-1 mt-1",
                                            children: Object(v.jsx)("a", {
                                                className: "btn btn-dark-1 text-decoration-none text-small",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https://bscscan.com/token/".concat(n),
                                                children: Object(v.jsx)("img", {
                                                    className: "circle",
                                                    src: "/images/logos/bscscan.png",
                                                    height: 18
                                                })
                                            })
                                        }), Object(v.jsx)("span", {
                                            className: "d-inline-block ms-1 mt-1",
                                            children: Object(v.jsxs)("button", {
                                                className: "btn btn-dark-1 text-decoration-none text-small",
                                                onClick: function() {
                                                    return ye(ge ? null : "https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=".concat(n))
                                                },
                                                children: [Object(v.jsx)("img", {
                                                    className: "rounded me-2",
                                                    src: "/images/logos/pancakeswap.svg",
                                                    height: 18
                                                }), "v1"]
                                            })
                                        }), Object(v.jsx)("span", {
                                            className: "d-inline-block ms-1 mt-1",
                                            children: Object(v.jsxs)("button", {
                                                className: "btn btn-dark-1 text-decoration-none text-small",
                                                onClick: function() {
                                                    return ye(ge ? null : "https://exchange.pancakeswap.finance/#/swap?outputCurrency=".concat(n))
                                                },
                                                children: [Object(v.jsx)("img", {
                                                    className: "rounded me-2",
                                                    src: "/images/logos/pancakeswap.svg",
                                                    height: 18
                                                }), "v2"]
                                            })
                                        }), Object(v.jsx)("span", {
                                            className: "d-inline-block ms-1 mt-1",
                                            children: Object(v.jsxs)("button", {
                                                className: "btn btn-dark-1 text-decoration-none text-small",
                                                onClick: function() {
                                                    return _e(!ie)
                                                },
                                                children: [!ie && Object(v.jsx)("i", {
                                                    className: "fas fa-wallet"
                                                }), ie && Object(v.jsx)("i", {
                                                    className: "fas fa-wallet"
                                                })]
                                            })
                                        })]
                                    }), Ve && Object(v.jsx)(v.Fragment, {
                                        children: Object(v.jsxs)("a", {
                                            className: "btn btn-link p-1 me-1 text-light text-decoration-none",
                                            href: Ve,
                                            target: "_blank",
                                            children: [Object(v.jsx)("i", {
                                                className: "fas fa-globe me-1"
                                            }), "Website"]
                                        })
                                    }), Ue && Object(v.jsxs)("a", {
                                        className: "btn btn-link p-1 text-light text-decoration-none",
                                        href: Ue,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [Object(v.jsx)("i", {
                                            className: "fab fa-telegram me-1"
                                        }), "Telegram"]
                                    }), !Ue && !!pe[null === n || void 0 === n ? void 0 : n.toLowerCase()] && 0 === pe[null === n || void 0 === n ? void 0 : n.toLowerCase()].telegram.indexOf("https://t.me/") && Object(v.jsxs)("a", {
                                        href: pe[null === n || void 0 === n ? void 0 : n.toLowerCase()].telegram,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "btn btn-link p-1 text-light text-decoration-none",
                                        children: [Object(v.jsx)("i", {
                                            className: "fab fa-telegram me-1"
                                        }), "Telegram"]
                                    })]
                                })
                            })]
                        }), !!ge && Object(v.jsxs)("div", {
                            className: "d-flex flex-column",
                            style: {
                                height: 600
                            },
                            children: [Object(v.jsxs)("div", {
                                className: "border-bottom text-end pe-1 py-2",
                                children: [Object(v.jsx)("a", {
                                    onClick: function() {
                                        return ye(null)
                                    },
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: ge,
                                    className: "btn btn-outline-light btn-sm me-1",
                                    children: "Open Tab"
                                }), Object(v.jsx)("button", {
                                    type: "button",
                                    onClick: function() {
                                        return ye(null)
                                    },
                                    className: "btn btn-outline-light btn-sm",
                                    children: "Close"
                                })]
                            }), Object(v.jsx)("iframe", {
                                className: "flex-grow-1",
                                ref: je,
                                src: ge,
                                frameBorder: "0"
                            })]
                        }), He && Object(v.jsx)("div", {
                            className: "px-2 pb-1 text-warning text-small text-break",
                            children: He
                        }), qe && Object(v.jsx)("div", {
                            className: "px-2 pb-1 text-warning text-small text-break",
                            children: qe
                        }), Object(v.jsx)("div", {
                            className: "".concat(ht.a.chart, " d-flex flex-column flex-shrink-1 flex-row flex-grow-1"),
                            children: Object(v.jsxs)("div", {
                                className: "d-flex flex-grow-1 text-start flex-grow-1 d-flex flex-column pb-2",
                                children: [!!g && Object(v.jsx)(ot, {
                                    selectedToken: n,
                                    quoteCurrency: xe,
                                    quoteSymbol: d,
                                    tokenSymbol: F,
                                    decimals: h.toString(),
                                    events: ke,
                                    price: u,
                                    transactions: ze,
                                    lpSymbols: he,
                                    account: ue,
                                    enableTx: we,
                                    onRefetch: Be,
                                    bnbLiquidity: b,
                                    mainLpVersion: S
                                }, ue), Object(v.jsxs)("div", {
                                    className: "bg-dark-1 shadow",
                                    children: [s && Object(v.jsx)("div", {
                                        className: "py-1 d-flex justify-content-start position-relative",
                                        style: {
                                            marginTop: 36
                                        },
                                        children: Object(v.jsx)("div", {
                                            style: {
                                                display: "inline-block",
                                                overflowX: "auto",
                                                overflowY: "hidden"
                                            },
                                            className: "mobile-chart-ad",
                                            children: Object(v.jsx)("iframe", {
                                                "data-aa": "1602827",
                                                src: "//ad.a-ads.com/1602827?size=320x100",
                                                scrolling: "no",
                                                style: {
                                                    width: 320,
                                                    height: 100,
                                                    border: 0,
                                                    padding: 0,
                                                    overflow: "hidden"
                                                }
                                            })
                                        })
                                    }), Object(v.jsxs)("div", {
                                        className: "btn-group btn-group-sm my-1 ms-1",
                                        role: "group",
                                        children: [Object(v.jsx)("input", {
                                            type: "radio",
                                            className: "btn-check",
                                            name: "txTab",
                                            value: "token",
                                            id: "tokenTx",
                                            autoComplete: "off",
                                            checked: "token" === Ae,
                                            onChange: function(e) {
                                                var t = e.target.value;
                                                return De(t)
                                            }
                                        }), Object(v.jsx)("label", {
                                            className: "btn btn-outline-light",
                                            htmlFor: "tokenTx",
                                            children: "Token tx"
                                        }), Object(v.jsx)("input", {
                                            type: "radio",
                                            className: "btn-check",
                                            name: "txTab",
                                            value: "account",
                                            id: "accountTx",
                                            autoComplete: "off",
                                            checked: "account" === Ae,
                                            onChange: function(e) {
                                                var t = e.target.value;
                                                we ? De(t) : $(2)
                                            }
                                        }), Object(v.jsx)("label", {
                                            className: "btn btn-outline-light",
                                            htmlFor: "accountTx",
                                            children: "Wallet tx"
                                        })]
                                    })]
                                }), "account" === Ae && we && Object(v.jsx)(bt, {
                                    lpSymbols: he,
                                    account: ue,
                                    address: n,
                                    transactions: ze,
                                    price: u
                                }), g && "token" === Ae && Object(v.jsx)(Ot, {
                                    address: n,
                                    symbol: F,
                                    decimals: h,
                                    events: ke,
                                    lpSymbols: he
                                })]
                            })
                        })]
                    })]
                })]
            })
        }
        function Ct() {
            var e = Object(Ce.h)()
              , t = Object(a.useContext)(D)
              , n = t.poocoinPrice
              , l = t.pancakeUrl;
            return Object(v.jsxs)(J, {
                title: "PooCoin Charts - PooCoin",
                children: [Object(v.jsxs)("div", {
                    className: "text-center mt-3",
                    "data-aos": "fade-down",
                    "data-aos-delay": "100",
                    children: [Object(v.jsxs)("h1", {
                        children: ["PooCoin", Object(v.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "".concat(l, "/#/swap?outputCurrency=0xB27ADAfFB9fEa1801459a1a81B17218288c097cc"),
                            className: "btn btn-success btn-lg ms-5",
                            children: "Buy"
                        })]
                    }), Object(v.jsx)("h4", {
                        children: "Set slippage to 9% on pancakeswap."
                    })]
                }), Object(v.jsx)("div", {
                    className: "text-center",
                    "data-aos": "fade-down",
                    "data-aos-duration": "800",
                    "data-aos-delay": "200",
                    children: Object(v.jsx)("div", {
                        className: "d-flex align-items-center justify-content-center mt-3",
                        children: Object(v.jsxs)("div", {
                            className: "d-inline-flex align-items-center justify-content-center bg-dark border border-light border-2 border shadow",
                            style: {
                                borderRadius: 999
                            },
                            children: [Object(v.jsx)("div", {
                                className: "bg-white d-inline-block p-2 shadow border border-dark border-5",
                                style: {
                                    borderRadius: 999
                                },
                                children: Object(v.jsx)("img", {
                                    height: 50,
                                    width: 50,
                                    className: "spin1",
                                    src: "/images/logo/poocoin512.png",
                                    alt: ""
                                })
                            }), Object(v.jsxs)("div", {
                                className: "fs-2 ms-3 me-4 text-light",
                                children: ["$", n.toFormat(6)]
                            })]
                        })
                    })
                }), Object(v.jsxs)("div", {
                    className: "text-center mt-3 mb-5 pb-5",
                    "data-aos": "fade-down",
                    "data-aos-delay": "300",
                    children: [Object(v.jsx)("h2", {
                        children: "Reflect token on the Binance Smart Chain."
                    }), Object(v.jsx)("h3", {
                        children: "A 8% fee is charged on each transaction. 4% is distributed to other token holders and 4% is burned."
                    }), Object(v.jsx)("h3", {
                        children: "Initial supply: 10,000,000. No more than 100,000 can be traded in 1 transaction."
                    }), Object(v.jsx)("h5", {
                        children: Object(v.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://twitter.com/poocoin_token",
                            children: "Twitter"
                        })
                    }), Object(v.jsx)("h5", {
                        children: Object(v.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://t.me/poocointokenchat",
                            children: "Telegram"
                        })
                    }), Object(v.jsx)("h5", {
                        children: Object(v.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://www.reddit.com/r/PooCoin/",
                            children: "Reddit"
                        })
                    }), Object(v.jsx)("h5", {
                        children: Object(v.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://discord.gg/8NhHZNWhVf",
                            children: "Discord"
                        })
                    }), Object(v.jsx)("div", {
                        className: "mt-4 text-start",
                        children: Object(v.jsx)(vt, {
                            address: "0xb27adaffb9fea1801459a1a81b17218288c097cc",
                            onChangeAddress: function(t) {
                                return e.push(Object(Ce.f)("/tokens/:address", {
                                    address: t
                                }))
                            },
                            hideExpand: !0
                        })
                    })]
                })]
            })
        }
        Ot.defaultProps = {
            symbol: ""
        },
        vt.defaultProps = {
            onChangeAddress: function() {},
            hideExpand: !1,
            showChartAd: !1,
            showChartAdDesktop: !1
        };
        var Ft = n(115)
          , Wt = n(260)
          , Nt = n(161)
          , Bt = n(417);
        function St(e) {
            var t = e.pools
              , n = e.poolTokens
              , a = e.decimals
              , l = e.tokenName
              , s = e.price;
            return Object(v.jsx)(Bt.a, {
                style: {
                    maxHeight: 400
                },
                className: "shadow border border-dark bg-dark",
                children: Object(v.jsxs)("table", {
                    className: "table table-compact table-bordered table-dark mb-0",
                    children: [Object(v.jsx)("thead", {
                        className: "table-light",
                        children: Object(v.jsxs)("tr", {
                            children: [Object(v.jsx)("th", {
                                className: "text-center",
                                style: {
                                    width: "33%"
                                },
                                children: "Farm"
                            }), Object(v.jsx)("th", {
                                className: "text-center",
                                style: {
                                    width: "33%"
                                },
                                children: "Staked"
                            }), Object(v.jsx)("th", {
                                className: "text-center",
                                style: {
                                    width: "33%"
                                },
                                children: "Pending"
                            })]
                        })
                    }), Object(v.jsx)("tbody", {
                        children: t.map((function(e, t) {
                            var o, r, i, _ = new T.a(18);
                            return (null === (o = n[e.pid]) || void 0 === o ? void 0 : o.decimals) && (_ = new T.a(n[e.pid].decimals)),
                            Object(v.jsxs)("tr", {
                                children: [Object(v.jsx)("td", {
                                    className: "text-center",
                                    children: null === (r = n[e.pid]) || void 0 === r ? void 0 : r.name
                                }), Object(v.jsx)("td", {
                                    align: "right",
                                    children: new T.a(null === (i = e.userInfo.amount) || void 0 === i ? void 0 : i.toString()).div(new T.a(10).pow(_)).toFormat(6)
                                }), Object(v.jsxs)("td", {
                                    align: "right",
                                    children: [new T.a(e.pending.toString()).div(new T.a(10).pow(a)).toPrecision(6), " ", l, Object(v.jsxs)("span", {
                                        className: "text-success px-1",
                                        children: ["($", s.times(new T.a(e.pending.toString()).div(new T.a(10).pow(a))).toFormat(2), ")"]
                                    })]
                                })]
                            }, t)
                        }
                        ))
                    })]
                })
            })
        }
        var Pt = "0x0895196562C7868C5Be92459FaE7f877ED450452"
          , It = "0xa184088a740c695e156f91f5cc086a06bb78b827";
        function Lt() {
            var e = Object(k.m)().account
              , t = Se(Nt, Pt)
              , n = Pe()
              , l = Object(a.useRef)("")
              , s = Object(a.useState)([])
              , o = Object(r.a)(s, 2)
              , i = o[0]
              , _ = o[1]
              , d = _t(It)
              , c = d.price
              , m = d.decimals;
            return Object(a.useEffect)((function() {
                function a() {
                    return (a = Object(b.a)(u.a.mark((function a() {
                        var l, s, o, r, i, d, c, m, p, x, b, k;
                        return u.a.wrap((function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    t.methods.poolLength().call();
                                case 2:
                                    l = a.sent,
                                    s = [],
                                    o = [],
                                    r = [],
                                    i = [],
                                    d = 0;
                                case 8:
                                    if (!(d < l)) {
                                        a.next = 18;
                                        break
                                    }
                                    if (Wt[d] && 0 !== d) {
                                        a.next = 11;
                                        break
                                    }
                                    return a.abrupt("continue", 15);
                                case 11:
                                    i.push(d),
                                    s.push({
                                        address: Pt,
                                        name: "poolInfo",
                                        params: [d]
                                    }),
                                    o.push({
                                        address: Pt,
                                        name: "stakedWantTokens",
                                        params: [d, e]
                                    }),
                                    r.push({
                                        address: Pt,
                                        name: "pendingAUTO",
                                        params: [d, e]
                                    });
                                case 15:
                                    d += 1,
                                    a.next = 8;
                                    break;
                                case 18:
                                    return a.next = 20,
                                    n(Nt, s);
                                case 20:
                                    return c = a.sent,
                                    a.next = 23,
                                    n(Nt, o);
                                case 23:
                                    return m = a.sent,
                                    a.next = 26,
                                    n(Nt, r);
                                case 26:
                                    for (p = a.sent,
                                    x = [],
                                    b = 0; b < c.length; b += 1)
                                        x.push({
                                            pid: i[b],
                                            poolInfo: c[b],
                                            userInfo: m[b],
                                            pending: p[b][0]
                                        });
                                    k = x.filter((function(e) {
                                        return e.userInfo[0] > 1
                                    }
                                    )).map((function(e) {
                                        return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                            userInfo: Object(ee.a)(Object(ee.a)({}, e.userInfo), {}, {
                                                amount: e.userInfo[0]
                                            })
                                        })
                                    }
                                    )),
                                    _(k);
                                case 31:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))).apply(this, arguments)
                }
                t && e && n && l.current !== e && (l.current = e,
                function() {
                    a.apply(this, arguments)
                }())
            }
            ), [e, t, n]),
            (null === i || void 0 === i ? void 0 : i.length) ? Object(v.jsxs)("div", {
                className: "bg-dark rounded shadow p-3 mb-3",
                children: [Object(v.jsxs)("div", {
                    className: "mb-2",
                    children: [Object(v.jsx)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://autofarm.network",
                        className: "rounded border border-2 d-inline-block",
                        children: Object(v.jsx)("img", {
                            height: 32,
                            src: "/images/logos/autofarm.png",
                            className: "rounded"
                        })
                    }), " ", Object(v.jsxs)(q.b, {
                        to: "/tokens/".concat(It),
                        className: "text-success bg-white d-inline-block rounded p-1 pe-2 border border-2",
                        children: [Object(v.jsx)("img", {
                            height: 24,
                            src: "/images/logos/auto.png"
                        }), Object(v.jsxs)("span", {
                            style: {
                                color: "#000000"
                            },
                            className: "ms-2 fw-bold",
                            children: ["$", c.toFormat(3)]
                        })]
                    }), Object(v.jsxs)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        className: "btn btn-secondary text-light ms-2 me-2 d-inline-flex align-items-center",
                        href: "https://bscscan.com/token/".concat(It),
                        children: [Object(v.jsx)("img", {
                            style: {
                                borderRadius: 999,
                                height: 20
                            },
                            className: "me-1",
                            src: "/images/logos/bscscan.png"
                        }), " BSCScan"]
                    })]
                }), Object(v.jsx)(St, {
                    decimals: m,
                    poolTokens: Wt,
                    pools: i,
                    price: c,
                    tokenName: "AUTO"
                })]
            }) : Object(v.jsx)(v.Fragment, {})
        }
        var At = n(163)
          , Mt = "0xe70E9185F5ea7Ba3C5d63705784D8563017f2E57"
          , Dt = "0xf952fc3ca7325cc27d15885d37117676d25bfda6"
          , Et = [{
            pid: 0,
            name: "BUSD-EGG",
            decimals: null
        }, {
            pid: 1,
            name: "BNB-EGG"
        }, {
            pid: 2,
            name: "BNB-BUSD"
        }, {
            pid: 3,
            name: "BUSD-BUSD-T"
        }, {
            pid: 4,
            name: "BNB-BTCB"
        }, {
            pid: 5,
            name: "BNB-ETH"
        }, {
            pid: 6,
            name: "BUSD-DAI"
        }, {
            pid: 7,
            name: "BUSD-USDC"
        }, {
            pid: 8,
            name: "BUSD-BUSD-T"
        }, {
            pid: 9,
            name: "BNB-DOT"
        }, {
            pid: 10,
            name: "BUSD-CAKE"
        }, {
            pid: 11,
            name: "BNB-CAKE"
        }, {
            pid: 12,
            name: "EGG"
        }, {
            pid: 13,
            name: "BUSD"
        }, {
            pid: 14,
            name: "WBNB"
        }, {
            pid: 15,
            name: "BUSD-T"
        }, {
            pid: 16,
            name: "BTCB"
        }, {
            pid: 17,
            name: "ETH"
        }, {
            pid: 18,
            name: "DAI"
        }, {
            pid: 19,
            name: "USDC"
        }, {
            pid: 20,
            name: "DOT"
        }, {
            pid: 21,
            name: "Cake"
        }, {
            pid: 22,
            name: "BSCX"
        }, {
            pid: 23,
            name: "AUTO"
        }];
        function Rt() {
            var e = Object(k.m)().account
              , t = Se(At, Mt)
              , n = Pe()
              , l = Object(a.useRef)("")
              , s = Object(a.useState)([])
              , o = Object(r.a)(s, 2)
              , i = o[0]
              , _ = o[1]
              , d = _t(Dt)
              , c = d.price
              , m = d.decimals;
            return Object(a.useEffect)((function() {
                function a() {
                    return (a = Object(b.a)(u.a.mark((function a() {
                        var l, s, o, r, i, d, c, m, p, x;
                        return u.a.wrap((function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    t.methods.poolLength().call();
                                case 2:
                                    l = a.sent,
                                    s = [],
                                    o = [],
                                    r = [],
                                    i = 0;
                                case 7:
                                    if (!(i < l)) {
                                        a.next = 16;
                                        break
                                    }
                                    if (Et[i]) {
                                        a.next = 10;
                                        break
                                    }
                                    return a.abrupt("continue", 13);
                                case 10:
                                    s.push({
                                        address: Mt,
                                        name: "poolInfo",
                                        params: [i]
                                    }),
                                    o.push({
                                        address: Mt,
                                        name: "userInfo",
                                        params: [i, e]
                                    }),
                                    r.push({
                                        address: Mt,
                                        name: "pendingEgg",
                                        params: [i, e]
                                    });
                                case 13:
                                    i += 1,
                                    a.next = 7;
                                    break;
                                case 16:
                                    return a.next = 18,
                                    n(At, s);
                                case 18:
                                    return d = a.sent,
                                    a.next = 21,
                                    n(At, o);
                                case 21:
                                    return c = a.sent,
                                    a.next = 24,
                                    n(At, r);
                                case 24:
                                    for (m = a.sent,
                                    p = [],
                                    x = 0; x < d.length; x += 1)
                                        p.push({
                                            pid: x,
                                            poolInfo: d[x],
                                            userInfo: c[x],
                                            pending: m[x][0]
                                        });
                                    _(p.filter((function(e) {
                                        return e.userInfo.amount > 0
                                    }
                                    )));
                                case 28:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))).apply(this, arguments)
                }
                t && e && n && l.current !== e && (l.current = e,
                function() {
                    a.apply(this, arguments)
                }())
            }
            ), [e, t, n]),
            (null === i || void 0 === i ? void 0 : i.length) ? Object(v.jsxs)("div", {
                className: "bg-dark rounded shadow p-3 mb-3",
                children: [Object(v.jsxs)("div", {
                    className: "mb-2",
                    children: [Object(v.jsx)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://www.goosedefi.com",
                        className: "bg-white p-2 rounded border border-2 d-inline-block",
                        children: Object(v.jsx)("img", {
                            src: "https://www.goosedefi.com/images/egg/LogoTextNewWhite.png",
                            height: 20
                        })
                    }), " ", Object(v.jsxs)(q.b, {
                        to: "/tokens/".concat(Dt),
                        className: "text-success bg-white d-inline-block rounded p-1 pe-2 border border-2",
                        children: [Object(v.jsx)("img", {
                            height: 24,
                            src: "https://www.goosedefi.com/images/egg/9.png"
                        }), Object(v.jsxs)("span", {
                            style: {
                                color: "#8f80ba"
                            },
                            className: "ms-2 fw-bold",
                            children: ["$", c.toFormat(3)]
                        })]
                    }), Object(v.jsxs)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        className: "btn btn-secondary text-light ms-2 me-2 d-inline-flex align-items-center",
                        href: "https://bscscan.com/token/".concat(Dt),
                        children: [Object(v.jsx)("img", {
                            style: {
                                borderRadius: 999,
                                height: 20
                            },
                            className: "me-1",
                            src: "/images/logos/bscscan.png"
                        }), " BSCScan"]
                    })]
                }), Object(v.jsx)(St, {
                    decimals: m,
                    poolTokens: Et,
                    pools: i,
                    price: c,
                    tokenName: "EGG"
                })]
            }) : Object(v.jsx)(v.Fragment, {})
        }
        var Ut = n(196)
          , Ht = "0x73feaa1eE314F8c655E354234017bE2193C9E24E"
          , Vt = "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82";
        function qt() {
            var e = Object(k.m)().account
              , t = Se(Ft, Ht)
              , n = Pe()
              , l = Object(a.useRef)("")
              , s = Object(a.useState)([])
              , o = Object(r.a)(s, 2)
              , i = o[0]
              , _ = o[1]
              , d = _t(Vt)
              , c = d.price
              , m = d.decimals;
            return Object(a.useEffect)((function() {
                function a() {
                    return (a = Object(b.a)(u.a.mark((function a() {
                        var l, s, o, r, i, d, c, m, p, x, b;
                        return u.a.wrap((function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    t.methods.poolLength().call();
                                case 2:
                                    l = a.sent,
                                    s = [],
                                    o = [],
                                    r = [],
                                    i = [],
                                    d = 0;
                                case 8:
                                    if (!(d < l)) {
                                        a.next = 18;
                                        break
                                    }
                                    if (Ut[d] && !Ut[d].inactive) {
                                        a.next = 11;
                                        break
                                    }
                                    return a.abrupt("continue", 15);
                                case 11:
                                    s.push({
                                        address: Ht,
                                        name: "poolInfo",
                                        params: [d]
                                    }),
                                    o.push({
                                        address: Ht,
                                        name: "userInfo",
                                        params: [d, e]
                                    }),
                                    r.push({
                                        address: Ht,
                                        name: "pendingCake",
                                        params: [d, e]
                                    }),
                                    i.push(d);
                                case 15:
                                    d += 1,
                                    a.next = 8;
                                    break;
                                case 18:
                                    return a.next = 20,
                                    n(Ft, s);
                                case 20:
                                    return c = a.sent,
                                    a.next = 23,
                                    n(Ft, o);
                                case 23:
                                    return m = a.sent,
                                    a.next = 26,
                                    n(Ft, r);
                                case 26:
                                    for (p = a.sent,
                                    x = [],
                                    b = 0; b < c.length; b += 1)
                                        x.push({
                                            pid: b,
                                            poolInfo: c[b],
                                            userInfo: m[b],
                                            pending: p[b][0]
                                        });
                                    _(x.filter((function(e) {
                                        return e.userInfo.amount > 0
                                    }
                                    )));
                                case 30:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))).apply(this, arguments)
                }
                t && e && n && l.current !== e && (l.current = e,
                function() {
                    a.apply(this, arguments)
                }())
            }
            ), [e, t, n]),
            (null === i || void 0 === i ? void 0 : i.length) ? Object(v.jsxs)("div", {
                className: "bg-dark rounded shadow p-3 mb-3",
                children: [Object(v.jsxs)("div", {
                    className: "mb-2",
                    children: [Object(v.jsx)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://pancakeswap.finance",
                        className: "bg-white p-2 rounded border border-2 d-inline-block",
                        children: Object(v.jsx)("img", {
                            src: "/images/farms/pancakeswap.svg",
                            height: 20
                        })
                    }), " ", Object(v.jsxs)(q.b, {
                        to: "/tokens/".concat(Vt),
                        className: "text-success bg-white d-inline-block rounded p-1 pe-2 border border-2",
                        children: [Object(v.jsx)("img", {
                            height: 24,
                            src: "/images/farms/pancakeswap-token.svg"
                        }), Object(v.jsxs)("span", {
                            style: {
                                color: "#8f80ba"
                            },
                            className: "ms-2 fw-bold",
                            children: ["$", c.toFormat(3)]
                        })]
                    }), Object(v.jsxs)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        className: "btn btn-secondary text-light ms-2 me-2 d-inline-flex align-items-center",
                        href: "https://bscscan.com/token/".concat(Vt),
                        children: [Object(v.jsx)("img", {
                            style: {
                                borderRadius: 999,
                                height: 20
                            },
                            className: "me-1",
                            src: "/images/logos/bscscan.png"
                        }), " BSCScan"]
                    })]
                }), Object(v.jsx)(St, {
                    decimals: m,
                    poolTokens: Ut,
                    pools: i,
                    price: c,
                    tokenName: "CAKE"
                })]
            }) : Object(v.jsx)(v.Fragment, {})
        }
        var zt = n(261)
          , Gt = n(164)
          , Kt = "0x4B0073A79f2b46Ff5a62fA1458AAc86Ed918C80C"
          , Yt = "0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1";
        function Zt() {
            var e = Object(k.m)().account
              , t = Se(Gt, Kt)
              , n = Pe()
              , l = Object(a.useRef)("")
              , s = Object(a.useState)([])
              , o = Object(r.a)(s, 2)
              , i = o[0]
              , _ = o[1]
              , d = _t(Yt)
              , c = d.price
              , m = d.decimals;
            return Object(a.useEffect)((function() {
                function a() {
                    return (a = Object(b.a)(u.a.mark((function a() {
                        var l, s, o, r, i, d, c, m, p, x;
                        return u.a.wrap((function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    t.methods.poolLength().call();
                                case 2:
                                    l = a.sent,
                                    s = [],
                                    o = [],
                                    r = [],
                                    i = 0;
                                case 7:
                                    if (!(i < l)) {
                                        a.next = 16;
                                        break
                                    }
                                    if (zt[i]) {
                                        a.next = 10;
                                        break
                                    }
                                    return a.abrupt("continue", 13);
                                case 10:
                                    s.push({
                                        address: Kt,
                                        name: "poolInfo",
                                        params: [i]
                                    }),
                                    o.push({
                                        address: Kt,
                                        name: "userInfo",
                                        params: [i, e]
                                    }),
                                    r.push({
                                        address: Kt,
                                        name: "pendingReward",
                                        params: [i, e]
                                    });
                                case 13:
                                    i += 1,
                                    a.next = 7;
                                    break;
                                case 16:
                                    return a.next = 18,
                                    n(Gt, s);
                                case 18:
                                    return d = a.sent,
                                    a.next = 21,
                                    n(Gt, o);
                                case 21:
                                    return c = a.sent,
                                    a.next = 24,
                                    n(Gt, r);
                                case 24:
                                    for (m = a.sent,
                                    p = [],
                                    x = 0; x < d.length; x += 1)
                                        p.push({
                                            pid: x,
                                            poolInfo: d[x],
                                            userInfo: c[x],
                                            pending: m[x][0]
                                        });
                                    _(p.filter((function(e) {
                                        return e.userInfo.amount > 0
                                    }
                                    )));
                                case 28:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))).apply(this, arguments)
                }
                t && e && n && l.current !== e && (l.current = e,
                function() {
                    a.apply(this, arguments)
                }())
            }
            ), [e, t, n]),
            (null === i || void 0 === i ? void 0 : i.length) ? Object(v.jsxs)("div", {
                className: "bg-dark rounded shadow p-3 mb-3",
                children: [Object(v.jsxs)("div", {
                    className: "mb-2",
                    children: [Object(v.jsx)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://slime.finance",
                        className: "bg-white p-2 rounded border border-2 d-inline-block",
                        children: Object(v.jsx)("img", {
                            src: "https://slime.finance/images/slime/LogoTextNewWhite.png",
                            height: 20
                        })
                    }), " ", Object(v.jsxs)(q.b, {
                        to: "/tokens/".concat(Yt),
                        className: "text-success bg-white d-inline-block rounded p-1 pe-2 border border-2",
                        children: [Object(v.jsx)("img", {
                            height: 24,
                            src: "https://slime.finance/images/9.png"
                        }), Object(v.jsxs)("span", {
                            style: {
                                color: "#8f80ba"
                            },
                            className: "ms-2 fw-bold",
                            children: ["$", c.toFormat(3)]
                        })]
                    }), Object(v.jsxs)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        className: "btn btn-secondary text-light ms-2 me-2 d-inline-flex align-items-center",
                        href: "https://bscscan.com/token/".concat(Yt),
                        children: [Object(v.jsx)("img", {
                            style: {
                                borderRadius: 999,
                                height: 20
                            },
                            className: "me-1",
                            src: "/images/logos/bscscan.png"
                        }), " BSCScan"]
                    })]
                }), Object(v.jsx)(St, {
                    decimals: m,
                    poolTokens: zt,
                    pools: i,
                    price: c,
                    tokenName: "Slime"
                })]
            }) : Object(v.jsx)(v.Fragment, {})
        }
        function Jt() {
            var e = Object(k.m)()
              , t = e.account
              , n = e.connect
              , l = Object(a.useState)(Date.now())
              , s = Object(r.a)(l, 2)
              , o = s[0]
              , i = s[1]
              , _ = Object(a.useState)(!1)
              , d = Object(r.a)(_, 2)
              , c = d[0]
              , m = d[1];
            Pe();
            return t ? Object(v.jsxs)("div", {
                className: "pb-5",
                children: [Object(v.jsxs)("div", {
                    className: "text-start mb-3",
                    children: [Object(v.jsxs)("span", {
                        className: "cursor-pointer no-select",
                        onClick: function() {
                            return m(!c)
                        },
                        children: ["Supported farms ", c ? Object(v.jsx)(v.Fragment, {
                            children: "\u25b2"
                        }) : Object(v.jsx)(v.Fragment, {
                            children: "\u25bc"
                        })]
                    }), c && Object(v.jsxs)("ul", {
                        children: [Object(v.jsx)("li", {
                            children: "Goose Finance"
                        }), Object(v.jsx)("li", {
                            children: "Pancakeswap"
                        }), Object(v.jsx)("li", {
                            children: "Autofarm"
                        }), Object(v.jsx)("li", {
                            children: "Slime Finance"
                        })]
                    })]
                }), Object(v.jsx)("div", {
                    className: "d-flex mb-3",
                    children: Object(v.jsx)("button", {
                        className: "btn btn-secondary ms-2",
                        onClick: function() {
                            i(Date.now())
                        },
                        children: "Refresh"
                    })
                }), Object(v.jsx)(Rt, {}, "goose-".concat(o)), Object(v.jsx)(qt, {}, "pancakeswap-".concat(o)), Object(v.jsx)(Lt, {}, "autofarm-".concat(o)), Object(v.jsx)(Zt, {}, "slimefinance-".concat(o))]
            }) : Object(v.jsx)("div", {
                className: "d-flex justify-content-center",
                children: Object(v.jsx)("button", {
                    className: "btn btn-dark",
                    onClick: function() {
                        return n("injected")
                    },
                    children: "Connect Wallet"
                })
            })
        }
        function Qt() {
            return Object(v.jsx)(J, {
                title: "PooCoin Charts - Toilet",
                children: Object(v.jsxs)("div", {
                    className: "text-center mt-3",
                    "data-aos": "fade-down",
                    "data-aos-delay": "100",
                    children: [Object(v.jsx)($, {}), Object(v.jsx)("h1", {
                        children: "Toilet"
                    }), Object(v.jsx)("h2", {
                        children: "See the pending yield for your farms"
                    }), Object(v.jsx)(Jt, {})]
                })
            })
        }
        var Xt = n(418)
          , $t = n.n(Xt);
        function en() {
            var e = Object(a.useContext)(Me)
              , t = e.banners
              , n = e.ready
              , l = Object(a.useState)(null)
              , s = Object(r.a)(l, 2)
              , o = s[0]
              , i = s[1]
              , _ = Object(a.useContext)(D).lpPrice2;
            return Object(a.useEffect)((function() {
                if (!o && n)
                    if (t.length) {
                        var e = t.filter((function(e) {
                            return !e.amount.div(new d.BigNumber(10).pow(18)).times(_).lt(4e4)
                        }
                        ));
                        if (e.length) {
                            var a = (new $t.a).weighted(e, e.map((function(e) {
                                return e.amount.toNumber()
                            }
                            )));
                            i(a)
                        } else
                            i(!1)
                    } else
                        i(!1)
            }
            ), [o, t, _, n]),
            n && null !== o ? !1 === o ? Object(v.jsx)(v.Fragment, {}) : Object(v.jsx)("div", {
                children: Object(v.jsx)("a", {
                    href: o.website,
                    target: "_blank",
                    rel: "noreferrer",
                    children: Object(v.jsx)("img", {
                        className: "img-fluid",
                        src: o.banner,
                        width: 350,
                        height: 100
                    })
                })
            }) : Object(v.jsx)("div", {
                style: {
                    height: 100
                },
                className: "d-flex justify-content-center",
                children: Object(v.jsx)(M, {
                    size: "small"
                })
            })
        }
        function tn() {
            var e = Object(Ce.h)()
              , t = Object(a.useContext)(C)
              , n = t.disableAds
              , l = t.showWallet
              , s = t.setShowWallet
              , o = Object(a.useContext)(D)
              , i = o.hasPremium
              , _ = o.account
              , d = Object(X.a)()
              , c = !i || !n
              , m = Object(a.useState)("")
              , p = Object(r.a)(m, 2)
              , x = p[0]
              , u = p[1];
            return Object(a.useEffect)((function() {
                u(e.location.pathname),
                window.innerWidth < 480 && s(!1)
            }
            ), [e.location.pathname, s]),
            Object(v.jsxs)("div", {
                className: "d-flex flex-grow-1 bg-dark justify-content-center",
                "data-aos": "fade-down",
                "data-aos-delay": "0",
                children: [Object(v.jsxs)("div", {
                    className: "".concat(l ? "d-none" : "", " d-md-flex flex-column flex-grow-1"),
                    style: {
                        maxWidth: 1600
                    },
                    children: [Object(v.jsx)("div", {
                        className: "d-flex flex-wrap text-center",
                        children: c && x && Object(v.jsxs)(v.Fragment, {
                            children: [d >= 1330 && Object(v.jsx)("div", {
                                className: "flex-grow-1",
                                children: Object(v.jsx)("iframe", {
                                    "data-aa": "1602418",
                                    src: "//ad.a-ads.com/1602418?size=970x90",
                                    scrolling: "no",
                                    style: {
                                        width: 970,
                                        height: 90,
                                        border: 0,
                                        padding: 0,
                                        overflow: "hidden"
                                    }
                                })
                            }), d < 1330 && d >= 1190 && Object(v.jsx)("div", {
                                className: "flex-grow-1",
                                children: Object(v.jsx)("iframe", {
                                    "data-aa": "1604341",
                                    src: "//ad.a-ads.com/1604341?size=728x90",
                                    scrolling: "no",
                                    style: {
                                        width: 728,
                                        height: 90,
                                        border: 0,
                                        padding: 0,
                                        overflow: "hidden"
                                    }
                                })
                            }), d < 1190 && d >= 980 && Object(v.jsx)("div", {
                                className: "flex-grow-1",
                                children: Object(v.jsx)("iframe", {
                                    "data-aa": "1604344",
                                    src: "//ad.a-ads.com/1604344?size=468x60",
                                    scrolling: "no",
                                    style: {
                                        width: 468,
                                        height: 60,
                                        border: 0,
                                        padding: 0,
                                        overflow: "hidden"
                                    }
                                })
                            }), d < 980 && Object(v.jsx)("div", {
                                className: "flex-grow-1 justify-content-center text-center",
                                children: Object(v.jsxs)("div", {
                                    className: "d-flex flex-grow-1 justify-content-center flex-wrap justify-content-evenly",
                                    children: [Object(v.jsx)("iframe", {
                                        className: "mb-2",
                                        "data-aa": "1604350",
                                        src: "//ad.a-ads.com/1604350?size=120x60",
                                        scrolling: "no",
                                        style: {
                                            width: 120,
                                            height: 60,
                                            border: 0,
                                            padding: 0,
                                            overflow: "hidden"
                                        }
                                    }), Object(v.jsx)("iframe", {
                                        className: "mb-2",
                                        "data-aa": "1604350",
                                        src: "//ad.a-ads.com/1604350?size=120x60",
                                        scrolling: "no",
                                        style: {
                                            width: 120,
                                            height: 60,
                                            border: 0,
                                            padding: 0,
                                            overflow: "hidden"
                                        }
                                    })]
                                }, "ad-small-".concat(x))
                            })]
                        })
                    }), Object(v.jsx)(Ce.b, {
                        path: "/tokens/:address",
                        exact: !0,
                        render: function(t) {
                            var n = t.match.params.address
                              , a = n.toLowerCase();
                            return a !== n ? Object(v.jsx)(Ce.a, {
                                to: Object(Ce.f)("/tokens/:address", {
                                    address: a
                                })
                            }) : Object(v.jsx)(vt, {
                                address: a,
                                onChangeAddress: function(t) {
                                    return e.push(Object(Ce.f)("/tokens/:address", {
                                        address: t
                                    }))
                                },
                                showChartAd: c && d < 766,
                                showChartAdDesktop: c && d >= 766
                            })
                        }
                    })]
                }), Object(v.jsxs)("div", {
                    className: "bg-dark-1 shadow d-flex d-lg-flex flex-column flex-grow-1 flex-md-grow-0",
                    children: [Object(v.jsx)("div", {
                        style: {
                            minWidth: 10
                        }
                    }), Object(v.jsxs)("div", {
                        className: "".concat(l ? "d-block" : "d-none", " px-2"),
                        style: {
                            width: 366,
                            maxWidth: "100vw"
                        },
                        children: [Object(v.jsxs)("button", {
                            className: "d-block d-md-none btn btn-light text-decoration-none text-small",
                            onClick: function() {
                                return s(!l)
                            },
                            children: [!l && Object(v.jsx)("i", {
                                className: "fas fa-wallet"
                            }), l && Object(v.jsx)("i", {
                                className: "fas fa-wallet"
                            })]
                        }), c && Object(v.jsxs)("div", {
                            className: "text-center mb-2 text-light text-small m-auto",
                            style: {
                                maxWidth: 350
                            },
                            children: [Object(v.jsx)("div", {
                                className: "mb-1",
                                children: "Sponsored BSC Project"
                            }), Object(v.jsx)(en, {})]
                        }, "sm-".concat(x)), Object(v.jsx)("div", {
                            className: "mt-2",
                            children: Object(v.jsx)(Je, {}, _)
                        }), c && x && l && Object(v.jsxs)(v.Fragment, {
                            children: [d >= 766 && Object(v.jsx)("div", {
                                className: "mb-2 mt-2 d-flex justify-content-center",
                                children: Object(v.jsx)("div", {
                                    children: Object(v.jsx)("iframe", {
                                        "data-aa": "1602827",
                                        src: "//ad.a-ads.com/1602827?size=320x100",
                                        scrolling: "no",
                                        style: {
                                            width: 320,
                                            height: 100,
                                            border: 0,
                                            padding: 0,
                                            overflow: "hidden"
                                        }
                                    })
                                })
                            }), Object(v.jsx)("div", {
                                className: "mb-2 mt-2 overflow-auto",
                                style: {
                                    maxWidth: "100vw"
                                },
                                children: Object(v.jsx)("iframe", {
                                    "data-aa": "1602436",
                                    src: "//ad.a-ads.com/1602436?size=336x280",
                                    scrolling: "no",
                                    style: {
                                        width: 336,
                                        height: 280,
                                        border: 0,
                                        padding: 0,
                                        overflow: "hidden"
                                    }
                                })
                            })]
                        })]
                    })]
                })]
            })
        }
        function nn() {
            var e = Object(a.useState)(null)
              , t = Object(r.a)(e, 2)
              , n = t[0]
              , l = t[1]
              , s = Object(a.useState)(null)
              , o = Object(r.a)(s, 2)
              , i = o[0]
              , _ = o[1]
              , d = Object(a.useState)(null)
              , c = Object(r.a)(d, 2)
              , m = c[0]
              , p = c[1]
              , x = Object(a.useState)(!1)
              , k = Object(r.a)(x, 2)
              , h = k[0]
              , T = k[1]
              , f = Pe()
              , g = Object(a.useContext)(D).hasPremium3
              , y = Object(a.useContext)(C)
              , j = y.trendingTimeframe
              , w = y.setTrendingTimeframe;
            Object(a.useEffect)((function() {
                function e() {
                    return (e = Object(b.a)(u.a.mark((function e() {
                        var t, n, a, s, o, i, d, c, m, x, b, k, h, f;
                        return u.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return T(!0),
                                    e.next = 3,
                                    fe({
                                        age: j,
                                        premium: g
                                    });
                                case 3:
                                    t = e.sent,
                                    n = Object(r.a)(t.viewer.accounts, 1),
                                    a = n[0],
                                    s = a.topPaths,
                                    o = a.topPathsAll,
                                    i = a.topReferers,
                                    d = [],
                                    c = 0;
                                case 7:
                                    if (!(c < s.length)) {
                                        e.next = 15;
                                        break
                                    }
                                    if (m = s[c].dimensions.metric.match(/0x[a-zA-Z0-9]{40}/)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("continue", 12);
                                case 11:
                                    d.push(m[0]);
                                case 12:
                                    c += 1,
                                    e.next = 7;
                                    break;
                                case 15:
                                    x = 0;
                                case 16:
                                    if (!(x < o.length)) {
                                        e.next = 24;
                                        break
                                    }
                                    if (b = o[x].dimensions.metric.match(/0x[a-zA-Z0-9]{40}/)) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.abrupt("continue", 21);
                                case 20:
                                    d.push(b[0]);
                                case 21:
                                    x += 1,
                                    e.next = 16;
                                    break;
                                case 24:
                                    return e.next = 26,
                                    Ie(d);
                                case 26:
                                    k = e.sent,
                                    h = s.map((function(e) {
                                        var t, n, a = e.dimensions.metric.match(/0x[a-zA-Z0-9]{40}/);
                                        return a ? Object(ee.a)(Object(ee.a)({}, e), {}, {
                                            name: null === (t = k[a[0].toLowerCase()]) || void 0 === t ? void 0 : t.name,
                                            symbol: null === (n = k[a[0].toLowerCase()]) || void 0 === n ? void 0 : n.symbol
                                        }) : e
                                    }
                                    )),
                                    f = o.map((function(e) {
                                        var t, n, a = e.dimensions.metric.match(/0x[a-zA-Z0-9]{40}/);
                                        return a ? Object(ee.a)(Object(ee.a)({}, e), {}, {
                                            name: null === (t = k[a[0].toLowerCase()]) || void 0 === t ? void 0 : t.name,
                                            symbol: null === (n = k[a[0].toLowerCase()]) || void 0 === n ? void 0 : n.symbol
                                        }) : e
                                    }
                                    )),
                                    T(!1),
                                    l(h),
                                    _(f),
                                    p(i);
                                case 33:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                f && function() {
                    e.apply(this, arguments)
                }()
            }
            ), [j, f, g]);
            return Object(v.jsxs)("div", {
                className: "bg-dark-1 rounded shadow p-3 text-start",
                children: [Object(v.jsx)("p", {
                    className: "text-danger bg-dark rounded p-2 fw-bold",
                    children: "This list is auto-generated based on external traffic to this website. Use caution when visiting these websites, it is possible that some may be scams."
                }), !g && Object(v.jsxs)("p", {
                    children: ["Unlock ", Object(v.jsx)(q.b, {
                        to: "/premium",
                        children: "Premium tier 3"
                    }), " to view more timeframes and list the top 100 instead of 10."]
                }), Object(v.jsxs)("div", {
                    className: "my-3 d-flex flex-column align-items-center",
                    children: [Object(v.jsx)("label", {
                        children: "Timeframe"
                    }), Object(v.jsxs)("select", {
                        className: "form-select form-select-sm",
                        style: {
                            maxWidth: 200
                        },
                        value: j,
                        onChange: function(e) {
                            return function(e) {
                                g && w(e)
                            }(e.target.value)
                        },
                        children: [Object(v.jsx)("option", {
                            value: "30m",
                            disabled: !g,
                            children: "30 minutes"
                        }), Object(v.jsx)("option", {
                            value: "6h",
                            disabled: !g,
                            children: "6 hours"
                        }), Object(v.jsx)("option", {
                            value: "12h",
                            disabled: !g,
                            children: "12 hours"
                        }), Object(v.jsx)("option", {
                            value: "1d",
                            children: "24 hours"
                        }), Object(v.jsx)("option", {
                            value: "2d",
                            disabled: !g,
                            children: "48 hours"
                        })]
                    })]
                }), h && Object(v.jsx)("div", {
                    style: {
                        height: 50
                    },
                    className: "d-flex justify-content-center",
                    children: Object(v.jsx)(M, {
                        size: "small"
                    })
                }), !h && Object(v.jsxs)("div", {
                    className: "row",
                    children: [Object(v.jsxs)("div", {
                        className: "col-lg-4",
                        children: [Object(v.jsx)("h4", {
                            children: "Most refered domains"
                        }), Object(v.jsxs)("table", {
                            className: "table table-bordered table-table-condensed text-small bg-dark-1",
                            style: {
                                tableLayout: "fixed",
                                width: "100%"
                            },
                            children: [Object(v.jsx)("thead", {
                                children: Object(v.jsxs)("tr", {
                                    children: [Object(v.jsx)("th", {
                                        style: {
                                            width: 60
                                        },
                                        children: "Rank"
                                    }), Object(v.jsx)("th", {
                                        children: "Domain"
                                    }), Object(v.jsx)("th", {
                                        style: {
                                            width: 80
                                        },
                                        children: "Visits"
                                    })]
                                })
                            }), Object(v.jsx)("tbody", {
                                children: null === m || void 0 === m ? void 0 : m.map((function(e, t) {
                                    var n = "https://".concat(e.dimensions.metric);
                                    return "https://pantherswap.com" === n && (n = "https://pantherswap.com/?ref=d2zea7aekwddsjwakggkggq6cbn7va2yo72ktbzb5"),
                                    "https://jaguarswap.com" === n && (n = "https://jaguarswap.com/?ref=0k33Nr0q2s9P450So64N52Q3937O28PQO162No3qPR"),
                                    "https://llamaswap.finance" === n && (n = "https://llamaswap.finance?lama-friend=d3937b28cd33aE0D2F9cb162aB3Dce450fB64a52"),
                                    Object(v.jsxs)("tr", {
                                        children: [Object(v.jsx)("td", {
                                            children: t + 1
                                        }), Object(v.jsxs)("td", {
                                            style: {
                                                wordWrap: "break-word"
                                            },
                                            children: [Object(v.jsxs)("a", {
                                                target: "_blank",
                                                href: n,
                                                children: ["https://", e.dimensions.metric]
                                            }), Object(v.jsx)("br", {}), Object(v.jsx)("br", {}), Object(v.jsx)("br", {})]
                                        }), Object(v.jsx)("td", {
                                            children: e.sum.visits
                                        })]
                                    }, e.dimensions.metric)
                                }
                                ))
                            })]
                        })]
                    }), Object(v.jsxs)("div", {
                        className: "col-lg-4",
                        children: [Object(v.jsx)("h4", {
                            children: "Most linked tokens"
                        }), Object(v.jsxs)("table", {
                            className: "table table-bordered table-table-condensed text-small bg-dark-1",
                            style: {
                                tableLayout: "fixed",
                                width: "100%"
                            },
                            children: [Object(v.jsx)("thead", {
                                children: Object(v.jsxs)("tr", {
                                    children: [Object(v.jsx)("th", {
                                        style: {
                                            width: 60
                                        },
                                        children: "Rank"
                                    }), Object(v.jsx)("th", {
                                        children: "Token"
                                    }), Object(v.jsx)("th", {
                                        style: {
                                            width: 80
                                        },
                                        children: "Visits"
                                    })]
                                })
                            }), Object(v.jsx)("tbody", {
                                children: null === n || void 0 === n ? void 0 : n.map((function(e, t) {
                                    return Object(v.jsxs)("tr", {
                                        children: [Object(v.jsx)("td", {
                                            children: t + 1
                                        }), Object(v.jsxs)("td", {
                                            style: {
                                                wordWrap: "break-word"
                                            },
                                            children: [Object(v.jsx)(q.b, {
                                                to: e.dimensions.metric,
                                                children: e.dimensions.metric.replace("/tokens/", "")
                                            }), Object(v.jsx)("br", {}), e.name, Object(v.jsx)("br", {}), e.symbol]
                                        }), Object(v.jsx)("td", {
                                            children: e.sum.visits
                                        })]
                                    }, e.dimensions.metric)
                                }
                                ))
                            })]
                        })]
                    }), Object(v.jsxs)("div", {
                        className: "col-lg-4",
                        children: [Object(v.jsx)("h4", {
                            children: "Most viewed tokens"
                        }), Object(v.jsxs)("table", {
                            className: "table table-bordered table-table-condensed text-small bg-dark-1",
                            style: {
                                tableLayout: "fixed",
                                width: "100%"
                            },
                            children: [Object(v.jsx)("thead", {
                                children: Object(v.jsxs)("tr", {
                                    children: [Object(v.jsx)("th", {
                                        style: {
                                            width: 60
                                        },
                                        children: "Rank"
                                    }), Object(v.jsx)("th", {
                                        children: "Token"
                                    }), Object(v.jsx)("th", {
                                        style: {
                                            width: 80
                                        },
                                        children: "Visits"
                                    })]
                                })
                            }), Object(v.jsx)("tbody", {
                                children: null === i || void 0 === i ? void 0 : i.map((function(e, t) {
                                    return Object(v.jsxs)("tr", {
                                        children: [Object(v.jsx)("td", {
                                            children: t + 1
                                        }), Object(v.jsxs)("td", {
                                            style: {
                                                wordWrap: "break-word"
                                            },
                                            children: [Object(v.jsx)(q.b, {
                                                to: e.dimensions.metric,
                                                children: e.dimensions.metric.replace("/tokens/", "")
                                            }), Object(v.jsx)("br", {}), e.name, Object(v.jsx)("br", {}), e.symbol]
                                        }), Object(v.jsx)("td", {
                                            children: e.sum.visits
                                        })]
                                    }, e.dimensions.metric)
                                }
                                ))
                            })]
                        })]
                    })]
                })]
            })
        }
        function an() {
            var e = Object(a.useContext)(D).hasPremium
              , t = Object(a.useContext)(C).disableAds
              , n = !e || !t;
            return Object(v.jsx)(J, {
                title: "PooCoin Charts - Trending",
                children: Object(v.jsxs)("div", {
                    className: "text-center mt-3",
                    "data-aos": "fade-down",
                    "data-aos-delay": "100",
                    children: [Object(v.jsx)($, {}), Object(v.jsx)("h1", {
                        children: "Trending"
                    }), Object(v.jsx)("h3", {
                        children: "View most linked tokens and external websites."
                    }), Object(v.jsxs)("p", {
                        children: ["This is a list of websites that users have clicked poocoin links on (ones that have not disabled referer headers from their links).", Object(v.jsx)("br", {}), "Search engines and social media websites have been filtered out of the list to make it only show other BSC projects."]
                    }), n && Object(v.jsxs)("div", {
                        className: "d-flex flex-grow-1 justify-content-center",
                        children: [Object(v.jsx)("div", {
                            className: "text-center mb-2 mx-2",
                            style: {
                                width: 120,
                                height: 60
                            },
                            children: Object(v.jsx)("iframe", {
                                "data-aa": "1604350",
                                src: "//ad.a-ads.com/1604350?size=120x60",
                                scrolling: "no",
                                style: {
                                    width: 120,
                                    height: 60,
                                    border: 0,
                                    padding: 0,
                                    overflow: "hidden"
                                }
                            })
                        }), Object(v.jsx)("div", {
                            className: "text-center mb-2 mx-2",
                            style: {
                                width: 120,
                                height: 60
                            },
                            children: Object(v.jsx)("iframe", {
                                "data-aa": "1604350",
                                src: "//ad.a-ads.com/1604350?size=120x60",
                                scrolling: "no",
                                style: {
                                    width: 120,
                                    height: 60,
                                    border: 0,
                                    padding: 0,
                                    overflow: "hidden"
                                }
                            })
                        })]
                    }), Object(v.jsx)(nn, {})]
                })
            })
        }
        function ln() {
            return Object(v.jsxs)(J, {
                children: [Object(v.jsx)("div", {
                    className: "text-center border m-auto bg-light mb-2",
                    style: {
                        width: 970,
                        height: 90
                    },
                    children: Object(v.jsx)("iframe", {
                        "data-aa": "1602418",
                        src: "//ad.a-ads.com/1602418?size=970x90",
                        scrolling: "no",
                        style: {
                            width: 970,
                            height: 90,
                            border: 0,
                            padding: 0,
                            overflow: "hidden"
                        }
                    })
                }), Object(v.jsx)("div", {
                    className: "text-center border m-auto bg-light mb-2",
                    style: {
                        width: 728,
                        height: 90
                    },
                    children: Object(v.jsx)("iframe", {
                        "data-aa": "1604341",
                        src: "//ad.a-ads.com/1604341?size=728x90",
                        scrolling: "no",
                        style: {
                            width: 728,
                            height: 90,
                            border: 0,
                            padding: 0,
                            overflow: "hidden"
                        }
                    })
                }), Object(v.jsx)("div", {
                    className: "text-center border m-auto bg-light mb-2",
                    style: {
                        width: 468,
                        height: 60
                    },
                    children: Object(v.jsx)("iframe", {
                        "data-aa": "1604344",
                        src: "//ad.a-ads.com/1604344?size=468x60",
                        scrolling: "no",
                        style: {
                            width: 468,
                            height: 60,
                            border: 0,
                            padding: 0,
                            overflow: "hidden"
                        }
                    })
                })]
            })
        }
        function sn() {
            return Object(v.jsxs)(J, {
                children: [Object(v.jsx)("div", {
                    className: "text-center border m-auto bg-light mb-2 mx-2",
                    style: {
                        height: 120
                    },
                    children: Object(v.jsx)("iframe", {
                        "data-aa": "1604346",
                        src: "//acceptable.a-ads.com/1604346",
                        scrolling: "no",
                        style: {
                            border: 0,
                            padding: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        }
                    })
                }), Object(v.jsx)("div", {
                    className: "text-center border m-auto bg-light mb-2 mx-2",
                    style: {
                        width: 120,
                        height: 60
                    },
                    children: Object(v.jsx)("iframe", {
                        "data-aa": "1604350",
                        src: "//ad.a-ads.com/1604350?size=120x60",
                        scrolling: "no",
                        style: {
                            width: 120,
                            height: 60,
                            border: 0,
                            padding: 0,
                            overflow: "hidden"
                        }
                    })
                }), Object(v.jsx)("div", {
                    className: "text-center border m-auto bg-light mb-2 mx-2",
                    style: {
                        width: 120,
                        height: 60
                    },
                    children: Object(v.jsx)("iframe", {
                        "data-aa": "1604357",
                        src: "//ad.a-ads.com/1604357?size=120x60",
                        scrolling: "no",
                        style: {
                            width: 120,
                            height: 60,
                            border: 0,
                            padding: 0,
                            overflow: "hidden"
                        }
                    })
                })]
            })
        }
        function on() {
            return Object(v.jsx)(J, {
                children: Object(v.jsxs)("div", {
                    children: [Object(v.jsx)("iframe", {
                        "data-aa": "1604660",
                        src: "//ad.a-ads.com/1604660?size=125x125",
                        scrolling: "no",
                        style: {
                            width: 125,
                            height: 125,
                            border: 0,
                            padding: 0,
                            overflow: "hidden"
                        }
                    }), Object(v.jsx)("iframe", {
                        "data-aa": "1604662",
                        src: "//ad.a-ads.com/1604662?size=250x250",
                        scrolling: "no",
                        style: {
                            width: 250,
                            height: 250,
                            border: 0,
                            padding: 0,
                            overflow: "hidden"
                        }
                    }), Object(v.jsx)("iframe", {
                        "data-aa": "1602436",
                        src: "//ad.a-ads.com/1602436?size=336x280",
                        scrolling: "no",
                        style: {
                            width: 336,
                            height: 280,
                            border: 0,
                            padding: 0,
                            overflow: "hidden"
                        }
                    })]
                })
            })
        }
        var rn = n(157)
          , _n = n.n(rn);
        function dn() {
            var e = Object(a.useContext)(D)
              , t = e.web3
              , n = e.pancakeUrl
              , l = e.factoryContract
              , s = Pe()
              , o = Object(a.useRef)(null)
              , i = Object(a.useRef)([])
              , _ = Object(a.useState)(0)
              , d = Object(r.a)(_, 2)[1];
            return Object(a.useEffect)((function() {
                function e() {
                    return n.apply(this, arguments)
                }
                function n() {
                    return (n = Object(b.a)(u.a.mark((function e() {
                        var n, a, _, c, x, b, k, h, T, g, y, j, w, O, v, C, F, W, N, B, S;
                        return u.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.getBlock("latest");
                                case 2:
                                    return n = e.sent,
                                    a = tt.DateTime.fromSeconds(n.timestamp),
                                    _ = n.number,
                                    c = p.wbnb[m.chainId].toLowerCase(),
                                    x = null !== o.current ? o.current + 1 : _ - 1e3,
                                    o.current = _,
                                    e.next = 10,
                                    l.getPastEvents("allEvents", {
                                        fromBlock: x,
                                        toBlock: "latest",
                                        topics: ["0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9"]
                                    });
                                case 10:
                                    b = e.sent,
                                    k = b.filter((function(e) {
                                        return e.returnValues.token0.toLowerCase() === c || e.returnValues.token1.toLowerCase() === c
                                    }
                                    )),
                                    h = 0;
                                case 13:
                                    if (!(h < k.length)) {
                                        e.next = 27;
                                        break
                                    }
                                    return T = k[h].returnValues,
                                    g = T.token0.toLowerCase() === c ? T.token1.toLowerCase() : T.token0.toLowerCase(),
                                    y = a.plus({
                                        seconds: 3 * (k[h].blockNumber - _)
                                    }),
                                    e.next = 19,
                                    s(f, [{
                                        address: g,
                                        name: "name"
                                    }, {
                                        address: g,
                                        name: "symbol"
                                    }, {
                                        address: g,
                                        name: "totalSupply"
                                    }, {
                                        address: g,
                                        name: "decimals"
                                    }]).catch((function() {}
                                    ));
                                case 19:
                                    if (j = e.sent) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.abrupt("continue", 24);
                                case 22:
                                    w = Object(r.a)(j, 4),
                                    O = Object(r.a)(w[0], 1),
                                    v = O[0],
                                    C = Object(r.a)(w[1], 1),
                                    F = C[0],
                                    W = Object(r.a)(w[2], 1),
                                    N = W[0],
                                    B = Object(r.a)(w[3], 1),
                                    S = B[0],
                                    i.current.unshift({
                                        token: g,
                                        timestamp: y,
                                        pair: T.pair,
                                        name: v,
                                        symbol: F,
                                        totalSupply: N,
                                        decimals: S
                                    });
                                case 24:
                                    h += 1,
                                    e.next = 13;
                                    break;
                                case 27:
                                    d(Date.now());
                                case 28:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                var a;
                return l && s && t && (e(),
                a = setInterval((function() {
                    e()
                }
                ), 3e3)),
                function() {
                    clearInterval(a)
                }
            }
            ), [l, s, t]),
            Object(v.jsx)("div", {
                className: "bg-dark-1 rounded p-3 shadow",
                children: Object(v.jsx)("div", {
                    className: "table-responsive",
                    children: Object(v.jsxs)("table", {
                        className: "table table-bordered table-sm text-small text-center",
                        children: [Object(v.jsx)("thead", {
                            children: Object(v.jsxs)("tr", {
                                children: [Object(v.jsx)("th", {
                                    children: "Token"
                                }), Object(v.jsx)("th", {
                                    children: "Creation Time"
                                }), Object(v.jsx)("th", {
                                    children: "Info"
                                }), Object(v.jsx)("th", {})]
                            })
                        }), Object(v.jsx)("tbody", {
                            children: i.current.map((function(e) {
                                return Object(v.jsxs)("tr", {
                                    children: [Object(v.jsx)("td", {
                                        children: Object(v.jsxs)(q.b, {
                                            to: "/tokens/".concat(e.token.toLowerCase()),
                                            className: "text-light text-small",
                                            children: [e.symbol, " ", Object(v.jsx)("small", {
                                                className: "text-success"
                                            }), Object(v.jsx)("br", {}), Object(v.jsx)("small", {
                                                className: "text-muted",
                                                children: e.name
                                            })]
                                        })
                                    }), Object(v.jsxs)("td", {
                                        children: [e.timestamp.toLocaleString(tt.DateTime.TIME_WITH_SECONDS), Object(v.jsx)("br", {}), Object(v.jsxs)("span", {
                                            className: "text-muted",
                                            children: [_n.a.duration(_n()().diff(_n()(e.timestamp.toMillis()), "seconds"), "seconds").format("d[d] hh:mm:ss", {
                                                stopTrim: "h"
                                            }), " ", "Since creation"]
                                        })]
                                    }), Object(v.jsxs)("td", {
                                        children: [Object(v.jsxs)("div", {
                                            className: "d-flex justify-content-between",
                                            children: [Object(v.jsx)("a", {
                                                className: "px-2",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https://bscscan.com/address/".concat(e.token, "#code"),
                                                children: "Contract"
                                            }), Object(v.jsx)("a", {
                                                className: "px-2",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https://bscscan.com/token/".concat(e.token, "#balances"),
                                                children: "Holders"
                                            })]
                                        }), Object(v.jsx)("div", {
                                            className: "d-flex justify-content-end",
                                            children: Object(v.jsx)("a", {
                                                className: "px-2",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https://bscscan.com/token/".concat(e.pair, "#balances"),
                                                children: "BNB LP Holders"
                                            })
                                        })]
                                    }), Object(v.jsx)("td", {
                                        children: Object(v.jsx)("a", {
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "btn btn-sm btn-success px-3",
                                            href: "".concat(n, "/#/swap?outputCurrency=").concat(e.token),
                                            children: "Ape"
                                        })
                                    })]
                                }, e.pair)
                            }
                            ))
                        })]
                    })
                })
            })
        }
        function cn() {
            var e = Object(a.useContext)(C)
              , t = e.setLpVersion
              , n = e.lpVersion;
            return Object(v.jsxs)("label", {
                className: "d-flex align-items-center",
                children: [Object(v.jsx)("span", {
                    className: "d-inline-block text-small",
                    style: {
                        minWidth: 80
                    },
                    children: "LP Version"
                }), Object(v.jsxs)("select", {
                    className: "form-select form-select-sm",
                    value: n,
                    onChange: function(e) {
                        var n = e.target.value;
                        return t(n)
                    },
                    children: [Object(v.jsx)("option", {
                        value: "1",
                        children: "Version 1"
                    }), Object(v.jsx)("option", {
                        value: "2",
                        children: "Version 2"
                    })]
                })]
            })
        }
        function mn() {
            return Object(v.jsx)(J, {
                title: "PooCoin Charts - New BSC token scanner",
                children: Object(v.jsxs)("div", {
                    className: "mt-3",
                    "data-aos": "fade-down",
                    "data-aos-delay": "100",
                    children: [Object(v.jsx)("div", {
                        className: "text-center",
                        children: Object(v.jsx)($, {})
                    }), Object(v.jsx)("h1", {
                        className: "text-center",
                        children: "Ape"
                    }), Object(v.jsx)("h3", {
                        className: "text-center",
                        children: "Scan for new BSC token launches."
                    }), Object(v.jsxs)("p", {
                        children: ["This list auto-refreshes every block, you dont need to refresh the page.", Object(v.jsx)("br", {}), "Suggestions on what to check:"]
                    }), Object(v.jsxs)("ul", {
                        children: [Object(v.jsx)("li", {
                            children: "Search the token name in Telegram, see if there is a Telegram group for the token."
                        }), Object(v.jsx)("li", {
                            children: 'Click "Contract" and check there is no mint function.'
                        }), Object(v.jsx)("li", {
                            children: 'Click "Holders" and check most of the supply is in the LP.'
                        }), Object(v.jsx)("li", {
                            children: 'Click "BNB LP Holders" and check most of the supply is locked or burned.'
                        })]
                    }), Object(v.jsx)("p", {
                        className: "text-warning",
                        children: "Most of these tokens are likely not real projects or scams. Dont buy unless you know how to check if they are a rug token."
                    }), Object(v.jsx)("div", {
                        className: "px-3 mb-3",
                        style: {
                            maxWidth: 400
                        },
                        children: Object(v.jsx)(cn, {})
                    }), Object(v.jsx)(dn, {})]
                })
            })
        }
        function pn() {
            var e = Object(a.useContext)(D)
              , t = e.tokenPerLp
              , n = e.bnbPerLp
              , l = e.lpPrice
              , s = e.hasPremium
              , o = Object(a.useContext)(C)
              , r = o.disableAds
              , i = o.setDisableAds
              , _ = p.poocoin[m.chainId]
              , d = "https://exchange.pancakeswap.finance"
              , x = new c.a(100).div(l)
              , u = new c.a(100).div(l).times(t).times(1.08)
              , b = new c.a(100).div(l).times(n).times(1.08)
              , k = new c.a(300).div(l)
              , h = new c.a(300).div(l).times(t).times(1.08)
              , T = new c.a(300).div(l).times(n).times(1.08)
              , f = new c.a(2e3).div(l)
              , g = new c.a(2e3).div(l).times(t).times(1.08)
              , y = new c.a(2e3).div(l).times(n).times(1.08);
            return Object(v.jsx)(J, {
                title: "PooCoin Charts - Premium",
                children: Object(v.jsxs)("div", {
                    className: "text-center mt-3",
                    "data-aos": "fade-down",
                    "data-aos-delay": "100",
                    children: [Object(v.jsx)($, {}), Object(v.jsx)("h1", {
                        children: "Premium"
                    }), Object(v.jsx)("p", {
                        className: "text-warning",
                        children: "The 8% transaction fee will apply to the POOCOIN used to create LP and again on removal of LP."
                    }), Object(v.jsxs)("p", {
                        children: ["Unlock premium tier 1 by holding ", Object(v.jsx)("span", {
                            className: "text-success",
                            children: "$100"
                        }), " worth of", " ", Object(v.jsx)("a", {
                            style: {
                                lineHeight: 1
                            },
                            href: "".concat(d, "/#/add/BNB/").concat(_),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "POOCOIN/BNB LP"
                        }), Object(v.jsx)("br", {}), "(approximately ", Object(v.jsxs)("strong", {
                            children: [x.toFormat(6), " POOCOIN/BNB LP"]
                        }), " created from", " ", Object(v.jsxs)("strong", {
                            children: [u.toFormat(4), " ", Object(v.jsx)("a", {
                                href: "".concat(d, "/#/swap?outputCurrency=").concat(_),
                                target: "_blank",
                                rel: "noreferrer",
                                children: "POOCOIN"
                            })]
                        }), " ", "and ", Object(v.jsxs)("strong", {
                            children: [b.toFormat(4), " BNB"]
                        }), ")", Object(v.jsx)("br", {}), "tokens in your wallet."]
                    }), Object(v.jsxs)("p", {
                        children: ["Unlock premium tier 2 by holding ", Object(v.jsx)("span", {
                            className: "text-success",
                            children: "$300"
                        }), " worth of", " ", Object(v.jsx)("a", {
                            style: {
                                lineHeight: 1
                            },
                            href: "".concat(d, "/#/add/BNB/").concat(_),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "POOCOIN/BNB LP"
                        }), Object(v.jsx)("br", {}), "(approximately ", Object(v.jsxs)("strong", {
                            children: [k.toFormat(6), " POOCOIN/BNB LP"]
                        }), " created from", " ", Object(v.jsxs)("strong", {
                            children: [h.toFormat(4), " ", Object(v.jsx)("a", {
                                href: "".concat(d, "/#/swap?outputCurrency=").concat(_),
                                target: "_blank",
                                rel: "noreferrer",
                                children: "POOCOIN"
                            })]
                        }), " ", "and ", Object(v.jsxs)("strong", {
                            children: [T.toFormat(4), " BNB"]
                        }), ")", Object(v.jsx)("br", {}), "tokens in your wallet."]
                    }), Object(v.jsxs)("p", {
                        children: ["Unlock premium tier 3 by holding ", Object(v.jsx)("span", {
                            className: "text-success",
                            children: "$2000"
                        }), " worth of", " ", Object(v.jsx)("a", {
                            style: {
                                lineHeight: 1
                            },
                            href: "".concat(d, "/#/add/BNB/").concat(_),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "POOCOIN/BNB LP"
                        }), Object(v.jsx)("br", {}), "(approximately ", Object(v.jsxs)("strong", {
                            children: [f.toFormat(6), " POOCOIN/BNB LP"]
                        }), " created from", " ", Object(v.jsxs)("strong", {
                            children: [g.toFormat(4), " ", Object(v.jsx)("a", {
                                href: "".concat(d, "/#/swap?outputCurrency=").concat(_),
                                target: "_blank",
                                rel: "noreferrer",
                                children: "POOCOIN"
                            })]
                        }), " ", "and ", Object(v.jsxs)("strong", {
                            children: [y.toFormat(4), " BNB"]
                        }), ")", Object(v.jsx)("br", {}), "tokens in your wallet."]
                    }), Object(v.jsx)("h2", {
                        children: "Premium features"
                    }), Object(v.jsx)("p", {
                        children: "The current premium features are:"
                    }), Object(v.jsxs)("div", {
                        className: "bg-dark-1 p-3 mb-3",
                        children: [Object(v.jsx)("h3", {
                            children: "Tier 1: Track other wallets"
                        }), Object(v.jsx)("p", {
                            children: 'Click "Track" on a transaction to track the trader\'s wallet.'
                        }), Object(v.jsx)("img", {
                            className: "border border-2 shadow mb-2 img-fluid",
                            height: 62,
                            width: 88,
                            src: "/images/premium/wallettrack.png"
                        }), Object(v.jsx)("p", {
                            children: "This will change the wallet token list to show their wallet instead of your own."
                        }), Object(v.jsx)("img", {
                            className: "border border-2 shadow mb-2 img-fluid",
                            height: 102,
                            width: 352,
                            src: "/images/premium/wallettrack2.png"
                        }), Object(v.jsx)("p", {
                            children: 'Click the "Clear" button to go back to your own wallet.'
                        }), Object(v.jsx)("p", {
                            children: 'You can also track a wallet by entering the wallet address into the input field and clicking "Go"'
                        }), Object(v.jsx)("img", {
                            className: "border border-2 shadow mb-2 img-fluid",
                            height: 98,
                            width: 350,
                            src: "/images/premium/wallettrack3.png"
                        })]
                    }), Object(v.jsxs)("div", {
                        className: "bg-dark-1 p-3 mb-3",
                        children: [Object(v.jsx)("h3", {
                            children: "Tier 1: Disable ads"
                        }), Object(v.jsx)("p", {
                            children: "Disable ads by checking the box."
                        }), Object(v.jsx)("div", {
                            className: "text-center d-flex justify-content-center",
                            children: Object(v.jsxs)("div", {
                                className: "form-check",
                                children: [Object(v.jsx)("input", {
                                    className: "form-check-input",
                                    type: "checkbox",
                                    checked: s && r,
                                    onChange: function() {
                                        return i(!r)
                                    },
                                    id: "disableAds",
                                    disabled: !s
                                }), Object(v.jsx)("label", {
                                    className: "form-check-label",
                                    htmlFor: "disableAds",
                                    children: "Disable ads (premium feature)"
                                })]
                            })
                        })]
                    }), Object(v.jsxs)("div", {
                        className: "bg-dark-1 p-3 mb-3",
                        children: [Object(v.jsx)("h3", {
                            children: "Tier 2: Show your trades"
                        }), Object(v.jsx)("p", {
                            children: 'Show your trades plotted on the chart, and enable the "Wallet tx" tab.'
                        }), Object(v.jsx)("img", {
                            src: "/images/premium/buysell.png",
                            width: 150,
                            height: 332,
                            className: "border border-2 shadow img-fluid"
                        })]
                    }), Object(v.jsxs)("div", {
                        className: "bg-dark-1 p-3 mb-3",
                        children: [Object(v.jsx)("h3", {
                            children: "Tier 3: View more trending websites/tokens."
                        }), Object(v.jsx)("p", {
                            children: "Unlock the ability to view trending websites/tokens in more timescales, as well as listing the top 100 instead of 10."
                        }), Object(v.jsx)("img", {
                            src: "/images/misc/trending-preview.png",
                            width: 743,
                            height: 160,
                            className: "border shadow border-2 img-fluid"
                        })]
                    })]
                })
            })
        }
        var xn, un = n(180);
        function bn(e, t, n) {
            var l = Object(a.useContext)(D).walletWeb3
              , s = Object(a.useState)(void 0)
              , o = Object(r.a)(s, 2)
              , i = o[0]
              , _ = o[1];
            return Object(a.useEffect)((function() {
                var a = t;
                "-" === t && (a = p.wbnb[m.chainId]),
                Object(we.isAddress)(a) && l ? _(new l.Contract(e,a,n)) : _(void 0)
            }
            ), [e, t, n, l]),
            i
        }
        function kn() {
            var e = Pe()
              , t = bn(Ne, p.promoList[m.chainId])
              , n = Object(a.useState)("")
              , l = Object(r.a)(n, 2)
              , s = l[0]
              , o = l[1]
              , i = Object(a.useState)("")
              , _ = Object(r.a)(i, 2)
              , d = _[0]
              , x = _[1]
              , k = Object(a.useState)(null)
              , h = Object(r.a)(k, 2)
              , T = h[0]
              , f = h[1]
              , g = Object(a.useState)(null)
              , y = Object(r.a)(g, 2)
              , j = y[0]
              , O = y[1]
              , C = Object(a.useRef)(null)
              , F = bn(w, p.wbnb[m.chainId])
              , W = Object(a.useContext)(D)
              , N = W.account
              , B = W.bnbPrice
              , S = Object(a.useState)(null)
              , P = Object(r.a)(S, 2)
              , I = P[0]
              , L = P[1];
            Object(a.useEffect)((function() {
                function n() {
                    return a.apply(this, arguments)
                }
                function a() {
                    return (a = Object(b.a)(u.a.mark((function n() {
                        var a, l, s, o, i;
                        return u.a.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    e(w, [{
                                        address: p.wbnb[m.chainId],
                                        name: "balanceOf",
                                        params: [N]
                                    }, {
                                        address: p.wbnb[m.chainId],
                                        name: "allowance",
                                        params: [N, p.promoList[m.chainId]]
                                    }]);
                                case 2:
                                    return a = n.sent,
                                    n.next = 5,
                                    t.methods.poolInfo(0).call();
                                case 5:
                                    l = n.sent,
                                    s = Object(r.a)(a, 2),
                                    o = s[0],
                                    i = s[1],
                                    L(l),
                                    f(new c.a(o)),
                                    O(!!i[0].gt(0));
                                case 10:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))).apply(this, arguments)
                }
                var l;
                return t && N && (C.current = N,
                n(),
                l = setInterval(n, 1e4)),
                function() {
                    clearInterval(l)
                }
            }
            ), [N, t, e]);
            var A = new c.a(null === I || void 0 === I ? void 0 : I.amount).div(new c.a(10).pow(18));
            return Object(v.jsx)(v.Fragment, {
                children: Object(v.jsxs)("div", {
                    className: "bg-dark rounded shadow p-3 mb-3",
                    children: [Object(v.jsx)("h3", {
                        children: "Un-Vetted list"
                    }), Object(v.jsx)("hr", {}), Object(v.jsx)("p", {
                        children: "The Un-Vetted list will place all new submissions to the top of the list, pushing the rest down. You can promote the same token as many times as you want, putting it back to the top of the list."
                    }), Object(v.jsx)("p", {
                        children: "If your token is pushed off the top-10 most recent deposits, it will no longer be on the list and you will have to deposit again to get it back onto the top."
                    }), Object(v.jsxs)("p", {
                        children: ["Place your token on the Un-Vetted list by depositing ", A.toFormat(4), " WBNB", " ", Object(v.jsxs)("span", {
                            className: "text-success",
                            children: ["($", A.times(B).toFormat(2), ")"]
                        }), " (You must wrap your regular BNB into WBNB on pancakeswap). This is non-refundable and is used to create POOCOIN/BNB LP (minus the 10% dev fee)."]
                    }), Object(v.jsxs)("div", {
                        className: "d-flex flex-wrap justify-content-between",
                        children: [Object(v.jsxs)("form", {
                            style: {
                                maxWidth: 500
                            },
                            onSubmit: function(e) {
                                e.preventDefault(),
                                t.methods.deposit(0, s, d).send({
                                    from: N
                                })
                            },
                            children: [Object(v.jsxs)("div", {
                                className: "mb-3",
                                children: [Object(v.jsxs)("label", {
                                    htmlFor: "name",
                                    className: "lh-sm",
                                    children: ["Token address", Object(v.jsx)("br", {}), Object(v.jsx)("span", {
                                        className: "text-small text-muted",
                                        children: "Must be a valid Binance Smart Chain token address"
                                    })]
                                }), Object(v.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    value: s,
                                    onChange: function(e) {
                                        var t = e.target.value;
                                        return o(t)
                                    }
                                })]
                            }), Object(v.jsxs)("div", {
                                className: "mb-3",
                                children: [Object(v.jsx)("label", {
                                    htmlFor: "name",
                                    className: "lh-sm",
                                    children: "Telegram url"
                                }), Object(v.jsx)("br", {}), Object(v.jsx)("span", {
                                    className: "text-small text-muted",
                                    children: "Must be a valid telegram group url starting with https://t.me/"
                                }), Object(v.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    value: d,
                                    onChange: function(e) {
                                        var t = e.target.value;
                                        return x(t)
                                    },
                                    maxLength: 100
                                })]
                            }), Object(v.jsxs)("p", {
                                children: ["Your WBNB balance:", " ", Object(v.jsx)("span", {
                                    children: null !== T ? T.div(new c.a(10).pow(18)).toFormat(18) : "-"
                                })]
                            }), !N && Object(v.jsx)("div", {
                                className: "text-warning",
                                children: "Connect wallet to enable this form."
                            }), !!N && j && Object(v.jsxs)(v.Fragment, {
                                children: [Object(v.jsxs)("div", {
                                    children: ["Deposit ", A.toFormat(4), " WBNB", " ", Object(v.jsxs)("span", {
                                        className: "text-success",
                                        children: ["($", A.times(B).toFormat(2), ")"]
                                    }), " (Non-refundable)"]
                                }), T.div(new c.a(10).pow(18)).lt(A) && Object(v.jsx)("div", {
                                    className: "text-warning",
                                    children: "Insufficient WBNB Balance"
                                }), Object(v.jsx)("button", {
                                    disabled: !s || !d || 0 !== d.indexOf("https://t.me/") || T.div(new c.a(10).pow(18)).lt(A),
                                    type: "submit",
                                    className: "btn btn-success",
                                    children: "Deposit"
                                })]
                            }), !!N && !j && Object(v.jsx)("button", {
                                type: "button",
                                onClick: function() {
                                    F.methods.approve(p.promoList[m.chainId], un.ethers.constants.MaxUint256).send({
                                        from: N
                                    })
                                },
                                className: "btn btn-secondary",
                                children: "Approve"
                            }), Object(v.jsx)("div", {
                                children: Object(v.jsx)("span", {
                                    className: "text-small text-muted",
                                    children: "After depositing, you will need to refresh the browser to see your token on the high-risk list."
                                })
                            })]
                        }), Object(v.jsx)("div", {
                            className: "m-2 text-center",
                            children: Object(v.jsx)("a", {
                                href: "https://t.me/CustomPriceBots",
                                target: "_blank",
                                rel: "noreferrer",
                                children: Object(v.jsx)("img", {
                                    className: "border rounded shadow img-fluid",
                                    src: "/images/misc/pricebotad.gif",
                                    width: 400
                                })
                            })
                        })]
                    })]
                })
            })
        }
        function hn(e) {
            var t = e.address
              , n = Object(k.m)().account
              , a = bn(w, t);
            return Object(v.jsx)(v.Fragment, {
                children: Object(v.jsx)("button", {
                    type: "button",
                    className: "btn btn-secondary",
                    onClick: function() {
                        a.methods.approve(p.topHolders2[m.chainId], un.ethers.constants.MaxUint256).send({
                            from: n
                        })
                    },
                    disabled: !n,
                    children: "Approve"
                })
            })
        }
        function Tn() {
            var e, t = bn(We, p.profile[m.chainId]), n = Object(a.useState)(""), l = Object(r.a)(n, 2), s = l[0], o = l[1], i = Object(a.useState)(""), _ = Object(r.a)(i, 2), d = _[0], c = _[1], x = Object(a.useRef)(null), h = Object(a.useContext)(D).lpPrice2, f = Object(a.useContext)(Me), g = f.promotedTokens, y = f.promotedTokenInfo, O = f.whitelist, C = bn(j, p.topHolders[m.chainId]), F = bn(j, p.topHolders2[m.chainId]), W = Object(k.m)().account, N = Object(a.useRef)(null), B = Object(a.useState)(null), S = Object(r.a)(B, 2), P = S[0], I = S[1], L = Object(a.useState)(null), A = Object(r.a)(L, 2), M = A[0], E = A[1], R = Object(a.useState)(null), U = Object(r.a)(R, 2), H = U[0], V = U[1], z = Object(a.useState)("0"), G = Object(r.a)(z, 2), K = G[0], Y = G[1], Z = Object(a.useState)(null), J = Object(r.a)(Z, 2), Q = J[0], X = J[1], $ = Pe(), ee = !!O && !!O[null === d || void 0 === d ? void 0 : d.toLowerCase()];
            Object(a.useEffect)((function() {
                W && t && W !== x.current && (x.current = W,
                o(""),
                c(""),
                t.methods.userInfo(W).call().then((function(e) {
                    o(e.name),
                    c(e.promotedAddress)
                }
                )))
            }
            ), [W, t]),
            Object(a.useEffect)((function() {
                function e() {
                    return t.apply(this, arguments)
                }
                function t() {
                    return (t = Object(b.a)(u.a.mark((function e() {
                        var t, n, a, l;
                        return u.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return F.methods.userInfo(0, W).call().then((function(e) {
                                        E(new T.a(e))
                                    }
                                    )),
                                    C.methods.userInfo(0, W).call().then((function(e) {
                                        I(new T.a(e).minus(1))
                                    }
                                    )),
                                    e.next = 4,
                                    $(w, [{
                                        address: p.poocoinBnbLp2[m.chainId],
                                        name: "balanceOf",
                                        params: [W]
                                    }, {
                                        address: p.poocoinBnbLp2[m.chainId],
                                        name: "allowance",
                                        params: [W, p.topHolders2[m.chainId]]
                                    }]);
                                case 4:
                                    t = e.sent,
                                    n = Object(r.a)(t, 2),
                                    a = n[0],
                                    l = n[1],
                                    V(new T.a(a)),
                                    X(!!l[0].gt(0));
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                var n;
                return C && W && F && $ && (N.current = W,
                e(),
                n = setInterval(e, 1e4)),
                function() {
                    clearInterval(n)
                }
            }
            ), [W, C, F, $]);
            var te = null === M || void 0 === M ? void 0 : M.div(new T.a(10).pow(18));
            te && te.lt(0) && (te = new T.a(0));
            var ne = null === P || void 0 === P ? void 0 : P.div(new T.a(10).pow(18));
            return ne && ne.lt(0) && (ne = new T.a(0)),
            Object(v.jsxs)(v.Fragment, {
                children: [Object(v.jsxs)("div", {
                    className: "bg-dark-1 rounded shadow p-3 mb-3",
                    children: [Object(v.jsx)("h3", {
                        children: "Vetted promotion list"
                    }), Object(v.jsx)("hr", {}), Object(v.jsxs)("div", {
                        className: "d-flex flex-wrap justify-content-between",
                        children: [Object(v.jsxs)("form", {
                            style: {
                                maxWidth: 500
                            },
                            onSubmit: function(e) {
                                e.preventDefault(),
                                P && !(null === M || void 0 === M ? void 0 : M.gt(0)) && t.methods.setProfile(s, d || "0x0000000000000000000000000000000000000000", "").send({
                                    from: W
                                })
                            },
                            children: [Object(v.jsxs)("div", {
                                className: "mb-3",
                                children: [Object(v.jsxs)("label", {
                                    htmlFor: "name",
                                    className: "lh-sm",
                                    children: ["Wallet Name", Object(v.jsx)("br", {}), Object(v.jsx)("span", {
                                        className: "text-small text-muted",
                                        children: "A label for your wallet address."
                                    })]
                                }), Object(v.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    value: s,
                                    onChange: function(e) {
                                        var t = e.target.value;
                                        return o(t)
                                    },
                                    maxLength: 32
                                })]
                            }), Object(v.jsxs)("div", {
                                className: "mb-3",
                                children: [Object(v.jsxs)("label", {
                                    htmlFor: "name",
                                    className: "lh-sm",
                                    children: ["Promoted token address", Object(v.jsx)("br", {}), Object(v.jsx)("span", {
                                        className: "text-small text-muted",
                                        children: "The token you will promote if you have unlocked this feature. (Must be a valid Binance Smart Chain token address)."
                                    })]
                                }), Object(v.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    value: d,
                                    onChange: function(e) {
                                        var t = e.target.value;
                                        return c(t)
                                    }
                                })]
                            }), !W && Object(v.jsx)("div", {
                                className: "text-warning",
                                children: "Connect wallet to enable this form."
                            }), (null === M || void 0 === M ? void 0 : M.gt(0)) && Object(v.jsx)("div", {
                                children: "You must withdraw your LP from the pool before switching token."
                            }), Object(v.jsx)("button", {
                                type: "submit",
                                className: "btn btn-success",
                                disabled: !W || (null === M || void 0 === M ? void 0 : M.gt(0)),
                                children: "Update"
                            })]
                        }), Object(v.jsx)("div", {
                            className: "m-2 text-center",
                            children: Object(v.jsx)("a", {
                                href: "https://t.me/CustomPriceBots",
                                target: "_blank",
                                rel: "noreferrer",
                                children: Object(v.jsx)("img", {
                                    className: "border rounded shadow img-fluid",
                                    src: "/images/misc/pricebotad.gif",
                                    width: 400
                                })
                            })
                        })]
                    })]
                }), Object(v.jsxs)("div", {
                    className: "bg-dark-1 rounded shadow p-3",
                    children: [Object(v.jsx)("h3", {
                        children: "Promotions"
                    }), Object(v.jsxs)("div", {
                        children: [Object(v.jsx)("p", {
                            children: "Become a top-10 LP depositor to promote your token. This pool has a 5% deposit fee and does not offer a farming reward. Your promoted token will be featured in the promoted tokens list. You can withdraw at any time."
                        }), Object(v.jsxs)("div", {
                            className: "alert alert-secondary",
                            children: [Object(v.jsx)("h5", {
                                className: "fw-bold",
                                children: "Requirements for token approval:"
                            }), Object(v.jsx)("p", {
                                className: "text-danger",
                                children: "Do not purchase any POOCOIN or POOCOIN/BNB LP tokens until your token has been approved. The tx fees from purchasing POOCOIN cannot be refunded if your token is rejected."
                            }), Object(v.jsx)("p", {
                                children: "Your token must have a website and have the details uploaded to BSCScan. The token contract must be verified on BSCScan. The LP for your token must be locked for at least 2 months or burned. The dev must have no more than 10% of the initial supply."
                            }), Object(v.jsxs)("p", {
                                children: ["Reflect tokens that distribute transaction fees to all holders are allowed but ones that are coded to send transaction fees to the dev wallet will be rejected. If the contract is coded to send BNB to a charity, the only charity allowed is the official", " ", Object(v.jsx)("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: "https://www.binance.charity/binance-charity-wallet/donate-anonymously",
                                    children: "Binance Charity Wallet"
                                }), " ", "address."]
                            }), Object(v.jsx)("p", {
                                className: "text-danger",
                                children: "If you burn the initial supply to create a misleading percentage of what the dev owns (for example giving the dev 10%, then burning 50% straight after, which means the 10% is actually 20%) and then claim on your website that you own the percentage displayed on bscscan (10% in the example), the token will be rejected."
                            }), Object(v.jsxs)("p", {
                                children: ["If a token fails the requirements, it will not be approved and there will be no refund of the deposit fee. If unsure, email", " ", Object(v.jsx)("a", {
                                    href: "mailto://promotions@poocoin.app",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "promotions@poocoin.app"
                                }), " ", "and ask in advance."]
                            })]
                        }), Object(v.jsxs)("div", {
                            className: "alert alert-secondary",
                            children: [Object(v.jsx)("h5", {
                                className: "fw-bold",
                                children: "Display your banner:"
                            }), Object(v.jsxs)("p", {
                                children: ["You must submit a website url and image to", " ", Object(v.jsx)("a", {
                                    href: "mailto://promotions@poocoin.app",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "promotions@poocoin.app"
                                }), " ", "or", " ", Object(v.jsx)("a", {
                                    href: "https://t.me/fomo11",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "@fomo11"
                                }), " ", "with the dimensions 350px/100px and format jpg, png, or gif (can be animated). The displayed banner will be cycled each time the page is loaded."]
                            }), Object(v.jsx)("p", {
                                children: "The chance that your banner is displayed depends on your share of the top-10 pool that have banners. For example: if you have 30% of the pool share, your banner will be displayed 30% of the time the page is loaded."
                            }), Object(v.jsx)("p", {
                                children: "You can also display your website and telegram links when your chart is being viewed."
                            }), Object(v.jsxs)("p", {
                                children: [Object(v.jsx)("img", {
                                    className: "border p-1",
                                    src: "/images/premium/website-telegram.png"
                                }), Object(v.jsx)("br", {}), Object(v.jsx)("small", {
                                    children: "Preview"
                                })]
                            })]
                        }), Object(v.jsxs)("div", {
                            children: [Object(v.jsx)("p", {
                                children: "Due to the reflect token mechanics, these are the fees that will apply during a round trip of buying, depositing, and selling:"
                            }), Object(v.jsx)("div", {
                                className: "table-responsive",
                                children: Object(v.jsxs)("table", {
                                    className: "table table-compact table-bordered text-small",
                                    style: {
                                        maxWidth: 600
                                    },
                                    children: [Object(v.jsx)("thead", {
                                        children: Object(v.jsxs)("tr", {
                                            children: [Object(v.jsx)("th", {}), Object(v.jsx)("th", {
                                                children: "Initial"
                                            }), Object(v.jsx)("th", {
                                                children: "Buy POOCOIN"
                                            }), Object(v.jsx)("th", {
                                                children: "Make LP Tokens"
                                            }), Object(v.jsx)("th", {
                                                children: "Deposit LP Tokens"
                                            }), Object(v.jsx)("th", {
                                                children: "Separate LP Tokens"
                                            }), Object(v.jsx)("th", {
                                                children: "Sell POOCOIN"
                                            })]
                                        })
                                    }), Object(v.jsxs)("tbody", {
                                        children: [Object(v.jsxs)("tr", {
                                            children: [Object(v.jsx)("td", {
                                                children: "Fee"
                                            }), Object(v.jsx)("td", {}), Object(v.jsx)("td", {
                                                children: "8%"
                                            }), Object(v.jsx)("td", {
                                                children: "8%"
                                            }), Object(v.jsx)("td", {
                                                children: "5%"
                                            }), Object(v.jsx)("td", {
                                                children: "16%"
                                            }), Object(v.jsx)("td", {
                                                children: "8%"
                                            })]
                                        }), Object(v.jsxs)("tr", {
                                            children: [Object(v.jsx)("td", {
                                                children: "Remaining"
                                            }), Object(v.jsx)("td", {
                                                children: "100%"
                                            }), Object(v.jsx)("td", {
                                                children: "92%"
                                            }), Object(v.jsx)("td", {
                                                children: "84.64%"
                                            }), Object(v.jsx)("td", {
                                                children: "80.41%"
                                            }), Object(v.jsx)("td", {
                                                children: "67.54%"
                                            }), Object(v.jsx)("td", {
                                                children: "62.14%"
                                            })]
                                        })]
                                    })]
                                })
                            }), Object(v.jsx)("p", {
                                children: "So if you bought $1000 worth of POOCOIN, created LP, deposited in pool, withdrew, then sold. You would receive $621 back."
                            }), Object(v.jsx)("hr", {})]
                        }), Object(v.jsx)("div", {
                            children: Object(v.jsxs)("form", {
                                className: "mb-3 flex-grow-1",
                                onSubmit: function(e) {
                                    e.preventDefault(),
                                    F.methods.deposit(0, new T.a(K).times(new T.a(10).pow(18)).toString()).send({
                                        from: W
                                    })
                                },
                                children: [Object(v.jsxs)("p", {
                                    children: ["Your LP balance:", " ", Object(v.jsx)("span", {
                                        children: null !== H ? H.div(new T.a(10).pow(18)).toFormat(18) : "-"
                                    })]
                                }), Object(v.jsxs)("p", {
                                    children: ["Your deposited LP balance:", " ", Object(v.jsx)("span", {
                                        children: null !== M ? te.toFormat(18) : "-"
                                    })]
                                }), Object(v.jsxs)("div", {
                                    className: "mb-3",
                                    style: {
                                        maxWidth: 500
                                    },
                                    children: [Object(v.jsxs)("div", {
                                        className: "d-flex",
                                        children: [Object(v.jsx)("label", {
                                            htmlFor: "depositAmount",
                                            className: "flex-grow-1 p-2",
                                            children: "Deposit amount (POOCOIN/BNB LP) 5% deposit fee."
                                        }), Object(v.jsx)("button", {
                                            type: "button",
                                            className: "btn btn-link text-light",
                                            onClick: function() {
                                                return Y(H.div(new T.a(10).pow(18)).toFormat(18))
                                            },
                                            children: "Max"
                                        })]
                                    }), Object(v.jsx)("input", {
                                        id: "depositAmount",
                                        className: "form-control",
                                        type: "text",
                                        value: K,
                                        onChange: function(e) {
                                            var t = e.target.value;
                                            return Y(t)
                                        }
                                    })]
                                }), !W && Object(v.jsx)("div", {
                                    className: "text-warning",
                                    children: "Connect wallet to enable this form."
                                }), Q && Object(v.jsxs)(v.Fragment, {
                                    children: [!ee && Object(v.jsx)("div", {
                                        className: "text-muted text-small",
                                        children: "Your token needs to be approved before you deposit."
                                    }), Object(v.jsx)("button", {
                                        type: "submit",
                                        className: "btn btn-success",
                                        disabled: !K || !ee || !W,
                                        children: "Deposit"
                                    }), Object(v.jsx)("button", {
                                        onClick: function() {
                                            F.methods.withdraw(0, M.toString()).send({
                                                from: W
                                            })
                                        },
                                        type: "button",
                                        className: "btn btn-secondary text-light ms-2",
                                        disabled: !W,
                                        children: "Withdraw All"
                                    })]
                                }), !Q && Object(v.jsx)(hn, {
                                    address: p.poocoinBnbLp2[m.chainId]
                                })]
                            })
                        }), Object(v.jsx)("p", {
                            className: "text-warning",
                            children: "The minimum amount for the list is $40,000 worth of POOCOIN/BNB LP"
                        }), Object(v.jsx)("p", {
                            className: "text-muted",
                            children: "Top 10 depositors of POOCOIN/BNB LP"
                        }), Object(v.jsxs)("table", {
                            className: "table table-compact table-dark text-small table-bordered",
                            style: {
                                tableLayout: "fixed"
                            },
                            children: [Object(v.jsx)("thead", {
                                className: "table-light",
                                children: Object(v.jsxs)("tr", {
                                    children: [Object(v.jsx)("th", {
                                        style: {
                                            textAlign: "center",
                                            width: 60
                                        },
                                        children: "Rank"
                                    }), Object(v.jsx)("th", {
                                        children: "Promoted Address"
                                    })]
                                })
                            }), Object(v.jsx)("tbody", {
                                children: null === g || void 0 === g ? void 0 : g.map((function(e, t) {
                                    var n, a, l, s, o, r, i, _ = new T.a(e.amount.toString()).div(new T.a(10).pow(18));
                                    return Object(v.jsxs)("tr", {
                                        children: [Object(v.jsx)("td", {
                                            align: "right",
                                            children: t + 1
                                        }), Object(v.jsxs)("td", {
                                            style: {
                                                wordWrap: "break-word"
                                            },
                                            children: [!(null === (n = y[e.promotedAddress]) || void 0 === n ? void 0 : n.pending) && !(null === (a = y[e.promotedAddress]) || void 0 === a ? void 0 : a.blacklisted) && Object(v.jsxs)(q.b, {
                                                to: "/tokens/".concat(e.promotedAddress),
                                                className: "text-light",
                                                children: [null === (l = y[e.promotedAddress]) || void 0 === l ? void 0 : l.symbol, Object(v.jsx)("br", {}), Object(v.jsx)("span", {
                                                    className: "text-xs text-muted",
                                                    children: null === (s = y[e.promotedAddress]) || void 0 === s ? void 0 : s.name
                                                })]
                                            }), !(null === (o = y[e.promotedAddress]) || void 0 === o ? void 0 : o.blacklisted) && (null === (r = y[e.promotedAddress]) || void 0 === r ? void 0 : r.pending) && Object(v.jsx)("span", {
                                                className: "text-warning",
                                                children: "Pending approval"
                                            }), (null === (i = y[e.promotedAddress]) || void 0 === i ? void 0 : i.blacklisted) && Object(v.jsx)("span", {
                                                className: "text-danger",
                                                children: "Blocked"
                                            }), Object(v.jsx)("br", {}), Object(v.jsxs)("span", {
                                                className: "text-xs text-muted",
                                                children: ["LP balance: ", _.toFormat(18), Object(v.jsx)("br", {}), "LP value: ", Object(v.jsxs)("span", {
                                                    className: "text-success",
                                                    children: ["$", null === h || void 0 === h ? void 0 : h.times(_).toFormat(2)]
                                                })]
                                            })]
                                        })]
                                    }, t)
                                }
                                ))
                            })]
                        }), Object(v.jsxs)("div", {
                            className: "mt-5",
                            children: [Object(v.jsx)("hr", {}), Object(v.jsx)("p", {
                                children: "Withdraw from V1 promotion pool."
                            }), Object(v.jsxs)("p", {
                                children: ["Your deposited LP balance: ", Object(v.jsx)("span", {
                                    children: (null === (e = ne) || void 0 === e ? void 0 : e.toFormat(18)) || "-"
                                })]
                            }), !W && Object(v.jsx)("div", {
                                className: "text-warning",
                                children: "Connect wallet to enable this form."
                            }), Object(v.jsx)("button", {
                                onClick: function() {
                                    C.methods.withdraw(0, P.toString()).send({
                                        from: W
                                    })
                                },
                                type: "button",
                                className: "btn btn-secondary text-light",
                                disabled: !W,
                                children: "Withdraw All"
                            })]
                        })]
                    })]
                })]
            })
        }
        function fn() {
            var e = Object(a.useContext)(C)
              , t = e.disableAds
              , n = e.setDisableAds
              , l = Object(a.useContext)(D).hasPremium;
            return Object(v.jsxs)("div", {
                className: "text-start pb-5",
                children: [Object(v.jsx)("div", {
                    className: "alert alert-danger text-center",
                    children: "The history of all information entered here will be publicly visible on the chain."
                }), Object(v.jsx)("div", {
                    className: "bg-dark rounded shadow p-3 mb-3",
                    children: Object(v.jsxs)("div", {
                        className: "form-check",
                        children: [Object(v.jsx)("input", {
                            className: "form-check-input",
                            type: "checkbox",
                            checked: l && t,
                            onChange: function() {
                                return n(!t)
                            },
                            id: "disableAds",
                            disabled: !l
                        }), Object(v.jsx)("label", {
                            className: "form-check-label",
                            htmlFor: "disableAds",
                            children: "Disable ads (premium feature)"
                        })]
                    })
                }), Object(v.jsxs)("div", {
                    className: "bg-dark-1 rounded shadow p-3 mb-3",
                    children: [Object(v.jsx)(q.c, {
                        to: "/promote/un-vetted",
                        className: "btn btn-dark me-1",
                        children: "Un-Vetted List"
                    }), Object(v.jsx)(q.c, {
                        to: "/promote/vetted",
                        className: "btn btn-dark me-1",
                        children: "Vetted List"
                    }), Object(v.jsx)(q.c, {
                        to: "/promote/banners",
                        className: "btn btn-dark me-1",
                        children: "Banner Ads"
                    }), Object(v.jsx)(q.c, {
                        to: "/promote/pricebot",
                        className: "btn btn-dark me-1",
                        children: "Telegram Price Bot"
                    })]
                }), Object(v.jsxs)(Ce.d, {
                    children: [Object(v.jsx)(Ce.b, {
                        path: "/promote/un-vetted",
                        exact: !0,
                        component: kn
                    }), Object(v.jsx)(Ce.b, {
                        path: "/promote/vetted",
                        exact: !0,
                        children: Object(v.jsx)(Tn, {})
                    }), Object(v.jsx)(Ce.b, {
                        path: "/promote/banners",
                        exact: !0,
                        children: Object(v.jsxs)("div", {
                            className: "bg-dark-1 rounded shadow p-3 mb-3",
                            children: [Object(v.jsx)("h3", {
                                children: "Banner Ads"
                            }), Object(v.jsxs)("p", {
                                children: ["The banner ads are purchased through an ad provider", " ", Object(v.jsx)("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: "https://a-ads.com?partner=1602418",
                                    children: "a-ads.com"
                                })]
                            }), Object(v.jsxs)("p", {
                                children: ["Go here to create an ad campaign for poocoin.app", " ", Object(v.jsx)("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: "https://a-ads.com/campaigns/new?selected_site_id=489659&selected_source_type=site",
                                    children: "https://a-ads.com/campaigns/new?selected_site_id=489659&selected_source_type=site"
                                })]
                            }), Object(v.jsx)("p", {
                                children: 'You can also purchase them by hovering on the icon in the top-right and clicking the "your ad here" link.'
                            }), Object(v.jsxs)("p", {
                                children: [Object(v.jsx)("img", {
                                    className: "img-fluid border rounded",
                                    src: "/images/misc/bannerpreview.png",
                                    alt: "ads",
                                    width: 202,
                                    height: 86
                                }), Object(v.jsx)("br", {}), Object(v.jsx)("small", {
                                    className: "text-muted",
                                    children: "Preview"
                                })]
                            })]
                        })
                    }), Object(v.jsx)(Ce.b, {
                        path: "/promote/pricebot",
                        exact: !0,
                        children: Object(v.jsxs)("div", {
                            className: "bg-dark-1 rounded shadow p-3 mb-3",
                            children: [Object(v.jsx)("h3", {
                                children: "Telegram Price Bot"
                            }), Object(v.jsxs)("p", {
                                children: ["This is the telegram pricebot used in the poocoin telegram group. Get one for your own channel by contacting", " ", Object(v.jsx)("a", {
                                    rel: "noreferrer",
                                    target: "_blank",
                                    href: "https://t.me/dasilva333",
                                    children: "@dasilva333"
                                }), " ", "on Telegram."]
                            }), Object(v.jsxs)("p", {
                                className: "d-flex flex-wrap align-items-start",
                                children: [Object(v.jsx)("a", {
                                    href: "https://t.me/CustomPriceBots",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "m-2",
                                    children: Object(v.jsx)("img", {
                                        className: "border rounded shadow img-fluid",
                                        src: "/images/misc/pricebot/pricebot-small.gif",
                                        width: 420,
                                        height: 220
                                    })
                                }), Object(v.jsx)("img", {
                                    className: "m-2 border rounded shadow img-fluid",
                                    src: "/images/misc/pricebot/graph_preview.gif",
                                    width: 427,
                                    height: 564
                                })]
                            }), Object(v.jsx)("p", {
                                className: "text-center",
                                children: Object(v.jsx)("img", {
                                    className: "img-fluid",
                                    src: "/images/misc/pricebot/price-bots-menu.jpg",
                                    width: 700
                                })
                            }), Object(v.jsx)("p", {
                                className: "text-center",
                                children: Object(v.jsx)("img", {
                                    className: "img-fluid",
                                    src: "/images/misc/pricebot/pricebot-text-ads.jpg",
                                    width: 700
                                })
                            })]
                        })
                    }), Object(v.jsx)(Ce.a, {
                        from: "/promote",
                        to: "/promote/un-vetted",
                        exact: !0
                    })]
                })]
            })
        }
        function gn() {
            return Object(v.jsx)(J, {
                title: "PooCoin Charts - Promote",
                children: Object(v.jsxs)("div", {
                    className: "text-center mt-3",
                    "data-aos": "fade-down",
                    "data-aos-delay": "100",
                    children: [Object(v.jsx)($, {}), Object(v.jsx)("h1", {
                        children: "Promote your token"
                    }), Object(v.jsx)(fn, {})]
                })
            })
        }
        var yn = Object(Re.gql)(xn || (xn = Object(Ee.a)(['\n  query($token: String!, $limit: Int, $offset: Int, $from: ISO8601DateTime, $till: ISO8601DateTime) {\n    ethereum(network: bsc) {\n      transfers(\n        currency: { is: $token }\n        date: { since: $from, till: $till }\n        height: { gt: 1 }\n        amount: { gt: 0 }\n        options: { desc: "amount", limit: $limit, offset: $offset }\n      ) {\n        receiver {\n          address\n          annotation\n        }\n        currency {\n          symbol\n        }\n        amount\n        count\n        sender_count: count(uniq: senders)\n        max_amount: maximum(of: amount, get: amount)\n        max_date: maximum(of: date)\n      }\n    }\n  }\n'])));
        function jn(e) {
            var t, n = e.address, l = qe(yn, {
                variables: {
                    token: n,
                    limit: 20,
                    offset: 0
                },
                skip: !n
            }), s = l.data, o = l.refetch, i = _t(n), _ = i.tokenBnbLpAddress, d = i.tokenTotalSupply, x = i.symbol, k = i.price, h = i.decimals, T = i.name, g = i.bnbLiquidity, y = i.mainLpVersion, j = i.ready, w = pt(n), O = w.events, C = w.lpSymbols, F = Object(a.useContext)(D).web3, W = Object(a.useState)(null), N = Object(r.a)(W, 2), B = N[0], S = N[1], P = Object(a.useState)(null), I = Object(r.a)(P, 2), L = I[0], A = I[1], M = Object(a.useState)(null), E = Object(r.a)(M, 2)[1], R = Pe(), U = null === s || void 0 === s || null === (t = s.ethereum) || void 0 === t ? void 0 : t.transfers, H = Object(a.useState)(null), V = Object(r.a)(H, 2), z = V[0], G = V[1], K = dt(z, n, !z || !n), Y = K.transactions, Z = K.transactionsAccount, J = K.transactionsToken;
            Object(a.useEffect)((function() {
                function e() {
                    return (e = Object(b.a)(u.a.mark((function e() {
                        var t, a, l, s, o, r, i;
                        return u.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    S(null),
                                    A(null),
                                    t = {},
                                    a = {},
                                    l = [],
                                    s = 0;
                                case 6:
                                    if (!(s < U.length)) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.next = 9,
                                    F.getCode(U[s].receiver.address);
                                case 9:
                                    o = e.sent,
                                    r = "0x" === o && -1 === U[s].receiver.address.indexOf("0x000"),
                                    t[U[s].receiver.address.toLowerCase()] = r,
                                    l.push({
                                        name: "balanceOf",
                                        address: n,
                                        params: [U[s].receiver.address]
                                    });
                                case 13:
                                    s += 1,
                                    e.next = 6;
                                    break;
                                case 16:
                                    return e.next = 18,
                                    R(f, l);
                                case 18:
                                    i = e.sent,
                                    A(i.reduce((function(e, t, n) {
                                        return Object(ee.a)(Object(ee.a)({}, e), {}, Object(Fe.a)({}, U[n].receiver.address.toLowerCase(), new c.a(t[0].toString())))
                                    }
                                    ), {})),
                                    S(t),
                                    E(a);
                                case 22:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                U && R && function() {
                    e.apply(this, arguments)
                }()
            }
            ), [n, R, U, F]);
            var Q = Y && Z === z && J === n ? Y : null;
            return Object(v.jsx)(v.Fragment, {
                children: Object(v.jsx)("div", {
                    className: "mt-2",
                    children: j && Object(v.jsxs)(v.Fragment, {
                        children: [Object(v.jsxs)("p", {
                            children: [" ", Object(v.jsx)(q.b, {
                                to: "/tokens/".concat(n),
                                children: "Go to chart"
                            })]
                        }), Object(v.jsxs)("p", {
                            children: ["Checking: ", T, " (", x, ")"]
                        }), Object(v.jsx)("h3", {
                            children: "Basic checks"
                        }), Object(v.jsx)("p", {
                            children: "If the token has just launched, do these basic checks."
                        }), Object(v.jsxs)("p", {
                            children: ["Check the % of supply the top", " ", Object(v.jsx)("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://bscscan.com/token/".concat(n, "#balances"),
                                children: "holders"
                            }), " ", "have. If the top holder has a very high percentage and are a wallet, it could be a rug."]
                        }), Object(v.jsx)("p", {
                            children: "Did they burn 50% of the supply instantly after the initial supply was minted? If so, all of the other wallets % holdings are actually double what they say in bscscan. Burning a large amount of the initial supply before launch is usually a trick to mislead people into thinking a 20% holder is a 10% holder. Some projects even shill the burn as if it was some sort of sacrifice on their part. Check the project website to see if they are transparent about why they did this initial burn."
                        }), Object(v.jsxs)("p", {
                            children: ["Check that they have locked the LP. For example, this the", " ", Object(v.jsx)("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://bscscan.com/token/".concat(_, "#balances"),
                                children: "BNB LP"
                            }), " ", "of the selected token (some tokens may use BUSD or something else as their main LP). If the top holder has almost 100% of the supply and is a wallet address, the LP has not been locked/burned."]
                        }), Object(v.jsx)("p", {
                            children: "If the top holder of LP has the burn address (any address starting with 0x0000...), the LP is burned."
                        }), Object(v.jsxs)("p", {
                            children: ["If the top holder of LP is a contract address (one that has this icon", " ", Object(v.jsx)("img", {
                                src: "/images/misc/contract-icon.png",
                                height: 23,
                                width: 18
                            }), "), the LP has likely been locked. Ensure that the lock timer is longer than at least 2 months for it to be safe. You need the project owners to publish the url of the LP lock timer to know how long it is locked for (usually dxsale or unicrypt)."]
                        }), Object(v.jsx)("p", {
                            children: "If the token has pools/farms, the top holder will usually be the pool/farm contract."
                        }), Object(v.jsx)("h3", {
                            children: "Top receivers"
                        }), Object(v.jsxs)("p", {
                            children: ["Token total supply: ", d.toFormat(4)]
                        }), Object(v.jsx)("p", {
                            children: "Often, the dev will distribute their initial supply across multiple wallets to hide the amount that they own. This table shows the top 10 receivers of the token (even if they have sent it to other wallets)."
                        }), Object(v.jsx)("p", {
                            children: "Check if the the supply was transferred to them by the dev wallet, or purchased instantly after creating the LP and the sum of money spent purchasing. If a large amount was spent in the first few minutes of creating the LP, it is probably one of the dev wallets. However, if it was only a small amount of money spent, it is probably just a snipe bot."
                        }), Object(v.jsx)("div", {
                            className: "table-responsive",
                            children: Object(v.jsxs)("table", {
                                className: "table table-bordered table-condensed text-small",
                                children: [Object(v.jsx)("thead", {
                                    className: "bg-light text-dark",
                                    children: Object(v.jsxs)("tr", {
                                        children: [Object(v.jsx)("th", {
                                            className: "text-center",
                                            children: "Address"
                                        }), Object(v.jsx)("th", {
                                            className: "text-center",
                                            children: "Track Wallet"
                                        }), Object(v.jsx)("th", {
                                            className: "text-center",
                                            children: "Type"
                                        }), Object(v.jsx)("th", {
                                            className: "text-center",
                                            children: "Amount"
                                        }), Object(v.jsx)("th", {
                                            className: "text-center",
                                            children: "Transfer Count"
                                        }), Object(v.jsx)("th", {
                                            className: "text-center",
                                            children: "Current Balance"
                                        })]
                                    })
                                }), Object(v.jsx)("tbody", {
                                    children: null === U || void 0 === U ? void 0 : U.map((function(e) {
                                        return Object(v.jsxs)("tr", {
                                            children: [Object(v.jsx)("td", {
                                                children: Object(v.jsx)("a", {
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    href: "https://bscscan.com/token/".concat(n, "?a=").concat(e.receiver.address),
                                                    children: e.receiver.address
                                                })
                                            }), Object(v.jsx)("td", {
                                                children: B && !!B[e.receiver.address.toLowerCase()] && Object(v.jsx)("button", {
                                                    onClick: function() {
                                                        return G(e.receiver.address)
                                                    },
                                                    className: "btn btn-link btn-sm p-0",
                                                    children: "Track"
                                                })
                                            }), Object(v.jsx)("td", {
                                                children: B && Object(v.jsx)(v.Fragment, {
                                                    children: B[e.receiver.address.toLowerCase()] ? "Wallet" : "Contract"
                                                })
                                            }), Object(v.jsx)("td", {
                                                className: "text-end",
                                                children: new c.a(e.amount).toFormat(4)
                                            }), Object(v.jsx)("td", {
                                                className: "text-end",
                                                children: e.sender_count
                                            }), Object(v.jsx)("td", {
                                                className: "text-end",
                                                children: L && L[e.receiver.address.toLowerCase()] ? L[e.receiver.address.toLowerCase()].div(new c.a(10).pow(h)).toFormat(4) : ""
                                            })]
                                        }, e.receiver.address)
                                    }
                                    ))
                                })]
                            })
                        }), Object(v.jsx)("p", {
                            children: "Below is a chart of when the selected wallet purchased all their tokens."
                        }), Object(v.jsx)("h3", {
                            children: "Chart"
                        }), Object(v.jsx)("div", {
                            children: Q && Object(v.jsx)(ot, {
                                selectedToken: n,
                                quoteCurrency: p.wbnb[m.chainId],
                                quoteSymbol: "BNB",
                                tokenSymbol: x,
                                decimals: h.toString(),
                                events: O,
                                price: k,
                                transactions: Q,
                                lpSymbols: C,
                                account: z,
                                enableTx: !!z,
                                onRefetch: o,
                                bnbLiquidity: g,
                                mainLpVersion: y
                            }, "".concat(n, "-").concat(z))
                        }), z && Object(v.jsxs)(v.Fragment, {
                            children: [Object(v.jsxs)("div", {
                                className: "p-2 text-small",
                                children: ["Wallet", " ", Object(v.jsx)("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: "https://bscscan.com/token/".concat(n, "?a=").concat(z),
                                    children: z
                                }), " ", "transactions"]
                            }), Object(v.jsx)("div", {
                                children: Object(v.jsx)(bt, {
                                    lpSymbols: C,
                                    account: z,
                                    address: n,
                                    transactions: Q,
                                    price: k
                                })
                            })]
                        })]
                    })
                })
            })
        }
        function wn() {
            var e = Object(Ce.i)()
              , t = Object(Ce.h)()
              , n = null === e || void 0 === e ? void 0 : e.address;
            return Object(v.jsx)(J, {
                title: "PooCoin Charts - Rug Check",
                children: Object(v.jsxs)("div", {
                    className: "text-center mt-3",
                    "data-aos": "fade-down",
                    "data-aos-delay": "100",
                    children: [Object(v.jsx)($, {}), Object(v.jsx)("h1", {
                        children: "Is it safu?"
                    }), Object(v.jsxs)("div", {
                        className: "bg-dark-1 p-3 rounded shadow text-start",
                        children: [Object(v.jsx)(ve, {
                            onSubmit: function(e) {
                                return t.push(Object(Ce.f)("/rugcheck/:address", {
                                    address: e.toLowerCase()
                                }))
                            },
                            defaultValue: n
                        }), Object(v.jsx)(jn, {
                            address: n
                        })]
                    })]
                })
            })
        }
        var On = n(197);
        function vn() {
            var e = Se(On, p.bogSniperV2_2[m.chainId])
              , t = Object(a.useContext)(D)
              , n = t.web3
              , l = t.bnbPrice
              , s = Pe()
              , o = Object(a.useState)(null)
              , i = Object(r.a)(o, 2)
              , _ = i[0]
              , d = i[1]
              , c = Object(a.useState)(null)
              , x = Object(r.a)(c, 2)
              , k = x[0]
              , h = x[1];
            Object(a.useEffect)((function() {
                function t() {
                    return (t = Object(b.a)(u.a.mark((function t() {
                        var n, a, l, o, r, i, _, c, m, p, x, b, k, f, g, y, j, w, O;
                        return u.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return d(null),
                                    h(null),
                                    t.next = 4,
                                    de();
                                case 4:
                                    n = t.sent,
                                    a = n.map((function(t) {
                                        return {
                                            name: "getAddressSnipes",
                                            address: e.options.address,
                                            params: [t]
                                        }
                                    }
                                    )),
                                    l = [],
                                    o = 0;
                                case 8:
                                    if (!(o < Math.floor(a.length / 500) + 1)) {
                                        t.next = 19;
                                        break
                                    }
                                    if ((i = (r = 500 * o) + 500) > a.length - 1 && (i = a.length - 1),
                                    _ = s(On, a.slice(r, i))) {
                                        t.next = 15;
                                        break
                                    }
                                    return t.abrupt("continue", 16);
                                case 15:
                                    l = l.concat(_);
                                case 16:
                                    o += 1,
                                    t.next = 8;
                                    break;
                                case 19:
                                    return t.next = 21,
                                    Promise.all(l);
                                case 21:
                                    c = t.sent.reduce((function(e, t) {
                                        return e.concat(t)
                                    }
                                    ), []),
                                    m = 0,
                                    p = [],
                                    null === c || void 0 === c || c.forEach((function(t, a) {
                                        t[0].forEach((function(t) {
                                            var l = t.toNumber();
                                            m < l && (m = l),
                                            p.push({
                                                name: "getSnipe",
                                                address: e.options.address,
                                                params: [l, n[a]]
                                            })
                                        }
                                        ))
                                    }
                                    )),
                                    x = p.filter((function(e) {
                                        return e.params[0] > m - 1e3
                                    }
                                    )),
                                    b = [],
                                    k = 0;
                                case 28:
                                    if (!(k < Math.floor(x.length / 100) + 1)) {
                                        t.next = 41;
                                        break
                                    }
                                    return (g = (f = 100 * k) + 100) > x.length - 1 && (g = x.length - 1),
                                    t.next = 34,
                                    s(On, x.slice(f, g));
                                case 34:
                                    if (y = t.sent) {
                                        t.next = 37;
                                        break
                                    }
                                    return t.abrupt("continue", 38);
                                case 37:
                                    b = b.concat(y);
                                case 38:
                                    k += 1,
                                    t.next = 28;
                                    break;
                                case 41:
                                    return j = b.map((function(e, t) {
                                        var n = e[0];
                                        return Object(ee.a)(Object(ee.a)({}, n), {}, {
                                            owner: n.owner,
                                            tokenOut: n.token,
                                            index: t,
                                            amountIn: new T.a(n.amountIn.toString()),
                                            date: new tt.DateTime.fromSeconds(parseInt(n.placedAt.toString())),
                                            status: n.status.toString(),
                                            priorityIndex: n.priorityIndex.toNumber(),
                                            priority: new T.a(n.priority.toString()).div(new T.a(10).pow(18)).toFormat(0)
                                        })
                                    }
                                    )).filter((function(e) {
                                        return "0" === e.status
                                    }
                                    )).sort((function(e, t) {
                                        return e.date.toMillis() < t.date.toMillis() ? 1 : -1
                                    }
                                    )),
                                    w = {},
                                    j.forEach((function(e) {
                                        w[e.tokenOut.toLowerCase()] = !0
                                    }
                                    )),
                                    t.next = 47,
                                    Ie(Object.keys(w));
                                case 47:
                                    O = t.sent,
                                    h(O),
                                    d(j);
                                case 50:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))).apply(this, arguments)
                }
                n && e && function() {
                    t.apply(this, arguments)
                }()
            }
            ), [e, s, n]);
            return Object(v.jsx)("div", {
                className: "text-start row",
                children: Object(v.jsxs)("div", {
                    className: "col",
                    children: [!_ && Object(v.jsx)(M, {
                        size: "small"
                    }), Object(v.jsx)("div", {
                        className: "shadow shadow-sm table-responsive",
                        style: {
                            minHeight: 600,
                            overflowY: "hidden"
                        },
                        children: Object(v.jsx)(Ge.a, {
                            children: function(e) {
                                var t = e.width
                                  , n = e.height
                                  , a = t < 1080 ? 1080 : t;
                                return Object(v.jsxs)(Ge.d, {
                                    headerHeight: 60,
                                    rowGetter: function(e) {
                                        var t = e.index;
                                        return _[t]
                                    },
                                    height: n,
                                    rowHeight: 52,
                                    rowCount: (null === _ || void 0 === _ ? void 0 : _.length) || 0,
                                    width: a,
                                    children: [Object(v.jsx)(Ge.b, {
                                        disableSort: !0,
                                        dataKey: "transactionHash",
                                        width: 320,
                                        label: "Wallet",
                                        cellRenderer: function(e) {
                                            var t = e.rowData;
                                            return Object(v.jsx)("div", {
                                                className: "text-xs white-space-wrap text-break d-inline-block",
                                                children: Object(v.jsx)("a", {
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    href: "https://bscscan.com/address/".concat(t.owner),
                                                    children: t.owner
                                                })
                                            })
                                        },
                                        headerClassName: "text-center"
                                    }), Object(v.jsx)(Ge.b, {
                                        disableSort: !0,
                                        dataKey: "transactionHash",
                                        width: 100,
                                        label: "Amount",
                                        headerClassName: "text-center",
                                        cellRenderer: function(e) {
                                            var t = e.rowData
                                              , n = new T.a(t.amountIn).div(new T.a(10).pow(18))
                                              , a = n.times(l);
                                            return Object(v.jsxs)("div", {
                                                className: "lh-1 text-end px-2",
                                                children: [Object(v.jsxs)("span", {
                                                    className: "text-success",
                                                    children: ["$", a.toFormat(2)]
                                                }), Object(v.jsx)("br", {}), Object(v.jsxs)("span", {
                                                    className: "text-muted text-xs",
                                                    children: [n.toFormat(4), " WBNB"]
                                                })]
                                            })
                                        }
                                    }), Object(v.jsx)(Ge.b, {
                                        disableSort: !0,
                                        dataKey: "transactionHash",
                                        width: 110,
                                        label: "Priority (Higher is earlier)",
                                        headerRenderer: function() {
                                            return Object(v.jsxs)("div", {
                                                children: ["Priority", Object(v.jsx)("br", {}), Object(v.jsx)("span", {
                                                    className: "text-xs",
                                                    children: "(Higher is earlier)"
                                                })]
                                            })
                                        },
                                        cellRenderer: function(e) {
                                            var t = e.rowData;
                                            return Object(v.jsx)("div", {
                                                className: "text-center",
                                                children: t.priority
                                            })
                                        },
                                        headerClassName: "text-center"
                                    }), Object(v.jsx)(Ge.b, {
                                        disableSort: !0,
                                        dataKey: "transactionHash",
                                        width: 350,
                                        label: "Token",
                                        headerClassName: "text-center",
                                        cellRenderer: function(e) {
                                            var t, n, a = e.rowData;
                                            return Object(v.jsx)("div", {
                                                className: "lh-1 text-start",
                                                children: Object(v.jsxs)("a", {
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    href: "https://bscscan.com/token/".concat(a.tokenOut.toLowerCase()),
                                                    className: "text-light",
                                                    children: [!!(null === (t = k[a.tokenOut.toLowerCase()]) || void 0 === t ? void 0 : t.name) && Object(v.jsxs)(v.Fragment, {
                                                        children: [k[a.tokenOut.toLowerCase()].name, " (", k[a.tokenOut.toLowerCase()].symbol, ")", Object(v.jsx)("br", {}), Object(v.jsx)("span", {
                                                            className: "text-muted text-xs",
                                                            children: a.tokenOut
                                                        })]
                                                    }), !(null === (n = k[a.tokenOut.toLowerCase()]) || void 0 === n ? void 0 : n.name) && a.tokenOut.toLowerCase()]
                                                })
                                            })
                                        }
                                    }), Object(v.jsx)(Ge.b, {
                                        disableSort: !0,
                                        dataKey: "transactionHash",
                                        width: 200,
                                        label: "Pending Since",
                                        cellRenderer: function(e) {
                                            var t = e.rowData;
                                            return Object(v.jsx)("div", {
                                                className: "text-center",
                                                children: t.date.toLocaleString(tt.DateTime.DATETIME_SHORT_WITH_SECONDS)
                                            })
                                        },
                                        headerClassName: "text-center"
                                    })]
                                })
                            }
                        })
                    })]
                })
            })
        }
        function Cn() {
            return Object(v.jsx)(J, {
                title: "PooCoin Charts - Sniper Watcher",
                children: Object(v.jsxs)("div", {
                    className: "text-center mt-3",
                    "data-aos": "fade-down",
                    "data-aos-delay": "100",
                    children: [Object(v.jsx)($, {}), Object(v.jsx)("div", {
                        className: "my-2",
                        children: Object(v.jsx)($, {
                            small: !0
                        })
                    }), Object(v.jsx)("h1", {
                        children: "Sniper Watcher"
                    }), Object(v.jsx)("h3", {
                        children: "Check if a token launch is about to be botted."
                    }), Object(v.jsx)("p", {
                        children: "These are pending orders inside a token launch sniper bot that will be placed when the token goes on sale."
                    }), Object(v.jsx)("div", {
                        className: "bg-dark-1 p-3 rounded border",
                        children: Object(v.jsx)("div", {
                            className: "mb-5",
                            children: Object(v.jsx)(vn, {})
                        })
                    })]
                })
            })
        }
        function Fn() {
            var e = Object(a.useContext)(C).disableAds
              , t = Object(a.useContext)(D).hasPremium
              , n = Object(X.a)()
              , l = !t || !e;
            return Object(v.jsx)("div", {
                className: "d-flex flex-wrap text-center",
                children: l && Object(v.jsxs)(v.Fragment, {
                    children: [n >= 1330 && Object(v.jsx)("div", {
                        className: "flex-grow-1",
                        children: Object(v.jsx)("iframe", {
                            "data-aa": "1602418",
                            src: "//ad.a-ads.com/1602418?size=970x90",
                            scrolling: "no",
                            style: {
                                width: 970,
                                height: 90,
                                border: 0,
                                padding: 0,
                                overflow: "hidden"
                            }
                        })
                    }), n < 1330 && n >= 1190 && Object(v.jsx)("div", {
                        className: "flex-grow-1",
                        children: Object(v.jsx)("iframe", {
                            "data-aa": "1604341",
                            src: "//ad.a-ads.com/1604341?size=728x90",
                            scrolling: "no",
                            style: {
                                width: 728,
                                height: 90,
                                border: 0,
                                padding: 0,
                                overflow: "hidden"
                            }
                        })
                    }), n < 1190 && n >= 980 && Object(v.jsx)("div", {
                        className: "flex-grow-1",
                        children: Object(v.jsx)("iframe", {
                            "data-aa": "1604344",
                            src: "//ad.a-ads.com/1604344?size=468x60",
                            scrolling: "no",
                            style: {
                                width: 468,
                                height: 60,
                                border: 0,
                                padding: 0,
                                overflow: "hidden"
                            }
                        })
                    }), n < 980 && Object(v.jsx)("div", {
                        className: "flex-grow-1 justify-content-center text-center",
                        children: Object(v.jsxs)("div", {
                            className: "d-flex flex-grow-1 justify-content-center flex-wrap justify-content-evenly",
                            children: [Object(v.jsx)("iframe", {
                                className: "mb-2",
                                "data-aa": "1604350",
                                src: "//ad.a-ads.com/1604350?size=120x60",
                                scrolling: "no",
                                style: {
                                    width: 120,
                                    height: 60,
                                    border: 0,
                                    padding: 0,
                                    overflow: "hidden"
                                }
                            }), Object(v.jsx)("iframe", {
                                className: "mb-2",
                                "data-aa": "1604350",
                                src: "//ad.a-ads.com/1604350?size=120x60",
                                scrolling: "no",
                                style: {
                                    width: 120,
                                    height: 60,
                                    border: 0,
                                    padding: 0,
                                    overflow: "hidden"
                                }
                            })]
                        }, "ad-small")
                    })]
                })
            })
        }
        var Wn = n(263)
          , Nn = n.n(Wn);
        function Bn(e) {
            var t = e.address
              , n = pt(t, 3e4)
              , l = n.events
              , s = n.lpSymbols
              , o = _t(t)
              , i = o.price
              , _ = o.bnbLiquidity
              , d = o.decimals
              , c = o.ready
              , x = o.symbol
              , u = o.mainLpVersion
              , b = Object(a.useState)("BNB")
              , k = Object(r.a)(b, 1)[0]
              , h = "BNB" === k ? p.wbnb[m.chainId] : p.busd[m.chainId];
            return c ? Object(v.jsx)(v.Fragment, {
                children: Object(v.jsx)(ot, {
                    selectedToken: t,
                    quoteCurrency: h,
                    quoteSymbol: k,
                    tokenSymbol: x,
                    decimals: d.toString(),
                    events: l,
                    price: i,
                    lpSymbols: s,
                    bnbLiquidity: _,
                    mainLpVersion: u,
                    mini: !0
                })
            }) : Object(v.jsx)(v.Fragment, {})
        }
        var Sn = Object(Wn.WidthProvider)(Nn.a);
        function Pn(e) {
            var t = e.showAds
              , n = e.account
              , l = e.windowWidth
              , s = Object(a.useContext)(C)
              , o = s.showWallet
              , i = s.setShowWallet
              , _ = s.multiChartAddresses
              , d = s.setMultiChartAddresses
              , c = Object(a.useState)(!1)
              , m = Object(r.a)(c, 2)
              , p = m[0]
              , x = m[1]
              , u = l > 600 ? [{
                i: "0",
                x: 0,
                y: 0,
                w: 2,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "1",
                x: 2,
                y: 0,
                w: 2,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "2",
                x: 4,
                y: 0,
                w: 2,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "3",
                x: 0,
                y: 1,
                w: 2,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "4",
                x: 2,
                y: 1,
                w: 2,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "5",
                x: 4,
                y: 1,
                w: 2,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "6",
                x: 0,
                y: 2,
                w: 2,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "7",
                x: 2,
                y: 2,
                w: 2,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "8",
                x: 4,
                y: 2,
                w: 2,
                h: 2,
                minW: 2,
                minH: 2
            }] : [{
                i: "0",
                x: 0,
                y: 0,
                w: 6,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "1",
                x: 2,
                y: 1,
                w: 6,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "2",
                x: 4,
                y: 2,
                w: 6,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "3",
                x: 0,
                y: 3,
                w: 6,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "4",
                x: 2,
                y: 4,
                w: 6,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "5",
                x: 4,
                y: 5,
                w: 6,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "6",
                x: 0,
                y: 6,
                w: 6,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "7",
                x: 2,
                y: 7,
                w: 6,
                h: 2,
                minW: 2,
                minH: 2
            }, {
                i: "8",
                x: 4,
                y: 8,
                w: 6,
                h: 2,
                minW: 2,
                minH: 2
            }];
            Object(a.useEffect)((function() {
                window.dispatchEvent(new Event("resize"))
            }
            ), [o]);
            var b = function(e) {
                var t = Object(Xe.a)(_.addresses)
                  , n = t.findIndex((function(e) {
                    return null === e
                }
                ));
                -1 !== n ? t[n] = e : t.length < 9 && t.push(e),
                d({
                    addresses: t
                })
            };
            return Object(v.jsxs)("div", {
                className: "d-flex justify-content-end",
                children: [Object(v.jsxs)("div", {
                    className: "".concat(o ? "d-none" : "", " d-md-flex flex-grow-1 d-flex flex-column"),
                    children: [Object(v.jsx)(Fn, {}), Object(v.jsxs)("div", {
                        className: "d-flex justify-content-end mt-2",
                        children: [Object(v.jsx)("div", {
                            className: "flex-grow-1 ms-3",
                            children: Object(v.jsx)("div", {
                                style: {
                                    maxWidth: 400
                                },
                                children: Object(v.jsx)(ve, {
                                    onSubmit: b
                                })
                            })
                        }), Object(v.jsxs)("button", {
                            className: "d-block btn btn-light text-decoration-none text-small me-2",
                            onClick: function() {
                                return i(!o)
                            },
                            children: [!o && Object(v.jsx)("i", {
                                className: "fas fa-wallet"
                            }), o && Object(v.jsx)("i", {
                                className: "fas fa-wallet"
                            })]
                        })]
                    }), Object(v.jsx)(Sn, {
                        isDraggable: l > 600,
                        layout: u,
                        cols: 6,
                        className: "flex-grow-1",
                        isBounded: !0,
                        onDragStart: function() {
                            return x(!0)
                        },
                        onDragStop: function() {
                            return x(!1)
                        },
                        onResizeStart: function() {
                            return x(!0)
                        },
                        onResizeStop: function() {
                            return x(!1)
                        },
                        children: u.map((function(e, t) {
                            return Object(v.jsx)("div", {
                                "data-grid": e,
                                className: "bg-blue-dark pb-2 d-flex flex-column",
                                children: !!_.addresses[e.i] && Object(v.jsxs)(v.Fragment, {
                                    children: [Object(v.jsx)("div", {
                                        className: "d-flex justify-content-end border-bottom",
                                        children: Object(v.jsx)("button", {
                                            className: "btn btn-link px-4 text-light",
                                            onClick: function() {
                                                return function(e) {
                                                    var t = Object(Xe.a)(_.addresses);
                                                    t[e] = null,
                                                    d({
                                                        addresses: t
                                                    })
                                                }(t)
                                            },
                                            children: Object(v.jsx)("i", {
                                                className: "fas fa-times"
                                            })
                                        })
                                    }), Object(v.jsxs)("div", {
                                        className: "d-flex flex-grow-1 flex-column position-relative",
                                        children: [p && Object(v.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                background: "rgba(0,0,0,0.1)",
                                                zIndex: 2
                                            }
                                        }), Object(v.jsx)(Bn, {
                                            address: _.addresses[e.i]
                                        })]
                                    })]
                                })
                            }, e.i)
                        }
                        ))
                    })]
                }), Object(v.jsxs)("div", {
                    className: "bg-dark-1 shadow d-flex flex-column flex-md-grow-0",
                    children: [Object(v.jsx)("div", {
                        style: {
                            minWidth: 10
                        }
                    }), Object(v.jsxs)("div", {
                        className: "".concat(o ? "d-block" : "d-none", " px-2"),
                        style: {
                            width: 366,
                            maxWidth: "100vw"
                        },
                        children: [Object(v.jsxs)("button", {
                            className: "d-block d-md-none btn btn-light text-decoration-none text-small",
                            onClick: function() {
                                return i(!o)
                            },
                            children: [!o && Object(v.jsx)("i", {
                                className: "fas fa-wallet"
                            }), o && Object(v.jsx)("i", {
                                className: "fas fa-wallet"
                            })]
                        }), t && Object(v.jsxs)("div", {
                            className: "text-center mb-2 text-light text-small m-auto",
                            style: {
                                maxWidth: 350
                            },
                            children: [Object(v.jsx)("div", {
                                className: "mb-1",
                                children: "Sponsored BSC Project"
                            }), Object(v.jsx)(en, {})]
                        }, "sm"), Object(v.jsx)("div", {
                            className: "mt-2",
                            children: Object(v.jsx)(Je, {
                                onOpen: b
                            }, n)
                        }), t && o && Object(v.jsxs)(v.Fragment, {
                            children: [l >= 766 && Object(v.jsx)("div", {
                                className: "mb-2 mt-2 d-flex justify-content-center",
                                children: Object(v.jsx)("div", {
                                    children: Object(v.jsx)("iframe", {
                                        "data-aa": "1602827",
                                        src: "//ad.a-ads.com/1602827?size=320x100",
                                        scrolling: "no",
                                        style: {
                                            width: 320,
                                            height: 100,
                                            border: 0,
                                            padding: 0,
                                            overflow: "hidden"
                                        }
                                    })
                                })
                            }), Object(v.jsx)("div", {
                                className: "mb-2 mt-2 overflow-auto",
                                style: {
                                    maxWidth: "100vw"
                                },
                                children: Object(v.jsx)("iframe", {
                                    "data-aa": "1602436",
                                    src: "//ad.a-ads.com/1602436?size=336x280",
                                    scrolling: "no",
                                    style: {
                                        width: 336,
                                        height: 280,
                                        border: 0,
                                        padding: 0,
                                        overflow: "hidden"
                                    }
                                })
                            })]
                        })]
                    })]
                })]
            })
        }
        function In() {
            var e = Object(Ce.h)()
              , t = Object(a.useContext)(C)
              , n = t.disableAds
              , l = t.setShowWallet
              , s = Object(a.useContext)(D)
              , o = s.hasPremium
              , r = s.account
              , i = Object(X.a)()
              , _ = !o || !n;
            return Object(a.useEffect)((function() {
                window.innerWidth < 480 && l(!1)
            }
            ), [e.location.pathname, l]),
            Object(v.jsx)("div", {
                className: "d-flex flex-grow-1 bg-dark justify-content-center",
                "data-aos": "fade-down",
                "data-aos-delay": "0",
                children: Object(v.jsx)("div", {
                    className: "d-flex flex-column flex-grow-1",
                    style: {
                        maxWidth: 1600
                    },
                    children: Object(v.jsx)("div", {
                        className: "p-2 flex-grow-1 d-flex flex-column",
                        children: Object(v.jsx)(Pn, {
                            showAds: _,
                            account: r,
                            windowWidth: i
                        })
                    })
                })
            })
        }
        function Ln() {
            return Object(v.jsx)(J, {
                title: "PooCoin Charts - Tools",
                children: Object(v.jsxs)("div", {
                    className: "text-center mt-3",
                    "data-aos": "fade-down",
                    "data-aos-delay": "100",
                    children: [Object(v.jsx)($, {}), Object(v.jsx)("h1", {
                        children: "Tools"
                    }), Object(v.jsx)("div", {
                        className: "bg-dark-1 p-3 rounded shadow",
                        children: Object(v.jsxs)("div", {
                            className: "list-group",
                            children: [Object(v.jsx)(q.b, {
                                className: "list-group-item-dark list-group-item list-group-item-action",
                                to: "/multi-chart",
                                children: "Multi Chart"
                            }), Object(v.jsx)(q.b, {
                                className: "list-group-item-dark list-group-item list-group-item-action",
                                to: "/sniper-watcher",
                                children: "Sniper Bot Watcher"
                            }), Object(v.jsx)(q.b, {
                                className: "list-group-item-dark list-group-item list-group-item-action",
                                to: "/trending",
                                children: "Trending (Most popular websites linking to poocoin)"
                            }), Object(v.jsx)(q.b, {
                                className: "list-group-item-dark list-group-item list-group-item-action",
                                to: "/ape",
                                children: "Ape (New token scanner)"
                            }), Object(v.jsx)(q.b, {
                                className: "list-group-item-dark list-group-item list-group-item-action",
                                to: "/toilet",
                                children: "Toilet (Farm yields)"
                            }), Object(v.jsx)(q.b, {
                                className: "list-group-item-dark list-group-item list-group-item-action",
                                to: "/rugcheck",
                                children: "Rug Check"
                            })]
                        })
                    })]
                })
            })
        }
        function An() {
            return Object(v.jsxs)(q.a, {
                children: [Object(v.jsx)(Y, {}), Object(v.jsxs)(Ce.d, {
                    children: [Object(v.jsx)(Ce.b, {
                        exact: !0,
                        path: "/",
                        component: Qe
                    }), Object(v.jsx)(Ce.b, {
                        exact: !0,
                        path: "/poocoin",
                        component: Ct
                    }), Object(v.jsx)(Ce.b, {
                        exact: !0,
                        path: "/toilet",
                        component: Qt
                    }), Object(v.jsx)(Ce.b, {
                        path: "/tokens",
                        component: tn
                    }), Object(v.jsx)(Ce.b, {
                        path: "/promote",
                        component: gn
                    }), Object(v.jsx)(Ce.b, {
                        path: "/premium",
                        component: pn
                    }), Object(v.jsx)(Ce.b, {
                        path: "/ads",
                        component: ln
                    }), Object(v.jsx)(Ce.b, {
                        path: "/ads2",
                        component: sn
                    }), Object(v.jsx)(Ce.b, {
                        path: "/ads3",
                        component: Q
                    }), Object(v.jsx)(Ce.b, {
                        path: "/ads4",
                        component: on
                    }), Object(v.jsx)(Ce.b, {
                        exact: !0,
                        path: "/rugcheck",
                        component: wn
                    }), Object(v.jsx)(Ce.b, {
                        exact: !0,
                        path: "/rugcheck/:address",
                        component: wn
                    }), Object(v.jsx)(Ce.b, {
                        exact: !0,
                        path: "/tools",
                        component: Ln
                    }), Object(v.jsx)(Ce.b, {
                        exact: !0,
                        path: "/ape",
                        component: mn
                    }), Object(v.jsx)(Ce.b, {
                        exact: !0,
                        path: "/trending",
                        component: an
                    }), Object(v.jsx)(Ce.b, {
                        path: "/sniper-watcher",
                        component: Cn
                    }), Object(v.jsx)(Ce.b, {
                        path: "/multi-chart",
                        component: In
                    })]
                })]
            })
        }
        V.a.setAppElement("#root");
        var Mn = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                maxHeight: "80%",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)"
            }
        };
        function Dn() {
            var e = Object(a.useContext)(D)
              , t = e.showPremium
              , n = e.setShowPremium
              , l = e.tokenPerLp
              , s = e.bnbPerLp
              , o = e.lpPrice
              , i = e.pancakeUrl
              , d = p.poocoin[m.chainId]
              , x = Object(a.useState)(!1)
              , u = Object(r.a)(x, 2)
              , b = u[0]
              , k = u[1];
            Object(a.useEffect)((function() {
                _.a.init({
                    duration: 200
                })
            }
            ), []);
            var h = new c.a(100).div(o)
              , T = new c.a(100).div(o).times(l).times(1.08)
              , f = new c.a(100).div(o).times(s).times(1.08)
              , g = new c.a(300).div(o)
              , y = new c.a(300).div(o).times(l).times(1.08)
              , j = new c.a(300).div(o).times(s).times(1.08);
            return Object(v.jsxs)(v.Fragment, {
                children: [Object(v.jsx)(An, {}), Object(v.jsx)(V.a, {
                    style: Mn,
                    isOpen: !!t,
                    onRequestClose: function() {
                        return n(!1)
                    },
                    children: Object(v.jsxs)("div", {
                        className: "d-flex flex-column text-dark text-center",
                        children: [Object(v.jsx)("h2", {
                            children: "Premium required"
                        }), Object(v.jsxs)("p", {
                            children: ["This features requires premium tier ", !0 === t ? 1 : t, "."]
                        }), Object(v.jsxs)("p", {
                            children: ["Unlock this premium tier by holding", " ", Object(v.jsxs)("span", {
                                className: "text-success",
                                children: [(!0 === t || 1 === t) && "$100", 2 === t && "$300"]
                            }), " ", "worth of", " ", Object(v.jsx)("a", {
                                style: {
                                    lineHeight: 1
                                },
                                href: "".concat(i, "/#/add/BNB/").concat(d),
                                target: "_blank",
                                rel: "noreferrer",
                                children: "POOCOIN/BNB LP"
                            }), Object(v.jsx)("br", {}), "(approximately", " ", Object(v.jsxs)("strong", {
                                children: [(!0 === t || 1 === t) && h.toFormat(6), 2 === t && g.toFormat(6), " POOCOIN/BNB LP"]
                            }), " ", "created from", " ", Object(v.jsxs)("strong", {
                                children: [(!0 === t || 1 === t) && T.toFormat(4), 2 === t && y.toFormat(4), " ", Object(v.jsx)("a", {
                                    href: "".concat(i, "/#/swap?outputCurrency=").concat(d),
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "POOCOIN"
                                })]
                            }), " ", "and", " ", Object(v.jsxs)("strong", {
                                children: [(!0 === t || 1 === t) && f.toFormat(4), 2 === t && j.toFormat(4), " BNB"]
                            }), ")", Object(v.jsx)("br", {}), "tokens in your wallet."]
                        })]
                    })
                }), Object(v.jsx)(V.a, {
                    style: Mn,
                    isOpen: !!b,
                    onRequestClose: function() {
                        window.localStorage.setItem("seenMessage1", "1"),
                        k(!1)
                    },
                    children: Object(v.jsxs)("div", {
                        className: "d-flex flex-column text-dark text-center",
                        children: [Object(v.jsx)("div", {
                            className: "d-flex justify-content-end",
                            children: Object(v.jsx)("button", {
                                className: "btn btn-link text-dark",
                                onClick: function() {
                                    window.localStorage.setItem("seenMessage1", "1"),
                                    k(!1)
                                },
                                children: "X"
                            })
                        }), Object(v.jsx)("div", {
                            className: "fs-2",
                            children: "A new premium feature is here!"
                        }), Object(v.jsx)("p", {
                            children: "Buy/Sell Plotting."
                        }), Object(v.jsx)("p", {
                            children: Object(v.jsx)("img", {
                                src: "/images/premium/buysell.png",
                                height: 400,
                                width: 179
                            })
                        }), Object(v.jsxs)("p", {
                            children: ["Trade some", " ", Object(v.jsxs)("a", {
                                rel: "noreferrer",
                                target: "_blank",
                                href: "${pancakeUrl}/#/swap?outputCurrency=0xb27adaffb9fea1801459a1a81b17218288c097cc",
                                children: [Object(v.jsx)("img", {
                                    style: {
                                        borderRadius: 999,
                                        padding: 3
                                    },
                                    className: "border shadow shadow-sm",
                                    src: "/images/logo/poocoin512.png",
                                    height: 30
                                }), " ", "POOCOIN"]
                            }), " ", "to demo it on the POOCOIN chart."]
                        }), Object(v.jsx)("p", {
                            children: "Unlock Premium tier 2 to unlock it for all tokens (see the Premium page for details)."
                        }), Object(v.jsx)("p", {
                            children: "It will also work on the tracked wallet while using the Track Wallet feature."
                        })]
                    })
                })]
            })
        }
        var En = n(84)
          , Rn = n(420)
          , Un = n(423)
          , Hn = new Re.HttpLink({
            uri: m.graphqlUrl,
            credentials: !1
        })
          , Vn = new Un.a
          , qn = Object(Rn.a)((function(e, t) {
            var n = t.headers;
            return {
                headers: Object(ee.a)({}, n)
            }
        }
        ))
          , zn = Object(Re.from)([Vn, qn, Hn])
          , Gn = new Re.ApolloClient({
            cache: new Re.InMemoryCache,
            link: zn,
            defaultOptions: {
                query: {
                    fetchPolicy: "network-only"
                },
                watchQuery: {
                    fetchPolicy: "network-only"
                }
            }
        });
        function Kn(e) {
            var t = e.children
              , n = S()
              , a = parseInt("56");
            return Object(v.jsx)(Re.ApolloProvider, {
                client: Gn,
                children: Object(v.jsx)(F, {
                    children: Object(v.jsx)(k.b, {
                        chainId: a,
                        connectors: {
                            walletconnect: {
                                rpcUrl: n
                            },
                            bsc: En
                        },
                        children: Object(v.jsx)(U, {
                            children: Object(v.jsx)(De, {
                                children: t
                            })
                        })
                    })
                })
            })
        }
        o.a.render(Object(v.jsx)(Kn, {
            children: Object(v.jsx)(Dn, {})
        }), document.getElementById("root"))
    },
    93: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[],"name":"INIT_CODE_PAIR_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
    }
}, [[876, 2, 3]]]);
