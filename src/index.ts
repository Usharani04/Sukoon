import type { Core } from '@strapi/strapi';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      // 1. Enable Public Role Permissions for all content types
      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        const apis = ['global', 'homepage', 'location', 'doctor', 'service', 'disorder', 'faq', 'testimonial', 'insurance-partner', 'blog-post', 'media-mention'];
        const actionsToEnable: string[] = [];

        apis.forEach((api) => {
          actionsToEnable.push(`api::${api}.${api}.find`);
          actionsToEnable.push(`api::${api}.${api}.findOne`);
        });

        const existingPermissions = await strapi.db.query('plugin::users-permissions.permission').findMany({
          where: { role: publicRole.id },
        });

        const existingActions = new Set(existingPermissions.map((p: any) => p.action));

        for (const action of actionsToEnable) {
          if (!existingActions.has(action)) {
            await strapi.db.query('plugin::users-permissions.permission').create({
              data: { action, role: publicRole.id },
            });
          }
        }
        console.log('✔ Public API permissions configured for Sukoon Health!');
      }

      // 2. Seed Initial Content if Database is Empty
      await seedInitialData(strapi);
    } catch (err) {
      console.log('Bootstrap notice:', err);
    }
  },
};

async function seedInitialData(strapi: Core.Strapi) {
  try {
    // --- Seed Doctors ---
    const doctorCount = await strapi.documents('api::doctor.doctor').count({});
    if (doctorCount === 0) {
      console.log('🌱 Seeding Sukoon Doctors & Clinical Team...');
      const doctors: Array<{
        name: string;
        slug: string;
        qualifications: string;
        role: "Psychiatrist" | "Psychologist" | "Occupational Therapist" | "Art-Based Therapist" | "PSW" | "Clinical Advisory Board";
        experience_years: number;
        bio: string;
      }> = [
        {
          name: "Dr. Somnath Chatterji",
          slug: "dr-somnath-chatterji",
          qualifications: "MD (Psychiatry, NIMHANS), Former Director at WHO",
          role: "Clinical Advisory Board",
          experience_years: 32,
          bio: "Former Director at the World Health Organization and NIMHANS alumnus. Listed among top 0.1% most cited researchers globally with 200+ publications in The Lancet and JAMA. Independent reviewer of Sukoon's clinical outcomes data."
        },
        {
          name: "Dr. Nachiket Mor",
          slug: "dr-nachiket-mor",
          qualifications: "PhD, Yale University | Visiting Professor at ISB",
          role: "Clinical Advisory Board",
          experience_years: 28,
          bio: "Health systems and public health leader. Commissioner on the Lancet Commission on Reimagining India's Health System and Visiting Scientist at Banyan Academy."
        },
        {
          name: "Dr. Michelle Tempest",
          slug: "dr-michelle-tempest",
          qualifications: "MB BChir, Cambridge University | Partner, Candesic",
          role: "Clinical Advisory Board",
          experience_years: 24,
          bio: "Cambridge-trained psychiatrist, healthcare system designer, and author of Big Brain Revolution. Advises Sukoon on clinical governance and psychiatric technology."
        },
        {
          name: "Dr. Vipul Rastogi",
          slug: "dr-vipul-rastogi",
          qualifications: "MBBS, MD (Psychiatry), MRCPsych (UK)",
          role: "Psychiatrist",
          experience_years: 18,
          bio: "Senior Consultant Neuropsychiatrist specializing in severe affective disorders, treatment-resistant depression, and neurostimulation therapies."
        },
        {
          name: "Dr. Shivani Agarwal",
          slug: "dr-shivani-agarwal",
          qualifications: "M.Phil Clinical Psychology (NIMHANS), PhD",
          role: "Psychologist",
          experience_years: 14,
          bio: "Lead Clinical Psychologist specializing in Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and crisis intervention protocols."
        },
        {
          name: "Dr. Raghavendra Pratap",
          slug: "dr-raghavendra-pratap",
          qualifications: "MD (Psychiatry), DNB (Psychiatry)",
          role: "Psychiatrist",
          experience_years: 16,
          bio: "Chief Inpatient Psychiatrist overseeing emergency triage, acute stabilization, and personalized pharmacological recovery pathways."
        }
      ];

      for (const doc of doctors) {
        await strapi.documents('api::doctor.doctor').create({
          data: doc,
          status: 'published',
        });
      }
    }

    // --- Seed Services ---
    const serviceCount = await strapi.documents('api::service.service').count({});
    if (serviceCount === 0) {
      console.log('🌱 Seeding Sukoon Clinical Services...');
      const services: Array<{
        name: string;
        slug: string;
        category: "Residential" | "Rehabilitation" | "Outpatient" | "International";
        summary: string;
      }> = [
        { name: "Acute Inpatient Psychiatry", slug: "acute-inpatient-psychiatry", category: "Residential", summary: "24/7 medically monitored inpatient care for individuals experiencing acute psychiatric distress, psychosis, or severe mood episodes in safe, NABH-accredited facilities." },
        { name: "Addiction & De-addiction Care", slug: "addiction-deaddiction", category: "Rehabilitation", summary: "Comprehensive medical detoxification, psychological restructuring, and relapse prevention programs in a dignified, non-judgmental environment." },
        { name: "Intensive Psychiatric Care (ICU)", slug: "intensive-psychiatric-care", category: "Residential", summary: "High-dependency psychiatric intensive unit equipped with continuous vitals monitoring, anti-ligature safety infrastructure, and 1:1 clinical nursing." },
        { name: "Women's Mental Health Wing", slug: "womens-mental-health", category: "Residential", summary: "Dedicated female-only inpatient floor with female clinical teams, addressing postpartum depression, trauma, affective disorders, and holistic recovery." },
        { name: "Geriatric Psychiatry", slug: "geriatric-psychiatry", category: "Residential", summary: "Specialized psychiatric and cognitive care for older adults managing dementia-related behavioral issues, late-onset depression, and neurological conditions." },
        { name: "Day Care & Neuromodulation (TMS)", slug: "neuromodulation-tms", category: "Outpatient", summary: "US-FDA approved Transcranial Magnetic Stimulation (TMS), biofeedback, and day rehabilitation therapies for treatment-resistant conditions." },

        { name: "Alcohol Rehab", slug: "alcohol-rehab", category: "Rehabilitation", summary: "Specialized medical detoxification and residential rehabilitation for alcohol dependence." },
        { name: "Drug Rehab", slug: "drug-rehab", category: "Rehabilitation", summary: "Evidence-based clinical rehabilitation and relapse prevention for substance use disorders." },
        { name: "Habit Rehab", slug: "habit-rehab", category: "Rehabilitation", summary: "Therapeutic interventions for behavioral addictions, compulsive habits, and behavioral modification." },
        { name: "Gambling Deaddiction", slug: "gambling-deaddiction", category: "Rehabilitation", summary: "Specialized cognitive behavioral therapy and crisis intervention for pathological gambling." },
        { name: "Nicotine Deaddiction", slug: "nicotine-deaddiction", category: "Rehabilitation", summary: "Structured smoking cessation programs combining medical support and psychological counselling." },
        { name: "Porn Deaddiction", slug: "porn-deaddiction", category: "Rehabilitation", summary: "Confidential individual therapy addressing compulsive sexual behavior and digital addiction." },

        { name: "Acute Psychiatric Care", slug: "acute-psychiatric-care", category: "Residential", summary: "Immediate 24/7 crisis stabilization and acute psychiatric intervention." },
        { name: "Psychiatric ICU", slug: "psychiatric-icu", category: "Residential", summary: "High-dependency intensive care unit with anti-ligature safety and continuous nursing." },
        { name: "Sukoon at Home Care", slug: "sukoon-at-home-care", category: "Residential", summary: "Structured home-based psychiatric nursing and clinical support." },
        { name: "Geriatric Care", slug: "geriatric-care", category: "Residential", summary: "Specialized inpatient dementia, Alzheimer's, and late-life psychiatric care." },
        { name: "Children's Mental Health", slug: "childrens-mental-health", category: "Residential", summary: "Child and adolescent psychiatric assessment, emotional regulation, and family therapy." },

        { name: "Clinical Psychologist", slug: "clinical-psychologist", category: "Outpatient", summary: "Diagnostic psychometric evaluation, psychotherapy, and individual counseling." },
        { name: "Mental Health Counselling", slug: "mental-health-counselling", category: "Outpatient", summary: "Personalized supportive counseling for stress, anxiety, relationship issues, and life transitions." },
        { name: "Art Therapy", slug: "art-therapy", category: "Outpatient", summary: "Expressive arts therapy for emotional expression, trauma processing, and self-discovery." },
        { name: "RTMS Treatment", slug: "rtms-treatment", category: "Outpatient", summary: "Repetitive Transcranial Magnetic Stimulation for treatment-resistant depression and anxiety." },
        { name: "Cognitive Remediation", slug: "cognitive-remediation", category: "Outpatient", summary: "Neurocognitive training to enhance attention, memory, executive functioning, and problem solving." },
        { name: "Psychoanalytic Therapy", slug: "psychoanalytic-therapy", category: "Outpatient", summary: "Deep exploratory psychodynamic therapy uncovering subconscious patterns and unresolved conflicts." },
        { name: "Occupational Therapy", slug: "occupational-therapy", category: "Outpatient", summary: "Functional skill retraining, sensory integration, and daily living rehabilitation." },
        { name: "Psychiatric Treatment", slug: "psychiatric-treatment", category: "Outpatient", summary: "Outpatient psychiatric consultations, medication management, and clinical reviews." },
        { name: "Psycho Oncology", slug: "psycho-oncology", category: "Outpatient", summary: "Specialized psychological support for cancer patients, survivors, and their families." },
        { name: "Psychometric Testing", slug: "psychometric-testing", category: "Outpatient", summary: "Standardized psychological, cognitive, personality, and diagnostic testing." },
        { name: "Ketamine Infusion Therapy", slug: "ketamine-infusion-therapy", category: "Outpatient", summary: "Medically supervised low-dose ketamine infusions for severe treatment-resistant depression." },
        { name: "Electroconvulsive Therapy", slug: "electroconvulsive-therapy", category: "Outpatient", summary: "Modern ultra-brief pulse modified ECT under full anesthesia for severe depression and catatonia." }
      ];

      for (const s of services) {
        await strapi.documents('api::service.service').create({
          data: s,
          status: 'published',
        });
      }
    }

    // --- Seed Disorders / Conditions ---
    const disorderCount = await strapi.documents('api::disorder.disorder').count({});
    if (disorderCount === 0) {
      console.log('🌱 Seeding Sukoon Disorders & Conditions...');
      const disorders = [
        { name: "Bipolar Disorder", slug: "bipolar-disorder", summary: "Evidence-based stabilization for acute mania, mixed states, and severe bipolar depression through structured circadian regulation and pharmacology." },
        { name: "Clinical Depression", slug: "depression", summary: "Comprehensive inpatient and outpatient treatment pathways achieving full remission threshold tracking for major depressive episodes." },
        { name: "Schizophrenia & Psychosis", slug: "schizophrenia", summary: "Multidisciplinary 24/7 acute stabilization, cognitive rehabilitation, and family integration for individuals experiencing hallucinations or delusional episodes." },
        { name: "Obsessive Compulsive Disorder (OCD)", slug: "ocd", summary: "Intensive Exposure and Response Prevention (ERP) combined with advanced neuro-psychiatric care achieving 74% symptom reduction." },
        { name: "Substance & Alcohol Dependence", slug: "substance-use", summary: "Safe clinical detox, behavioral therapies (MET, CBT), and relapse-proofing designed with deep respect and medical accountability." },
        { name: "Severe Anxiety & Panic Disorder", slug: "anxiety", summary: "Specialized inpatient relaxation protocols, somatic regulation, and psychotherapy for debilitating anxiety and panic attacks." },

        { name: "Alcohol Addiction", slug: "alcohol-addiction", summary: "Comprehensive medical detoxification, withdrawal management, and long-term sobriety rehabilitation." },
        { name: "Antisocial Personality Disorder", slug: "antisocial-personality-disorder", summary: "Structured behavioral therapy and impulse control management." },
        { name: "Borderline Personality Disorder", slug: "borderline-personality-disorder", summary: "Dialectical Behavior Therapy (DBT) focusing on emotional regulation, distress tolerance, and interpersonal effectiveness." },
        { name: "Claustrophobia", slug: "claustrophobia", summary: "Desensitization therapy and cognitive reframing for specific phobias and enclosed space anxiety." },
        { name: "Drug Addiction", slug: "drug-addiction", summary: "Medical detox and psychological rehabilitation for prescription drug and illicit substance dependence." },
        { name: "Narcissistic Personality Disorder", slug: "narcissistic-personality-disorder", summary: "Psychodynamic psychotherapy to foster empathy, self-awareness, and healthier relationships." },
        { name: "Persistent Depressive Disorder", slug: "persistent-depressive-disorder", summary: "Long-term outpatient therapy and pharmacological balance for chronic low-grade depression (Dysthymia)." },
        { name: "Seasonal Affective Disorder", slug: "seasonal-affective-disorder", summary: "Bright light therapy, circadian rhythm alignment, and cognitive behavioral therapy." },
        { name: "Social Anxiety Disorder", slug: "social-anxiety-disorder", summary: "Gradual exposure therapy and social skills training for debilitating social phobia." }
      ];

      for (const d of disorders) {
        await strapi.documents('api::disorder.disorder').create({
          data: d,
          status: 'published',
        });
      }
    }

    // --- Seed Locations ---
    const locationCount = await strapi.documents('api::location.location').count({});
    if (locationCount === 0) {
      console.log('🌱 Seeding Sukoon Hospital Locations...');
      const locations = [
        {
          name: "Gurugram Hospital (Sector 56)",
          slug: "gurugram",
          short_description: "India's premier standalone psychiatric inpatient hospital with 50+ beds, female-only floors, ICU, and sensory gardens.",
          full_address: "Plot No. 1, Sector 56, Golf Course Road Extension, Gurugram, Haryana - 122011",
          phone: "+91 8448156500",
          map_link: "https://maps.google.com/?q=Sukoon+Hospital+Gurugram"
        },
        {
          name: "South Delhi Hospital (Chhatarpur)",
          slug: "chhatarpur",
          short_description: "State-of-the-art mental health and acute stabilization facility serving Delhi NCR with personalized multidisciplinary suites.",
          full_address: "Main Chhatarpur Road, Near Qutub Minar Metro, New Delhi - 110074",
          phone: "+91 8448156500",
          map_link: "https://maps.google.com/?q=Sukoon+Hospital+Delhi"
        },
        {
          name: "Bengaluru Hospital (Koramangala)",
          slug: "bengaluru",
          short_description: "Advanced behavioral health center providing acute psychiatric care, luxury residential de-addiction, and neuromodulation.",
          full_address: "80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka - 560034",
          phone: "+91 8448156500",
          map_link: "https://maps.google.com/?q=Sukoon+Hospital+Bengaluru"
        },
        {
          name: "Hyderabad Hospital (Jubilee Hills)",
          slug: "hyderabad",
          short_description: "Flagship South India psychiatric hospital with dedicated emergency stabilization, therapeutic art studios, and acute wards.",
          full_address: "Road No. 36, Jubilee Hills, Hyderabad, Telangana - 500033",
          phone: "+91 8448156500",
          map_link: "https://maps.google.com/?q=Sukoon+Hospital+Hyderabad"
        }
      ];

      for (const loc of locations) {
        await strapi.documents('api::location.location').create({
          data: loc,
          status: 'published',
        });
      }
    }

    // --- Seed FAQs ---
    const faqCount = await strapi.documents('api::faq.faq').count({});
    if (faqCount === 0) {
      console.log('🌱 Seeding Sukoon FAQs...');
      const faqs = [
        {
          question: "What makes Sukoon Health different from traditional psychiatric wards?",
          answer: "Sukoon is India's first purpose-built network of NABH-accredited psychiatric hospitals. Unlike general hospitals with small psychiatric wards, Sukoon combines 24/7 multidisciplinary acute medical psychiatry, anti-ligature safety architecture, proprietary A2R+ clinical protocols, and measurable outcome tracking with an 8% readmission rate (versus 27% globally).",
          category: "General"
        },
        {
          question: "What is MERA Sukoon psychiatric emergency service?",
          answer: "MERA (Medical Emergency Retrieval Ambulance) is India's only 24x7 structured psychiatric emergency response fleet. Fully compliant with the Mental Healthcare Act (MHCA 2017), it is staffed by trained psychiatric nurses, paramedics, and mental health responders equipped to safely de-escalate and transport individuals in acute crisis.",
          category: "Emergency"
        },
        {
          question: "Are treatments covered by cashless health insurance?",
          answer: "Yes. Under the Mental Healthcare Act 2017 and IRDAI regulations, mental health inpatient care is eligible for cashless insurance claims. Sukoon has partnered with all major insurers including Star Health, HDFC ERGO, Care Health, ICICI Lombard, and Niva Bupa to provide seamless cashless hospitalization.",
          category: "Insurance"
        },
        {
          question: "How long is the typical inpatient stay at Sukoon?",
          answer: "The average length of stay for acute stabilization at Sukoon is 12–14 days (compared to the global average of 19–39 days). Every patient receives a tailored daily schedule of medical oversight, psychotherapy, occupational therapy, and family integration before transitioning to outpatient aftercare.",
          category: "Admissions"
        }
      ];

      for (const f of faqs) {
        await strapi.documents('api::faq.faq').create({
          data: f,
          status: 'published',
        });
      }
    }

    // --- Seed Testimonials ---
    const testimonialCount = await strapi.documents('api::testimonial.testimonial').count({});
    if (testimonialCount === 0) {
      console.log('🌱 Seeding Sukoon Testimonials...');
      const testimonials: Array<{
        name: string;
        designation: string;
        organization: string;
        quote: string;
        type: "patient" | "clinical_expert";
      }> = [
        {
          name: "Family of an Individual in Care",
          designation: "Gurugram Inpatient Ward",
          organization: "Bipolar Mania Recovery",
          quote: "When my son experienced an acute manic episode, we were terrified and lost. Sukoon did not judge us; they gave us a clear 14-day clinical roadmap. The transparency, daily updates from the Clinical Care Manager, and respectful environment changed everything.",
          type: "patient"
        },
        {
          name: "Consultant Psychiatrist",
          designation: "MRCPsych, London",
          organization: "Referring Clinician",
          quote: "Sukoon has elevated behavioral healthcare in India to global standards. Their adherence to evidence-based A2R+ care protocols and independent verification by WHO reviewers gives me total confidence when referring patients.",
          type: "clinical_expert"
        },
        {
          name: "Caregiver - Spouse",
          designation: "South Delhi Hospital",
          organization: "Depression & Anxiety Care",
          quote: "The MERA emergency team was prompt, gentle, and profoundly professional during our crisis. Sukoon treated my wife as a human being first, not just a psychiatric diagnosis.",
          type: "patient"
        }
      ];

      for (const t of testimonials) {
        await strapi.documents('api::testimonial.testimonial').create({
          data: t as any,
          status: 'published',
        });
      }
    }

    // --- Seed Insurance Partners ---
    const insuranceCount = await strapi.documents('api::insurance-partner.insurance-partner').count({});
    if (insuranceCount === 0) {
      console.log('🌱 Seeding Insurance Partners...');
      const partners = [
        { name: "HDFC ERGO Health" },
        { name: "Star Health Insurance" },
        { name: "Care Health Insurance" },
        { name: "ICICI Lombard" },
        { name: "Niva Bupa Health" },
        { name: "Bajaj Allianz" },
        { name: "Tata AIG" },
        { name: "Aditya Birla Health" }
      ];

      for (const p of partners) {
        await strapi.documents('api::insurance-partner.insurance-partner').create({
          data: p,
          status: 'published',
        });
      }
    }

    console.log('✨ Sukoon Health initial data seeding completed successfully!');
  } catch (err) {
    console.error('Seeding notice:', err);
  }
}