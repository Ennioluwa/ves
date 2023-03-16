import megaphone from "../public/megaphone.png";
import serviceBall from "../public/service-ball.png";
import fluent from "../public/fluent.png";
import home from "../public/home.png";
import Image from "next/image";

const Services = () => {
  return (
    <section className="px-5 sm:px-10">
      <div className="container xl:max-w-7xl mx-auto mt-20 md:mt-[144px]">
        <h6 className="leading-[24px] text-[16px] font-medium text-[#6E796F] mb-[16px]">
          OUR SERVICES
        </h6>
        <h3 className="leading-[50px] font-extrabold text-[43px] mb-10 md:mb-20 text-[#222823] md:leading-[88px] md:text-[81px] ">
          Discover how we <br />
          make it happen
        </h3>
        <div className=" flex flex-col md:flex-row  md:gap-6 flex-wrap lg:flex-nowrap gap-8 md:justify-between ">
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 md:justify-between">
            <div className="flex-1 border-gray-100 border-[1px] rounded space-y-4 p-5 md:max-w-[400px]">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.633 0.103176C53.6809 0.452472 54.2472 1.58511 53.8979 2.633L51.8979 8.633C51.5486 9.68088 50.416 10.2472 49.3681 9.89791C48.3202 9.54861 47.7539 8.41597 48.1032 7.36809L50.1032 1.36809C50.4525 0.3202 51.5851 -0.24612 52.633 0.103176ZM67.4181 7.4147C68.1992 6.63365 68.1992 5.36732 67.4181 4.58627C66.6371 3.80523 65.3707 3.80523 64.5897 4.58627L56.5897 12.5863C55.8086 13.3673 55.8086 14.6337 56.5897 15.4147C57.3707 16.1958 58.6371 16.1958 59.4181 15.4147L67.4181 7.4147ZM26.4281 8.58231C28.8429 3.50011 35.6108 2.43272 39.4724 6.52504L65.8196 34.4458C69.6128 38.4656 68.2842 45.0292 63.2264 47.2574L47.4779 54.1953C47.8176 55.4032 47.9994 56.6773 47.9994 57.9939C47.9994 65.7259 41.7314 71.9939 33.9994 71.9939C28.9763 71.9939 24.5711 69.3485 22.1009 65.3749L17.2984 67.4906C15.0417 68.4847 12.4066 67.9969 10.6554 66.2609L5.76826 61.4162C3.9588 59.6225 3.47954 56.8815 4.57298 54.5802L26.4281 8.58231ZM25.8136 63.7393C27.6229 66.3124 30.6148 67.9939 33.9994 67.9939C39.5222 67.9939 43.9994 63.5167 43.9994 57.9939C43.9994 57.2512 43.9184 56.5275 43.7649 55.831L25.8136 63.7393ZM36.5632 9.2703C34.6324 7.22414 31.2484 7.75783 30.0411 10.2989L8.1859 56.2968C7.82142 57.0639 7.98117 57.9776 8.58433 58.5755L13.4714 63.4202C14.0552 63.9989 14.9336 64.1615 15.6858 63.8301L61.6138 43.5969C64.1427 42.4828 64.807 39.201 62.9104 37.1911L36.5632 9.2703ZM64 20.0005C62.8954 20.0005 62 20.8959 62 22.0005C62 23.1051 62.8954 24.0005 64 24.0005H69.9969C71.1015 24.0005 71.9969 23.1051 71.9969 22.0005C71.9969 20.8959 71.1015 20.0005 69.9969 20.0005H64Z"
                  fill="#DF4D31"
                />
              </svg>

              <p className=" text-[#222823] font-extrabold text-[24px] leading-[32px]">
                Event Planning
              </p>
              <p className=" text-[#535353] text-[16px] leading-[24px] font-normal">
                We specialize in bringing your vision to life. Our team of
                experienced planners will work with you to create a truly
                unforgettable event. From corporate events to weddings,
                birthdays & more.
              </p>
            </div>
            <div className="flex-1  border-gray-100 border-[1px] rounded space-y-4 p-5 md:max-w-[400px]">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                className=" relative -left-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.1056 4.21115C37.6686 3.92962 38.3314 3.92962 38.8944 4.21115L58.8944 14.2111C59.572 14.5499 60 15.2425 60 16C60 16.7575 59.572 17.4501 58.8944 17.7889L42.4721 26L58.8944 34.2111C59.572 34.5499 60 35.2425 60 36C60 36.7575 59.572 37.4501 58.8944 37.7889L40 47.2361V66C40 66.7205 39.6124 67.3854 38.9854 67.7404C38.3584 68.0954 37.5889 68.0857 36.971 67.715L16.971 55.715C16.3686 55.3535 16 54.7025 16 54V16C16 15.2425 16.428 14.5499 17.1056 14.2111L37.1056 4.21115ZM40 42.7639L53.5279 36L40 29.2361V42.7639ZM36 29.2361L22.4721 36L36 42.7639V29.2361ZM36 22.7639V9.23607L22.4721 16L36 22.7639ZM20 19.2361V32.7639L33.5279 26L20 19.2361ZM20 39.2361V52.8676L36 62.4676V47.2361L20 39.2361ZM40 9.23607V22.7639L53.5279 16L40 9.23607Z"
                  fill="#DF4D31"
                />
              </svg>

              <p className=" text-[#222823] font-extrabold text-[24px] leading-[32px]">
                Event Design
              </p>
              <p className=" text-[#535353] text-[16px] leading-[24px] font-normal">
                Over a wide range of design services, including decor, lighting,
                floral works, and more, our experienced designers will work with
                you to bring your vision to life, leaving out no detail.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 md:justify-between">
            <div className="flex-1  border-gray-100 border-[1px] rounded space-y-4 p-5 md:max-w-[400px]">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 40C26.2091 40 28 38.2091 28 36C28 33.7909 26.2091 32 24 32C21.7909 32 20 33.7909 20 36C20 38.2091 21.7909 40 24 40ZM36 40C38.2091 40 40 38.2091 40 36C40 33.7909 38.2091 32 36 32C33.7909 32 32 33.7909 32 36C32 38.2091 33.7909 40 36 40ZM52 36C52 38.2091 50.2091 40 48 40C45.7909 40 44 38.2091 44 36C44 33.7909 45.7909 32 48 32C50.2091 32 52 33.7909 52 36ZM24 52C26.2091 52 28 50.2091 28 48C28 45.7909 26.2091 44 24 44C21.7909 44 20 45.7909 20 48C20 50.2091 21.7909 52 24 52ZM40 48C40 50.2091 38.2091 52 36 52C33.7909 52 32 50.2091 32 48C32 45.7909 33.7909 44 36 44C38.2091 44 40 45.7909 40 48ZM48 52C50.2091 52 52 50.2091 52 48C52 45.7909 50.2091 44 48 44C45.7909 44 44 45.7909 44 48C44 50.2091 45.7909 52 48 52ZM31.99 5.53727C34.2707 3.48758 37.7293 3.48758 40.01 5.53727L62.01 25.3091C63.2766 26.4474 64 28.0704 64 29.7736V57.9983C64 61.3129 61.3137 64 58 64H14C10.6863 64 8 61.3129 8 57.9983V29.7736C8 28.0704 8.72344 26.4474 9.99001 25.3091L31.99 5.53727ZM37.3367 8.51358C36.5764 7.83035 35.4236 7.83035 34.6633 8.51358L12.6633 28.2854C12.2411 28.6649 12 29.2059 12 29.7736V57.9983C12 59.1032 12.8954 59.9988 14 59.9988H58C59.1046 59.9988 60 59.1032 60 57.9983V29.7736C60 29.2059 59.7589 28.6649 59.3367 28.2854L37.3367 8.51358Z"
                  fill="#DF4D31"
                />
              </svg>

              <p className=" text-[#222823] font-extrabold text-[24px] leading-[32px]">
                Event Location
              </p>
              <p className=" text-[#535353] text-[16px] leading-[24px] font-normal">
                We help you find the perfect venue for your event. We understand
                that finding the right location can be a challenge, which is why
                our team of experts will work with you to find the right venue.
              </p>
            </div>
            <div className="flex-1  border-gray-100 border-[1px] rounded space-y-4 p-5 md:max-w-[400px]">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38 30C39.6872 30 41.3582 30.0146 43.0726 30.6318C44.7222 31.2257 46.5549 32.4379 48.3359 35.1094C48.9486 36.0285 50.1903 36.2768 51.1094 35.6641C52.0285 35.0514 52.2768 33.8097 51.6641 32.8906C49.4451 29.5621 46.9445 27.7743 44.4274 26.8682C42.0141 25.9994 39.7203 25.9998 38.0791 26L38 26C36.8954 26 36 26.8954 36 28C36 29.1046 36.8954 30 38 30ZM28 16V19.1595C16.434 22.6017 8 33.3159 8 46C8 47.1046 8.89543 48 10 48H62C63.1046 48 64 47.1046 64 46C64 33.3159 55.566 22.6017 44 19.1595V16C44 11.5817 40.4183 8 36 8C31.5817 8 28 11.5817 28 16ZM36 12C38.2091 12 40 13.7909 40 16V18.2836C38.6936 18.0967 37.3581 18 36 18C34.6419 18 33.3064 18.0967 32 18.2836V16C32 13.7909 33.7909 12 36 12ZM36 22C48.5813 22 58.9016 31.6809 59.9179 44H12.0821C13.0984 31.6809 23.4187 22 36 22ZM10 52C6.68629 52 4 54.6863 4 58C4 61.3137 6.68629 64 10 64H62C65.3137 64 68 61.3137 68 58C68 54.6863 65.3137 52 62 52H10ZM8 58C8 56.8954 8.89543 56 10 56H62C63.1046 56 64 56.8954 64 58C64 59.1046 63.1046 60 62 60H10C8.89543 60 8 59.1046 8 58Z"
                  fill="#DF4D31"
                />
              </svg>

              <p className=" text-[#222823] font-extrabold text-[24px] leading-[32px]">
                Event Staffing
              </p>
              <p className=" text-[#535353] text-[16px] leading-[24px] font-normal">
                We understand that the success of your event depends on the
                people who make it happen, which is why we provide a range of
                staffing services like servers, bartenders, security personnel &
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
