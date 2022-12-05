var express = require("express");
var router = express.Router();
const Data = require("../models/Datas");
router.get("/getdatas",async function(req, res) {
    Data.find({},function(err, datas) {
		if (err) {
			console.log(err);
		} else {
			res.json(datas);
            console.log(datas);
		}
        console.log("entered data find");
	})
});
router.get("/add", function(req, res){
	var data = new Data(req.body);
	data.save()
		.then(data => {
			res.status(200).json({'data': 'data added successfully'});
		})
		.catch(err => {
			res.status(400).send('adding new data failed');
		});
}) 
module.exports = router
// const getData = (req,res)=>
// { 
//     Data.find() 
//     .then(result=>{ 
//     console.log("result: ",result) 
//     res.send(result); 
//     console.log("First log");
//     }) 
//     .catch(err=>{ 
//     console.log(err); 
//     console.log("Second log");
// })

// }

// module.exports = router.get("/getdatas",getData);

// const User = require("../models/Users");
// router.get("/profile", function (req, res) {
//     User.find(function (err, users) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(users);
//         }
//     })
// });
// module.exports = router;

