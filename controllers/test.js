const Test =require('../models/test');

const getIndex=(req,res)=>{
    Test.find({},(er,test)=>{console.log(test)})
}
const postIndex = (req, res) => {
    const test=new Test({
        user: "testowy"
    })
    test.save();
    res.send(test);
}

module.export={
    getIndex: getIndex,
    postIndex:postIndex
}
