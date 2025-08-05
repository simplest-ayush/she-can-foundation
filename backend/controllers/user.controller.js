// import { User } from "../models/user.model.js"

// const registerUser = async (req, res) => {

//     try {
//         const { name, referralCode } = req.body

//         if ([name, referralCode].some((field) =>
//             field?.trim() === "")) {
//             throw new Error(401, "All fields are required!")
//         }

//         const existedUser = await User.findOne({
//             $or: [{ name }, { referralCode }]
//         })
//         if (existedUser) {
//             throw new Error(409, "User with name or email already exist")
//         }
//         const user = await User.create({
//             name,
//             referralCode,
//         })
//         const createdUser = await User.findById(user._id)

//         if (!createdUser) {
//             throw new Error(500, "Something went wrong while registering the user")
//         }

//         return res.status(201).json(createdUser);
//     } catch (error) {
//         console.error("Error registering user:", error);
//         return res.status(500).json({ message: "Something went wrong while registering the user" });
//     }
// }

// export {registerUser}

// import { User } from "../models/user.model.js";

// const registerUser = async (req, res) => {
//     try {
//         const { name, referralCode } = req.body;

//         if ([name, referralCode].some((field) => !field || field.trim() === "")) {
//             return res.status(400).json({ message: "All fields are required!" });
//         }

//         const existedUser = await User.findOne({
//             $or: [{ name }, { referralCode }]
//         });
//         if (existedUser) {
//             return res.status(409).json({ message: "User with name or referral code already exists" });
//         }

//         const user = await User.create({
//             name,
//             referralCode
//         });

//         if (!user) {
//             return res.status(500).json({ message: "Something went wrong while registering the user" });
//         }

//         return res.status(201).json(user);
//     } catch (error) {
//         console.error("Error registering user:", error);
//         return res.status(500).json({ message: "Something went wrong while registering the user" });
//     }
// };

// export { registerUser };
import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { name, referralCode } = req.body;

    if ([name, referralCode].some(field => !field || field.trim() === "")) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const existedUser = await User.findOne({
      $or: [{ name }, { referralCode }]
    });

    if (existedUser) {
      return res.status(409).json({ message: "User with name or referral code already exists" });
    }

    const user = await User.create({
      name,
      referralCode
    });

    if (!user) {
      return res.status(500).json({ message: "Something went wrong while registering the user" });
    }

    return res.status(201).json(user);

  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Something went wrong while registering the user" });
  }
};

export { registerUser };
