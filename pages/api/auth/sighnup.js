// import {connectToDatabase} from '../../../lib/db';
// import {hashedPassword} from '../../../lib/auth';

// async function handler(req, res) {
//   if (req.method === 'POST') {
//     const data = req.body;
//     const {email, password} = data;
//     if (
//       !email ||
//       !email.includes('@') ||
//       !password ||
//       password.trim().length < 7
//     ) {
//       res.status(422).json({message: 'Invalid input'});
//       return;
//     }
//     const client = await connectToDatabase();
//     const db = client.db();
//     const hashedPassword = hashedPassword(password);

//     const result = await db.collection('users').insertOne({
//       email: email,
//       password: hashedPassword,
//     });

//     res.status(201).json({message: 'Created acc'});
//   }
// }

// export default handler;
