import type React from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

type Person = {
  name: string;
  role?: string;
  title?: string;
  affiliation?: string;
  profileUrl?: string;
  image?: string;
  phone?: string;
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase text-primary mb-6">
      {children}
    </h2>
  );
}

function ProfileCard({
  person,
  center = false,
}: {
  person: Person;
  center?: boolean;
}) {
  const hasImage = Boolean(person.image);

  return (
    <div
      className={`${
        center ? "mx-auto" : ""
      } max-w-md text-center rounded-lg border bg-background p-6 shadow-sm`}
    >
      {/* Image (only if exists) */}
      {hasImage && (
        <div className="relative aspect-square w-full max-w-xs mx-auto overflow-hidden rounded-md mb-4">
          <Image
            src={person.image!}
            alt={person.name}
            fill
            className="object-cover"
          />
        </div>
      )}

      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
        {person.name}
      </h3>

      {person.role && (
        <p className="mt-1 text-sm font-medium text-primary">{person.role}</p>
      )}

      {person.title && (
        <p className="mt-2 text-muted-foreground">{person.title}</p>
      )}

      {person.affiliation && (
        <p className="text-muted-foreground">{person.affiliation}</p>
      )}

      {person.profileUrl && (
        <a
          href={person.profileUrl}
          target="_blank"
          rel="noopener"
          className="mt-3 inline-block text-sm font-medium text-primary underline underline-offset-4"
        >
          View profile
        </a>
      )}

      {person.phone && (
        <div className="mt-3 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          <Phone className="w-4 h-4 text-primary/70 shrink-0" />
          <a
            href={`tel:${person.phone.replace(/[^+\d]/g, "")}`}
            className="hover:underline font-medium text-foreground"
          >
            {person.phone}
          </a>
        </div>
      )}
    </div>
  );
}

export default function CommitteePage() {
  // Advisory Committee
  const advisoryChair: Person = {
    name: "Key Industrial Partner",
    role: "Chairman",
    title: "",
    affiliation: "",
    profileUrl:
      "https://www.linkedin.com/in/ravi-raghavan-3334558/?originalSubdomain=in",
    image: "/images/committee/ravi-raghavan.jpg",
  };
  const advisoryCoChair: Person = {
    name: "Dr. V. Radhakrishnan",
    role: "Co-Chairman",
    title: "Ex-Professor, Dept. of Mechanical Engineering",
    affiliation: "IIT Madras & IIST Thiruvananthapuram",
    profileUrl:
      "https://drive.google.com/file/d/1lBWCbGjC982ndvSVOEw4bH03LmqGuuvE/view?usp=sharing",
    image: "/images/committee/v-radhakrishnan.jpg",
  };
  const advisoryMembers: string[] = [
    "Dr. V. Radhakrishnan, Formerly with IIT Madras, India",
    "Dr. Prasad Krishna, NIT Calicut, India",
    "Dr. Amitabha Ghosh, Formerly with IIT Kanpur, India",
    "Dr. Shunmugam M.S, Formerly with IIT Madras, India",
    "Dr. N. Ramesh Babu, IIT Madras, India",
    "Dr. V. K Jain, Formerly with IIT Kanpur, India",
    "Dr. B. B. Ahuja, Formerly with COEP, India",
    "Dr. Uday Shankar Dixit, IIT Guwahati, India",
    "Dr. S. S. Pande, Formerly with IIT Bombay, India",
    "Dr. Jose Mathew, NIT Calicut, India",
    "Dr. S. S. Joshi, IIT Indore, India",
    "Dr. P. V. Rao, IIT Delhi, India",
    "Dr. N. J. Vasa, IIT Madras, India",
    "Dr. N. V. Reddy, IIT Hyderabad, India",
    "Dr. R. Balasubramaniam, Formerly with BARC, India",
    "Dr. V. K. Suri, Formerly with BARC, India",
    "Dr. Prasad Raju, Formerly with DST, India",
    "Dr. Bijoy Bhattacharya, Formerly with Jadavpur University, India",
    "Dr. P. Radhakrishnan, Formerly with PSG Tech, India",
    "Dr. J. Ramkumar, IIT Kanpur, India",
    "Dr. Nagahanumaiah, CMTI, India",
    "Dr. Ramesh Singh, IIT Bombay, India",
    "Dr. G. L. Samuel, IIT Madras, India",
    "Dr. S. K. Choudhury, Formerly with IIT Kanpur, India",
    "Dr. N. Ramakrishnan, IIT Gandhinagar, India",
    "Dr. Prakash Brahmankar, Formerly with DBATU, India",
    "Dr. Debanik Roy, Scientist, Formerly with BRNS, India",
    "Dr. P. V. Mohan Ram, Formerly with PSG Tech, India",
    "Dr. Aravindan S, IIT Delhi, India",
    "Dr. M. Singaperumal, Formerly with IIT Madras, India",
    "Dr. Philip Koshy, McMaster University, Canada",
    "Dr. Rahman Mustafizur, Formerly with NUS, Singapore",
    "Dr. Kamlakar Rajukar, University of Nebraska–Lincoln, USA",
    "Dr. Shreyes Melkote, Georgia Institute of Technology, USA",
    "Dr. Shiv G. Kapoor, University of Illinois, USA",
    "Dr. Satish Bukkapatnam, Texas A&M University, USA",
    "Dr. Murali Sundram, University of Cincinnati, USA",
    "Dr. Roshan Joseph, Georgia Tech, USA",
    "Dr. C. P. Paul, RRCAT Indore, India",
    "Dr. Palani I. A., IIT Indore, India",
    "Dr. Biswanath Doloi, Jadavpur University, India",
    "Dr. Prabhuraja, PSG Tech, India",
    "Dr. Dasharath Ram, Formerly with DRDO, India",
    "Dr. J John Rozario Jegaraj, DRDL Hyderabad, India",
  ];

  // Organising Committee
  const patron: Person = {
    name: "Prof. N. P. Padhy",
    role: "Patron",
    title: "Director",
    affiliation: "MNIT Jaipur, India",
    profileUrl: "https://www.mnit.ac.in/admin/director",
    image: "/images/patorn.png",
  };
  const coPatrons: Person[] = [
    {
      name: "Prof. A. Seshadri Sekhar",
      role: "Co-Patron",
      title: "Director",
      affiliation: "IIT Palakkad, India",
      profileUrl: "https://iitpkd.ac.in/director",
      image: "/images/committee/a-seshadri-sekhar.jpg",
    },
    {
      name: "Prof. Dipankar Banerjee",
      role: "Co-Patron",
      title: "Director",
      affiliation: "IIST Thiruvananthapuram, India",
      profileUrl: "https://www.iist.ac.in/aboutus/direct",
      image: "/images/committee/dipankar-banerjee.jpg",
    },
    {
      name: "Prof. B. Ravi",
      role: "Co-Patron",
      title: "Director",
      affiliation: "NITK Surathkal, India",
      profileUrl:
        "https://www.linkedin.com/in/prof-b-ravi/?originalSubdomain=in",
      image: "/images/committee/b-ravi.jpg",
    },
  ];
  const chairman: Person = {
    name: "Prof. Harlal Singh Mali",
    role: "Organising Chair & Secretary",
    title: "Professor & Head of Deptartment",
    affiliation: "Dept. of Mechanical Engineering, MNIT Jaipur, India",
    profileUrl: "https://mnit.ac.in/dept_mech/profile?fid=RKmF",
    image: "/images/coP.png",
    phone: "+91 95496 54561",
  };
  const CoChairman: Person = {
    name: "Prof. Harlal Singh Mali",
    role: "Organising Chair & Secretary",
    title: "Professor & Head of Deptartment",
    affiliation: "Dept. of Mechanical Engineering, MNIT Jaipur, India",
    profileUrl: "https://mnit.ac.in/dept_mech/profile?fid=RKmF",
    image: "/images/co-pat.png" ,
    phone: "+91 95496 54561",
  };
  const organisingChair: Person = {
    name: "Prof. Harlal Singh Mali",
    role: "Organising Chair & Secretary",
    title: "Professor & Head of Deptartment",
    affiliation: "Dept. of Mechanical Engineering, MNIT Jaipur, India",
    profileUrl: "https://mnit.ac.in/dept_mech/profile?fid=RKmF",
    image: "/images/co-pat.png",
    phone: "+91 95496 54561",
  };
  const jointSecretaries: Person[] = [
    {
      name: "Dr. Anup Malik",
      role: "Joint Organising Secretary",
      title: "Assistant Professor",
      affiliation: "Dept. of Mechanical Engineering, MNIT Jaipur, India",
      profileUrl: "https://mnit.ac.in/dept_mech/profile?fid=R6SF",
      // image: "/images/anupM.png",
      phone: "+91 98773 88924",
    },
    {
      name: "Dr. Pankaj Kumar Gupta",
      role: "Joint Organising Secretary",
      title: "Associate Professor",
      affiliation: "Dept. of Mechanical Engineering, MNIT Jaipur, India",
      profileUrl: "https://mnit.ac.in/dept_mech/profile?fid=R6SI",
      // image: "/images/pankaj.png",
      phone: "+91 94143 78050",
    },
    {
      name: "Dr. Tapas Bajpai",
      role: "Joint Organising Secretary",
      title: "Assistant Professor",
      affiliation: "Dept. of Mechanical Engineering, MNIT Jaipur, India",
      profileUrl: "https://mnit.ac.in/dept_mech/profile?fid=R6SK",
      // image: "/images/tapas.png",
      phone: "+91 95496 50603",
    },
    {
      name: "Dr. Naresh Kumar Raghuwanshi",
      role: "Joint Organising Secretary",
      title: "Assistant Professor",
      affiliation: "Dept. of Mechanical Engineering, MNIT Jaipur, India",
      profileUrl: "https://mnit.ac.in/dept_mech/profile?fid=Rq+P",
      // image: "/images/naresh.png",
      phone: "+91 99937 23778",
    },
    {
      name: "Dr. Surendra Singh Godara",
      role: "Joint Organising Secretary",
      title: "Assistant Professor",
      affiliation: "Dept. of Mechanical Engineering, MNIT Jaipur, India",
      profileUrl: "https://mnit.ac.in/dept_mech/profile?fid=TKWF3LJC",
      // image: "/images/surendra.png",
      phone: "+91 97826 05555",
    },
    {
      name: "Dr. Dinesh Kumar Rathore",
      role: "Joint Organising Secretary",
      title: "Assistant Professor",
      affiliation: "Dept. of Mechanical Engineering, MNIT Jaipur, India",
      profileUrl: "https://mnit.ac.in/dept_mech/profile?fid=RqWL",
      // image: "/images/dinesh.png",
      phone: "+91 82608 43176",
    },
    {
      name: "Dr. Yashwant Koli",
      role: "Joint Organising Secretary",
      title: "Assistant Professor",
      affiliation: "Dept. of Mechanical Engineering, MNIT Jaipur, India",
      profileUrl: "https://mnit.ac.in/dept_mech/profile?fid=RqSN",
      // image: "/images/yashwant.png",
      phone: "+91 98732 90034",
    },
    {
      name: "Dr. Preeti Gulia",
      role: "Joint Organising Secretary",
      title: "Assistant Professor",
      affiliation: "Dept. of Mechanical Engineering, MNIT Jaipur, India",
      profileUrl: "https://mnit.ac.in/dept_mech/profile?fid=RqWK",
      // image: "/images/preeti.png",
      phone: "+91 95490 05491",
    },
  ];

  const jointOrganisingCommittees = [
    {
      committee: "Website, Venue, Printing and Hospitality Committee",
      members: [
        jointSecretaries[0], // Dr. Anup Malik
        jointSecretaries[5], // Dr. Dinesh Kumar Rathore
      ],
    },
    {
      committee: "Event Schedule, Speakers and Sponsors Management Committee",
      members: [
        jointSecretaries[2], // Dr. Tapas Bajpai
        jointSecretaries[4], // Dr. Surendra Singh Godara
      ],
    },
    {
      committee: "Review, Publication, Registration & Certification Committee",
      members: [
        jointSecretaries[1], // Dr. Pankaj Kumar Gupta
        jointSecretaries[3], // Dr. Naresh Kumar Raghuwanshi
      ],
    },
    {
      committee: "Workshops, Communication and Documentation Committee",
      members: [
        jointSecretaries[6], // Dr. Yashwant Koli
        jointSecretaries[7], // Dr. Preeti Gulia
      ],
    },
  ];
  const organisingMembers: string[] = [
    "Prof. Dilip Sharma, MNIT Jaipur",
    "Prof. Jyotirmay Mathur, MNIT Jaipur",
    "Prof. Rakesh Jain, MNIT Jaipur",
    "Prof. Amar Patnaik, MNIT Jaipur",
    "Prof. G. D. Agarwal, MNIT Jaipur",
    "Prof. Murari Lal Mittal, MNIT Jaipur",
    // "Prof. Nirupam Rohatgi, MNIT Jaipur",
    "Dr. Dinesh Kumar, MNIT Jaipur",
    "Dr. Gunjan Soni, MNIT Jaipur",
    "Dr. Jinesh Kumar Jain, MNIT Jaipur",
    "Dr. M. L. Meena, MNIT Jaipur",
    "Dr. Mukesh Kumar, MNIT Jaipur",
    "Dr. Rajeev Agrawal, MNIT Jaipur",
    "Dr. Ram Dayal, MNIT Jaipur",
    "Dr. Amit Arora, MNIT Jaipur",
    "Dr. Anoj Meena, MNIT Jaipur",
    // "Dr. Dinesh Kumar Rathore, MNIT Jaipur",
    "Dr. Gaurav Hedau, MNIT Jaipur",
    "Dr. Gulab Pamnani, MNIT Jaipur",
    "Dr. Manish Kumar, MNIT Jaipur",
    "Dr. Manjinder Singh, MNIT Jaipur",
    // "Dr. Naresh Kumar Raghuwanshi, MNIT Jaipur",
    // "Dr. Preeti Gulia, MNIT Jaipur",
    // "Dr. Yashwant Koli, MNIT Jaipur",
  ];
  const technicalMembers: string[] = [
    "Dr. Harlal Singh Mali, MNIT Jaipur, India",
    "Dr. Pankaj Kumar Gupta, MNIT Jaipur, India",
    "Dr. Anup Malik, MNIT Jaipur, India",
    "Dr. Tapas Bajpai, MNIT Jaipur, India",
    "Dr. Naresh Kumar Raghuwanshi, MNIT Jaipur",
    "Dr. Preeti Gulia, MNIT Jaipur",
    "Dr. Yashwant Koli, MNIT Jaipur",
    "Dr. Dinesh Kumar Rathore, MNIT Jaipur",
    "Dr. Surendra Singh Godara, MNIT Jaipur, India",

    "Dr. Jose Mathew, NIT Calicut, India",
    "Dr. Srikanth Bontha, NITK Surathkal, India",
    "Dr. Sooraj V S, IIST Thiruvananthapuram, India",
    "Dr. Dinesh Setti, IIT Palakkad, India",
    "Dr. Parvesh Antil, CCSHAU Hisar, India", // New Addition
    "Dr. Basil Kuriachen, NIT Calicut, India",
    "Dr. Amit Kumar Singh, NIT Calicut, India",

    "Dr. U. S. Dixit, IIT Guwahati, India",
    "Dr. Ajay Muljibhai Sidpara, IIT Kharagpur, India",
    "Dr. Mohit Law, IIT Kanpur, India",
    "Dr. Ramesh Singh, IIT Bombay, India",

    "Dr. N. Ramesh Babu, IIT Madras, India",
    "Dr. G. L. Samuel, IIT Madras, India",
    "Dr. M. S. Shunmugam, IIT Madras, India",
    "Dr. Alakesh Manna, PEC Chandigarh, India", // New Addition

    "Dr. P. V. Rao, IIT Delhi, India",
    "Dr. Aravindan S, IIT Delhi, India",
    "Dr. Pandey P M, IIT Delhi, India",

    "Dr. B. Bhattacharya, Formerly with Jadavpur University, India",
    "Dr. Biswanath Doloi, Jadavpur University, India",
    "Dr. Vikas Kumar, NIT Kurukshetra, India",
    "Dr. R. Balasubramaniam, Formerly with BARC Mumbai, India",

    "Dr. Palani I A, IIT Indore, India",
    "Dr. Neelesh Kumar Jain, IIT Indore, India",

    "Dr. Emarti Kumari, MBM Jodhpur, India",
    "Dr. Siddharth Tamang, IIT Kharagpur, India",
    "Dr. Mamilla Ravi Sankar, IIT Tirupati, India",

    "Dr. Chandrakant Kumar Nirala, IIT Ropar, India",
    "Dr. Pawan Sharma, Banasthali Vidyapeeth, India",
    "Dr. Ramandeep Singh, MU Jaipur, India",
    "Dr. Prateek Saxena, IIT Mandi, India",

    "Dr. Deepak Rajendra Unune, LNMIIT Jaipur, India",
    "Dr. Anant Kumar Singh, TIET Patiala, India",
    "Dr. Gurinder Singh Brar, NIT Uttarakhand, India",
    "Dr. Th. Jackson Singh, NIT Nagaland, India",
    "Dr. Shamsher Singh, mPragati IIT Delhi, India", // New Addition

    "Dr. Kishore Debnath, NIT Meghalaya, India",
    "Dr. Abhik Majumder, NIT Agartala, India",
    "Dr. Nitin Kumar Lautre, VNIT Nagpur, India",
    "Dr. Shiv Raman, NIT Warangal, India",
    "Dr. Vinit Yadav, NIT Trichy, India",
    "Dr. Rajendra Prasad Meena, DTU, Delhi, India", // New Addition

    "Dr. Radha Raman Mishra, BITS Pilani, India",
    "Dr. Satish Kumar, MNNIT Prayagraj, India",
    "Dr. Narendra Kumar, NIT Jalandhar, India",
    "Dr. Ravi Pratap Singh, NIT Kurukshetra, India",
    "Dr. Amrish Mourya, NIT Patna, India",

    "Dr. Gourav Kumar, NIT Rourkela, India",
    "Dr. Jaigopal Gupta, NIT Sikkim, India",
    "Dr. Dinesh Saini, NIT Jamshedpur, India",
    "Dr. N. Yuvraj, DTU, Delhi, India", // New Addition
    "Dr. Ranjan Ghadai, SMIT Sikkim, India",

    "Dr. K. K. Dhakar, GSITS Indore, India",
    "Dr. Kamlesh Joshi, IIITRAM Ahmedabad, India",
    "Dr. Umesh Vishwakarma, OPJU Raigarh, India",
    "Dr. Jimmy Karlpooria, PEC Chandigarh, India",
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Advisory Committee */}
      <section className="">
        <div className="relative h-56 md:h-72 w-full overflow-hidden">
                   {" "}
          <img
            src="/images/bg3.png"
            alt="Committee hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
                    <div className="absolute inset-0 bg-black/55" />         {" "}
          <div className="relative h-full flex items-center justify-center">
                       {" "}
            <h1 className="text-white text-4xl md:text-5xl font-serif font-bold">
              COMMITTEE
            </h1>
                     {" "}
          </div>
                 {" "}
        </div>
        <div className="container py-10 md:py-14 mx-auto px-4 max-w-6xl">
          <SectionTitle>Advisory Committee</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <ProfileCard person={advisoryChair} />
            <ProfileCard person={advisoryCoChair} />
          </div>
          <Card>
            <CardContent>
              <h3 className="font-semibold mb-4">Members</h3>
              <div className="md:columns-3 gap-6 space-y-2 text-foreground">
                {advisoryMembers.map((m) => (
                  <p key={m}>{m}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Organising Committee */}
      <section className="py-10 md:py-14 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionTitle>Organising Committee</SectionTitle>
          <div className="mb-10">
            <h3 className="text-center text-xl md:text-2xl font-semibold mb-6">
              Patron
            </h3>
            <ProfileCard person={patron} center />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* <div>
              <h3 className="text-center text-xl font-semibold mb-6">Chairman</h3>
              <ProfileCard person={chairman} center />
            </div> */}
            {/* <div>
              <h3 className="text-center text-xl font-semibold mb-6">
                Co-Chairman
              </h3>
              <ProfileCard person={CoChairman} center />
            </div> */}
          </div>
          {/* <div className="mb-10">
            <h3 className="text-center text-xl font-semibold mb-6">
              Co-Patrons
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {coPatrons.map((p) => (
                <ProfileCard key={p.name} person={p} />
              ))}
            </div>
          </div> */}
          <div className="mb-10">
            <h3 className="text-center text-xl font-semibold mb-6">
              Organising Chair & Secretary
            </h3>
            <div className="flex justify-center">
              <ProfileCard person={organisingChair} />
            </div>
          </div>
          <div className="mb-14">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary uppercase tracking-wide">
                Joint Organising Secretaries & Committees
              </h3>
              <div className="w-24 h-[2px] bg-muted mx-auto mt-3" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {jointOrganisingCommittees.map((item, index) => (
                <div
                  key={item.committee}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                >
                  {/* Left Accent */}
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-primary" />

                  {/* Committee Title */}
                  <div className="mb-6 pb-4 border-b border-border/60">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                        Joint Committee
                      </span>
                      <span className="text-xs font-mono text-muted-foreground/60 font-medium">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h4 className="text-lg md:text-xl font-sans font-bold text-foreground leading-snug tracking-tight">
                      {item.committee}
                    </h4>
                  </div>

                  {/* Members Sub-cards Grid */}
                  <div className="grid gap-4 sm:grid-cols-2 mt-auto flex-grow">
                    {item.members.map((member) => (
                      <div
                        key={member.name}
                        className="flex flex-col justify-between rounded-xl border border-border bg-secondary/5 hover:border-primary/30 hover:bg-secondary/10 transition-all duration-300 p-4"
                      >
                        <div className="space-y-1">
                          <h5 className="font-semibold text-foreground text-sm md:text-base leading-tight">
                            {member.name}
                          </h5>
                          <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                            {member.title}
                            <span className="block mt-0.5 text-[10px] text-muted-foreground/80 leading-normal">
                              {member.affiliation}
                            </span>
                          </p>
                          {member.phone && (
                            <div className="mt-2 pt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Phone className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                              <a
                                href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}
                                className="hover:underline font-medium text-foreground"
                              >
                                {member.phone}
                              </a>
                            </div>
                          )}
                        </div>

                        {member.profileUrl && (
                          <div className="mt-3 pt-2 border-t border-border/40">
                            <a
                              href={member.profileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs font-semibold text-primary hover:underline hover:text-primary/85 transition-colors"
                            >
                              View Profile &rarr;
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14">
            <SectionTitle>Organising Committee Members</SectionTitle>
            <Card>
              <CardContent>
                <div className="md:columns-3 gap-6 space-y-2 text-foreground">
                  {organisingMembers.map((m) => (
                    <p key={m}>{m}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Committee Members */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionTitle>Technical Committee Members</SectionTitle>
          <Card>
            <CardContent>
              <div className="md:columns-3 gap-6 space-y-2 text-foreground">
                {technicalMembers.map((m) => (
                  <p key={m}>{m}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
