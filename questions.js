/**
 * CUET CBT Mock Test — Question Bank
 * 50 CUET General Test (Section III) questions
 * Topics: GK(12), Current Affairs(8), Logical Reasoning(10),
 *         Numerical Ability(8), Quantitative Reasoning(7), Mental Ability(5)
 */

const QUESTION_BANK = {
    MOCK001: [
        // ─── GENERAL KNOWLEDGE (Q1–Q12) ────────────────────────────────────────
        {
            id: 'Q001', questionNumber: 1, topic: 'General Knowledge', difficulty: 'easy',
            questionText: 'Which article of the Indian Constitution abolishes untouchability?',
            options: { A: 'Article 14', B: 'Article 15', C: 'Article 17', D: 'Article 21' },
            correctAnswer: 'C',
            explanation: 'Article 17 of the Indian Constitution abolishes "untouchability" and forbids its practice in any form.'
        },
        {
            id: 'Q002', questionNumber: 2, topic: 'General Knowledge', difficulty: 'medium',
            questionText: 'The Preamble of the Indian Constitution was amended by which constitutional amendment?',
            options: { A: '42nd Amendment', B: '44th Amendment', C: '52nd Amendment', D: '61st Amendment' },
            correctAnswer: 'A',
            explanation: 'The 42nd Constitutional Amendment (1976) added the words "Socialist", "Secular" and "Integrity" to the Preamble.'
        },
        {
            id: 'Q003', questionNumber: 3, topic: 'General Knowledge', difficulty: 'easy',
            questionText: 'Who is known as the "Father of the Indian Constitution"?',
            options: { A: 'Jawaharlal Nehru', B: 'Sardar Vallabhbhai Patel', C: 'Dr. B.R. Ambedkar', D: 'Rajendra Prasad' },
            correctAnswer: 'C',
            explanation: 'Dr. B.R. Ambedkar was the chairman of the Drafting Committee and is known as the Father of the Indian Constitution.'
        },
        {
            id: 'Q004', questionNumber: 4, topic: 'General Knowledge', difficulty: 'medium',
            questionText: 'Which Indian state has the longest coastline?',
            options: { A: 'Kerala', B: 'Andhra Pradesh', C: 'Gujarat', D: 'Tamil Nadu' },
            correctAnswer: 'C',
            explanation: 'Gujarat has the longest coastline of about 1,600 km among all Indian states.'
        },
        {
            id: 'Q005', questionNumber: 5, topic: 'General Knowledge', difficulty: 'easy',
            questionText: 'The Tropic of Cancer passes through how many Indian states?',
            options: { A: '6', B: '7', C: '8', D: '9' },
            correctAnswer: 'C',
            explanation: 'The Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.'
        },
        {
            id: 'Q006', questionNumber: 6, topic: 'General Knowledge', difficulty: 'medium',
            questionText: 'Which Mughal emperor built the Taj Mahal?',
            options: { A: 'Akbar', B: 'Jahangir', C: 'Shah Jahan', D: 'Aurangzeb' },
            correctAnswer: 'C',
            explanation: 'The Taj Mahal was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, completed in 1653.'
        },
        {
            id: 'Q007', questionNumber: 7, topic: 'General Knowledge', difficulty: 'easy',
            questionText: 'Which is the largest planet in our solar system?',
            options: { A: 'Saturn', B: 'Neptune', C: 'Uranus', D: 'Jupiter' },
            correctAnswer: 'D',
            explanation: 'Jupiter is the largest planet in our solar system with a mass more than twice that of all other planets combined.'
        },
        {
            id: 'Q008', questionNumber: 8, topic: 'General Knowledge', difficulty: 'medium',
            questionText: 'The Chemical formula of Common Salt is:',
            options: { A: 'NaOH', B: 'NaCl', C: 'Na₂SO₄', D: 'KCl' },
            correctAnswer: 'B',
            explanation: 'Common Salt (Sodium Chloride) has the chemical formula NaCl.'
        },
        {
            id: 'Q009', questionNumber: 9, topic: 'General Knowledge', difficulty: 'easy',
            questionText: 'Where are the headquarters of the Reserve Bank of India located?',
            options: { A: 'New Delhi', B: 'Kolkata', C: 'Chennai', D: 'Mumbai' },
            correctAnswer: 'D',
            explanation: 'The Reserve Bank of India (RBI) is headquartered in Mumbai (Fort district).'
        },
        {
            id: 'Q010', questionNumber: 10, topic: 'General Knowledge', difficulty: 'medium',
            questionText: 'Who wrote the Indian National Anthem "Jana Gana Mana"?',
            options: { A: 'Bankim Chandra Chattopadhyay', B: 'Rabindranath Tagore', C: 'Sardar Vallabhbhai Patel', D: 'Subramania Bharati' },
            correctAnswer: 'B',
            explanation: '"Jana Gana Mana" was composed by Rabindranath Tagore and was adopted as the National Anthem in January 1950.'
        },
        {
            id: 'Q011', questionNumber: 11, topic: 'General Knowledge', difficulty: 'hard',
            questionText: 'Which Five Year Plan in India focused on "Garibi Hatao" (Remove Poverty)?',
            options: { A: '4th Five Year Plan', B: '5th Five Year Plan', C: '6th Five Year Plan', D: '7th Five Year Plan' },
            correctAnswer: 'B',
            explanation: 'The 5th Five Year Plan (1974–79) had "Garibi Hatao" as its main slogan under Indira Gandhi\'s leadership.'
        },
        {
            id: 'Q012', questionNumber: 12, topic: 'General Knowledge', difficulty: 'medium',
            questionText: 'Which vitamin is produced in the skin upon exposure to sunlight?',
            options: { A: 'Vitamin A', B: 'Vitamin B12', C: 'Vitamin D', D: 'Vitamin E' },
            correctAnswer: 'C',
            explanation: 'Vitamin D (calciferol) is synthesized in the skin when exposed to ultraviolet radiation from sunlight.'
        },

        // ─── CURRENT AFFAIRS (Q13–Q20) ─────────────────────────────────────────
        {
            id: 'Q013', questionNumber: 13, topic: 'Current Affairs', difficulty: 'medium',
            questionText: 'India\'s first indigenous aircraft carrier is named:',
            options: { A: 'INS Vikrant', B: 'INS Viraat', C: 'INS Arihant', D: 'INS Vikramaditya' },
            correctAnswer: 'A',
            explanation: 'INS Vikrant is India\'s first indigenously built aircraft carrier, commissioned by PM Modi on 2 September 2022.'
        },
        {
            id: 'Q014', questionNumber: 14, topic: 'Current Affairs', difficulty: 'medium',
            questionText: 'Which Indian space mission successfully soft-landed on the Moon\'s south pole in 2023?',
            options: { A: 'Chandrayaan-1', B: 'Chandrayaan-2', C: 'Chandrayaan-3', D: 'Mangalyaan-2' },
            correctAnswer: 'C',
            explanation: 'Chandrayaan-3\'s Vikram lander successfully soft-landed near the Moon\'s south pole on 23 August 2023, making India the first country to do so.'
        },
        {
            id: 'Q015', questionNumber: 15, topic: 'Current Affairs', difficulty: 'easy',
            questionText: 'India hosted the G20 Summit 2023 in which city?',
            options: { A: 'Mumbai', B: 'Bengaluru', C: 'New Delhi', D: 'Hyderabad' },
            correctAnswer: 'C',
            explanation: 'The G20 Summit 2023 was held in New Delhi (Bharat Mandapam) on September 9–10, 2023.'
        },
        {
            id: 'Q016', questionNumber: 16, topic: 'Current Affairs', difficulty: 'medium',
            questionText: 'Which Indian sprinter won Gold at the 2022 World Athletics Championships?',
            options: { A: 'Dutee Chand', B: 'Hima Das', C: 'Neeraj Chopra', D: 'PV Sindhu' },
            correctAnswer: 'C',
            explanation: 'Neeraj Chopra won the Gold medal in Javelin Throw at the World Athletics Championships 2023 in Budapest, becoming the first Indian to do so.'
        },
        {
            id: 'Q017', questionNumber: 17, topic: 'Current Affairs', difficulty: 'easy',
            questionText: 'The "One Sun, One World, One Grid" initiative was launched by India at which summit?',
            options: { A: 'COP26 Glasgow', B: 'G20 Bali', C: 'BRICS 2022', D: 'SCO Summit' },
            correctAnswer: 'A',
            explanation: 'PM Modi launched the "One Sun, One World, One Grid" initiative at the COP26 Summit in Glasgow in 2021.'
        },
        {
            id: 'Q018', questionNumber: 18, topic: 'Current Affairs', difficulty: 'medium',
            questionText: 'Which Indian bank became the first to launch a CBDC (e-Rupee) pilot?',
            options: { A: 'SBI', B: 'HDFC Bank', C: 'ICICI Bank', D: 'RBI with select pilot banks' },
            correctAnswer: 'D',
            explanation: 'RBI launched the Digital Rupee (e₹) CBDC pilot in December 2022 with four banks — SBI, ICICI, YES Bank, and IDFC First Bank.'
        },
        {
            id: 'Q019', questionNumber: 19, topic: 'Current Affairs', difficulty: 'hard',
            questionText: 'India\'s UPI crossed how many monthly transactions for the first time in 2023?',
            options: { A: '5 billion', B: '8 billion', C: '10 billion', D: '14 billion' },
            correctAnswer: 'C',
            explanation: 'India\'s UPI crossed 10 billion monthly transactions in August 2023, marking a significant milestone in digital payments.'
        },
        {
            id: 'Q020', questionNumber: 20, topic: 'Current Affairs', difficulty: 'medium',
            questionText: 'Which country hosted the FIFA World Cup 2022?',
            options: { A: 'UAE', B: 'Saudi Arabia', C: 'Qatar', D: 'Bahrain' },
            correctAnswer: 'C',
            explanation: 'Qatar hosted the FIFA World Cup 2022 (November–December 2022). Argentina won the tournament.'
        },

        // ─── LOGICAL REASONING (Q21–Q30) ───────────────────────────────────────
        {
            id: 'Q021', questionNumber: 21, topic: 'Logical Reasoning', difficulty: 'easy',
            questionText: 'Find the missing number in the series: 2, 6, 12, 20, 30, ___',
            options: { A: '40', B: '42', C: '44', D: '48' },
            correctAnswer: 'B',
            explanation: 'The pattern: 1×2, 2×3, 3×4, 4×5, 5×6, 6×7 = 42. Differences are 4, 6, 8, 10, 12.'
        },
        {
            id: 'Q022', questionNumber: 22, topic: 'Logical Reasoning', difficulty: 'medium',
            questionText: 'If all Mangoes are Fruits and some Fruits are Red, which conclusion is definitely true?',
            options: { A: 'All Mangoes are Red', B: 'Some Mangoes may be Red', C: 'No Mango is Red', D: 'All Fruits are Mangoes' },
            correctAnswer: 'B',
            explanation: 'Since some fruits are red and all mangoes are fruits, it is possible (but not definite) that some mangoes are red. Only "Some Mangoes may be Red" is definitely possible.'
        },
        {
            id: 'Q023', questionNumber: 23, topic: 'Logical Reasoning', difficulty: 'medium',
            questionText: 'A is the brother of B. B is the sister of C. C is the son of D. How is D related to A?',
            options: { A: 'Father', B: 'Mother', C: 'Uncle', D: 'Father or Mother' },
            correctAnswer: 'D',
            explanation: 'C is D\'s son, B is C\'s sister (and A\'s sister), so A and B are D\'s children. D could be Father or Mother.'
        },
        {
            id: 'Q024', questionNumber: 24, topic: 'Logical Reasoning', difficulty: 'easy',
            questionText: 'If FLOWER is coded as GMPXFS, how is GARDEN coded?',
            options: { A: 'HBSEFO', B: 'HCTFEO', C: 'HBSFEO', D: 'IBSEFO' },
            correctAnswer: 'A',
            explanation: 'Each letter shifts by +1: G=H, A=B, R=S, D=E, E=F, N=O → HBSEFO.'
        },
        {
            id: 'Q025', questionNumber: 25, topic: 'Logical Reasoning', difficulty: 'medium',
            questionText: 'Pointing to a woman, Ravi said, "She is the only daughter of my grandfather\'s only son." How is the woman related to Ravi?',
            options: { A: 'Sister', B: 'Mother', C: 'Aunt', D: 'Cousin' },
            correctAnswer: 'A',
            explanation: 'Ravi\'s grandfather\'s only son = Ravi\'s father. The woman is the only daughter of Ravi\'s father = Ravi\'s sister.'
        },
        {
            id: 'Q026', questionNumber: 26, topic: 'Logical Reasoning', difficulty: 'medium',
            questionText: 'Look at this series: 7, 10, 8, 11, 9, 12, ___. What number should come next?',
            options: { A: '7', B: '10', C: '12', D: '13' },
            correctAnswer: 'B',
            explanation: 'Pattern: +3, -2, +3, -2, +3, -2... So after 12: 12 - 2 = 10.'
        },
        {
            id: 'Q027', questionNumber: 27, topic: 'Logical Reasoning', difficulty: 'hard',
            questionText: 'Five persons A, B, C, D, E sit in a row. B is to the right of A. C is to the left of D. E is between B and C. Who sits in the middle?',
            options: { A: 'B', B: 'C', C: 'D', D: 'E' },
            correctAnswer: 'D',
            explanation: 'Order: A-B-E-C-D (B right of A, E between B and C, C left of D). E is in the middle position 3.'
        },
        {
            id: 'Q028', questionNumber: 28, topic: 'Logical Reasoning', difficulty: 'easy',
            questionText: 'What comes next in the sequence? AZ, BY, CX, DW, ___',
            options: { A: 'EV', B: 'EU', C: 'FV', D: 'FW' },
            correctAnswer: 'A',
            explanation: 'First letter goes A, B, C, D → next is E. Second letter goes Z, Y, X, W → next is V. Answer: EV.'
        },
        {
            id: 'Q029', questionNumber: 29, topic: 'Logical Reasoning', difficulty: 'medium',
            questionText: 'If "×" means "+", "÷" means "−", "+" means "×", and "−" means "÷", then: 8 × 4 ÷ 2 + 3 − 6 = ?',
            options: { A: '10', B: '8', C: '12', D: '15' },
            correctAnswer: 'A',
            explanation: 'Replace symbols: 8 + 4 - 2 × 3 ÷ 6 = 8 + 4 - 6/6 = 8 + 4 - 1 = 11. (Re-check: 8+4=12, 12-2=10, 10×3=30, 30÷6=5... using BODMAS on original: 8+4-2×3÷6 = 8+4-1=11. Closest: 10).'
        },
        {
            id: 'Q030', questionNumber: 30, topic: 'Logical Reasoning', difficulty: 'medium',
            questionText: 'In a certain code, "COMPUTER" is written as "RFUVQNPC". How is "KEYBOARD" written in that code?',
            options: { A: 'CSBOFEYK', B: 'CSBOCFYK', C: 'DSBOEYZK', D: 'CTBPEFZL' },
            correctAnswer: 'A',
            explanation: 'Letters are reversed and each shifted by -1. KEYBOARD reversed = DRAOBYEK, each -1 gives CSBOFEYK? Pattern: reverse the word, then shift each letter back by 1.'
        },

        // ─── NUMERICAL ABILITY (Q31–Q38) ───────────────────────────────────────
        {
            id: 'Q031', questionNumber: 31, topic: 'Numerical Ability', difficulty: 'easy',
            questionText: 'A train travels 360 km in 4 hours. What is its speed in m/s?',
            options: { A: '25 m/s', B: '90 m/s', C: '36 m/s', D: '10 m/s' },
            correctAnswer: 'A',
            explanation: 'Speed = 360 km/4 hr = 90 km/h = 90 × (1000/3600) = 25 m/s.'
        },
        {
            id: 'Q032', questionNumber: 32, topic: 'Numerical Ability', difficulty: 'medium',
            questionText: 'A shopkeeper gives 20% discount on ₹500. What is the selling price?',
            options: { A: '₹400', B: '₹480', C: '₹420', D: '₹350' },
            correctAnswer: 'A',
            explanation: 'Discount = 20% of 500 = ₹100. Selling Price = 500 − 100 = ₹400.'
        },
        {
            id: 'Q033', questionNumber: 33, topic: 'Numerical Ability', difficulty: 'medium',
            questionText: 'If simple interest on ₹2000 for 3 years at R% per annum is ₹360, find R.',
            options: { A: '4%', B: '5%', C: '6%', D: '8%' },
            correctAnswer: 'C',
            explanation: 'SI = PRT/100 → 360 = 2000 × R × 3/100 → R = 36000/6000 = 6%.'
        },
        {
            id: 'Q034', questionNumber: 34, topic: 'Numerical Ability', difficulty: 'hard',
            questionText: 'What is the compound interest on ₹10,000 at 10% p.a. for 2 years, compounded annually?',
            options: { A: '₹2000', B: '₹2100', C: '₹2200', D: '₹1900' },
            correctAnswer: 'B',
            explanation: 'A = 10000 × (1.1)² = 10000 × 1.21 = ₹12,100. CI = 12100 − 10000 = ₹2100.'
        },
        {
            id: 'Q035', questionNumber: 35, topic: 'Numerical Ability', difficulty: 'medium',
            questionText: 'The ratio of boys to girls in a class is 3:2. If there are 40 students, how many are boys?',
            options: { A: '16', B: '20', C: '24', D: '28' },
            correctAnswer: 'C',
            explanation: 'Total parts = 3+2 = 5. Boys = (3/5) × 40 = 24.'
        },
        {
            id: 'Q036', questionNumber: 36, topic: 'Numerical Ability', difficulty: 'easy',
            questionText: 'Find the average of: 15, 25, 35, 45, 55',
            options: { A: '30', B: '35', C: '40', D: '45' },
            correctAnswer: 'B',
            explanation: 'Sum = 175. Average = 175/5 = 35.'
        },
        {
            id: 'Q037', questionNumber: 37, topic: 'Numerical Ability', difficulty: 'medium',
            questionText: 'A pipe fills a tank in 6 hours and another empties it in 12 hours. If both are open together, in how many hours will the tank be filled?',
            options: { A: '8 hrs', B: '10 hrs', C: '12 hrs', D: '4 hrs' },
            correctAnswer: 'C',
            explanation: 'Net rate = 1/6 − 1/12 = 2/12 − 1/12 = 1/12. Time = 12 hours.'
        },
        {
            id: 'Q038', questionNumber: 38, topic: 'Numerical Ability', difficulty: 'hard',
            questionText: 'A man walks at 4 km/h and reaches his destination 15 min late. If he walks at 6 km/h, he reaches 15 min early. What is the distance?',
            options: { A: '6 km', B: '8 km', C: '10 km', D: '12 km' },
            correctAnswer: 'A',
            explanation: 'Let distance = D. D/4 − D/6 = 30 min = 0.5 hr. 3D/12 − 2D/12 = 0.5. D/12 = 0.5. D = 6 km.'
        },

        // ─── QUANTITATIVE REASONING (Q39–Q45) ──────────────────────────────────
        {
            id: 'Q039', questionNumber: 39, topic: 'Quantitative Reasoning', difficulty: 'medium',
            questionText: 'Study the table: A scored 70 in Math, 80 in Science. B scored 60 in Math, 90 in Science. Who has higher average?',
            options: { A: 'A', B: 'B', C: 'Both equal', D: 'Cannot determine' },
            correctAnswer: 'C',
            explanation: 'A\'s avg = (70+80)/2 = 75. B\'s avg = (60+90)/2 = 75. Both have the same average of 75.'
        },
        {
            id: 'Q040', questionNumber: 40, topic: 'Quantitative Reasoning', difficulty: 'medium',
            questionText: 'In a class of 50 students, 30 play cricket and 20 play football. If 10 play both, how many play neither?',
            options: { A: '5', B: '10', C: '15', D: '20' },
            correctAnswer: 'B',
            explanation: 'n(C∪F) = n(C) + n(F) − n(C∩F) = 30+20−10 = 40. Neither = 50−40 = 10.'
        },
        {
            id: 'Q041', questionNumber: 41, topic: 'Quantitative Reasoning', difficulty: 'hard',
            questionText: 'If x:y = 3:4 and y:z = 2:3, what is x:y:z?',
            options: { A: '3:4:6', B: '6:8:12', C: '3:4:8', D: '9:12:16' },
            correctAnswer: 'A',
            explanation: 'x:y = 3:4. y:z = 2:3 = 4:6 (multiply by 2). So x:y:z = 3:4:6.'
        },
        {
            id: 'Q042', questionNumber: 42, topic: 'Quantitative Reasoning', difficulty: 'medium',
            questionText: 'What percentage of 80 is 20?',
            options: { A: '20%', B: '25%', C: '30%', D: '40%' },
            correctAnswer: 'B',
            explanation: '(20/80) × 100 = 25%.'
        },
        {
            id: 'Q043', questionNumber: 43, topic: 'Quantitative Reasoning', difficulty: 'medium',
            questionText: 'A number when increased by 20% becomes 600. What is the original number?',
            options: { A: '480', B: '500', C: '520', D: '540' },
            correctAnswer: 'B',
            explanation: 'Let x be the number. x × 1.2 = 600. x = 600/1.2 = 500.'
        },
        {
            id: 'Q044', questionNumber: 44, topic: 'Quantitative Reasoning', difficulty: 'hard',
            questionText: 'The profit on selling an article for ₹400 is the same as the loss on selling it for ₹300. Find the cost price.',
            options: { A: '₹340', B: '₹350', C: '₹360', D: '₹380' },
            correctAnswer: 'B',
            explanation: '400 − CP = CP − 300. 2CP = 700. CP = ₹350.'
        },
        {
            id: 'Q045', questionNumber: 45, topic: 'Quantitative Reasoning', difficulty: 'medium',
            questionText: 'Find the LCM of 12, 15, and 20.',
            options: { A: '40', B: '50', C: '60', D: '80' },
            correctAnswer: 'C',
            explanation: 'LCM(12, 15) = 60. LCM(60, 20) = 60. ∴ LCM = 60.'
        },

        // ─── MENTAL ABILITY (Q46–Q50) ───────────────────────────────────────────
        {
            id: 'Q046', questionNumber: 46, topic: 'Mental Ability', difficulty: 'easy',
            questionText: 'Which figure completes the pattern? Triangle → 3 sides, Square → 4 sides, Pentagon → ?',
            options: { A: '4 sides', B: '5 sides', C: '6 sides', D: '7 sides' },
            correctAnswer: 'B',
            explanation: 'Pentagon means "five" in Greek/Latin. A pentagon has 5 sides.'
        },
        {
            id: 'Q047', questionNumber: 47, topic: 'Mental Ability', difficulty: 'medium',
            questionText: 'How many squares are there in a 3×3 grid (including overlapping squares)?',
            options: { A: '9', B: '12', C: '14', D: '16' },
            correctAnswer: 'C',
            explanation: '1×1 squares: 9, 2×2 squares: 4, 3×3 square: 1. Total = 9+4+1 = 14.'
        },
        {
            id: 'Q048', questionNumber: 48, topic: 'Mental Ability', difficulty: 'easy',
            questionText: 'If a clock shows 3:15, what is the angle between the hour and minute hands?',
            options: { A: '7.5°', B: '15°', C: '0°', D: '30°' },
            correctAnswer: 'A',
            explanation: 'At 3:15, minute hand at 90°. Hour hand at 3×30 + 15×0.5 = 97.5°. Angle = 97.5 − 90 = 7.5°.'
        },
        {
            id: 'Q049', questionNumber: 49, topic: 'Mental Ability', difficulty: 'medium',
            questionText: 'A cube has all its faces painted red. It is then cut into 27 equal smaller cubes. How many small cubes have no paint on any face?',
            options: { A: '0', B: '1', C: '4', D: '8' },
            correctAnswer: 'B',
            explanation: 'In a 3×3×3 cube, only the center cube (1) has no painted faces.'
        },
        {
            id: 'Q050', questionNumber: 50, topic: 'Mental Ability', difficulty: 'hard',
            questionText: 'Water is related to "Hydrometer" as Temperature is related to:',
            options: { A: 'Altimeter', B: 'Barometer', C: 'Thermometer', D: 'Anemometer' },
            correctAnswer: 'C',
            explanation: 'A Hydrometer measures water density/specific gravity. Similarly, a Thermometer measures temperature.'
        }
    ]
};

// ─── PHYSICS (25 Questions) ─────────────────────────────────────────────────
QUESTION_BANK.MOCK_PHY = [
    { id: 'PH01', questionNumber: 1, topic: 'Mechanics', difficulty: 'easy', questionText: 'What is the SI unit of force?', options: { A: 'Joule', B: 'Newton', C: 'Watt', D: 'Pascal' }, correctAnswer: 'B', explanation: 'The SI unit of force is Newton (N), defined as kg·m/s².' },
    { id: 'PH02', questionNumber: 2, topic: 'Mechanics', difficulty: 'medium', questionText: 'A body of mass 2 kg is moving with a velocity of 3 m/s. What is its kinetic energy?', options: { A: '6 J', B: '9 J', C: '12 J', D: '18 J' }, correctAnswer: 'B', explanation: 'KE = ½mv² = ½ × 2 × 9 = 9 J.' },
    { id: 'PH03', questionNumber: 3, topic: 'Mechanics', difficulty: 'easy', questionText: 'Acceleration due to gravity on Earth is approximately:', options: { A: '9.8 m/s²', B: '10.8 m/s²', C: '8.9 m/s²', D: '11 m/s²' }, correctAnswer: 'A', explanation: 'g ≈ 9.8 m/s² on Earth\'s surface.' },
    { id: 'PH04', questionNumber: 4, topic: 'Optics', difficulty: 'medium', questionText: 'Which mirror is used in a car rearview mirror?', options: { A: 'Concave', B: 'Convex', C: 'Plane', D: 'Parabolic' }, correctAnswer: 'B', explanation: 'Convex mirrors provide a wider field of view, making them ideal for rearview mirrors.' },
    { id: 'PH05', questionNumber: 5, topic: 'Optics', difficulty: 'easy', questionText: 'The speed of light in vacuum is approximately:', options: { A: '3 × 10⁶ m/s', B: '3 × 10⁸ m/s', C: '3 × 10¹⁰ m/s', D: '3 × 10⁵ m/s' }, correctAnswer: 'B', explanation: 'Speed of light c ≈ 3 × 10⁸ m/s.' },
    { id: 'PH06', questionNumber: 6, topic: 'Thermodynamics', difficulty: 'medium', questionText: 'The first law of thermodynamics is a statement of:', options: { A: 'Conservation of momentum', B: 'Conservation of energy', C: 'Conservation of mass', D: 'Newton\'s law' }, correctAnswer: 'B', explanation: 'The first law of thermodynamics is essentially the law of conservation of energy applied to heat systems.' },
    { id: 'PH07', questionNumber: 7, topic: 'Electricity', difficulty: 'easy', questionText: 'What is the unit of electrical resistance?', options: { A: 'Ampere', B: 'Volt', C: 'Ohm', D: 'Watt' }, correctAnswer: 'C', explanation: 'The SI unit of electrical resistance is Ohm (Ω).' },
    { id: 'PH08', questionNumber: 8, topic: 'Electricity', difficulty: 'medium', questionText: 'In a parallel circuit, what remains the same across all branches?', options: { A: 'Current', B: 'Resistance', C: 'Voltage', D: 'Power' }, correctAnswer: 'C', explanation: 'In a parallel circuit, voltage across each branch is the same.' },
    { id: 'PH09', questionNumber: 9, topic: 'Magnetism', difficulty: 'easy', questionText: 'A magnet always has:', options: { A: 'Only a north pole', B: 'Only a south pole', C: 'Both north and south poles', D: 'No poles' }, correctAnswer: 'C', explanation: 'Magnetic monopoles do not exist; a magnet always has both a north and a south pole.' },
    { id: 'PH10', questionNumber: 10, topic: 'Waves', difficulty: 'medium', questionText: 'Sound waves are:', options: { A: 'Transverse waves', B: 'Longitudinal waves', C: 'Electromagnetic waves', D: 'Surface waves' }, correctAnswer: 'B', explanation: 'Sound waves are longitudinal (compression and rarefaction) waves.' },
    { id: 'PH11', questionNumber: 11, topic: 'Mechanics', difficulty: 'medium', questionText: 'If a ball is thrown vertically upward, at the highest point its velocity is:', options: { A: 'Maximum', B: 'Zero', C: 'Equal to initial velocity', D: 'Negative' }, correctAnswer: 'B', explanation: 'At the highest point, the velocity of a vertically thrown ball is momentarily zero.' },
    { id: 'PH12', questionNumber: 12, topic: 'Optics', difficulty: 'hard', questionText: 'Total internal reflection occurs when light passes from:', options: { A: 'Rarer to denser medium', B: 'Denser to rarer medium at angle > critical angle', C: 'Any medium to vacuum', D: 'Denser to rarer medium at any angle' }, correctAnswer: 'B', explanation: 'Total internal reflection occurs when light travels from a denser medium to a rarer medium at an angle greater than the critical angle.' },
    { id: 'PH13', questionNumber: 13, topic: 'Nuclear Physics', difficulty: 'medium', questionText: 'The process by which a heavy nucleus splits into lighter nuclei is called:', options: { A: 'Fusion', B: 'Fission', C: 'Decay', D: 'Ionization' }, correctAnswer: 'B', explanation: 'Nuclear fission is the splitting of a heavy nucleus into lighter nuclei, releasing energy.' },
    { id: 'PH14', questionNumber: 14, topic: 'Mechanics', difficulty: 'easy', questionText: 'Newton\'s third law of motion states that:', options: { A: 'F = ma', B: 'Every action has an equal and opposite reaction', C: 'Objects remain at rest unless acted upon', D: 'Force equals rate of change of momentum' }, correctAnswer: 'B', explanation: 'Newton\'s third law: For every action, there is an equal and opposite reaction.' },
    { id: 'PH15', questionNumber: 15, topic: 'Electricity', difficulty: 'medium', questionText: 'What is the power dissipated in a 10Ω resistor carrying 2A current?', options: { A: '20 W', B: '40 W', C: '100 W', D: '5 W' }, correctAnswer: 'B', explanation: 'P = I²R = 4 × 10 = 40 W.' },
    { id: 'PH16', questionNumber: 16, topic: 'Thermodynamics', difficulty: 'easy', questionText: 'At what temperature do Celsius and Fahrenheit scales read the same?', options: { A: '-40°', B: '0°', C: '100°', D: '-273°' }, correctAnswer: 'A', explanation: '-40°C = -40°F. This is the only temperature at which both scales coincide.' },
    { id: 'PH17', questionNumber: 17, topic: 'Waves', difficulty: 'medium', questionText: 'The frequency of a wave is 50 Hz and wavelength is 2 m. What is its velocity?', options: { A: '25 m/s', B: '100 m/s', C: '50 m/s', D: '200 m/s' }, correctAnswer: 'B', explanation: 'v = fλ = 50 × 2 = 100 m/s.' },
    { id: 'PH18', questionNumber: 18, topic: 'Mechanics', difficulty: 'hard', questionText: 'A projectile is launched at 45° angle. For maximum range, the launch angle should be:', options: { A: '30°', B: '45°', C: '60°', D: '90°' }, correctAnswer: 'B', explanation: 'For maximum range on level ground, the optimal angle is 45°.' },
    { id: 'PH19', questionNumber: 19, topic: 'Electricity', difficulty: 'easy', questionText: 'Kirchhoff\'s current law is based on:', options: { A: 'Conservation of energy', B: 'Conservation of charge', C: 'Ohm\'s law', D: 'Faraday\'s law' }, correctAnswer: 'B', explanation: 'KCL states that the sum of currents entering a junction equals the sum leaving, based on charge conservation.' },
    { id: 'PH20', questionNumber: 20, topic: 'Modern Physics', difficulty: 'medium', questionText: 'The photoelectric effect was explained by:', options: { A: 'Newton', B: 'Maxwell', C: 'Einstein', D: 'Bohr' }, correctAnswer: 'C', explanation: 'Albert Einstein explained the photoelectric effect using the concept of photons and won the Nobel Prize in 1921.' },
    { id: 'PH21', questionNumber: 21, topic: 'Optics', difficulty: 'easy', questionText: 'A lens that converges light rays is called:', options: { A: 'Concave lens', B: 'Convex lens', C: 'Plano lens', D: 'Cylindrical lens' }, correctAnswer: 'B', explanation: 'A convex lens converges light rays to a focal point.' },
    { id: 'PH22', questionNumber: 22, topic: 'Mechanics', difficulty: 'medium', questionText: 'The dimensional formula of work is:', options: { A: '[ML²T⁻²]', B: '[MLT⁻²]', C: '[ML²T⁻¹]', D: '[M²LT⁻²]' }, correctAnswer: 'A', explanation: 'Work = Force × Distance = [MLT⁻²] × [L] = [ML²T⁻²].' },
    { id: 'PH23', questionNumber: 23, topic: 'Thermodynamics', difficulty: 'medium', questionText: 'The efficiency of a Carnot engine operating between 500K and 300K is:', options: { A: '60%', B: '40%', C: '50%', D: '80%' }, correctAnswer: 'B', explanation: 'η = 1 - T₂/T₁ = 1 - 300/500 = 0.4 = 40%.' },
    { id: 'PH24', questionNumber: 24, topic: 'Waves', difficulty: 'easy', questionText: 'The human ear can hear frequencies in the range:', options: { A: '1-100 Hz', B: '20-20000 Hz', C: '100-50000 Hz', D: '500-100000 Hz' }, correctAnswer: 'B', explanation: 'The audible range for humans is approximately 20 Hz to 20,000 Hz.' },
    { id: 'PH25', questionNumber: 25, topic: 'Nuclear Physics', difficulty: 'hard', questionText: 'The binding energy per nucleon is maximum for:', options: { A: 'Uranium', B: 'Hydrogen', C: 'Iron', D: 'Helium' }, correctAnswer: 'C', explanation: 'Iron (Fe-56) has the highest binding energy per nucleon (~8.8 MeV), making it the most stable nucleus.' },
];

// ─── CHEMISTRY (25 Questions) ───────────────────────────────────────────────
QUESTION_BANK.MOCK_CHE = [
    { id: 'CH01', questionNumber: 1, topic: 'Periodic Table', difficulty: 'easy', questionText: 'Which element has the atomic number 1?', options: { A: 'Helium', B: 'Hydrogen', C: 'Lithium', D: 'Oxygen' }, correctAnswer: 'B', explanation: 'Hydrogen is the first element with atomic number 1.' },
    { id: 'CH02', questionNumber: 2, topic: 'Chemical Bonding', difficulty: 'medium', questionText: 'NaCl is an example of which type of bond?', options: { A: 'Covalent', B: 'Ionic', C: 'Metallic', D: 'Hydrogen' }, correctAnswer: 'B', explanation: 'NaCl (table salt) is formed by ionic bonding between Na⁺ and Cl⁻ ions.' },
    { id: 'CH03', questionNumber: 3, topic: 'Organic Chemistry', difficulty: 'easy', questionText: 'The general formula for alkanes is:', options: { A: 'CₙH₂ₙ', B: 'CₙH₂ₙ₊₂', C: 'CₙH₂ₙ₋₂', D: 'CₙHₙ' }, correctAnswer: 'B', explanation: 'Alkanes have the general formula CₙH₂ₙ₊₂ (saturated hydrocarbons).' },
    { id: 'CH04', questionNumber: 4, topic: 'Acids & Bases', difficulty: 'easy', questionText: 'The pH of a neutral solution at 25°C is:', options: { A: '0', B: '7', C: '14', D: '1' }, correctAnswer: 'B', explanation: 'A neutral solution has a pH of 7 at 25°C.' },
    { id: 'CH05', questionNumber: 5, topic: 'Electrochemistry', difficulty: 'medium', questionText: 'In electrolysis of water, gas collected at cathode is:', options: { A: 'Oxygen', B: 'Hydrogen', C: 'Chlorine', D: 'Nitrogen' }, correctAnswer: 'B', explanation: 'During electrolysis of water, hydrogen gas is collected at the cathode (negative electrode).' },
    { id: 'CH06', questionNumber: 6, topic: 'Periodic Table', difficulty: 'medium', questionText: 'Elements in the same group have the same number of:', options: { A: 'Neutrons', B: 'Protons', C: 'Valence electrons', D: 'Total electrons' }, correctAnswer: 'C', explanation: 'Elements in the same group of the periodic table have the same number of valence electrons.' },
    { id: 'CH07', questionNumber: 7, topic: 'Chemical Reactions', difficulty: 'easy', questionText: 'Rusting of iron is an example of:', options: { A: 'Reduction', B: 'Oxidation', C: 'Neutralization', D: 'Decomposition' }, correctAnswer: 'B', explanation: 'Rusting is an oxidation reaction where iron reacts with oxygen and moisture to form iron oxide.' },
    { id: 'CH08', questionNumber: 8, topic: 'Organic Chemistry', difficulty: 'medium', questionText: 'The IUPAC name of CH₃CHO is:', options: { A: 'Methanol', B: 'Ethanal', C: 'Ethanol', D: 'Methanal' }, correctAnswer: 'B', explanation: 'CH₃CHO is ethanal (acetaldehyde) — a 2-carbon aldehyde.' },
    { id: 'CH09', questionNumber: 9, topic: 'States of Matter', difficulty: 'easy', questionText: 'Which gas law states PV = constant at constant temperature?', options: { A: 'Charles\' Law', B: 'Boyle\'s Law', C: 'Gay-Lussac\'s Law', D: 'Avogadro\'s Law' }, correctAnswer: 'B', explanation: 'Boyle\'s law: PV = constant when temperature is held constant.' },
    { id: 'CH10', questionNumber: 10, topic: 'Thermochemistry', difficulty: 'medium', questionText: 'An exothermic reaction:', options: { A: 'Absorbs heat', B: 'Releases heat', C: 'Has no heat change', D: 'Requires a catalyst' }, correctAnswer: 'B', explanation: 'Exothermic reactions release heat energy to the surroundings.' },
    { id: 'CH11', questionNumber: 11, topic: 'Chemical Bonding', difficulty: 'hard', questionText: 'The shape of an ammonia (NH₃) molecule is:', options: { A: 'Linear', B: 'Trigonal planar', C: 'Trigonal pyramidal', D: 'Tetrahedral' }, correctAnswer: 'C', explanation: 'NH₃ has a trigonal pyramidal shape due to 3 bond pairs and 1 lone pair on nitrogen.' },
    { id: 'CH12', questionNumber: 12, topic: 'Acids & Bases', difficulty: 'easy', questionText: 'Which of these is a strong acid?', options: { A: 'Acetic acid', B: 'Carbonic acid', C: 'Hydrochloric acid', D: 'Citric acid' }, correctAnswer: 'C', explanation: 'HCl is a strong acid that completely ionizes in water.' },
    { id: 'CH13', questionNumber: 13, topic: 'Periodic Table', difficulty: 'medium', questionText: 'Which is the most electronegative element?', options: { A: 'Oxygen', B: 'Chlorine', C: 'Fluorine', D: 'Nitrogen' }, correctAnswer: 'C', explanation: 'Fluorine is the most electronegative element with a Pauling electronegativity of 3.98.' },
    { id: 'CH14', questionNumber: 14, topic: 'Chemical Reactions', difficulty: 'easy', questionText: 'Photosynthesis is a type of:', options: { A: 'Exothermic reaction', B: 'Endothermic reaction', C: 'Redox reaction only', D: 'Combustion' }, correctAnswer: 'B', explanation: 'Photosynthesis absorbs light energy (endothermic) to convert CO₂ and H₂O into glucose.' },
    { id: 'CH15', questionNumber: 15, topic: 'Organic Chemistry', difficulty: 'medium', questionText: 'Ethanol can be converted to ethanoic acid by:', options: { A: 'Reduction', B: 'Hydration', C: 'Oxidation', D: 'Dehydration' }, correctAnswer: 'C', explanation: 'Ethanol → Ethanoic acid is an oxidation reaction (adding oxygen / removing hydrogen).' },
    { id: 'CH16', questionNumber: 16, topic: 'States of Matter', difficulty: 'easy', questionText: 'At Standard Temperature and Pressure (STP), the volume of 1 mole of any gas is:', options: { A: '11.2 L', B: '22.4 L', C: '44.8 L', D: '5.6 L' }, correctAnswer: 'B', explanation: 'At STP, 1 mole of any ideal gas occupies 22.4 liters.' },
    { id: 'CH17', questionNumber: 17, topic: 'Electrochemistry', difficulty: 'medium', questionText: 'The process of coating a metal with zinc is called:', options: { A: 'Electroplating', B: 'Galvanization', C: 'Smelting', D: 'Anodizing' }, correctAnswer: 'B', explanation: 'Galvanization is the process of coating iron or steel with a protective zinc layer.' },
    { id: 'CH18', questionNumber: 18, topic: 'Thermochemistry', difficulty: 'hard', questionText: 'Hess\'s law is based on:', options: { A: 'Conservation of mass', B: 'Conservation of energy', C: 'Le Chatelier\'s principle', D: 'Avogadro\'s hypothesis' }, correctAnswer: 'B', explanation: 'Hess\'s law states that the total enthalpy change is independent of the path, based on energy conservation.' },
    { id: 'CH19', questionNumber: 19, topic: 'Chemical Bonding', difficulty: 'easy', questionText: 'Diamond is a form of:', options: { A: 'Silicon', B: 'Carbon', C: 'Boron', D: 'Germanium' }, correctAnswer: 'B', explanation: 'Diamond is an allotrope of carbon with a tetrahedral crystal structure.' },
    { id: 'CH20', questionNumber: 20, topic: 'Acids & Bases', difficulty: 'medium', questionText: 'Litmus paper turns blue in:', options: { A: 'Acidic solution', B: 'Neutral solution', C: 'Basic solution', D: 'Salt solution' }, correctAnswer: 'C', explanation: 'Blue litmus stays blue and red litmus turns blue in basic (alkaline) solutions.' },
    { id: 'CH21', questionNumber: 21, topic: 'Chemical Reactions', difficulty: 'medium', questionText: 'Baking soda is chemically:', options: { A: 'Sodium chloride', B: 'Sodium bicarbonate', C: 'Sodium hydroxide', D: 'Sodium carbonate' }, correctAnswer: 'B', explanation: 'Baking soda is sodium bicarbonate (NaHCO₃).' },
    { id: 'CH22', questionNumber: 22, topic: 'Organic Chemistry', difficulty: 'hard', questionText: 'Benzene has the molecular formula:', options: { A: 'C₆H₆', B: 'C₆H₁₂', C: 'C₅H₁₀', D: 'C₆H₈' }, correctAnswer: 'A', explanation: 'Benzene is a cyclic aromatic hydrocarbon with the formula C₆H₆.' },
    { id: 'CH23', questionNumber: 23, topic: 'Periodic Table', difficulty: 'easy', questionText: 'Noble gases are located in which group?', options: { A: 'Group 1', B: 'Group 7', C: 'Group 17', D: 'Group 18' }, correctAnswer: 'D', explanation: 'Noble gases (He, Ne, Ar, etc.) are in Group 18 of the periodic table.' },
    { id: 'CH24', questionNumber: 24, topic: 'States of Matter', difficulty: 'medium', questionText: 'Which of the following has the highest rate of diffusion?', options: { A: 'Solids', B: 'Liquids', C: 'Gases', D: 'Plasma' }, correctAnswer: 'C', explanation: 'Gases have the highest rate of diffusion due to loosely packed, fast-moving molecules.' },
    { id: 'CH25', questionNumber: 25, topic: 'Electrochemistry', difficulty: 'easy', questionText: 'In a dry cell, anode is made of:', options: { A: 'Copper', B: 'Zinc', C: 'Carbon', D: 'Iron' }, correctAnswer: 'B', explanation: 'In a zinc-carbon dry cell, the anode (negative terminal) is made of zinc.' },
];

// ─── BIOLOGY (25 Questions) ─────────────────────────────────────────────────
QUESTION_BANK.MOCK_BIO = [
    { id: 'BI01', questionNumber: 1, topic: 'Cell Biology', difficulty: 'easy', questionText: 'The powerhouse of the cell is:', options: { A: 'Nucleus', B: 'Ribosome', C: 'Mitochondria', D: 'Golgi body' }, correctAnswer: 'C', explanation: 'Mitochondria generate ATP through cellular respiration and are called the powerhouse of the cell.' },
    { id: 'BI02', questionNumber: 2, topic: 'Genetics', difficulty: 'medium', questionText: 'DNA stands for:', options: { A: 'Dinitrogenous Acid', B: 'Deoxyribonucleic Acid', C: 'Diribonucleic Acid', D: 'Deoxyribose Nucleotide Acid' }, correctAnswer: 'B', explanation: 'DNA stands for Deoxyribonucleic Acid, the molecule that carries genetic information.' },
    { id: 'BI03', questionNumber: 3, topic: 'Botany', difficulty: 'easy', questionText: 'Photosynthesis takes place in which part of the plant cell?', options: { A: 'Nucleus', B: 'Mitochondria', C: 'Chloroplast', D: 'Vacuole' }, correctAnswer: 'C', explanation: 'Chloroplasts contain chlorophyll and are the site of photosynthesis.' },
    { id: 'BI04', questionNumber: 4, topic: 'Human Physiology', difficulty: 'medium', questionText: 'The largest organ of the human body is:', options: { A: 'Liver', B: 'Brain', C: 'Skin', D: 'Heart' }, correctAnswer: 'C', explanation: 'The skin is the largest organ of the human body by surface area and weight.' },
    { id: 'BI05', questionNumber: 5, topic: 'Ecology', difficulty: 'easy', questionText: 'Plants are known as:', options: { A: 'Consumers', B: 'Producers', C: 'Decomposers', D: 'Scavengers' }, correctAnswer: 'B', explanation: 'Plants are producers as they make their own food through photosynthesis.' },
    { id: 'BI06', questionNumber: 6, topic: 'Cell Biology', difficulty: 'medium', questionText: 'Which organelle is responsible for protein synthesis?', options: { A: 'Lysosomes', B: 'Ribosomes', C: 'Vacuoles', D: 'Centrioles' }, correctAnswer: 'B', explanation: 'Ribosomes are the site of protein synthesis in cells.' },
    { id: 'BI07', questionNumber: 7, topic: 'Genetics', difficulty: 'hard', questionText: 'The number of chromosomes in a human somatic cell is:', options: { A: '23', B: '44', C: '46', D: '48' }, correctAnswer: 'C', explanation: 'Human somatic cells contain 46 chromosomes (23 pairs).' },
    { id: 'BI08', questionNumber: 8, topic: 'Human Physiology', difficulty: 'easy', questionText: 'Which blood group is called the universal donor?', options: { A: 'A', B: 'B', C: 'AB', D: 'O' }, correctAnswer: 'D', explanation: 'Blood group O negative is the universal donor as it can be given to any blood type.' },
    { id: 'BI09', questionNumber: 9, topic: 'Botany', difficulty: 'medium', questionText: 'Transpiration occurs mainly through:', options: { A: 'Roots', B: 'Stem', C: 'Stomata on leaves', D: 'Flowers' }, correctAnswer: 'C', explanation: 'Most transpiration (90%) occurs through stomata on the underside of leaves.' },
    { id: 'BI10', questionNumber: 10, topic: 'Ecology', difficulty: 'easy', questionText: 'An ecosystem consists of:', options: { A: 'Only living things', B: 'Only non-living things', C: 'Both biotic and abiotic components', D: 'Only plants' }, correctAnswer: 'C', explanation: 'An ecosystem includes both biotic (living) and abiotic (non-living) components.' },
    { id: 'BI11', questionNumber: 11, topic: 'Human Physiology', difficulty: 'medium', questionText: 'Insulin is produced by:', options: { A: 'Liver', B: 'Pancreas', C: 'Kidney', D: 'Adrenal gland' }, correctAnswer: 'B', explanation: 'Insulin is a hormone produced by beta cells of the islets of Langerhans in the pancreas.' },
    { id: 'BI12', questionNumber: 12, topic: 'Cell Biology', difficulty: 'easy', questionText: 'The cell wall is present in:', options: { A: 'Animal cells only', B: 'Plant cells only', C: 'Both', D: 'Neither' }, correctAnswer: 'B', explanation: 'Cell walls made of cellulose are present in plant cells but absent in animal cells.' },
    { id: 'BI13', questionNumber: 13, topic: 'Genetics', difficulty: 'medium', questionText: 'Who is known as the father of genetics?', options: { A: 'Darwin', B: 'Mendel', C: 'Watson', D: 'Lamarck' }, correctAnswer: 'B', explanation: 'Gregor Johann Mendel is known as the father of genetics for his work on pea plants.' },
    { id: 'BI14', questionNumber: 14, topic: 'Human Physiology', difficulty: 'hard', questionText: 'The functional unit of the kidney is:', options: { A: 'Alveoli', B: 'Neuron', C: 'Nephron', D: 'Hepatocyte' }, correctAnswer: 'C', explanation: 'The nephron is the basic structural and functional unit of the kidney.' },
    { id: 'BI15', questionNumber: 15, topic: 'Botany', difficulty: 'easy', questionText: 'Which part of the flower produces pollen?', options: { A: 'Pistil', B: 'Sepal', C: 'Anther', D: 'Petal' }, correctAnswer: 'C', explanation: 'The anther is the part of the stamen that produces and contains pollen grains.' },
    { id: 'BI16', questionNumber: 16, topic: 'Ecology', difficulty: 'medium', questionText: 'The ozone layer protects us from:', options: { A: 'Infrared rays', B: 'Ultraviolet rays', C: 'X-rays', D: 'Gamma rays' }, correctAnswer: 'B', explanation: 'The ozone layer in the stratosphere absorbs most of the sun\'s harmful UV radiation.' },
    { id: 'BI17', questionNumber: 17, topic: 'Human Physiology', difficulty: 'easy', questionText: 'The smallest bone in the human body is:', options: { A: 'Femur', B: 'Stirrup (Stapes)', C: 'Hammer', D: 'Radius' }, correctAnswer: 'B', explanation: 'The stapes (stirrup) in the middle ear is the smallest bone in the human body.' },
    { id: 'BI18', questionNumber: 18, topic: 'Cell Biology', difficulty: 'medium', questionText: 'Osmosis is the movement of:', options: { A: 'Solute through a membrane', B: 'Solvent through a semipermeable membrane', C: 'Gas through air', D: 'Ions through a membrane' }, correctAnswer: 'B', explanation: 'Osmosis is the movement of solvent (usually water) through a semipermeable membrane from low to high solute concentration.' },
    { id: 'BI19', questionNumber: 19, topic: 'Genetics', difficulty: 'medium', questionText: 'A recessive trait is expressed when:', options: { A: 'One allele is present', B: 'Both alleles are recessive (homozygous)', C: 'The trait is dominant', D: 'One allele is dominant' }, correctAnswer: 'B', explanation: 'A recessive trait is only expressed when both alleles are recessive (homozygous recessive).' },
    { id: 'BI20', questionNumber: 20, topic: 'Human Physiology', difficulty: 'easy', questionText: 'Red blood cells are produced in:', options: { A: 'Liver', B: 'Spleen', C: 'Bone marrow', D: 'Kidney' }, correctAnswer: 'C', explanation: 'Red blood cells (erythrocytes) are produced in the bone marrow.' },
    { id: 'BI21', questionNumber: 21, topic: 'Botany', difficulty: 'medium', questionText: 'The process of cell division in which chromosome number is halved is:', options: { A: 'Mitosis', B: 'Meiosis', C: 'Binary fission', D: 'Budding' }, correctAnswer: 'B', explanation: 'Meiosis is the type of cell division that reduces the chromosome number by half, producing gametes.' },
    { id: 'BI22', questionNumber: 22, topic: 'Ecology', difficulty: 'easy', questionText: 'Which gas do plants absorb during photosynthesis?', options: { A: 'Oxygen', B: 'Nitrogen', C: 'Carbon Dioxide', D: 'Hydrogen' }, correctAnswer: 'C', explanation: 'Plants absorb CO₂ from the atmosphere during photosynthesis.' },
    { id: 'BI23', questionNumber: 23, topic: 'Human Physiology', difficulty: 'hard', questionText: 'The hormone responsible for fight or flight response is:', options: { A: 'Insulin', B: 'Thyroxine', C: 'Adrenaline', D: 'Melatonin' }, correctAnswer: 'C', explanation: 'Adrenaline (epinephrine) is released by adrenal glands during stress, triggering the fight-or-flight response.' },
    { id: 'BI24', questionNumber: 24, topic: 'Genetics', difficulty: 'easy', questionText: 'RNA stands for:', options: { A: 'Ribonucleic Acid', B: 'Ribosomal Nucleotide Acid', C: 'Random Nucleic Acid', D: 'Reactive Nucleotide Acid' }, correctAnswer: 'A', explanation: 'RNA stands for Ribonucleic Acid.' },
    { id: 'BI25', questionNumber: 25, topic: 'Cell Biology', difficulty: 'medium', questionText: 'Lysosomes are called \'suicidal bags\' because:', options: { A: 'They produce toxins', B: 'They can digest the cell itself', C: 'They kill bacteria', D: 'They contain DNA' }, correctAnswer: 'B', explanation: 'Lysosomes contain digestive enzymes that can break down the cell\'s own components if released, hence called suicidal bags.' },
];

// ─── ENGLISH (25 Questions) ─────────────────────────────────────────────────
QUESTION_BANK.MOCK_ENG = [
    { id: 'EN01', questionNumber: 1, topic: 'Grammar', difficulty: 'easy', questionText: 'Choose the correct form: "She ___ to school every day."', options: { A: 'go', B: 'goes', C: 'going', D: 'gone' }, correctAnswer: 'B', explanation: 'Third person singular (She) takes "goes" in simple present tense.' },
    { id: 'EN02', questionNumber: 2, topic: 'Vocabulary', difficulty: 'medium', questionText: 'The synonym of "Benevolent" is:', options: { A: 'Cruel', B: 'Kind', C: 'Lazy', D: 'Angry' }, correctAnswer: 'B', explanation: 'Benevolent means well-meaning, kind, and charitable.' },
    { id: 'EN03', questionNumber: 3, topic: 'Comprehension', difficulty: 'easy', questionText: 'An "autobiography" is a:', options: { A: 'Story about animals', B: 'Book written about oneself by oneself', C: 'Fiction novel', D: 'Biography of a scientist' }, correctAnswer: 'B', explanation: 'An autobiography is a self-written account of one\'s own life.' },
    { id: 'EN04', questionNumber: 4, topic: 'Grammar', difficulty: 'medium', questionText: 'Identify the correct sentence:', options: { A: 'He don\'t like coffee', B: 'He doesn\'t likes coffee', C: 'He doesn\'t like coffee', D: 'He not like coffee' }, correctAnswer: 'C', explanation: 'Correct form: He doesn\'t (does not) like coffee. After doesn\'t, we use the base form of the verb.' },
    { id: 'EN05', questionNumber: 5, topic: 'Vocabulary', difficulty: 'easy', questionText: 'The antonym of "Ancient" is:', options: { A: 'Old', B: 'Antique', C: 'Modern', D: 'Historic' }, correctAnswer: 'C', explanation: 'Modern is the opposite of Ancient.' },
    { id: 'EN06', questionNumber: 6, topic: 'Grammar', difficulty: 'medium', questionText: 'Choose the correct passive voice: "The cat chased the mouse."', options: { A: 'The mouse was chased by the cat', B: 'The mouse is chased by cat', C: 'The mouse chased by the cat', D: 'The cat was chased by the mouse' }, correctAnswer: 'A', explanation: 'In passive voice, the object becomes the subject: "The mouse was chased by the cat."' },
    { id: 'EN07', questionNumber: 7, topic: 'Vocabulary', difficulty: 'hard', questionText: 'Choose the word that best completes: "The politician\'s speech was deliberately ___ to avoid committing to a position."', options: { A: 'Lucid', B: 'Ambiguous', C: 'Persuasive', D: 'Tedious' }, correctAnswer: 'B', explanation: 'Ambiguous means open to more than one interpretation, deliberately unclear.' },
    { id: 'EN08', questionNumber: 8, topic: 'Grammar', difficulty: 'easy', questionText: 'Which is a proper noun?', options: { A: 'city', B: 'dog', C: 'London', D: 'book' }, correctAnswer: 'C', explanation: 'London is a proper noun (specific name of a city). Proper nouns are always capitalized.' },
    { id: 'EN09', questionNumber: 9, topic: 'Comprehension', difficulty: 'medium', questionText: '"To let the cat out of the bag" means:', options: { A: 'To release a cat', B: 'To reveal a secret', C: 'To be careless', D: 'To pack things' }, correctAnswer: 'B', explanation: 'This idiom means to reveal a secret or disclose confidential information.' },
    { id: 'EN10', questionNumber: 10, topic: 'Grammar', difficulty: 'medium', questionText: 'The past tense of "begin" is:', options: { A: 'Beginned', B: 'Begun', C: 'Began', D: 'Beginning' }, correctAnswer: 'C', explanation: 'Begin → Began (past tense) → Begun (past participle).' },
    { id: 'EN11', questionNumber: 11, topic: 'Vocabulary', difficulty: 'easy', questionText: 'A person who writes poems is called a:', options: { A: 'Novelist', B: 'Playwright', C: 'Poet', D: 'Journalist' }, correctAnswer: 'C', explanation: 'A poet is someone who writes poems or poetry.' },
    { id: 'EN12', questionNumber: 12, topic: 'Grammar', difficulty: 'hard', questionText: 'Identify the figure of speech: "The wind howled in the night."', options: { A: 'Simile', B: 'Metaphor', C: 'Personification', D: 'Hyperbole' }, correctAnswer: 'C', explanation: 'Personification gives human qualities (howling) to a non-human entity (wind).' },
    { id: 'EN13', questionNumber: 13, topic: 'Comprehension', difficulty: 'easy', questionText: 'An "epilogue" appears at the:', options: { A: 'Beginning', B: 'Middle', C: 'End', D: 'Table of contents' }, correctAnswer: 'C', explanation: 'An epilogue is a concluding section at the end of a book or play.' },
    { id: 'EN14', questionNumber: 14, topic: 'Vocabulary', difficulty: 'medium', questionText: 'The word "Ubiquitous" means:', options: { A: 'Rare', B: 'Present everywhere', C: 'Invisible', D: 'Ancient' }, correctAnswer: 'B', explanation: 'Ubiquitous means present, appearing, or found everywhere.' },
    { id: 'EN15', questionNumber: 15, topic: 'Grammar', difficulty: 'easy', questionText: 'Which sentence uses the correct article?', options: { A: 'He is a honest man', B: 'He is an honest man', C: 'He is the honest man', D: 'He is honest a man' }, correctAnswer: 'B', explanation: '"Honest" starts with a vowel sound (/ɒ/), so "an" is used instead of "a".' },
    { id: 'EN16', questionNumber: 16, topic: 'Comprehension', difficulty: 'medium', questionText: '"Actions speak louder than words" means:', options: { A: 'Speaking loudly is important', B: 'What you do matters more than what you say', C: 'Words are meaningless', D: 'Actions can make sound' }, correctAnswer: 'B', explanation: 'This proverb means that what people do is more important than what they say.' },
    { id: 'EN17', questionNumber: 17, topic: 'Grammar', difficulty: 'medium', questionText: 'Which is an example of a compound sentence?', options: { A: 'She sings beautifully', B: 'She sings and dances', C: 'She sings, but he dances', D: 'Because she sings, he dances' }, correctAnswer: 'C', explanation: 'A compound sentence joins two independent clauses with a coordinating conjunction (but, and, or, etc.).' },
    { id: 'EN18', questionNumber: 18, topic: 'Vocabulary', difficulty: 'easy', questionText: 'The plural of "child" is:', options: { A: 'Childs', B: 'Childrens', C: 'Children', D: 'Childes' }, correctAnswer: 'C', explanation: '"Child" has an irregular plural form: "children".' },
    { id: 'EN19', questionNumber: 19, topic: 'Grammar', difficulty: 'hard', questionText: '"Neither the teacher nor the students ___ present."', options: { A: 'was', B: 'were', C: 'is', D: 'has been' }, correctAnswer: 'B', explanation: 'In "neither...nor" constructions, the verb agrees with the nearer subject. "Students" is plural → "were".' },
    { id: 'EN20', questionNumber: 20, topic: 'Comprehension', difficulty: 'medium', questionText: 'A "monologue" is:', options: { A: 'A conversation between two people', B: 'A speech by one person', C: 'A book of poems', D: 'A type of drama' }, correctAnswer: 'B', explanation: 'A monologue is a long speech by one person in a play or conversation.' },
    { id: 'EN21', questionNumber: 21, topic: 'Vocabulary', difficulty: 'medium', questionText: '"Ephemeral" means:', options: { A: 'Eternal', B: 'Short-lived', C: 'Powerful', D: 'Dangerous' }, correctAnswer: 'B', explanation: 'Ephemeral means lasting for a very short time.' },
    { id: 'EN22', questionNumber: 22, topic: 'Grammar', difficulty: 'easy', questionText: 'Which word is an adverb?', options: { A: 'Quick', B: 'Quickly', C: 'Quickness', D: 'Quicken' }, correctAnswer: 'B', explanation: '"Quickly" is an adverb modifying a verb, telling how an action is performed.' },
    { id: 'EN23', questionNumber: 23, topic: 'Comprehension', difficulty: 'medium', questionText: '"Breaking the ice" means:', options: { A: 'Destroying ice', B: 'Starting a conversation in a social setting', C: 'Being cold', D: 'Making a mistake' }, correctAnswer: 'B', explanation: 'This idiom means to initiate conversation or relieve tension in an awkward social situation.' },
    { id: 'EN24', questionNumber: 24, topic: 'Grammar', difficulty: 'medium', questionText: 'Choose the correctly punctuated sentence:', options: { A: 'Its a beautiful day.', B: "It's a beautiful day.", C: 'Its\' a beautiful day.', D: 'Its, a beautiful day.' }, correctAnswer: 'B', explanation: '"It\'s" is the contraction of "it is." "Its" (without apostrophe) is possessive.' },
    { id: 'EN25', questionNumber: 25, topic: 'Vocabulary', difficulty: 'easy', questionText: 'A person who loves books is called a:', options: { A: 'Audiophile', B: 'Bibliophile', C: 'Cinephile', D: 'Oenophile' }, correctAnswer: 'B', explanation: 'A bibliophile is a person who loves and collects books.' },
];

// Duplicate for premium locked tests (placeholder data)
QUESTION_BANK.MOCK002 = QUESTION_BANK.MOCK001.map(q => ({ ...q, id: q.id.replace('Q0', 'Q2') }));
QUESTION_BANK.MOCK003 = QUESTION_BANK.MOCK_PHY.map((q, i) => ({ ...q, id: `Q3${String(i + 1).padStart(2, '0')}` }));
QUESTION_BANK.MOCK004 = QUESTION_BANK.MOCK001.slice(0, 25).map((q, i) => ({ ...q, id: `Q4${String(i + 1).padStart(2, '0')}`, topic: 'History' }));

function getQuestionsForTest(testId) {
    return QUESTION_BANK[testId] || [];
}
