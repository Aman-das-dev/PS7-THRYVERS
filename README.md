# PS7-THRYVERS

# Green Lie Detector

A web application that analyzes sustainability claims to determine if they are "structurally honest" or "green lies" that unfairly shift responsibility without providing the necessary power to act.

## 🌍 Overview

The Green Lie Detector evaluates environmental and sustainability statements by assessing whether the target group (youth, consumers, governments, etc.) actually has the structural power to implement the requested changes. It examines five key criteria:

- **Decision Authority**: Can the target group make this decision?
- **Access to Alternatives**: Are sustainable options available and convenient?
- **Affordability**: Can the target group afford to take action?
- **Infrastructure Availability**: Does the necessary infrastructure exist?
- **Enforcement Power**: Can the target group enforce systemic change?

## ✨ Features

- **Statement Analysis**: Analyze predefined sustainability claims or input custom statements
- **Interactive Evaluation**: Step-by-step assessment of structural conditions
- **Verdict System**: Determines if statements are structurally honest, partially valid, or structurally dishonest
- **Actionable Suggestions**: Provides specific recommendations to make dishonest statements honest
- **Pattern Insights**: View analysis patterns across different types of green messaging
- **Youth-Focused**: Built for youth leadership in sustainability discourse

## 🛠 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/green-lie-detector.git
   cd green-lie-detector
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Analyzing a Statement

1. **Choose Input Method**:
   - **Predefined Patterns**: Select from curated examples of common green messaging
   - **Custom Statement**: Paste your own sustainability claim to analyze

2. **Provide Context**:
   - Statement source (Corporate, Government, Campaign, etc.)
   - Target group (Youth, Consumers, General Public, etc.)

3. **Evaluate Conditions**:
   - Review each of the 5 structural criteria
   - Assess availability for the target group
   - Get real-time feedback on your evaluations

4. **View Results**:
   - See the structural verdict
   - Understand missing conditions
   - Get actionable suggestions to make the statement honest

### Understanding Verdicts

- **Structurally Honest**: All necessary conditions are available to the target group
- **Partially Valid**: Some conditions are missing but the statement isn't fully dishonest
- **Structurally Dishonest**: Multiple key conditions are missing, creating false accountability

## 🔍 How It Works

The evaluation engine uses a structural power analysis framework:

1. **Target Group Assessment**: Determines typical power levels for different groups (governments have high power, youth have low power)

2. **Condition Evaluation**: Checks each criterion based on:
   - The target group's structural position
   - Keywords in the statement text
   - Source type of the claim

3. **Dynamic Verdict Calculation**: Combines missing conditions to determine overall structural honesty

4. **Actionable Suggestions**: Generates specific recommendations to address missing conditions

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── analyze/           # Analysis pages
│   ├── insights/          # Pattern insights
│   ├── result/            # Results display
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # Radix UI components
│   └── theme-provider.tsx
├── lib/                  # Core logic and data
│   ├── evaluation-engine.ts  # Main analysis logic
│   ├── types.ts          # TypeScript definitions
│   ├── green-lie-facts.json # Predefined statements
│   └── utils.ts          # Utility functions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🤝 Contributing

We welcome contributions to improve the Green Lie Detector! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Areas for Contribution

- Adding more predefined statements to analyze
- Improving the evaluation logic
- Enhancing the user interface
- Adding new criteria or evaluation methods
- Localization and accessibility improvements

## 📊 Data Sources

The application includes a curated dataset of sustainability statements (`lib/green-lie-facts.json`) covering various sources and target groups. This data helps identify patterns in green messaging and provides examples for analysis.

## 🎯 Mission

Built for youth leadership in sustainability discourse, this tool exposes structural dishonesty in environmental messaging. By analyzing who has the power to create change versus who is being asked to change, it promotes more effective and equitable sustainability communication.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by structural analysis frameworks in social justice and environmental policy
- Built with modern web technologies for accessibility and performance
- Designed to empower youth voices in sustainability conversations

---

**Ready to detect green lies?** Start analyzing sustainability claims at [your-deployment-url.com](https://your-deployment-url.com)
