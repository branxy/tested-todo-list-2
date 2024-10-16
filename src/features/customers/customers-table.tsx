import { CustomersTableHead } from "@/features/customers/customers-table-head";
import { CustomersTableBody } from "@/features/customers/customers-table-body";

import { useSelectCustomers } from "@/app/hooks";

import type { Customers } from "@/features/customers/types";

export interface CustomersTableProps {
  customers: Customers;
  selectedCustomerIds: ReturnType<
    typeof useSelectCustomers
  >["selectedCustomerIds"];
  handleSelectCustomer: ReturnType<
    typeof useSelectCustomers
  >["handleSelectCustomer"];
  isCheckedCheckbox: ReturnType<typeof useSelectCustomers>["isCheckedCheckbox"];
  handleSelectAllCustomers: ReturnType<
    typeof useSelectCustomers
  >["handleSelectAllCustomers"];
  handleUpdateLastSelectedCustomerRef: ReturnType<
    typeof useSelectCustomers
  >["handleUpdateLastSelectedCustomerRef"];
  isInfiniteScroll: boolean;
}

export function CustomersTable({
  customers,
  selectedCustomerIds,
  handleSelectCustomer,
  isCheckedCheckbox,
  handleSelectAllCustomers,
  handleUpdateLastSelectedCustomerRef,
  isInfiniteScroll,
}: CustomersTableProps) {
  return (
    <div className="max-w-full overflow-x-auto">
      <table className="overflow-x-auto">
        <CustomersTableHead
          isCheckedCheckbox={isCheckedCheckbox}
          handleSelectAllCustomers={handleSelectAllCustomers}
        />
        <CustomersTableBody
          customers={customers}
          selectedCustomerIds={selectedCustomerIds}
          handleSelectCustomer={handleSelectCustomer}
          handleUpdateLastSelectedCustomerRef={
            handleUpdateLastSelectedCustomerRef
          }
          isInfiniteScroll={isInfiniteScroll}
        />
      </table>
    </div>
  );
}
