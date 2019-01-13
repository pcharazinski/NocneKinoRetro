const Test =require('../models/test');

const getIndex=(req,res)=>{
        Test.find({},(er,test)=>{console.log(test)})
        // res.send(test);
        res.end()
}

const postIndex = (req, res) => {
    const test=new Test({
        user: "restman"
    })
    let new1=null;
    test.save().then((s)=>{new1=s;
        console.log(new1);
        });

    res.send('test');
}

module.exports={
    getIndex: getIndex,
    postIndex:postIndex
}
