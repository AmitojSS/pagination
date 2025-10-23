import User from "../models/myModel.js"

export const seedUsers = async(req,res) =>
{
    try
    {
       const users = [];
       for(let i= 1; i <= 60; i++)
       {
         users.push({
            id : `myuser${i}`,
            email: `myuser${i}@gmail.com`,
            age: 10 + (i % 10)
         });
       };
       await User.insertMany(users);
       res.status(201).json({message: "Records created" });
    }
    catch(error)
    {
       res.status(500).json({message: "error in fetching the records"});
    }
};

export const getPaginatedUsers = async (req,res) =>
{
    try 
    {
     const page = parseInt(req.query.page) || 1;
     const limit = parseInt(req.query.limit) || 10;

     const skip_n = (page - 1) * limit;

     const users = await User.find().skip(skip_n).limit(limit);

     const total = await User.countDocuments();

     res.status(200).json({
        totalUsers: total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        users,
     });
    }
    catch(error)
    {
        res.status(500).json({message: error.msg});
    }    
};



