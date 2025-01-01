import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function CommonForm({
  formControls,
  formData,
  onChange,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  // Render input based on component type
  function renderInputsByComponentType(controlItem) {
    const value = formData[controlItem.name] || "";

    switch (controlItem.componentType) {
      case "input":
        return (
          <Input
            id={controlItem.name}
            name={controlItem.name}
            type={controlItem.type || "text"}
            placeholder={controlItem.placeholder}
            value={value}
            onChange={(e) => onChange(controlItem.name, e.target.value)}
          />
        );

      case "select":
        return (
          <Select
            value={value}
            onValueChange={(selectedValue) =>
              onChange(controlItem.name, selectedValue)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={controlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {controlItem.options?.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "textarea":
        return (
          <Textarea
            id={controlItem.name}
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            value={value}
            onChange={(e) => onChange(controlItem.name, e.target.value)}
          />
        );

      default:
        return null; 
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label htmlFor={controlItem.name} className="mb-1">
              {controlItem.label}
            </Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
