interface ICareerBox {
  props: {
    job: string;
    desc: string;
    tags: string[];
    time: string;
  };
}

export default function CareerJobBox({ props }: ICareerBox) {
  const { desc, tags, time, job } = props;

  return (
    <div className="flex flex-col gap-y-4 pb-6 border-b border-gray-200 mb-6">
      <div className="flex justify-between items-center gap-x-4">
        <h3 className="text-gray-900 text-xl font-medium leading-8">{job}</h3>
        <a
          href="tel:0912345678"
          className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs flex justify-center items-center"
        >
          ارسال
        </a>
      </div>
      <div className="flex justify-between items-start gap-x-8">
        <div className="space-y-2">
          <p className="text-gray-600 text-sm">{desc}</p>
          <div className="flex md:flex-row flex-col md:items-center items-start gap-x-3">
            <span className="max-md:mt-2 text-xs text-white p-1 bg-primary rounded-lg">{time}</span>
            <div className="flex max-md:mt-6 items-center gap-2 flex-wrap">
              {tags.map((tag, i) => (
                <span key={i + 1} className="bg-[#f7f8fa] text-gray-600 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
