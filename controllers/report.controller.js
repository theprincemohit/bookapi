const mongoose = require('mongoose');
const Users = require('../models/users.model');
const Books = require('../models/books.model');

exports.totalDebitAmount_mmmmm = async function (req, res) {
    const reqData = JSON.parse(JSON.stringify(req.body));
    console.log("pp", reqData)
    let userData = { _id: reqData.userId }

    if (!reqData.userId) {
        let user = new Users(
            {
                name: reqData.name,
                contact_no: reqData.contact_no
            }
        );

        userData = await user.save();
    }

    let book = new Books(
        {
            amount: reqData.amount,
            user_id: userData._id,
            percentage: reqData.percentage,
            start_date: reqData.start_date,
            end_date: reqData.end_date,
            created_on: new Date(),
        }
    );
    const bookData = await book.save();
    res.send(bookData);
};

exports.totalDebitAmount = async function (req, res) {

    try {
        const abcx = await Books.aggregate([
            
            [
                {
                  $group: {
                    _id: "_id",
                    "total" : {
                        $sum : "$amount"
                    }
                  }
                }
              ],
        ]);
       // console.log("aa", abcx);
        res.send(abcx)
    } catch (error) {
        res.status(400).send(error)
    }


};

exports.monthlypaylist = async function (req, res) {
    const userId =  req.params.userId
    console.log("iserid0", userId)
    try {
        const abcx = await Users.aggregate([
            { $match: { _id: mongoose.Types.ObjectId(userId) } },
            {
                $lookup: {
                    from: 'books',
                    localField: '_id',
                    foreignField: 'user_id',
                    as: 'Books'
                }
            }
        ]);
       
        res.send(abcx[0])
    } catch (error) {
        res.send("error")
    }


};

exports.getbookByBookId = async function (req, res) {
    const bookId =  req.params.bookId
    console.log("bookId", bookId)
    try {
        const abcx = await Books.aggregate([
            { $match: { _id: mongoose.Types.ObjectId(bookId) } },
            {
                $lookup: {
                    from: 'payments',
                    localField: '_id',
                    foreignField: 'book_id',
                    as: 'Payments'
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'user_id',
                    foreignField: '_id',
                    as: 'User'
                }
            }
        ]);
       
        res.send(abcx[0])
    } catch (error) {
        res.send("error")
    }


};

exports.paymentsByBookId = async function (req, res) {
    res.status(200).send({data : 'abc'})
    // try {
    //     const abcx = await Books.aggregate([
    //       //  { $match: { name: "john user" } },
    //         {
    //             $lookup: {
    //                 from: 'payments',
    //                 localField: '_id',
    //                 foreignField: 'book_id',
    //                 as: 'Payments'
    //             }
    //         }
    //     ]);
    //     console.log("aa", abcx);
    //     res.send(abcx);
    // } catch (error) {
    //     res.send(error);
    // }
};