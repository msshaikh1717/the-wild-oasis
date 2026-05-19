import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";

function FormRow({ label, error, children }) {
  return (
    <div className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-[2.4rem] py-[1.2rem] first:pt-0 last:pb-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[var(--color-grey-100)] [&&:has(button)]:flex [&&:has(button)]:justify-end [&&:has(button)]:gap-[1.2rem]">
      {label && <label className="font-medium" htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span className="text-[1.4rem] text-[var(--color-red-700)]">{error}</span>}
    </div>
  );
}

function CreateCabinForm() {
  return (
    <Form>
      <FormRow label="Cabin name">
        <Input type="text" id="name" />
      </FormRow>

      <FormRow label="Maximum capacity">
        <Input type="number" id="maxCapacity" />
      </FormRow>

      <FormRow label="Regular price">
        <Input type="number" id="regularPrice" />
      </FormRow>

      <FormRow label="Discount" defaultValue={0}>
        <Input type="number" id="discount" defaultValue={0} />
      </FormRow>

      <FormRow label="Description for website">
        <Textarea type="number" id="description" defaultValue="" />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
