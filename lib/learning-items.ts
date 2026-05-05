"use client"

export type LearningStatus = "completed" | "in-progress" | "planned"
export type LearningType = "degree" | "course" | "online-course"

export type LearningItem = {
  slug: string
  title: string
  institution: string
  date: string
  type: LearningType
  logo: string
  tags?: string[]
  status: LearningStatus
  level?: "undergrad" | "postgrad"
  audited?: boolean
  certUrl?: string
}

export const learningItems: LearningItem[] = [
  { slug:"qbus2810", title:"QBUS2810: Statistical Modelling for Business", institution:"University of Sydney", date:"2025 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Statistical Modeling","Forecasting","Python","GLM","Model Selection","Diagnostics","Business Data"], status:"in-progress", level:"undergrad" },
  { slug:"data2902", title:"DATA2902: Data Analytics (Advanced)", institution:"University of Sydney", date:"2025 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["R","Statistical ML","Quarto","RMarkdown","Feature Engineering","Model Evaluation","Reproducibility"], status:"in-progress", level:"undergrad" },
  { slug:"qbus2310", title:"QBUS2310: Management Science", institution:"University of Sydney", date:"2025 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["LP/IP/NLP","Optimisation","Excel Solver","Python","Sensitivity","Constraints","Decision Support"], status:"in-progress", level:"undergrad" },
  { slug:"qbus3330", title:"QBUS3330: Methods of Decision Analysis", institution:"University of Sydney", date:"2025 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Decision Trees","Sensitivity","Risk Assessment","Expected Utility","Value of Info","Uncertainty","Managerial Decisions"], status:"in-progress", level:"undergrad" },
  { slug:"comp2123", title:"COMP2123: Data Structures & Algorithms", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Algorithm","Sorting","Graph","Tree","Complexity","Data Structures","DP"], status:"completed", level:"undergrad" },
  { slug:"comp3308", title:"COMP3308: Introduction to Artificial Intelligence", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Search","ML","Game AI","Planning","Reasoning","Python","Heuristics"], status:"completed", level:"undergrad" },
  { slug:"data2901", title:"DATA2901: Big Data and Data Diversity (Advanced)", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Python","SQL","Hadoop","Linux","Jupyter", "Big Data"], status:"completed", level:"undergrad" },
  { slug:"stat2011", title:"STAT2011: Probability and Estimation Theory", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Probability","Estimation","Asymptotics","MLE","Confidence Intervals","Hypothesis Tests","CLT"], status:"completed", level:"undergrad" },
  { slug:"qbus1040", title:"QBUS1040: Foundations of Business Analytics", institution:"University of Sydney", date:"2025 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Linear Algebra","Regression","Optimisation","Python","EDA","Business KPIs","Forecasting"], status:"completed", level:"undergrad" },
  { slug:"data1002", title:"DATA1002: Informatics: Data and Computation", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Python","Pipelines","ML Basics","Visualization","Data Wrangling","Git","APIs"], status:"completed", level:"undergrad" },
  { slug:"data1001", title:"DATA1001: Foundations of Data Science", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["R","Statistics","Hypothesis Testing","Visualization","Tidyverse","EDA","Reporting"], status:"completed", level:"undergrad" },
  { slug:"math1061", title:"MATH1061: Mathematics 1A", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Calculus","Linear Algebra","Proof","Derivatives","Integrals","Vectors","Series"], status:"completed", level:"undergrad" },
  { slug:"math1062", title:"MATH1062: Mathematics 1B", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Multivariable","Differential Eqns","R","Gradients","Optimization","Linear Systems","Taylor"], status:"completed", level:"undergrad" },
  { slug:"info1110", title:"INFO1110: Introduction to Programming", institution:"University of Sydney", date:"2024 S2", type:"degree", logo:"/learning/usydlogo.png", tags:["Python","OOP","Shell Scripting","Testing","Debugging","Data Structures","CLI"], status:"completed", level:"undergrad" },
  { slug:"sjtu-ma413", title:"MA413 / STAT3925: Time Series (Advanced)", institution:"Shanghai Jiao Tong University (Summer)", date:"2025", type:"degree", logo:"/learning/sjtulogo.png", tags:["ARIMA","Stationarity","Forecasting","R","Python","ACF/PACF","Model Diagnostics"], status:"completed", level:"undergrad" },
  { slug:"sjtu-ma4704", title:"MA4704 / STAT3023: Stochastic Process", institution:"Shanghai Jiao Tong University (Summer)", date:"2025", type:"degree", logo:"/learning/sjtulogo.png", tags:["Poisson","CTMC/DTMC","Queueing","Markov Chains","Martingales","Birth–Death","Simulation"], status:"completed", level:"undergrad" },
  { slug:"google-advanced-data-analytics", title:"Google Advanced Data Analytics Professional Certificate", institution:"Google x Coursera", date:"2024", type:"online-course", logo:"/learning/googlelogo.png", tags:["Python","Regression","Visualization","EDA","Statistics","Dashboards","Storytelling"], status:"completed" },
  { slug:"genai-intensive-2025q1", title:"Gen AI Intensive Course 2025Q1", institution:"Google × Kaggle", date:"2025", type:"online-course", logo:"/learning/googlelogo.png", tags:["Prompting","Embeddings/RAG","Agents","MLOps","LLMs","Evaluation","Deployment"], status:"completed" },
  { slug:"google-genai-skill-badges-2025", title:"Google GenAI Program — Skill Badges", institution:"Google", date:"2025.10 — 2025.12", type:"online-course", logo:"/learning/googlelogo.png", tags:["GenAI","Vertex AI","GKE","Data Engineering","LLMs","MLOps"], status:"completed" },
  { slug:"oracle-cloud-data-science-professional-2025", title:"Oracle Cloud Infrastructure 2025 Certified Data Science Professional", institution:"Oracle", date:"2025.10", type:"online-course", logo:"/learning/oraclelogo.png", tags:["Oracle Cloud","Data Science","Machine Learning","MLOps","Deployment","Monitoring","Model Registry"], status:"completed" },
  { slug:"isys2120", title: "ISYS2120: Data and Information Management", institution: "University of Sydney", date: "2025 S2", type: "course", logo: "/learning/usydlogo.png", tags: ["Database Design","SQL","Normalization","Transaction Mgmt","OLAP","Indexing","ER Modeling"], status: "in-progress",level: "undergrad", audited:true },
  { slug:"comp5338", title:"COMP5338: Advanced Data Models", institution:"University of Sydney", date:"2025 S2", type:"course", logo:"/learning/usydlogo.png", tags:["SQL","MongoDB","Neo4j","Distributed Systems","Query Tuning","Indexing","Data Modeling"], status:"completed", level:"postgrad", audited:true },
  { slug:"comp5318", title:"COMP5318: Machine Learning and Data Mining", institution:"University of Sydney", date:"2025 S2", type:"course", logo:"/learning/usydlogo.png", tags:["Deep Learning","Data Mining","Python","Clustering","Classification","Feature Eng","Evaluation"], status:"completed", level:"postgrad", audited:true },
  { slug:"comp5328", title:"COMP5328: Advanced Machine Learning", institution:"University of Sydney", date:"2025 S2", type:"course", logo:"/learning/usydlogo.png", tags:["Deep Learning","Model Evaluation","PyTorch","TensorFlow","Regularization","Generalization","Optimization"], status:"completed", level:"postgrad", audited:true },
  { slug:"qbus2820", title:"QBUS2820: Predictive Analytics", institution:"University of Sydney", date:"2026 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Forecasting","Time Series","Python","Classification","Model Evaluation","Feature Engineering","CV"], status:"in-progress", level:"undergrad", audited:true },
  { slug:"qbus3310", title:"QBUS3310: Advanced Management Science", institution:"University of Sydney", date:"2026 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Optimisation","Management Science","Decision Analysis","Stochastic Models","Simulation","Integer Programming","Applications"], status:"in-progress", level:"undergrad" },
  { slug:"data3404", title:"DATA3404: Scalable Data Management", institution:"University of Sydney", date:"2026 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Big Data","Database Systems","Distributed Data","Query Optimisation","Indexing","Spark","Performance"], status:"in-progress", level:"undergrad" },
  { slug:"data3888", title:"DATA3888: Data Science Capstone", institution:"University of Sydney", date:"2026 S1", type:"degree", logo:"/learning/usydlogo.png", tags:["Data Science","Capstone","Public Data Product","Teamwork","Communication","Stakeholders","Delivery"], status:"in-progress", level:"undergrad" },
]

