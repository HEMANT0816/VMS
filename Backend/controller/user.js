const User=require("../model/user")


const signUp=async (req,res)=>{
     try {
    const { name, email, password, role } = req.body;

    // Basic validation
    if (!name || !email || !password || !role) return res.status(400).json({ message: 'All fields required' });

    // Check if user exists
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = generateOTP();
    OTPStore.set(email, { otp, userData: { name, email, password: hashedPassword, role }, createdAt: Date.now() });

    // Mock send OTP
    console.log(`🔐 OTP for ${email} is ${otp}`);

    res.status(200).json({ message: 'OTP sent to your email (mocked)' });

  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
}


module.exports={signUp}