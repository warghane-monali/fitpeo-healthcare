import { OptionType } from "@/components/FloatingSelect";

export type Page1 = {
	productName: string;
	labelClaim: Record<string, any>;
	applicabelTo: Record<string, any>;
	mfrRefNo: string;
	bmrRefNo: string;
	bmrEffectiveDate: string;
	supersedesBmrNo: string;
	reasonForChange: string;
	insuranceDetails: string;
	batchNumber: string;
	issuedByQA: OptionType | null;
	manufacturingDate: string;
	expiryDate: string;
	bmrIssueDate: string;
	bmrIssueNumber: string;
};

export type Page2 = {
	batchManufacturingCompletionDate: string;
	batchPackingCompletionDate: string;
	gpaNo: string;
	gpaQuantity: string;
	analyticalSample: string;
	controlSample: string;
	observationSample: string;
	partySample: string;
	stabilitySample: string;
	totalQuantityPacked: string;
	percentYield: string;
	analyticalReportNo: string;
	analyticalReportDate: string;
	afterCoating: string;
	remarkIfAny: string;
};

export type Page3 = {
	blendInference: OptionType | null;
	blendManufacturingCompletedOn: string;
	blendReleasedOn: string;
	compressionInference: OptionType | null;
	compressionCompletedOn: string;
	compressedTabletsReleasedOn: string;
	coatingInference: OptionType | null;
	coatingCompletedOn: string;
	coatedTabletsReleasedOn: string;
};

// Page 4 keys & its typing -----

export type EquipmentFields = {
	equipmentId: string;
	operatingRange: string;
	collaborationStatus: string;
	checkedBy: string;
	verified: string;
};

export type Page4 = {
	previousProductRemoved: string;
	documentsRemoved: string;
	irrelevantMaterialsRemoved: string;
	environmentalRequirementsMet: string;
	workingAreaCleaned: string;
	equipmentCleanedAndSuitable: string;
	balancesCalibrated: string;
	[equipmentName: string]: EquipmentFields;
	roomNumber: string;
	previousProduct: string;
	previousProductBatchNumber: string;
	observationsCheckedBy: string;
	observationsCheckedDate: string;
	observationsVerifiedBy: string;
	verificationDateTime: string;
};

export type Page5 = {};

export type Page6 = {
	retestDueDate: string;
	manufacturer: string;
	batchNumber: string;
	arNumber: string;
	assayOfCefiximePercent: string;
	waterContentPercent: string;
	purityOfCefiximePercent: string;
	quantityCefiximeToDispensePerBatch: string;
	quantityMCCToDispense: string;
};

export type Page7 = {
	manufacturingDate: string;
	expiryDate: string;
	checkedAndverifiedBy: string;
};
