import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionFaq() {
  const faq = [
    {
      head: `Q.1 What is Scheme of Assistance to Disabled Persons for
      Purchase/Fitting of Aids/Appliances ADIP scheme and how it is
      helping empowering Divyangjan?`,
      text: ` Under the ADIP Scheme, Assistive devices are given to PwDs with an
      aim to improve their independent functioning and to arrest the
      extent of disability and occurrence of secondary disability. The
      scheme also envisages conduct of corrective surgeries, whenever
      required, before providing an assistive device.`,
    },
    {
      head: ` Q.2 Who are eligible for getting benefit under the ADIP Scheme?`,
      text: ` 1. An Indian Citizen of any age.
      2. Holds a 40% and above Disability Certificate (Benchmark disability).
      3. Having monthly income from all sources not exceeding Rs.30,000/- per month.
      4. In case of dependents, the income of parents/guardians not exceeding Rs. 30,000/- per month.The amount of assistance will be as follows:-
      Total Income	Amount of Assistance
      Upto Rs. 22,500/- per month	Full cost of aid/appliance
      Rs.22,501/- to Rs. 30,000/- per month	50% of the cost of aid/appliance`,
    },
    {
      head: ` Q.3 What are the documents required ?`,
      text: `1. Passport Size Photographs.
      2. A copy of the disability certificate.
      3. Address proof (copy of Aadhaar Card or/ Voter Id Card or/ Ration Card etc.)
      4. A copy of Income Certificate.
      5. An undertaking that he/she has not received the same aids & assistive devices from any source during the last three years.
      `,
    },
    {
      head: ` Q.4 Who is the competent Authority to issue Income Certificate for getting benefit under the ADIP Scheme ? `,
      text: `1. Revenue Agencies or BPL Card or MGNREGA Card
      2. Disability Pension Card.
      3. Certificate by M.P./MLA/Councilor/Gram Pradhan
      4. Notarized Affidavit C/o Implementing Agencies
      `,
    },
    {
      head: ` Q.5 Whether children with intellectual disability/ developmental delay below the age of 6 years are eligible for getting benefit under the Scheme? `,
      text: `Yes. Temporary Disability Certificate issued by the Competent Medical Authority for Children up to the age of 6 years or Developmental Delay Certificate issued by Competent Medical Authority for children up to the age of 6 years is considered for distribution of TLM Kits under the ADIP Scheme. However, there is no dilution of the condition of minimum 40% disability.
      `,
    },
    {
      head: ` Q.6 Who is eligible for getting motorized tricycle/motorized wheelchair under ADIP Scheme? `,
      text: `1.Motorized tricycles and Motorized wheelchairs for persons with severe locomotor disability, Stroke, Cerebral Palsy, Hemiplegia and any other person with similar conditions, where either three/four limbs or one half of the body are severely impaired. Disability should be 80% or more.
      2. Age 16 yrs or above, provided once in 5 years.
      3. Extent of subsidy shall be upto Rs.50,000/-
      4. Monthly income of self/guardian from all sources should not exceed Rs. 22500/- for 100% subsidy.
      5. Monthly income of self/guardian from all sources should not exceed Rs. 30000/- for 50% subsidy.
      `,
    },
    {
      head: ` Q.7 What are documents required for Motorized Tricycle/Wheelchair? `,
      text: `1. 2 Passport Size Photograph
      2. A copy of the disability certificate
      3. Address proof (copy of Aadhar Card or/ Voter Id Card or/ Ration Card etc.)
      4. A copy of Income Certificate.
      5. Details of payment of the additional amount after subsidy.`,
    },
    {
      head: ` Q.8 How much assistance is provided for aids/assistive devices? `,
      text: `1.For aids /appliances costing upto Rs. 15,000/- (Full financial assistance under the scheme)
      2.For aids /appliances costing between Rs. 15,001/- to Rs. 30000/- (Financial assistance upto Rs 15000/-)`,
    },
    {
      head: `  Q.9 Who is eligible for Cochlear Implant under ADIP Scheme?`,
      text: `1. children with Hearing Impairment with a ceiling of Rs. 7.00 lakh per unit (to be borne by the Government) in case of children with pre-lingual hearing loss between 1 to 5 years of age.
      2. Rs.6.00 Lakh in case of children with acquired hearing loss between 5 to 18 years of age.
      3. Child should not suffer from any additional disability.
      4. Monthly income of self or parents/guardians shall not exceed Rs. 22500/- per month for 100% subsidy.
      5. Monthly income of self or parents/guardians shall not exceed Rs. 30000/- per month for 50% subsidy.`,
    },
    {
      head: ` Q.10 What is Pre-Operative Preparation for Cochlear Implant? `,
      text: `1. Evaluation of hearing, speech & language, psychological, early communication education, and/or auditory processing followed by early intervention using suitable hearing aid for 3 to 6 months.
      2. Depending upon the test findings and failing satisfactory performance or progress in intervention with suitable hearing aid, CI candidacy will be determined and referral letter to empaneled surgeons and Hospital will be prepared.
      3. The parents will be asked to visit ENT surgeon of the recognized hospital, who will prescribe radiographic evaluation (CAT scan or MRI) of the inner ear and thereupon surgeon will decide for the surgery.
      4. The child will be prescribed vaccination by the surgeon and surgery will be scheduled 2-4 weeks after the child is vaccinated.`,
    },
    {
      head: ` Q.11 What is the surgical Procedure for Cochlear Implant? `,
      text: `The surgery will performed by the ENT surgeon. Surgery is normally done under general anesthesia and surgery is usually of one to one and half hour duration. The child may be hospitalized for 2-3 days. Surgical healing time is 2-3 weeks after the surgery. Thereafter, surgical stitches are removed
      `,
    },
    {
      head: `  Q.12 What is to be done after Cochlear Implant Surgery?`,
      text: `1. Mapping of Cochlear Implant of Speech Processor Programming:
      The hospital undertaking the Cochlear Implant Surgery will switch on the Processor 3-4 weeks after the surgery. The implant is switched ON and input to the device are set at comfortable levels.
      2. Audilogical (Aural) Rehabilitation:
      Aural Rehabilitation in the form of Speech and Language stimulation, Auditory Verbal Therapy and parental counseling and educational guidance and training are routinely conducted for the child.
      3. Speech and Language Therapy: :
      Speech and language therapy up to three hours once a week for ten weeks, for a total of 30 hours should be conducted. Follow-up visits for performance and progress evaluation will be conducted at 6, 9, and 12 months of mapping and speech and language therapy.`,
    },
    {
      head: ` Q.13 Can one request for replacement/repair for aids/assistive devices provided?. `,
      text: `Yes. Contact the agency that provided the aids/device or Dial - Toll Free Number 1800-599-0019`,
    },
    {
      head: `  Q.14 Where and how can one apply for aids/assistive device?`,
      text: `1. Applicant can approach ALIMCO, National Institutes, CRCs, DDRCs and various implementing agencies (contact details can be seen from download section) with all requisite documents.
      2. Applicant can directly apply on ADIP MIS portal by clicking on beneficiary registration tab. (www.adip.disabilityaffairs.gov.in/ADIP/login).
      3. Applicant can send request letter along with required documents in the given below address:-
      Ministry of Social Justice and Empowerment Department of Empowerment of Persons with Disabilities Pt Deendayal Antyodaya Bhawan, 5th floor, CGO complex, Lodhi Road New Delhi-110003`,
    },
    {
      head: `  Q.15 How much is reimbursed for medical/surgical corrections prior to fitment?`,
      text: `1. Rs.1,500 for hearing & speech impaired.
      2. Rs.3,000 for visually impaired.
      3. Rs.15,000 for orthopedically disabled.`,
    },
    {
      head: ` Q.16 Where can one get the aids/assistive devices from? `,
      text: `Artificial Limbs Manufacturing Corporation Of India (ALIMCO) and its RMC's- Contact No. 1800-599-0019 and telephone No. 01124369027.
      Nearest Camp organized for distribution of aids and assistive device under ADIP Scheme
      National Institutes under the Administrative control of the Department:
      
      1. National Institutes for the Empowerment of Persons with Visual Disabilities (Dehradun)
      2. Ali Yavar Jung National Institute Of Speech And Hearing Disabilities (Mumbai)
      3. National Institute For Locomotor Disabilities (Kolkatta)
      4.National Institute for Empowerment of Persons with Multiple Disabilities (Chennai)
      5. Pt. Deendayal Upadhyaya National Institute For Persons with Physical Disabilities (New Delhi)
      6. National Institute for the Empowerment of Persons with Intellectual Disabilities (Secundrabad)
      7. Swami Vivekanand National Institute of Rehabilitation Training and Research (Cuttack)`,
    },
    {
      head: `  Q.17 Is there reimbursement for travelling cost?`,
      text: `Travelling cost in terms of rail fare or bus fare would be admissible separately to the PwD and one escort fare, subject to a limit of Rs. 250/- per person, irrespective of number of visits to the centre and for attending the distribution camp.`,
    },
    {
      head: ` Q.18 Is boarding and lodging cost reimbursed? `,
      text: `Rs.100/- per day for a maximum of 15 days for PwDs having monthly income below Rs.15,000/-. per person.
      `,
    },
    {
      head: ` Q.19 What are the items provided for visually disabled including deaf blind? `,
      text: `1. Accessible mobile phone for students of age 18 years and above
      2. Learning equipments
      3. Low vision aids
      4.Special mobility aids for visually impaired with muscular dystrophy or cerebral palsy like adapted walkers as recommended by expert committee from time to time.
      `,
    },
    {
      head: `  Q.20 What are the items provided for hearing impaired including deaf blind?`,
      text: `1. Various types of hearing aids, including BTE etc
      2. Educational kits
      3. Assistive and Alarm devices`,
    },
    {
      head: ` Q.21 How to get disability certificate? `,
      text: `1. As per provision of the RPwD Act, Disability Certificate will be issued by the prescribed Medical Authority.
      2. Responsibility for issue of a Joint disability Certificate for availing the benefits under the ADIP-SSA will be that of a :
      (a) Headmaster or Principal of the School
      (b) Government Doctor of Government Primary Health Centres (PHCs) or Community Health Centres (CHCs)
      (c) Local SSA Authority and
      (d) representatives of ALIMCO.`,
    },
  ];
  return (
    <div>
      {faq &&
        faq.map((item) => {
          return (
            <>
              <div
                key={item.head}
                style={{
                  maxWidth: "700px",
                  display: "grid",
                  placeItems: "center",
                  margin: "auto",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                }}
              >
                <Accordion>
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{
                          color: "white",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{
                      backgroundColor: "#363b3f",
                      color: "white",
                    }}
                  >
                    <Typography>{item.head}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.text}</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </>
          );
        })}
    </div>
  );
}
export default AccordionFaq;
