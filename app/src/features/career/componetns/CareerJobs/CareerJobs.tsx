import CareerJobBox from "../CareerJobBox/CareerJobBox";

const jobs = [
  {
    id: 1,
    job: "گرافیست",
    desc: "گرافیست تازه کار اما مشتاق",
    tags: ["فتوشاپ", "فیگما"],
    time: "تمام وقت",
  },
  {
    id: 2,
    job: "بکند دولوپر",
    desc: "بکند دولوپر تازه کار اما مشتاق",
    tags: ["دیتابیس", "نود جی اس"],
    time: "تمام وقت",
  },
  {
    id: 3,
    job: "فرانت دولوپر",
    desc: "فرانت دولوپر تازه کار اما مشتاق",
    tags: ["تیلویند", "نکست جی اس"],
    time: "تمام وقت",
  },
  {
    id: 4,
    job: "دیزاینر",
    desc: "دیزاینر تازه کار اما مشتاق",
    tags: ["فتوشاپ", "فیگما"],
    time: "تمام وقت",
  },
  {
    id: 5,
    job: "کارشناس فروش",
    desc: "کارشناس فروش تازه کار اما مشتاق",
    tags: ["فروش", "کارشناس"],
    time: "تمام وقت",
  },
];

export default function CareerJobs() {
  return (
    <div className="flex items-center flex-col gap-14 justify-center">
      <h3 className="text-xl lg:text-3xl">موقعیت های شغلی</h3>
      <div className="lg:w-[50%] md:w-[80%] w-[90%] mx-auto bg-white p-10 pb-0">
        {jobs.map((job) => (
          <CareerJobBox key={job.id} props={job} />
        ))}
      </div>
    </div>
  );
}
