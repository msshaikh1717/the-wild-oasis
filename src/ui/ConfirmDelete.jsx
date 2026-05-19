import Button from "./Button";
import Heading from "./Heading";

function ConfirmDelete({ resourceName, onConfirm, disabled }) {
  return (
    <div className="w-[40rem] flex flex-col gap-[1.2rem] [&_p]:text-[var(--color-grey-500)] [&_p]:mb-[1.2rem] [&_div]:flex [&_div]:justify-end [&_div]:gap-[1.2rem]">
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button variation="secondary" disabled={disabled}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
