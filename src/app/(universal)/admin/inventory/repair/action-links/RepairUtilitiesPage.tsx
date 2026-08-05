'use client';

import Link from 'next/link';
import {
Wrench,
Calculator,
DollarSign,
RefreshCw,
ArrowLeft,
} from 'lucide-react';

export default function RepairUtilitiesPage() {
return ( <div className="min-h-screen bg-gray-50 p-6"> <div className="mx-auto max-w-4xl space-y-6">

 
    {/* Header */}
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Repair Utilities
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Inventory and department maintenance tools.
        </p>
      </div>

      <Link
        href="/admin"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        <ArrowLeft size={16} />
        Back
      </Link>
    </div>

    {/* Tools */}
    <div className="grid gap-4 md:grid-cols-2">

      <Link
        href="/admin/repair/department-stock-values"
        className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
      >
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-blue-100 p-3">
            <Calculator
              className="text-blue-700"
              size={24}
            />
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">
              Repair Department Stock Values
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Recalculate stockValue for all department stock records.
            </p>
          </div>
        </div>
      </Link>

      <Link
        href="/admin/repair/update-department-prices"
        className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
      >
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-emerald-100 p-3">
            <DollarSign
              className="text-emerald-700"
              size={24}
            />
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">
              Update Department Prices
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Sync department average costs from inventory prices.
            </p>
          </div>
        </div>
      </Link>

      <Link
        href="/admin/repair/sync-average-cost"
        className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
      >
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-amber-100 p-3">
            <RefreshCw
              className="text-amber-700"
              size={24}
            />
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">
              Sync Inventory Average Cost
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Copy purchaseUnitCost into averageCost and costPrice.
            </p>
          </div>
        </div>
      </Link>

      <Link
        href="/admin/repair"
        className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
      >
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-rose-100 p-3">
            <Wrench
              className="text-rose-700"
              size={24}
            />
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">
              More Repair Tools
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Open additional maintenance utilities.
            </p>
          </div>
        </div>
      </Link>

    </div>
  </div>
</div>
 

);
}
