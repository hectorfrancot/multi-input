import { AfterViewInit, Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
}) // Implement value accesor interface to set and get the control value.
export class InputComponent implements AfterViewInit, ControlValueAccessor {
  @Input() target;
  @Input() labelText;
  @Input() required;
  @Input() requiredText;
  public type;

  // Value accesor interface method.
  onChange: any = () => {};
  onTouch: any = () => {};
  val = "";

  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  // Value accesor interface method.
  writeValue(value: any) {
    this.value = value;
  }

  // Value accesor interface method.
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // Value accesor interface method.
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  /**
   * Ones the view is initiated then we evaluate the target and we set te control type.
   */
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.target !== undefined) {
        if (typeof this.target === "string") {
          this.type = "text";
        } else if (typeof this.target === "number") {
          this.type = "number";
        } else if (typeof this.target.getMonth === "function") {
          this.type = "date";
        } else if (typeof this.target === "boolean") {
          this.type = "checkbox";
        }
      }
    }, 1);
  }
}
