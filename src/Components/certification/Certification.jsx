import React, { useState } from "react";
import "./Certification.css";

const AWSCertifications = {
  "Cloud Practitioner": {
    name: "AWS Certified Cloud Practitioner",
    level: "Foundational",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    examPattern:
      "Multiple choice, multiple answer questions. 90 minutes, 65 questions.",
    cost: "$100 USD",
    validity: "3 years",
  },
  "AI Practitioner": {
    name: "AWS Certified AI Practitioner",
    level: "Foundational",
    link: "https://aws.amazon.com/certification/certified-ai-practitioner/",
    examPattern:
      "Multiple choice, multiple answer questions. 90 minutes, 65 questions.",
    cost: "$100 USD",
    validity: "3 years",
  },
  "Solutions Architect Associate": {
    name: "AWS Certified Solutions Architect - Associate",
    level: "Associate",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    examPattern:
      "Multiple choice, multiple answer questions. 130 minutes, 65 questions.",
    cost: "$150 USD",
    validity: "3 years",
  },
  "Developer Associate": {
    name: "AWS Certified Developer - Associate",
    level: "Associate",
    link: "https://aws.amazon.com/certification/certified-developer-associate/",
    examPattern:
      "Multiple choice, multiple answer questions. 130 minutes, 65 questions.",
    cost: "$150 USD",
    validity: "3 years",
  },
  "SysOps Administrator Associate": {
    name: "AWS Certified SysOps Administrator - Associate",
    level: "Associate",
    link: "https://aws.amazon.com/certification/certified-sysops-admin-associate/",
    examPattern:
      "Multiple choice, multiple answer questions. 130 minutes, 65 questions.",
    cost: "$150 USD",
    validity: "3 years",
  },
  "Solutions Architect Professional": {
    name: "AWS Certified Solutions Architect - Professional",
    level: "Professional",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
    examPattern:
      "Multiple choice, multiple answer questions. 180 minutes, 75 questions.",
    cost: "$300 USD",
    validity: "3 years",
  },
  "DevOps Engineer Professional": {
    name: "AWS Certified DevOps Engineer - Professional",
    level: "Professional",
    link: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    examPattern:
      "Multiple choice, multiple answer questions. 180 minutes, 75 questions.",
    cost: "$300 USD",
    validity: "3 years",
  },
  "Data Analytics Specialty": {
    name: "AWS Certified Data Analytics - Specialty",
    level: "Specialty",
    link: "https://aws.amazon.com/certification/certified-data-analytics-specialty/",
    examPattern:
      "Multiple choice, multiple answer questions. 180 minutes, 65 questions.",
    cost: "$300 USD",
    validity: "3 years",
  },
  "Machine Learning Specialty": {
    name: "AWS Certified Machine Learning - Specialty",
    level: "Specialty",
    link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
    examPattern:
      "Multiple choice, multiple answer questions. 180 minutes, 65 questions.",
    cost: "$300 USD",
    validity: "3 years",
  },
  "Security Specialty": {
    name: "AWS Certified Security - Specialty",
    level: "Specialty",
    link: "https://aws.amazon.com/certification/certified-security-specialty/",
    examPattern:
      "Multiple choice, multiple answer questions. 170 minutes, 65 questions.",
    cost: "$300 USD",
    validity: "3 years",
  },
  "Advanced Networking Specialty": {
    name: "AWS Certified Advanced Networking - Specialty",
    level: "Specialty",
    link: "https://aws.amazon.com/certification/certified-advanced-networking-specialty/",
    examPattern:
      "Multiple choice, multiple answer questions. 170 minutes, 65 questions.",
    cost: "$300 USD",
    validity: "3 years",
  },
  "Database Specialty": {
    name: "AWS Certified Database - Specialty",
    level: "Specialty",
    link: "https://aws.amazon.com/certification/certified-database-specialty/",
    examPattern:
      "Multiple choice, multiple answer questions. 180 minutes, 65 questions.",
    cost: "$300 USD",
    validity: "3 years",
  },
};

function Certification() {
  const [goal, setGoal] = useState("");
  const [expertiseLevel, setExpertiseLevel] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [recommendedCerts, setRecommendedCerts] = useState([]);

  const generateRecommendation = () => {
    let certs = [];
    const lowercaseGoal = goal.toLowerCase();

    if (expertiseLevel === "Beginner" || !expertiseLevel) {
      certs.push(AWSCertifications["Cloud Practitioner"]);
      certs.push(AWSCertifications["AI Practitioner"]);
    }

    if (
      lowercaseGoal.includes("architect") ||
      lowercaseGoal.includes("infrastructure")
    ) {
      certs.push(AWSCertifications["Solutions Architect Associate"]);
      if (expertiseLevel === "Advanced") {
        certs.push(AWSCertifications["Solutions Architect Professional"]);
      }
    }

    if (
      lowercaseGoal.includes("developer") ||
      lowercaseGoal.includes("software")
    ) {
      certs.push(AWSCertifications["Developer Associate"]);
    }

    if (
      lowercaseGoal.includes("operations") ||
      lowercaseGoal.includes("sysadmin")
    ) {
      certs.push(AWSCertifications["SysOps Administrator Associate"]);
    }

    if (lowercaseGoal.includes("devops")) {
      certs.push(AWSCertifications["DevOps Engineer Professional"]);
    }

    if (lowercaseGoal.includes("data") || lowercaseGoal.includes("analytics")) {
      certs.push(AWSCertifications["Data Analytics Specialty"]);
    }

    if (
      lowercaseGoal.includes("machine learning") ||
      lowercaseGoal.includes("ai")
    ) {
      certs.push(AWSCertifications["Machine Learning Specialty"]);
    }

    if (lowercaseGoal.includes("security")) {
      certs.push(AWSCertifications["Security Specialty"]);
    }

    if (lowercaseGoal.includes("network")) {
      certs.push(AWSCertifications["Advanced Networking Specialty"]);
    }

    if (lowercaseGoal.includes("database")) {
      certs.push(AWSCertifications["Database Specialty"]);
    }

    if (certs.length === 0) {
      certs.push(AWSCertifications["Solutions Architect Associate"]);
    }

    setRecommendedCerts(certs);

    const recommendationText = `Based on your goal to "${goal}" and your ${expertiseLevel.toLowerCase()} expertise level, I recommend the following AWS certification path:

${certs
  .map(
    (cert, index) => `${index + 1}. ${cert.name} (${cert.level})
   More info: ${cert.link}`
  )
  .join("\n\n")}

These certifications will help you develop skills in cloud architecture, deployment, and management aligned with your career goals.`;

    setRecommendation(recommendationText);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    let answer =
      "I'm sorry, I don't have specific information about that. Please check the official AWS documentation or contact AWS support for the most up-to-date and accurate information.";

    const lowercaseQuestion = question.toLowerCase();

    if (recommendedCerts.length > 0) {
      for (const cert of recommendedCerts) {
        if (
          lowercaseQuestion.includes(cert.name.toLowerCase()) ||
          lowercaseQuestion.includes(cert.level.toLowerCase())
        ) {
          if (
            lowercaseQuestion.includes("exam pattern") ||
            lowercaseQuestion.includes("exam structure")
          ) {
            answer = `The exam pattern for ${cert.name} is: ${cert.examPattern}`;
          } else if (lowercaseQuestion.includes("cost")) {
            answer = `The cost for the ${cert.name} exam is: ${cert.cost}`;
          } else if (lowercaseQuestion.includes("validity")) {
            answer = `The ${cert.name} certification is valid for: ${cert.validity}`;
          }
          break;
        }
      }
    }

    if (answer.startsWith("I'm sorry")) {
      // If no specific certification was found, provide a general answer
      if (
        lowercaseQuestion.includes("exam pattern") ||
        lowercaseQuestion.includes("exam structure")
      ) {
        answer =
          "AWS certification exams typically consist of multiple-choice and multiple-answer questions. The number of questions and time limit vary by certification level. Foundational exams usually have 65 questions and last 90 minutes, Associate-level exams have 65 questions and last 130 minutes, while Professional and Specialty exams can have up to 75 questions and last up to 180 minutes.";
      } else if (lowercaseQuestion.includes("cost")) {
        answer =
          "The cost of AWS certification exams varies by level. Foundational exams typically cost $100 USD, Associate-level exams cost $150 USD, and Professional and Specialty exams cost $300 USD. Prices may vary by region.";
      } else if (lowercaseQuestion.includes("validity")) {
        answer =
          "AWS certifications are typically valid for 3 years from the date of certification.";
      }
    }

    setAnswers([...answers, { question, answer }]);
    setQuestion("");
  };

  return (
    <div className="app-container">
      <h1 className="heading-title">AI-Powered AWS Certification Recommender</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          generateRecommendation();
        }}
      >
        <div>
          <label htmlFor="goal">What are your AWS career goals?</label>
          <textarea
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="e.g., I want to be a cloud architect specializing in machine learning"
            required
          />
        </div>
        <div>
          <label htmlFor="expertiseLevel">
            What's your level of expertise with AWS?
          </label>
          <select
            id="expertiseLevel"
            value={expertiseLevel}
            onChange={(e) => setExpertiseLevel(e.target.value)}
            required
          >
            <option value="">Select expertise level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <button type="submit" className="cert-button">Get AI Recommendation</button>
      </form>

      {recommendation && (
        <div className="recommendation-section">
          <h2 className="second-heading">AI Recommendation</h2>
          <pre>{recommendation}</pre>

          <div className="question-section">
            <h3 className="third-heading">Ask a question about AWS certifications</h3>
            <form onSubmit={handleQuestionSubmit}>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g., What's the exam pattern for Solutions Architect Associate?"
                required
              />
              <button type="submit" className="cert-button">Ask</button>
            </form>
          </div>
        </div>
      )}

      {answers.map((item, index) => (
        <div key={index} className="answer-section py-3">
          <p>
            <strong>Q: {item.question}</strong>
          </p>
          <p>A: {item.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default Certification;
