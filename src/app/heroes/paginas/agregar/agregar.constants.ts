import {
    DynamicFormModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from "@ng-dynamic-forms/core";

export const MY_FORM_MODEL: DynamicFormModel = [

    
    new DynamicInputModel({
        id: "superhero",
        label: "Nombre Super Heroé",
        maxLength: 42,
        placeholder: "Digité Nombre del Heroé"
    }),
    new DynamicInputModel({
        id: "publisher",
        label: "Nombre del Editor",
        maxLength: 42,
        placeholder: "Digité Nombre del Editor"
    }),
    new DynamicInputModel({
        id: "alter_ego",
        label: "Nombre Alter_Ego",
        maxLength: 42,
        placeholder: "Digité Nombre Alter_Ego"
    }),
    new DynamicInputModel({
        id: "first_appearance",
        label: "Digité first_appearance",
        maxLength: 42,
        placeholder: "Digité first_appearance"
    }),

    new DynamicInputModel({
        id: "characters",
        label: "Digité characters",
        maxLength: 42,
        placeholder: "Digité characters"
    }),
];