'use server';

import { adminDb } from '@/lib/firebaseAdmin';

export async function repairAllDepartmentStockValues() {
try {
const snapshot = await adminDb
.collection('departmentStock')
.get();

 
if (snapshot.empty) {
  return {
    success: true,
    updated: 0,
    message: 'No department stock records found.',
  };
}

let batch = adminDb.batch();
let operationCount = 0;
let updatedCount = 0;

for (const doc of snapshot.docs) {
  const data = doc.data();

  const currentStock = Number(data.currentStock || 0);
  const averageCost = Number(data.averageCost || 0);
  const conversionFactor = Number(data.conversionFactor || 1);

  // quantity in purchase unit
  const qtyInPurchaseUnit =
    currentStock / conversionFactor;

  const stockValue =
    qtyInPurchaseUnit * averageCost;

  batch.update(doc.ref, {
    stockValue,
    updatedAt: new Date(),
  });

  operationCount++;
  updatedCount++;

  // Firestore batch limit = 500
  if (operationCount === 450) {
    await batch.commit();
    batch = adminDb.batch();
    operationCount = 0;
  }
}

// Commit remaining operations
if (operationCount > 0) {
  await batch.commit();
}

return {
  success: true,
  updated: updatedCount,
  message: `Updated stockValue for ${updatedCount} department stock records.`,
};
 

} catch (error: any) {
return {
success: false,
updated: 0,
message:
error.message ||
'Failed to repair department stock values.',
};
}
}
