import { LightningElement } from 'lwc';

export default class CreateInvoice extends LightningElement {
    origin_record;
    account;
    invoice_date;
    invoice_due_date;
    child_relationship_name;
    line_item_description;
    line_item_quantity;
    line_item_unit_price;

    connectedCallback() {
        this.captureUrlParameters();
    }

    captureUrlParameters() {
        const params = new URLSearchParams(window.location.search);
        this.origin_record = params.get('c__origin_record');
        this.account = params.get('c__account');
        this.invoice_date = params.get('c__invoice_date');
        this.invoice_due_date = params.get('c__invoice_due_date');
        this.child_relationship_name = params.get('c__child_relationship_name');
        this.line_item_description = params.get('c__line_item_description');
        this.line_item_quantity = params.get('c__line_item_quantity');
        this.line_item_unit_price = params.get('c__line_item_unit_price');
    }
}
