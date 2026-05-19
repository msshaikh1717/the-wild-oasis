import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";

// A purely presentational component
function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <section className="bg-[var(--color-grey-0)] border border-[var(--color-grey-100)] rounded-[var(--border-radius-md)] overflow-hidden">
      <header className="bg-[var(--color-brand-500)] p-[2rem_4rem] text-[#e0e7ff] text-[1.8rem] font-medium flex items-center justify-between [&_svg]:h-[3.2rem] [&_svg]:w-[3.2rem] [&_div:first-child]:flex [&_div:first-child]:items-center [&_div:first-child]:gap-[1.6rem] [&_div:first-child]:font-semibold [&_div:first-child]:text-[1.8rem] [&_span]:font-['Sono'] [&_span]:text-[2rem] [&_span]:ml-[4px]">
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </header>

      <section className="p-[3.2rem_4rem_1.2rem]">
        <div className="flex items-center gap-[1.2rem] mb-[1.6rem] text-[var(--color-grey-500)] [&_p:first-of-type]:font-medium [&_p:first-of-type]:text-[var(--color-grey-700)]">
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p>
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </div>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <div className={`flex items-center justify-between p-[1.6rem_3.2rem] rounded-[var(--border-radius-sm)] mt-[2.4rem] [&_p:last-child]:uppercase [&_p:last-child]:text-[1.4rem] [&_p:last-child]:font-semibold [&_svg]:h-[2.4rem] [&_svg]:w-[2.4rem] [&_svg]:text-current! ${isPaid ? "bg-[var(--color-green-100)] text-[var(--color-green-700)]" : "bg-[var(--color-yellow-100)] text-[var(--color-yellow-700)]"}`}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </div>
      </section>

      <footer className="p-[1.6rem_4rem] text-[1.2rem] text-[var(--color-grey-500)] text-right">
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </footer>
    </section>
  );
}

export default BookingDataBox;
