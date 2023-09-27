import {
  BackgroundPattern,
  BackgroundShapeTop,
} from "@/components/BackgroundShape";

const people = [
  {
    name: "Sibly Noman",
    role: "Co-Founder",
    imageUrl: "images/Sibly_Noman.jpg",
  },
  {
    name: "Md Shakhawat Hossen",
    role: "",
    imageUrl: "",
  },
  {
    name: "Abu Talha",
    role: "Software Team",
    imageUrl: "images/Abu_Talha.jpg",
  },
  {
    name: "Nafis Ashraf",
    role: "Software Team",
    imageUrl: "images/Nafis_Ashraf.jpg",
  },
  {
    name: "Michael Scott",
    role: "Regional Manager",
    imageUrl: "images/Michael Scott.jpg",
  },
  {
    name: "Dwight Schrute",
    role: "Assistant to Regional Manager",
    imageUrl: "images/Dwight Schrute.jpg",
  },
];

export default function ShareHolders() {
  return (
    <>
      <hr />
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Shareholders
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-28 w-28 rounded-full border-2 border-gray-200"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
