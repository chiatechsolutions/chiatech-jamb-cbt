// questions/accounting.js
window.QUESTION_BANK = window.QUESTION_BANK || {};

window.QUESTION_BANK["Accounting"] = {
  test1: [
    {
      id: 1, topic: "Introduction to Accounting",
      question: "The process of identifying, measuring, and communicating economic information to permit informed judgments is:",
      options: { A: "Bookkeeping", B: "Accounting", C: "Auditing", D: "Budgeting" },
      correct: "B",
      explanation: "ACCOUNTING is the broader process of reporting and analyzing data, while BOOKKEEPING is specifically the recording of transactions."
    },
    {
      id: 2, topic: "Accounting Concepts",
      question: "The concept which assumes that a business will continue to operate for the foreseeable future is the:",
      options: { A: "Entity concept", B: "Accrual concept", C: "Going concern concept", D: "Periodicity concept" },
      correct: "C",
      explanation: "GOING CONCERN assumes the business has no intention of liquidating or ceasing operations in the near future."
    },
    {
      id: 3, topic: "Double Entry System",
      question: "A credit entry in the Cash Account indicates:",
      options: { A: "An increase in cash", B: "A decrease in cash", C: "A mistake in the ledger", D: "An increase in capital" },
      correct: "B",
      explanation: "Cash is an ASSET. According to double-entry rules, Assets increase on the Debit side and decrease on the Credit side."
    },
    {
      id: 4, topic: "Books of Original Entry",
      question: "Which of the following is used to record the purchase of a motor van on credit?",
      options: { A: "Purchases Journal", B: "Cash Book", C: "General Journal", D: "Sales Journal" },
      correct: "C",
      explanation: "The PURCHASES JOURNAL is only for goods intended for resale. Fixed assets (like a van) bought on credit are recorded in the GENERAL JOURNAL."
    },
    {
      id: 5, topic: "Bank Reconciliation",
      question: "An unpresented cheque is a cheque that has been:",
      options: { A: "Rejected by the bank", B: "Recorded in the cash book but not yet presented to the bank", C: "Received but not yet recorded in the cash book", D: "Written but lost in transit" },
      correct: "B",
      explanation: "UNPRESENTED CHEQUES are issued by the business but have not yet reached the bank for payment."
    },
    {
      id: 6, topic: "Trial Balance",
      question: "Which of these errors will NOT be revealed by a Trial Balance?",
      options: { A: "Error of partial omission", B: "Error of transposition in one account", C: "Error of original entry", D: "Casting error in the ledger" },
      correct: "C",
      explanation: "ERROR OF ORIGINAL ENTRY occurs when the wrong amount is recorded in BOTH accounts; since debits still equal credits, the Trial Balance will still balance."
    },
    {
      id: 7, topic: "Capital and Revenue Expenditure",
      question: "The cost of installing a new machine is a:",
      options: { A: "Revenue expenditure", B: "Capital expenditure", C: "Deferred expenditure", D: "Operating expense" },
      correct: "B",
      explanation: "CAPITAL EXPENDITURE includes the purchase price plus all costs incurred to get a fixed asset ready for use (installation, carriage, etc.)."
    },
    {
      id: 8, topic: "Depreciation",
      question: "Which method of depreciation provides a uniform charge over the useful life of an asset?",
      options: { A: "Reducing balance method", B: "Straight-line method", C: "Sum of years' digits", D: "Revaluation method" },
      correct: "B",
      explanation: "STRAIGHT-LINE method divides the (Cost - Residual Value) by the number of years, resulting in an equal annual charge."
    },
    {
      id: 9, topic: "Final Accounts",
      question: "In the Trading Account, 'Gross Profit' is calculated as:",
      options: { A: "Sales minus Purchases", B: "Sales minus Cost of Goods Sold", C: "Net Profit plus Expenses", D: "Opening Stock plus Purchases" },
      correct: "B",
      explanation: "GROSS PROFIT = Net Sales - Cost of Goods Sold. COGS is calculated as Opening Stock + Purchases - Closing Stock."
    },
    {
      id: 10, topic: "Partnership Accounts",
      question: "In the absence of a partnership deed, profits and losses are shared:",
      options: { A: "In the ratio of capital contributed", B: "Equally", C: "Based on years of experience", D: "As decided by the senior partner" },
      correct: "B",
      explanation: "According to the Partnership Act, if no agreement exists, profits and losses must be shared EQUALLY among partners."
    },
    {
      id: 11, topic: "Company Accounts",
      question: "The part of the authorized capital which has been offered to the public for subscription is:",
      options: { A: "Called-up capital", B: "Issued capital", C: "Paid-up capital", D: "Reserve capital" },
      correct: "B",
      explanation: "ISSUED CAPITAL is the portion of Authorized/Nominal capital actually sent out for the public to buy."
    },
    {
      id: 12, topic: "Control Accounts",
      question: "The Sales Ledger Control Account is also known as the:",
      options: { A: "Total Creditors Account", B: "Total Debtors Account", C: "Nominal Ledger", D: "Private Ledger" },
      correct: "B",
      explanation: "SALES LEDGER CONTROL monitors individual debtors' accounts to ensure the total balances match the general ledger."
    },
    {
      id: 13, topic: "Interpretation of Accounts",
      question: "The 'Current Ratio' is a measure of a firm's:",
      options: { A: "Profitability", B: "Liquidity", C: "Efficiency", D: "Gearing" },
      correct: "B",
      explanation: "LIQUIDITY ratios (Current and Acid Test) measure a firm's ability to meet its short-term obligations."
    },
    {
      id: 14, topic: "Non-Profit Organizations",
      question: "In a non-profit making organization, the excess of income over expenditure is called:",
      options: { A: "Net Profit", B: "Surplus", C: "Deficit", D: "Accumulated Fund" },
      correct: "B",
      explanation: "Non-profits use 'Surplus' instead of 'Profit' and 'Deficit' instead of 'Loss'."
    },
    {
      id: 15, topic: "Accounting Equation",
      question: "If Assets = ₦50,000 and Liabilities = ₦15,000, what is the Capital?",
      options: { A: "₦65,000", B: "₦35,000", C: "₦50,000", D: "₦15,000" },
      correct: "B",
      explanation: "The equation is: Capital = Assets - Liabilities. $50,000 - 15,000 = 35,000$."
    },
    {
      id: 16, topic: "Incomplete Records",
      question: "Under the single entry system, profit is determined by comparing:",
      options: { A: "Sales and Purchases", B: "Opening and Closing Capital", C: "Assets and Liabilities", D: "Cash in hand and Bank balance" },
      correct: "B",
      explanation: "Profit = (Closing Capital + Drawings) - (Opening Capital + Additional Capital)."
    },
    {
      id: 17, topic: "Manufacturing Accounts",
      question: "Which of the following is a direct cost in a manufacturing firm?",
      options: { A: "Factory Rent", B: "Raw Materials", C: "Depreciation of Machinery", D: "Factory Manager's Salary" },
      correct: "B",
      explanation: "DIRECT COSTS (Prime Costs) are those directly traceable to the product, such as raw materials and direct labor."
    },
    {
      id: 18, topic: "Accounting Concepts",
      question: "The convention that requires a business to use the same accounting methods from one period to another is:",
      options: { A: "Objectivity", B: "Consistency", C: "Prudence", D: "Materiality" },
      correct: "B",
      explanation: "CONSISTENCY ensures that financial statements are comparable over different time periods."
    },
    {
      id: 19, topic: "Public Sector Accounting",
      question: "The document that contains the estimated revenue and expenditure of a government for a year is the:",
      options: { A: "Gazette", B: "Budget", C: "Voucher", D: "Warrant" },
      correct: "B",
      explanation: "A BUDGET is the formal financial plan of the government for the upcoming fiscal year."
    },
    {
      id: 20, topic: "Regulatory Framework",
      question: "In Nigeria, the body responsible for developing and issuing accounting standards is:",
      options: { A: "ICAN", B: "FRCN", C: "ANAN", D: "CBN" },
      correct: "B",
      explanation: "The FINANCIAL REPORTING COUNCIL OF NIGERIA (FRCN) replaced the Nigerian Accounting Standards Board (NASB)."
    },
    {
      id: 21, topic: "Departmental Accounts",
      question: "The basis for allocating rent in departmental accounts is usually:",
      options: { A: "Sales volume", B: "Number of employees", C: "Floor area occupied", D: "Value of stock" },
      correct: "C",
      explanation: "Expenses related to the building, like rent and rates, are best allocated based on the SQUARE FOOTAGE (floor area) of each department."
    },
    {
      id: 22, topic: "Ethics in Accounting",
      question: "A professional accountant should not disclose client information without permission. This is the principle of:",
      options: { A: "Integrity", B: "Objectivity", C: "Confidentiality", D: "Professional Behavior" },
      correct: "C",
      explanation: "CONFIDENTIALITY is a core ethical pillar requiring accountants to protect sensitive data."
    },
    {
      id: 23, topic: "Double Entry",
      question: "The process of transferring entries from the journals to the ledger is called:",
      options: { A: "Journalizing", B: "Posting", C: "Balancing", D: "Summarizing" },
      correct: "B",
      explanation: "POSTING is the act of moving transaction data from the book of original entry to the specific ledger accounts."
    },
    {
      id: 24, topic: "Cash Book",
      question: "A 'Contra Entry' occurs in a two-column cash book when:",
      options: { A: "Cash is paid to a creditor", B: "Cash is deposited into the bank", C: "A cheque is received from a debtor", D: "A discount is allowed" },
      correct: "B",
      explanation: "CONTRA entries involve both Cash and Bank accounts (e.g., depositing cash or withdrawing cash for office use)."
    },
    {
      id: 25, topic: "Stock Valuation",
      question: "Which stock valuation method assumes that the latest goods received are the first to be sold?",
      options: { A: "FIFO", B: "LIFO", C: "AVCO", D: "Standard Cost" },
      correct: "B",
      explanation: "LIFO (Last-In, First-Out) assumes the most recent inventory is sold first. FIFO (First-In, First-Out) assumes the oldest stock is sold first."
    },
    {
      id: 26, topic: "Petty Cash",
      question: "The amount given to a petty cashier at the start of a period is the:",
      options: { A: "Imprest", B: "Float", C: "Reimbursement", D: "Advance" },
      correct: "B",
      explanation: "The FLOAT or IMPREST AMOUNT is the fixed sum provided to handle small office expenditures."
    },
    {
      id: 27, topic: "Adjustments",
      question: "An amount owed by the business for electricity used but not yet paid for at the year-end is an:",
      options: { A: "Prepayment", B: "Accrual", C: "Asset", D: "Income" },
      correct: "B",
      explanation: "ACCRUALS (Accrued Expenses) are expenses incurred but not yet paid. They are treated as Current Liabilities."
    },
    {
      id: 28, topic: "Accounting Ratios",
      question: "The formula for 'Stock Turnover Ratio' is:",
      options: { A: "Average Stock / Sales", B: "Cost of Goods Sold / Average Stock", C: "Purchases / Closing Stock", D: "Sales / Closing Stock" },
      correct: "B",
      explanation: "This ratio measures how many times a company has sold and replaced its inventory during a specific period."
    },
    {
      id: 29, topic: "Errors",
      question: "Recording a purchase of ₦500 as ₦50 in both the Purchases and Creditor's accounts is an:",
      options: { A: "Error of commission", B: "Error of principle", C: "Error of original entry", D: "Error of omission" },
      correct: "C",
      explanation: "Error of ORIGINAL ENTRY occurs when an incorrect figure is used from the start but recorded consistently in both accounts."
    },
    {
      id: 30, topic: "Balance Sheet",
      question: "Which of the following is a 'Fictitious Asset'?",
      options: { A: "Goodwill", B: "Preliminary Expenses", C: "Stock", D: "Debtors" },
      correct: "B",
      explanation: "FICTITIOUS ASSETS (like preliminary expenses or discount on issue of shares) have no real value and are written off over time."
    },
    {
      id: 31, topic: "Partnership Accounts",
      question: "Interest on partners' drawings is credited to the:",
      options: { A: "Partners' Capital Account", B: "Appropriation Account", C: "Profit and Loss Account", D: "Drawings Account" },
      correct: "B",
      explanation: "Interest on drawings is an income to the firm and is credited to the Profit and Loss APPROPRIATION Account."
    },
    {
      id: 32, topic: "Company Accounts",
      question: "The owners of a limited liability company are the:",
      options: { A: "Directors", B: "Debenture holders", C: "Shareholders", D: "Managers" },
      correct: "C",
      explanation: "SHAREHOLDERS own the company, while Directors are appointed to manage it."
    },
    {
      id: 33, topic: "Introduction to Accounting",
      question: "The 'Golden Rule' for real accounts is:",
      options: { A: "Debit the receiver, credit the giver", B: "Debit what comes in, credit what goes out", C: "Debit all expenses, credit all incomes", D: "Debit the asset, credit the liability" },
      correct: "B",
      explanation: "Real accounts relate to assets. Rule: Debit what comes in, credit what goes out."
    },
    {
      id: 34, topic: "Final Accounts",
      question: "Which of these is found in the Profit and Loss Account but not in the Trading Account?",
      options: { A: "Carriage Inwards", B: "Carriage Outwards", C: "Returns Inwards", D: "Wages for production" },
      correct: "B",
      explanation: "CARRIAGE OUTWARDS (delivery to customers) is a selling expense (P&L). Carriage Inwards is a cost of purchase (Trading)."
    },
    {
      id: 35, topic: "Interpretation of Accounts",
      question: "Working Capital is defined as:",
      options: { A: "Total Assets - Total Liabilities", B: "Current Assets - Current Liabilities", C: "Fixed Assets + Current Assets", D: "Capital + Net Profit" },
      correct: "B",
      explanation: "WORKING CAPITAL is the liquid funds used for day-to-day operations. $WC = CA - CL$."
    },
    {
      id: 36, topic: "Accounting Systems",
      question: "In computerised accounting, the primary storage for transaction data is a:",
      options: { A: "Spreadsheet", B: "Database", C: "Paper ledger", D: "Hard drive" },
      correct: "B",
      explanation: "Modern accounting software uses a DATABASE to store and retrieve financial records efficiently."
    },
    {
      id: 37, topic: "Consignment Accounts",
      question: "The party who sends goods to an agent to be sold on his behalf is the:",
      options: { A: "Consignee", B: "Consignor", C: "Bailee", D: "Principal" },
      correct: "B",
      explanation: "The CONSIGNOR is the owner/sender. The CONSIGNEE is the agent/receiver."
    },
    {
      id: 38, topic: "Vat/Taxation",
      question: "VAT stands for:",
      options: { A: "Variable Asset Tax", B: "Value Added Tax", C: "Volume Account Tax", D: "Value Added Transfer" },
      correct: "B",
      explanation: "VALUE ADDED TAX is a consumption tax placed on a product whenever value is added at a stage of production/distribution."
    },
    {
      id: 39, topic: "Double Entry",
      question: "Every transaction must affect at least two accounts. This is the:",
      options: { A: "Consistency principle", B: "Dual aspect concept", C: "Matching concept", D: "Entity concept" },
      correct: "B",
      explanation: "The DUAL ASPECT concept is the foundation of the double-entry system (Debit = Credit)."
    },
    {
      id: 40, topic: "Auditing",
      question: "An audit carried out by employees of the organization is an:",
      options: { A: "External audit", B: "Internal audit", C: "Statutory audit", D: "Final audit" },
      correct: "B",
      explanation: "INTERNAL AUDIT is an appraisal activity within an organization as a service to the entity."
    }
  ]
};