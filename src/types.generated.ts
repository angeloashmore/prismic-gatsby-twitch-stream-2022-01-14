export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
/**
 * All built-in and custom scalars, mapped to their actual values
 */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/**
	 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
	 * representation of dates and times using the Gregorian calendar.
	 */
	Date: string;
	/**
	 * The `JSON` scalar type represents JSON values as specified by
	 * [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
	 */
	JSON: unknown;
	/**
	 * Text content with rich formatting capabilities using a Prismic format
	 * called Structured Text.
	 */
	PrismicStructuredText: import("@prismicio/types").RichTextField;
};

export type BooleanQueryOperatorInput = {
	eq?: InputMaybe<Scalars["Boolean"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
	ne?: InputMaybe<Scalars["Boolean"]>;
	nin?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
	eq?: InputMaybe<Scalars["Date"]>;
	gt?: InputMaybe<Scalars["Date"]>;
	gte?: InputMaybe<Scalars["Date"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
	lt?: InputMaybe<Scalars["Date"]>;
	lte?: InputMaybe<Scalars["Date"]>;
	ne?: InputMaybe<Scalars["Date"]>;
	nin?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
	absolutePath: Scalars["String"];
	accessTime: Scalars["Date"];
	atime: Scalars["Date"];
	atimeMs: Scalars["Float"];
	base: Scalars["String"];
	birthTime: Scalars["Date"];
	/**
	 * @deprecated Use `birthTime` instead
	 */
	birthtime?: Maybe<Scalars["Date"]>;
	/**
	 * @deprecated Use `birthTime` instead
	 */
	birthtimeMs?: Maybe<Scalars["Float"]>;
	changeTime: Scalars["Date"];
	children: Array<Node>;
	ctime: Scalars["Date"];
	ctimeMs: Scalars["Float"];
	dev: Scalars["Int"];
	dir: Scalars["String"];
	ext: Scalars["String"];
	extension: Scalars["String"];
	gid: Scalars["Int"];
	id: Scalars["ID"];
	ino: Scalars["Float"];
	internal: Internal;
	mode: Scalars["Int"];
	modifiedTime: Scalars["Date"];
	mtime: Scalars["Date"];
	mtimeMs: Scalars["Float"];
	name: Scalars["String"];
	nlink: Scalars["Int"];
	parent?: Maybe<Node>;
	prettySize: Scalars["String"];
	rdev: Scalars["Int"];
	relativeDirectory: Scalars["String"];
	relativePath: Scalars["String"];
	root: Scalars["String"];
	size: Scalars["Int"];
	sourceInstanceName: Scalars["String"];
	uid: Scalars["Int"];
};

export type DirectoryAccessTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryModifiedTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<DirectoryEdge>;
	group: Array<DirectoryGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<Directory>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type DirectoryConnectionDistinctArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
	field: DirectoryFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type DirectoryConnectionMaxArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
	next?: Maybe<Directory>;
	node: Directory;
	previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
	AbsolutePath = "absolutePath",
	AccessTime = "accessTime",
	Atime = "atime",
	AtimeMs = "atimeMs",
	Base = "base",
	BirthTime = "birthTime",
	Birthtime = "birthtime",
	BirthtimeMs = "birthtimeMs",
	ChangeTime = "changeTime",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Ctime = "ctime",
	CtimeMs = "ctimeMs",
	Dev = "dev",
	Dir = "dir",
	Ext = "ext",
	Extension = "extension",
	Gid = "gid",
	Id = "id",
	Ino = "ino",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Mode = "mode",
	ModifiedTime = "modifiedTime",
	Mtime = "mtime",
	MtimeMs = "mtimeMs",
	Name = "name",
	Nlink = "nlink",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrettySize = "prettySize",
	Rdev = "rdev",
	RelativeDirectory = "relativeDirectory",
	RelativePath = "relativePath",
	Root = "root",
	Size = "size",
	SourceInstanceName = "sourceInstanceName",
	Uid = "uid",
}

export type DirectoryFilterInput = {
	absolutePath?: InputMaybe<StringQueryOperatorInput>;
	accessTime?: InputMaybe<DateQueryOperatorInput>;
	atime?: InputMaybe<DateQueryOperatorInput>;
	atimeMs?: InputMaybe<FloatQueryOperatorInput>;
	base?: InputMaybe<StringQueryOperatorInput>;
	birthTime?: InputMaybe<DateQueryOperatorInput>;
	birthtime?: InputMaybe<DateQueryOperatorInput>;
	birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
	changeTime?: InputMaybe<DateQueryOperatorInput>;
	children?: InputMaybe<NodeFilterListInput>;
	ctime?: InputMaybe<DateQueryOperatorInput>;
	ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
	dev?: InputMaybe<IntQueryOperatorInput>;
	dir?: InputMaybe<StringQueryOperatorInput>;
	ext?: InputMaybe<StringQueryOperatorInput>;
	extension?: InputMaybe<StringQueryOperatorInput>;
	gid?: InputMaybe<IntQueryOperatorInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	ino?: InputMaybe<FloatQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	mode?: InputMaybe<IntQueryOperatorInput>;
	modifiedTime?: InputMaybe<DateQueryOperatorInput>;
	mtime?: InputMaybe<DateQueryOperatorInput>;
	mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
	name?: InputMaybe<StringQueryOperatorInput>;
	nlink?: InputMaybe<IntQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	prettySize?: InputMaybe<StringQueryOperatorInput>;
	rdev?: InputMaybe<IntQueryOperatorInput>;
	relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
	relativePath?: InputMaybe<StringQueryOperatorInput>;
	root?: InputMaybe<StringQueryOperatorInput>;
	size?: InputMaybe<IntQueryOperatorInput>;
	sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
	uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<DirectoryEdge>;
	field: Scalars["String"];
	fieldValue?: Maybe<Scalars["String"]>;
	group: Array<DirectoryGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<Directory>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type DirectoryGroupConnectionDistinctArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
	field: DirectoryFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type DirectoryGroupConnectionMaxArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
	fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type File = Node & {
	absolutePath: Scalars["String"];
	accessTime: Scalars["Date"];
	atime: Scalars["Date"];
	atimeMs: Scalars["Float"];
	base: Scalars["String"];
	birthTime: Scalars["Date"];
	/**
	 * @deprecated Use `birthTime` instead
	 */
	birthtime?: Maybe<Scalars["Date"]>;
	/**
	 * @deprecated Use `birthTime` instead
	 */
	birthtimeMs?: Maybe<Scalars["Float"]>;
	changeTime: Scalars["Date"];
	children: Array<Node>;
	ctime: Scalars["Date"];
	ctimeMs: Scalars["Float"];
	dev: Scalars["Int"];
	dir: Scalars["String"];
	ext: Scalars["String"];
	extension: Scalars["String"];
	gid: Scalars["Int"];
	id: Scalars["ID"];
	ino: Scalars["Float"];
	internal: Internal;
	mode: Scalars["Int"];
	modifiedTime: Scalars["Date"];
	mtime: Scalars["Date"];
	mtimeMs: Scalars["Float"];
	name: Scalars["String"];
	nlink: Scalars["Int"];
	parent?: Maybe<Node>;
	prettySize: Scalars["String"];
	rdev: Scalars["Int"];
	relativeDirectory: Scalars["String"];
	relativePath: Scalars["String"];
	root: Scalars["String"];
	size: Scalars["Int"];
	sourceInstanceName: Scalars["String"];
	uid: Scalars["Int"];
};

export type FileAccessTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type FileModifiedTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type FileConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<FileEdge>;
	group: Array<FileGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<File>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type FileConnectionDistinctArgs = {
	field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
	field: FileFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type FileConnectionMaxArgs = {
	field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
	field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
	field: FileFieldsEnum;
};

export type FileEdge = {
	next?: Maybe<File>;
	node: File;
	previous?: Maybe<File>;
};

export enum FileFieldsEnum {
	AbsolutePath = "absolutePath",
	AccessTime = "accessTime",
	Atime = "atime",
	AtimeMs = "atimeMs",
	Base = "base",
	BirthTime = "birthTime",
	Birthtime = "birthtime",
	BirthtimeMs = "birthtimeMs",
	ChangeTime = "changeTime",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Ctime = "ctime",
	CtimeMs = "ctimeMs",
	Dev = "dev",
	Dir = "dir",
	Ext = "ext",
	Extension = "extension",
	Gid = "gid",
	Id = "id",
	Ino = "ino",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Mode = "mode",
	ModifiedTime = "modifiedTime",
	Mtime = "mtime",
	MtimeMs = "mtimeMs",
	Name = "name",
	Nlink = "nlink",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrettySize = "prettySize",
	Rdev = "rdev",
	RelativeDirectory = "relativeDirectory",
	RelativePath = "relativePath",
	Root = "root",
	Size = "size",
	SourceInstanceName = "sourceInstanceName",
	Uid = "uid",
}

export type FileFilterInput = {
	absolutePath?: InputMaybe<StringQueryOperatorInput>;
	accessTime?: InputMaybe<DateQueryOperatorInput>;
	atime?: InputMaybe<DateQueryOperatorInput>;
	atimeMs?: InputMaybe<FloatQueryOperatorInput>;
	base?: InputMaybe<StringQueryOperatorInput>;
	birthTime?: InputMaybe<DateQueryOperatorInput>;
	birthtime?: InputMaybe<DateQueryOperatorInput>;
	birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
	changeTime?: InputMaybe<DateQueryOperatorInput>;
	children?: InputMaybe<NodeFilterListInput>;
	ctime?: InputMaybe<DateQueryOperatorInput>;
	ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
	dev?: InputMaybe<IntQueryOperatorInput>;
	dir?: InputMaybe<StringQueryOperatorInput>;
	ext?: InputMaybe<StringQueryOperatorInput>;
	extension?: InputMaybe<StringQueryOperatorInput>;
	gid?: InputMaybe<IntQueryOperatorInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	ino?: InputMaybe<FloatQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	mode?: InputMaybe<IntQueryOperatorInput>;
	modifiedTime?: InputMaybe<DateQueryOperatorInput>;
	mtime?: InputMaybe<DateQueryOperatorInput>;
	mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
	name?: InputMaybe<StringQueryOperatorInput>;
	nlink?: InputMaybe<IntQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	prettySize?: InputMaybe<StringQueryOperatorInput>;
	rdev?: InputMaybe<IntQueryOperatorInput>;
	relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
	relativePath?: InputMaybe<StringQueryOperatorInput>;
	root?: InputMaybe<StringQueryOperatorInput>;
	size?: InputMaybe<IntQueryOperatorInput>;
	sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
	uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<FileEdge>;
	field: Scalars["String"];
	fieldValue?: Maybe<Scalars["String"]>;
	group: Array<FileGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<File>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type FileGroupConnectionDistinctArgs = {
	field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
	field: FileFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type FileGroupConnectionMaxArgs = {
	field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
	field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
	field: FileFieldsEnum;
};

export type FileSortInput = {
	fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
	eq?: InputMaybe<Scalars["Float"]>;
	gt?: InputMaybe<Scalars["Float"]>;
	gte?: InputMaybe<Scalars["Float"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
	lt?: InputMaybe<Scalars["Float"]>;
	lte?: InputMaybe<Scalars["Float"]>;
	ne?: InputMaybe<Scalars["Float"]>;
	nin?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export enum GatsbyImageFormat {
	Auto = "AUTO",
	Avif = "AVIF",
	Jpg = "JPG",
	NoChange = "NO_CHANGE",
	Png = "PNG",
	Webp = "WEBP",
}

export enum GatsbyImageLayout {
	Constrained = "CONSTRAINED",
	Fixed = "FIXED",
	FullWidth = "FULL_WIDTH",
}

export enum GatsbyImagePlaceholder {
	Blurred = "BLURRED",
	DominantColor = "DOMINANT_COLOR",
	None = "NONE",
	TracedSvg = "TRACED_SVG",
}

export type IdQueryOperatorInput = {
	eq?: InputMaybe<Scalars["ID"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
	ne?: InputMaybe<Scalars["ID"]>;
	nin?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type ImgixFixed = {
	base64: Scalars["String"];
	height: Scalars["Int"];
	sizes: Scalars["String"];
	src: Scalars["String"];
	srcSet: Scalars["String"];
	srcSetWebp: Scalars["String"];
	srcWebp: Scalars["String"];
	width: Scalars["Int"];
};

export type ImgixFluid = {
	aspectRatio: Scalars["Float"];
	base64: Scalars["String"];
	sizes: Scalars["String"];
	src: Scalars["String"];
	srcSet: Scalars["String"];
	srcSetWebp: Scalars["String"];
	srcWebp: Scalars["String"];
};

export type ImgixParamsInput = {
	/**
	 * Alias for `pdfAnnotation`.
	 */
	annotation?: InputMaybe<Scalars["Boolean"]>;
	/**
	 * Specifies an aspect ratio to maintain when resizing and cropping the image.
	 * [See docs](https://docs.imgix.com/apis/url/size/ar).
	 */
	ar?: InputMaybe<Scalars["String"]>;
	/**
	 * Applies automatic enhancements to images. [See
	 * docs](https://docs.imgix.com/apis/url/auto).
	 */
	auto?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blend`.
	 */
	b?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blendAlign`.
	 */
	ba?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blendAlpha`.
	 */
	balph?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `blendCrop`.
	 */
	bc?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blendFit`.
	 */
	bf?: InputMaybe<Scalars["String"]>;
	/**
	 * Colors the background of padded and partially-transparent images. Default:
	 * `fff`. [See docs](https://docs.imgix.com/apis/url/bg).
	 */
	bg?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blendH`.
	 */
	bh?: InputMaybe<Scalars["Float"]>;
	/**
	 * Specifies the location of the blend image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend).
	 */
	blend?: InputMaybe<Scalars["String"]>;
	/**
	 * Changes the blend alignment relative to the parent image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-align).
	 */
	blendAlign?: InputMaybe<Scalars["String"]>;
	/**
	 * Changes the alpha of the blend image. Default: `100`. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-alpha).
	 */
	blendAlpha?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `blendColor`.
	 */
	blendClr?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies a color to use when applying the blend. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-color).
	 */
	blendColor?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies the type of crop for blend images. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-crop).
	 */
	blendCrop?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies the fit mode for blend images. Default: `clip`. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-fit).
	 */
	blendFit?: InputMaybe<Scalars["String"]>;
	/**
	 * Adjusts the height of the blend image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-h).
	 */
	blendH?: InputMaybe<Scalars["Float"]>;
	/**
	 * Sets the blend mode for a blend image. Default: `overlay`. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-mode).
	 */
	blendMode?: InputMaybe<Scalars["String"]>;
	/**
	 * Applies padding to the blend image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-pad).
	 */
	blendPad?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts the size of the blend image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-size).
	 */
	blendSize?: InputMaybe<Scalars["String"]>;
	/**
	 * Adjusts the width of the blend image. [See
	 * docs](https://docs.imgix.com/apis/url/blending/blend-w).
	 */
	blendW?: InputMaybe<Scalars["Float"]>;
	/**
	 * Adjusts the x-offset of the blend image relative to its parent. Default:
	 * `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x).
	 */
	blendX?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts the y-offset of the blend image relative to its parent. Default:
	 * `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y).
	 */
	blendY?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `blendAlign`.
	 */
	blendalign?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blendAlpha`.
	 */
	blendalpha?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `blendColor`.
	 */
	blendclr?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blendColor`.
	 */
	blendcolor?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blendCrop`.
	 */
	blendcrop?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blendFit`.
	 */
	blendfit?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blendH`.
	 */
	blendh?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `blendMode`.
	 */
	blendmode?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blendPad`.
	 */
	blendpad?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `blendSize`.
	 */
	blendsize?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blendW`.
	 */
	blendw?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `blendX`.
	 */
	blendx?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `blendY`.
	 */
	blendy?: InputMaybe<Scalars["Int"]>;
	/**
	 * Applies a gaussian blur to an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/blur).
	 */
	blur?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `blendMode`.
	 */
	bm?: InputMaybe<Scalars["String"]>;
	/**
	 * Applies a border to an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border).
	 */
	border?: InputMaybe<Scalars["String"]>;
	/**
	 * Sets bottom border of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom).
	 */
	borderBottom?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sets left border of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-left).
	 */
	borderLeft?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sets the outer radius of the image's border in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius).
	 */
	borderRadius?: InputMaybe<Scalars["String"]>;
	/**
	 * Sets the inner radius of the image's border in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner).
	 */
	borderRadiusInner?: InputMaybe<Scalars["String"]>;
	/**
	 * Sets right border of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-right).
	 */
	borderRight?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sets top border of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/border-top).
	 */
	borderTop?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `blendPad`.
	 */
	bp?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts the brightness of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/bri).
	 */
	bri?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `blendSize`.
	 */
	bs?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `blendW`.
	 */
	bw?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `blendX`.
	 */
	bx?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `blendY`.
	 */
	by?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sets one or more Client-Hints headers. [See
	 * docs](https://docs.imgix.com/apis/url/format/ch).
	 */
	ch?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies the output chroma subsampling rate. Default: `420`. [See
	 * docs](https://docs.imgix.com/apis/url/format/chromasub).
	 */
	chromasub?: InputMaybe<Scalars["Int"]>;
	/**
	 * Limits the number of unique colors in an image. [See
	 * docs](https://docs.imgix.com/apis/url/format/colorquant).
	 */
	colorquant?: InputMaybe<Scalars["Int"]>;
	/**
	 * Specifies how many colors to include in a palette-extraction response.
	 * Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors).
	 */
	colors?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts the contrast of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/con).
	 */
	con?: InputMaybe<Scalars["Int"]>;
	/**
	 * Specifies the radius value for a rounded corner mask. [See
	 * docs](https://docs.imgix.com/apis/url/mask/corner-radius).
	 */
	cornerRadius?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies how to crop an image. [See
	 * docs](https://docs.imgix.com/apis/url/size/crop).
	 */
	crop?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies the color space of the output image. [See
	 * docs](https://docs.imgix.com/apis/url/format/cs).
	 */
	cs?: InputMaybe<Scalars["String"]>;
	/**
	 * Forces a URL to use send-file in its response. [See
	 * docs](https://docs.imgix.com/apis/url/format/dl).
	 */
	dl?: InputMaybe<Scalars["String"]>;
	/**
	 * Sets the DPI value in the EXIF header. [See
	 * docs](https://docs.imgix.com/apis/url/format/dpi).
	 */
	dpi?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts the device-pixel ratio of the output image. Default: `1`. [See
	 * docs](https://docs.imgix.com/apis/url/dpr).
	 */
	dpr?: InputMaybe<Scalars["Float"]>;
	/**
	 * Applies a duotone effect to the source image. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/duotone).
	 */
	duotone?: InputMaybe<Scalars["String"]>;
	/**
	 * Changes the alpha of the duotone effect atop the source image. Default:
	 * `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha).
	 */
	duotoneAlpha?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts the exposure of the output image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/exp).
	 */
	exp?: InputMaybe<Scalars["Int"]>;
	/**
	 * A Unix timestamp specifying a UTC time. Requests made to this URL after
	 * that time will output a 404 status code. [See
	 * docs](https://docs.imgix.com/apis/url/expires).
	 */
	expires?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `fit`.
	 */
	f?: InputMaybe<Scalars["String"]>;
	/**
	 * Selects a face to crop to. [See
	 * docs](https://docs.imgix.com/apis/url/face-detection/faceindex).
	 */
	faceindex?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts padding around a selected face. Default: `1`. [See
	 * docs](https://docs.imgix.com/apis/url/face-detection/facepad).
	 */
	facepad?: InputMaybe<Scalars["Float"]>;
	/**
	 * Specifies that face data should be included in output when combined with
	 * `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces).
	 */
	faces?: InputMaybe<Scalars["Int"]>;
	/**
	 * Determines how to fill in additional space created by the fit setting. [See
	 * docs](https://docs.imgix.com/apis/url/fill/fill).
	 */
	fill?: InputMaybe<Scalars["String"]>;
	/**
	 * Sets the fill color for images with additional space created by the fit
	 * setting. Default: `fff`. [See
	 * docs](https://docs.imgix.com/apis/url/fill/fill-color).
	 */
	fillColor?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `fillColor`.
	 */
	fillcolor?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies how to map the source image to the output image dimensions.
	 * Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit).
	 */
	fit?: InputMaybe<Scalars["String"]>;
	/**
	 * Flips an image on a specified axis. [See
	 * docs](https://docs.imgix.com/apis/url/rotation/flip).
	 */
	flip?: InputMaybe<Scalars["String"]>;
	/**
	 * Changes the format of the output image. [See
	 * docs](https://docs.imgix.com/apis/url/format/fm).
	 */
	fm?: InputMaybe<Scalars["String"]>;
	/**
	 * Displays crosshairs identifying the location of the set focal point.
	 * Default: `false`. [See
	 * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug).
	 */
	fpDebug?: InputMaybe<Scalars["Boolean"]>;
	/**
	 * Sets the relative horizontal value for the focal point of an image. [See
	 * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x).
	 */
	fpX?: InputMaybe<Scalars["Float"]>;
	/**
	 * Sets the relative vertical value for the focal point of an image. [See
	 * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y).
	 */
	fpY?: InputMaybe<Scalars["Float"]>;
	/**
	 * Sets the relative zoom value for the focal point of an image. [See
	 * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z).
	 */
	fpZ?: InputMaybe<Scalars["Float"]>;
	/**
	 * Adjusts the gamma of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/gam).
	 */
	gam?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sets grid colors for the transparency checkerboard grid.
	 */
	gridColors?: InputMaybe<Scalars["String"]>;
	/**
	 * Sets grid size for the transparency checkerboard grid.
	 */
	gridSize?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts the height of the output image. [See
	 * docs](https://docs.imgix.com/apis/url/size/h).
	 */
	h?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `h`.
	 */
	height?: InputMaybe<Scalars["Float"]>;
	/**
	 * Adjusts the highlights of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/high).
	 */
	high?: InputMaybe<Scalars["Int"]>;
	/**
	 * Applies a half-tone effect to the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/htn).
	 */
	htn?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts the hue of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/hue).
	 */
	hue?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `invert`.
	 */
	inv?: InputMaybe<Scalars["Boolean"]>;
	/**
	 * Inverts the colors on the source image. Default: `false`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/invert).
	 */
	invert?: InputMaybe<Scalars["Boolean"]>;
	/**
	 * Determine if IPTC data should be passed for JPEG images.
	 */
	iptc?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies that the output image should be a lossless variant. Default:
	 * `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless).
	 */
	lossless?: InputMaybe<Scalars["Boolean"]>;
	/**
	 * Alias for `mark`.
	 */
	m?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `markAlign`.
	 */
	ma?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `markAlpha`.
	 */
	malph?: InputMaybe<Scalars["Int"]>;
	/**
	 * Specifies the location of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark).
	 */
	mark?: InputMaybe<Scalars["String"]>;
	/**
	 * Changes the watermark alignment relative to the parent image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-align).
	 */
	markAlign?: InputMaybe<Scalars["String"]>;
	/**
	 * Changes the alpha of the watermark image. Default: `100`. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-alpha).
	 */
	markAlpha?: InputMaybe<Scalars["Int"]>;
	/**
	 * Changes base URL of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-base).
	 */
	markBase?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies the fit mode for watermark images. Default: `clip`. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-fit).
	 */
	markFit?: InputMaybe<Scalars["String"]>;
	/**
	 * Adjusts the height of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-h).
	 */
	markH?: InputMaybe<Scalars["Float"]>;
	/**
	 * Applies padding to the watermark image. Default: `5`. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-pad).
	 */
	markPad?: InputMaybe<Scalars["Int"]>;
	/**
	 * Rotates a watermark or tiled watermarks by a specified number of degrees.
	 * Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot).
	 */
	markRot?: InputMaybe<Scalars["Float"]>;
	/**
	 * Adjusts the scale of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-scale).
	 */
	markScale?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adds tiled watermark. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-tile).
	 */
	markTile?: InputMaybe<Scalars["String"]>;
	/**
	 * Adjusts the width of the watermark image. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-w).
	 */
	markW?: InputMaybe<Scalars["Float"]>;
	/**
	 * Adjusts the x-offset of the watermark image relative to its parent. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-x).
	 */
	markX?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts the y-offset of the watermark image relative to its parent. [See
	 * docs](https://docs.imgix.com/apis/url/watermark/mark-y).
	 */
	markY?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `markAlign`.
	 */
	markalign?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `markAlpha`.
	 */
	markalpha?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `markBase`.
	 */
	markbase?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `markFit`.
	 */
	markfit?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `markH`.
	 */
	markh?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `markPad`.
	 */
	markpad?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `markScale`.
	 */
	markscale?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `markTile`.
	 */
	marktile?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `markW`.
	 */
	markw?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `markX`.
	 */
	markx?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `markY`.
	 */
	marky?: InputMaybe<Scalars["Int"]>;
	/**
	 * Defines the type of mask and specifies the URL if that type is selected.
	 * [See docs](https://docs.imgix.com/apis/url/mask).
	 */
	mask?: InputMaybe<Scalars["String"]>;
	/**
	 * Colors the background of the transparent mask area of images. Default:
	 * `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg).
	 */
	maskBg?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `maskBg`.
	 */
	maskbg?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies the maximum height of the output image in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/size/max-height).
	 */
	maxH?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `maxH`.
	 */
	maxHeight?: InputMaybe<Scalars["Int"]>;
	/**
	 * Specifies the maximum width of the output image in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/size/max-width).
	 */
	maxW?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `maxW`.
	 */
	maxWidth?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `markBase`.
	 */
	mb?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `markFit`.
	 */
	mf?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `markH`.
	 */
	mh?: InputMaybe<Scalars["Float"]>;
	/**
	 * Specifies the minimum height of the output image in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/size/min-height).
	 */
	minH?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `minH`.
	 */
	minHeight?: InputMaybe<Scalars["Int"]>;
	/**
	 * Specifies the minimum width of the output image in pixels. [See
	 * docs](https://docs.imgix.com/apis/url/size/min-width).
	 */
	minW?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `minW`.
	 */
	minWidth?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `monochrome`.
	 */
	mono?: InputMaybe<Scalars["String"]>;
	/**
	 * Applies a monochrome effect to the source image. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/monochrome).
	 */
	monochrome?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `markPad`.
	 */
	mp?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `markScale`.
	 */
	ms?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `markTile`.
	 */
	mtile?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `markW`.
	 */
	mw?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `markX`.
	 */
	mx?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `markY`.
	 */
	my?: InputMaybe<Scalars["Int"]>;
	/**
	 * Reduces the noise in an image. Default: `20`. [See
	 * docs](https://docs.imgix.com/apis/url/noise-reduction/nr).
	 */
	nr?: InputMaybe<Scalars["Int"]>;
	/**
	 * Provides a threshold by which to sharpen an image. Default: `20`. [See
	 * docs](https://docs.imgix.com/apis/url/noise-reduction/nrs).
	 */
	nrs?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `orient`.
	 */
	or?: InputMaybe<Scalars["Int"]>;
	/**
	 * Changes the image orientation. [See
	 * docs](https://docs.imgix.com/apis/url/rotation/orient).
	 */
	orient?: InputMaybe<Scalars["Int"]>;
	/**
	 * Pads an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/pad).
	 */
	pad?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sets bottom padding of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom).
	 */
	padBottom?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sets left padding of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left).
	 */
	padLeft?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sets right padding of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right).
	 */
	padRight?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sets top padding of an image. [See
	 * docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top).
	 */
	padTop?: InputMaybe<Scalars["Int"]>;
	/**
	 * Selects a page from a PDF for display. Default: `1`. [See
	 * docs](https://docs.imgix.com/apis/url/pdf/page).
	 */
	page?: InputMaybe<Scalars["Int"]>;
	/**
	 * Specifies an output format for palette-extraction. [See
	 * docs](https://docs.imgix.com/apis/url/color-palette/palette).
	 */
	palette?: InputMaybe<Scalars["String"]>;
	/**
	 * Enables or disables PDF annotation. Default: `true`. [See
	 * docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation).
	 */
	pdfAnnotation?: InputMaybe<Scalars["Boolean"]>;
	/**
	 * Specifies a CSS prefix for all classes in palette-extraction. Default:
	 * `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix).
	 */
	prefix?: InputMaybe<Scalars["String"]>;
	/**
	 * Applies a pixelation effect to an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/px).
	 */
	px?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts the quality of an output image. Default: `75`. [See
	 * docs](https://docs.imgix.com/apis/url/format/q).
	 */
	q?: InputMaybe<Scalars["Int"]>;
	/**
	 * Crops an image to a specified rectangle. [See
	 * docs](https://docs.imgix.com/apis/url/size/rect).
	 */
	rect?: InputMaybe<Scalars["String"]>;
	/**
	 * Rotates an image by a specified number of degrees. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/rotation/rot).
	 */
	rot?: InputMaybe<Scalars["Float"]>;
	/**
	 * Adjusts the saturation of an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/sat).
	 */
	sat?: InputMaybe<Scalars["Int"]>;
	/**
	 * Applies a sepia effect to an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/stylize/sepia).
	 */
	sepia?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts the highlights of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/shad).
	 */
	shad?: InputMaybe<Scalars["Float"]>;
	/**
	 * Adjusts the sharpness of the source image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/sharp).
	 */
	sharp?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `txt`.
	 */
	t?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtAlign`.
	 */
	ta?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtColor`.
	 */
	tc?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtClip`.
	 */
	tcl?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtFont`.
	 */
	tf?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtLine`.
	 */
	tl?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `txtPad`.
	 */
	tp?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adds checkerboard behind images which support transparency. [See
	 * docs](https://docs.imgix.com/apis/url/fill/transparency).
	 */
	transparency?: InputMaybe<Scalars["String"]>;
	/**
	 * Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim).
	 */
	trim?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies a trim color on a trim operation. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-color).
	 */
	trimColor?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies the mean difference on a trim operation. Default: `11`. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-md).
	 */
	trimMd?: InputMaybe<Scalars["Float"]>;
	/**
	 * Pads the area of the source image before trimming. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-pad).
	 */
	trimPad?: InputMaybe<Scalars["Int"]>;
	/**
	 * Specifies the standard deviation on a trim operation. Default: `10`. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-sd).
	 */
	trimSd?: InputMaybe<Scalars["Float"]>;
	/**
	 * Specifies the tolerance on a trim operation. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/trim/trim-tol).
	 */
	trimTol?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `trimColor`.
	 */
	trimcolor?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `trimMd`.
	 */
	trimmd?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `trimPad`.
	 */
	trimpad?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `trimSd`.
	 */
	trimsd?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `trimTol`.
	 */
	trimtol?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `txtShad`.
	 */
	tsh?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `txtSize`.
	 */
	tsz?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `txtTrack`.
	 */
	tt?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt).
	 */
	txt?: InputMaybe<Scalars["String"]>;
	/**
	 * Sets the vertical and horizontal alignment of rendered text relative to the
	 * base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align).
	 */
	txtAlign?: InputMaybe<Scalars["String"]>;
	/**
	 * Sets the clipping properties of rendered text. Default: `end`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-clip).
	 */
	txtClip?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtColor`.
	 */
	txtClr?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies the color of rendered text. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-color).
	 */
	txtColor?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies the fit approach for rendered text. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-fit).
	 */
	txtFit?: InputMaybe<Scalars["String"]>;
	/**
	 * Selects a font for rendered text. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-font).
	 */
	txtFont?: InputMaybe<Scalars["String"]>;
	/**
	 * Sets the leading (line spacing) for rendered text. Only works on the
	 * multi-line text endpoint. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/typesetting/txt-lead).
	 */
	txtLead?: InputMaybe<Scalars["Int"]>;
	/**
	 * Controls the level of ligature substitution. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-lig).
	 */
	txtLig?: InputMaybe<Scalars["Int"]>;
	/**
	 * Outlines the rendered text with a specified color. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-line).
	 */
	txtLine?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `txtLineColor`.
	 */
	txtLineClr?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies a text outline color. Default: `fff`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-line-color).
	 */
	txtLineColor?: InputMaybe<Scalars["String"]>;
	/**
	 * Specifies the padding (in device-independent pixels) between a textbox and
	 * the edges of the base image. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-pad).
	 */
	txtPad?: InputMaybe<Scalars["Int"]>;
	/**
	 * Applies a shadow to rendered text. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-shad).
	 */
	txtShad?: InputMaybe<Scalars["Float"]>;
	/**
	 * Sets the font size of rendered text. Default: `12`. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-size).
	 */
	txtSize?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sets the tracking (letter spacing) for rendered text. Only works on the
	 * multi-line text endpoint. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/typesetting/txt-track).
	 */
	txtTrack?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sets the width of rendered text. [See
	 * docs](https://docs.imgix.com/apis/url/text/txt-width).
	 */
	txtWidth?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `txtAlign`.
	 */
	txtalign?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtClip`.
	 */
	txtclip?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtColor`.
	 */
	txtclr?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtColor`.
	 */
	txtcolor?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtFit`.
	 */
	txtfit?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtFont`.
	 */
	txtfont?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtLead`.
	 */
	txtlead?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `txtLig`.
	 */
	txtlig?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `txtLine`.
	 */
	txtline?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `txtLineColor`.
	 */
	txtlineclr?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtLineColor`.
	 */
	txtlinecolor?: InputMaybe<Scalars["String"]>;
	/**
	 * Alias for `txtPad`.
	 */
	txtpad?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `txtShad`.
	 */
	txtshad?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `txtSize`.
	 */
	txtsize?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `txtTrack`.
	 */
	txttrack?: InputMaybe<Scalars["Int"]>;
	/**
	 * Alias for `txtWidth`.
	 */
	txtwidth?: InputMaybe<Scalars["Int"]>;
	/**
	 * Sharpens the source image using an unsharp mask. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/usm).
	 */
	usm?: InputMaybe<Scalars["Int"]>;
	/**
	 * Specifies the radius for an unsharp mask operation. Default: `2.5`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/usmrad).
	 */
	usmrad?: InputMaybe<Scalars["Float"]>;
	/**
	 * Adjusts the vibrance of an image. Default: `0`. [See
	 * docs](https://docs.imgix.com/apis/url/adjustment/vib).
	 */
	vib?: InputMaybe<Scalars["Int"]>;
	/**
	 * Adjusts the width of the output image. [See
	 * docs](https://docs.imgix.com/apis/url/size/w).
	 */
	w?: InputMaybe<Scalars["Float"]>;
	/**
	 * Alias for `w`.
	 */
	width?: InputMaybe<Scalars["Float"]>;
};

export enum ImgixPlaceholder {
	Blurred = "BLURRED",
	DominantColor = "DOMINANT_COLOR",
	None = "NONE",
}

export type IntQueryOperatorInput = {
	eq?: InputMaybe<Scalars["Int"]>;
	gt?: InputMaybe<Scalars["Int"]>;
	gte?: InputMaybe<Scalars["Int"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
	lt?: InputMaybe<Scalars["Int"]>;
	lte?: InputMaybe<Scalars["Int"]>;
	ne?: InputMaybe<Scalars["Int"]>;
	nin?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type Internal = {
	content?: Maybe<Scalars["String"]>;
	contentDigest: Scalars["String"];
	description?: Maybe<Scalars["String"]>;
	fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
	ignoreType?: Maybe<Scalars["Boolean"]>;
	mediaType?: Maybe<Scalars["String"]>;
	owner: Scalars["String"];
	type: Scalars["String"];
};

export type InternalFilterInput = {
	content?: InputMaybe<StringQueryOperatorInput>;
	contentDigest?: InputMaybe<StringQueryOperatorInput>;
	description?: InputMaybe<StringQueryOperatorInput>;
	fieldOwners?: InputMaybe<StringQueryOperatorInput>;
	ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
	mediaType?: InputMaybe<StringQueryOperatorInput>;
	owner?: InputMaybe<StringQueryOperatorInput>;
	type?: InputMaybe<StringQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
	eq?: InputMaybe<Scalars["JSON"]>;
	glob?: InputMaybe<Scalars["JSON"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
	ne?: InputMaybe<Scalars["JSON"]>;
	nin?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
	regex?: InputMaybe<Scalars["JSON"]>;
};

/**
 * Node Interface
 */
export type Node = {
	children: Array<Node>;
	id: Scalars["ID"];
	internal: Internal;
	parent?: Maybe<Node>;
};

export type NodeFilterInput = {
	children?: InputMaybe<NodeFilterListInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
	elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PageInfo = {
	currentPage: Scalars["Int"];
	hasNextPage: Scalars["Boolean"];
	hasPreviousPage: Scalars["Boolean"];
	itemCount: Scalars["Int"];
	pageCount: Scalars["Int"];
	perPage?: Maybe<Scalars["Int"]>;
	totalCount: Scalars["Int"];
};

export type PrismicAllDocumentTypes = PrismicPage;

export type PrismicAlternateLanguageType = {
	document?: Maybe<PrismicAllDocumentTypes>;
	id?: Maybe<Scalars["ID"]>;
	lang?: Maybe<Scalars["String"]>;
	raw?: Maybe<Scalars["JSON"]>;
	type?: Maybe<Scalars["String"]>;
	uid?: Maybe<Scalars["String"]>;
};

export type PrismicAlternateLanguageTypeFilterInput = {
	id?: InputMaybe<IdQueryOperatorInput>;
	lang?: InputMaybe<StringQueryOperatorInput>;
	raw?: InputMaybe<JsonQueryOperatorInput>;
	type?: InputMaybe<StringQueryOperatorInput>;
	uid?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicAlternateLanguageTypeFilterListInput = {
	elemMatch?: InputMaybe<PrismicAlternateLanguageTypeFilterInput>;
};

export type PrismicEmbedType = Node & {
	children: Array<Node>;
	id: Scalars["ID"];
	internal: Internal;
	parent?: Maybe<Node>;
};

export type PrismicEmbedTypeConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<PrismicEmbedTypeEdge>;
	group: Array<PrismicEmbedTypeGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<PrismicEmbedType>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type PrismicEmbedTypeConnectionDistinctArgs = {
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionGroupArgs = {
	field: PrismicEmbedTypeFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type PrismicEmbedTypeConnectionMaxArgs = {
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionMinArgs = {
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionSumArgs = {
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeEdge = {
	next?: Maybe<PrismicEmbedType>;
	node: PrismicEmbedType;
	previous?: Maybe<PrismicEmbedType>;
};

export enum PrismicEmbedTypeFieldsEnum {
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
}

export type PrismicEmbedTypeFilterInput = {
	children?: InputMaybe<NodeFilterListInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	parent?: InputMaybe<NodeFilterInput>;
};

export type PrismicEmbedTypeGroupConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<PrismicEmbedTypeEdge>;
	field: Scalars["String"];
	fieldValue?: Maybe<Scalars["String"]>;
	group: Array<PrismicEmbedTypeGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<PrismicEmbedType>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type PrismicEmbedTypeGroupConnectionDistinctArgs = {
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeGroupConnectionGroupArgs = {
	field: PrismicEmbedTypeFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type PrismicEmbedTypeGroupConnectionMaxArgs = {
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeGroupConnectionMinArgs = {
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeGroupConnectionSumArgs = {
	field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicEmbedTypeFieldsEnum>>>;
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PrismicGeoPointType = {
	latitude: Scalars["Float"];
	longitude: Scalars["Float"];
};

export type PrismicImageDimensionsType = {
	height: Scalars["Int"];
	width: Scalars["Int"];
};

export type PrismicImageThumbnailType = {
	alt?: Maybe<Scalars["String"]>;
	copyright?: Maybe<Scalars["String"]>;
	dimensions?: Maybe<PrismicImageDimensionsType>;
	/**
	 * Should be used to generate fixed-width images (i.e. the size of the image
	 * doesn't change when the size of the browser changes, and are "fixed").
	 * Returns data compatible with gatsby-image. Instead of accessing this data
	 * directly, the GatsbySourceImgixFixed fragment should be used. See the
	 * project's README for more information.
	 */
	fixed?: Maybe<ImgixFixed>;
	/**
	 * Should be used to generate fluid-width images (i.e. images that change when
	 * the size of the browser changes). Returns data compatible with
	 * gatsby-image. Instead of accessing this data directly, the
	 * GatsbySourceImgixFluid fragment should be used. See the project's README
	 * for more information.
	 */
	fluid?: Maybe<ImgixFluid>;
	gatsbyImageData?: Maybe<Scalars["JSON"]>;
	localFile?: Maybe<File>;
	/**
	 * A plain imgix URL with the URL and params applied.
	 */
	url?: Maybe<Scalars["String"]>;
};

export type PrismicImageThumbnailTypeFixedArgs = {
	height?: InputMaybe<Scalars["Int"]>;
	imgixParams?: InputMaybe<ImgixParamsInput>;
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
	quality?: InputMaybe<Scalars["Int"]>;
	width?: InputMaybe<Scalars["Int"]>;
};

export type PrismicImageThumbnailTypeFluidArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>;
	maxHeight?: InputMaybe<Scalars["Int"]>;
	maxWidth?: InputMaybe<Scalars["Int"]>;
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
	srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type PrismicImageThumbnailTypeGatsbyImageDataArgs = {
	aspectRatio?: InputMaybe<Scalars["Float"]>;
	backgroundColor?: InputMaybe<Scalars["String"]>;
	breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
	height?: InputMaybe<Scalars["Int"]>;
	imgixParams?: InputMaybe<ImgixParamsInput>;
	layout?: InputMaybe<GatsbyImageLayout>;
	outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
	placeholder?: InputMaybe<ImgixPlaceholder>;
	placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
	sizes?: InputMaybe<Scalars["String"]>;
	srcSetMaxWidth?: InputMaybe<Scalars["Int"]>;
	srcSetMinWidth?: InputMaybe<Scalars["Int"]>;
	width?: InputMaybe<Scalars["Int"]>;
	widthTolerance?: InputMaybe<Scalars["Float"]>;
};

export type PrismicImageThumbnailTypeUrlArgs = {
	imgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicLinkType = {
	document?: Maybe<PrismicAllDocumentTypes>;
	id?: Maybe<Scalars["ID"]>;
	isBroken?: Maybe<Scalars["Boolean"]>;
	lang?: Maybe<Scalars["String"]>;
	link_type?: Maybe<PrismicLinkTypeEnum>;
	localFile?: Maybe<File>;
	raw?: Maybe<Scalars["JSON"]>;
	size?: Maybe<Scalars["Int"]>;
	slug?: Maybe<Scalars["String"]>;
	tags?: Maybe<Array<Maybe<Scalars["String"]>>>;
	target?: Maybe<Scalars["String"]>;
	type?: Maybe<Scalars["String"]>;
	uid?: Maybe<Scalars["String"]>;
	url?: Maybe<Scalars["String"]>;
};

export enum PrismicLinkTypeEnum {
	Any = "Any",
	Document = "Document",
	Media = "Media",
	Web = "Web",
}

export type PrismicPage = Node & {
	_previewable: Scalars["ID"];
	alternate_languages: Array<PrismicAlternateLanguageType>;
	children: Array<Node>;
	data: PrismicPageDataType;
	dataRaw: Scalars["JSON"];
	first_publication_date: Scalars["Date"];
	gatsbyPath?: Maybe<Scalars["String"]>;
	href: Scalars["String"];
	id: Scalars["ID"];
	internal: Internal;
	lang: Scalars["String"];
	last_publication_date: Scalars["Date"];
	parent?: Maybe<Node>;
	prismicId: Scalars["ID"];
	tags: Array<Scalars["String"]>;
	type: Scalars["String"];
	uid: Scalars["String"];
	url?: Maybe<Scalars["String"]>;
};

export type PrismicPageFirst_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type PrismicPageGatsbyPathArgs = {
	filePath?: InputMaybe<Scalars["String"]>;
};

export type PrismicPageLast_Publication_DateArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type PrismicPageConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<PrismicPageEdge>;
	group: Array<PrismicPageGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<PrismicPage>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type PrismicPageConnectionDistinctArgs = {
	field: PrismicPageFieldsEnum;
};

export type PrismicPageConnectionGroupArgs = {
	field: PrismicPageFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type PrismicPageConnectionMaxArgs = {
	field: PrismicPageFieldsEnum;
};

export type PrismicPageConnectionMinArgs = {
	field: PrismicPageFieldsEnum;
};

export type PrismicPageConnectionSumArgs = {
	field: PrismicPageFieldsEnum;
};

export type PrismicPageDataBodySlicesType = PrismicPageDataBodyText;

export type PrismicPageDataBodyText = PrismicSliceType & {
	id: Scalars["ID"];
	primary: PrismicPageDataBodyTextPrimary;
	slice_label?: Maybe<Scalars["String"]>;
	slice_type: Scalars["String"];
};

export type PrismicPageDataBodyTextPrimary = {
	text?: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageDataType = {
	body: Array<PrismicPageDataBodySlicesType>;
	title?: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageDataTypeFilterInput = {
	title?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicPageEdge = {
	next?: Maybe<PrismicPage>;
	node: PrismicPage;
	previous?: Maybe<PrismicPage>;
};

export enum PrismicPageFieldsEnum {
	Previewable = "_previewable",
	AlternateLanguages = "alternate_languages",
	AlternateLanguagesId = "alternate_languages___id",
	AlternateLanguagesLang = "alternate_languages___lang",
	AlternateLanguagesRaw = "alternate_languages___raw",
	AlternateLanguagesType = "alternate_languages___type",
	AlternateLanguagesUid = "alternate_languages___uid",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	DataRaw = "dataRaw",
	DataTitleHtml = "data___title___html",
	DataTitleRaw = "data___title___raw",
	DataTitleRichText = "data___title___richText",
	DataTitleText = "data___title___text",
	FirstPublicationDate = "first_publication_date",
	GatsbyPath = "gatsbyPath",
	Href = "href",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Lang = "lang",
	LastPublicationDate = "last_publication_date",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PrismicId = "prismicId",
	Tags = "tags",
	Type = "type",
	Uid = "uid",
	Url = "url",
}

export type PrismicPageFilterInput = {
	_previewable?: InputMaybe<IdQueryOperatorInput>;
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
	children?: InputMaybe<NodeFilterListInput>;
	data?: InputMaybe<PrismicPageDataTypeFilterInput>;
	dataRaw?: InputMaybe<JsonQueryOperatorInput>;
	first_publication_date?: InputMaybe<DateQueryOperatorInput>;
	gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
	href?: InputMaybe<StringQueryOperatorInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	lang?: InputMaybe<StringQueryOperatorInput>;
	last_publication_date?: InputMaybe<DateQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	prismicId?: InputMaybe<IdQueryOperatorInput>;
	tags?: InputMaybe<StringQueryOperatorInput>;
	type?: InputMaybe<StringQueryOperatorInput>;
	uid?: InputMaybe<StringQueryOperatorInput>;
	url?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicPageGroupConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<PrismicPageEdge>;
	field: Scalars["String"];
	fieldValue?: Maybe<Scalars["String"]>;
	group: Array<PrismicPageGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<PrismicPage>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type PrismicPageGroupConnectionDistinctArgs = {
	field: PrismicPageFieldsEnum;
};

export type PrismicPageGroupConnectionGroupArgs = {
	field: PrismicPageFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type PrismicPageGroupConnectionMaxArgs = {
	field: PrismicPageFieldsEnum;
};

export type PrismicPageGroupConnectionMinArgs = {
	field: PrismicPageFieldsEnum;
};

export type PrismicPageGroupConnectionSumArgs = {
	field: PrismicPageFieldsEnum;
};

export type PrismicPageSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicPageFieldsEnum>>>;
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PrismicSharedSliceType = {
	id: Scalars["ID"];
	slice_label?: Maybe<Scalars["String"]>;
	slice_type: Scalars["String"];
	variation: Scalars["String"];
	version: Scalars["String"];
};

export type PrismicSliceType = {
	id: Scalars["ID"];
	slice_label?: Maybe<Scalars["String"]>;
	slice_type: Scalars["String"];
};

export type PrismicStructuredTextQueryOperatorInput = {
	eq?: InputMaybe<Scalars["PrismicStructuredText"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["PrismicStructuredText"]>>>;
	ne?: InputMaybe<Scalars["PrismicStructuredText"]>;
	nin?: InputMaybe<Array<InputMaybe<Scalars["PrismicStructuredText"]>>>;
};

export type PrismicStructuredTextType = {
	html?: Maybe<Scalars["String"]>;
	/**
	 * @deprecated This field has been renamed to `richText`. The `richText` field
	 *   has the same value the `raw` field.
	 */
	raw: Scalars["PrismicStructuredText"];
	richText: Scalars["PrismicStructuredText"];
	text?: Maybe<Scalars["String"]>;
};

export type PrismicStructuredTextTypeFilterInput = {
	html?: InputMaybe<StringQueryOperatorInput>;
	raw?: InputMaybe<PrismicStructuredTextQueryOperatorInput>;
	richText?: InputMaybe<PrismicStructuredTextQueryOperatorInput>;
	text?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicTypePathType = Node & {
	children: Array<Node>;
	id: Scalars["ID"];
	internal: Internal;
	kind: Scalars["String"];
	parent?: Maybe<Node>;
	path: Array<Scalars["String"]>;
	type: Scalars["String"];
};

export type PrismicTypePathTypeConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<PrismicTypePathTypeEdge>;
	group: Array<PrismicTypePathTypeGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<PrismicTypePathType>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type PrismicTypePathTypeConnectionDistinctArgs = {
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionGroupArgs = {
	field: PrismicTypePathTypeFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type PrismicTypePathTypeConnectionMaxArgs = {
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionMinArgs = {
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionSumArgs = {
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeEdge = {
	next?: Maybe<PrismicTypePathType>;
	node: PrismicTypePathType;
	previous?: Maybe<PrismicTypePathType>;
};

export enum PrismicTypePathTypeFieldsEnum {
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Kind = "kind",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	Path = "path",
	Type = "type",
}

export type PrismicTypePathTypeFilterInput = {
	children?: InputMaybe<NodeFilterListInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	kind?: InputMaybe<StringQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	path?: InputMaybe<StringQueryOperatorInput>;
	type?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicTypePathTypeGroupConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<PrismicTypePathTypeEdge>;
	field: Scalars["String"];
	fieldValue?: Maybe<Scalars["String"]>;
	group: Array<PrismicTypePathTypeGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<PrismicTypePathType>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type PrismicTypePathTypeGroupConnectionDistinctArgs = {
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeGroupConnectionGroupArgs = {
	field: PrismicTypePathTypeFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type PrismicTypePathTypeGroupConnectionMaxArgs = {
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeGroupConnectionMinArgs = {
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeGroupConnectionSumArgs = {
	field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeSortInput = {
	fields?: InputMaybe<Array<InputMaybe<PrismicTypePathTypeFieldsEnum>>>;
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Query = {
	allDirectory: DirectoryConnection;
	allFile: FileConnection;
	allPrismicEmbedType: PrismicEmbedTypeConnection;
	allPrismicPage: PrismicPageConnection;
	allPrismicTypePathType: PrismicTypePathTypeConnection;
	allSite: SiteConnection;
	allSiteBuildMetadata: SiteBuildMetadataConnection;
	allSiteFunction: SiteFunctionConnection;
	allSitePage: SitePageConnection;
	allSitePlugin: SitePluginConnection;
	directory?: Maybe<Directory>;
	file?: Maybe<File>;
	prismicEmbedType?: Maybe<PrismicEmbedType>;
	prismicPage?: Maybe<PrismicPage>;
	prismicTypePathType?: Maybe<PrismicTypePathType>;
	site?: Maybe<Site>;
	siteBuildMetadata?: Maybe<SiteBuildMetadata>;
	siteFunction?: Maybe<SiteFunction>;
	sitePage?: Maybe<SitePage>;
	sitePlugin?: Maybe<SitePlugin>;
};

export type QueryAllDirectoryArgs = {
	filter?: InputMaybe<DirectoryFilterInput>;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
	sort?: InputMaybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
	filter?: InputMaybe<FileFilterInput>;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
	sort?: InputMaybe<FileSortInput>;
};

export type QueryAllPrismicEmbedTypeArgs = {
	filter?: InputMaybe<PrismicEmbedTypeFilterInput>;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
	sort?: InputMaybe<PrismicEmbedTypeSortInput>;
};

export type QueryAllPrismicPageArgs = {
	filter?: InputMaybe<PrismicPageFilterInput>;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
	sort?: InputMaybe<PrismicPageSortInput>;
};

export type QueryAllPrismicTypePathTypeArgs = {
	filter?: InputMaybe<PrismicTypePathTypeFilterInput>;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
	sort?: InputMaybe<PrismicTypePathTypeSortInput>;
};

export type QueryAllSiteArgs = {
	filter?: InputMaybe<SiteFilterInput>;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
	sort?: InputMaybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
	filter?: InputMaybe<SiteBuildMetadataFilterInput>;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
	sort?: InputMaybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
	filter?: InputMaybe<SiteFunctionFilterInput>;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
	sort?: InputMaybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
	filter?: InputMaybe<SitePageFilterInput>;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
	sort?: InputMaybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
	filter?: InputMaybe<SitePluginFilterInput>;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
	sort?: InputMaybe<SitePluginSortInput>;
};

export type QueryDirectoryArgs = {
	absolutePath?: InputMaybe<StringQueryOperatorInput>;
	accessTime?: InputMaybe<DateQueryOperatorInput>;
	atime?: InputMaybe<DateQueryOperatorInput>;
	atimeMs?: InputMaybe<FloatQueryOperatorInput>;
	base?: InputMaybe<StringQueryOperatorInput>;
	birthTime?: InputMaybe<DateQueryOperatorInput>;
	birthtime?: InputMaybe<DateQueryOperatorInput>;
	birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
	changeTime?: InputMaybe<DateQueryOperatorInput>;
	children?: InputMaybe<NodeFilterListInput>;
	ctime?: InputMaybe<DateQueryOperatorInput>;
	ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
	dev?: InputMaybe<IntQueryOperatorInput>;
	dir?: InputMaybe<StringQueryOperatorInput>;
	ext?: InputMaybe<StringQueryOperatorInput>;
	extension?: InputMaybe<StringQueryOperatorInput>;
	gid?: InputMaybe<IntQueryOperatorInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	ino?: InputMaybe<FloatQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	mode?: InputMaybe<IntQueryOperatorInput>;
	modifiedTime?: InputMaybe<DateQueryOperatorInput>;
	mtime?: InputMaybe<DateQueryOperatorInput>;
	mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
	name?: InputMaybe<StringQueryOperatorInput>;
	nlink?: InputMaybe<IntQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	prettySize?: InputMaybe<StringQueryOperatorInput>;
	rdev?: InputMaybe<IntQueryOperatorInput>;
	relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
	relativePath?: InputMaybe<StringQueryOperatorInput>;
	root?: InputMaybe<StringQueryOperatorInput>;
	size?: InputMaybe<IntQueryOperatorInput>;
	sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
	uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
	absolutePath?: InputMaybe<StringQueryOperatorInput>;
	accessTime?: InputMaybe<DateQueryOperatorInput>;
	atime?: InputMaybe<DateQueryOperatorInput>;
	atimeMs?: InputMaybe<FloatQueryOperatorInput>;
	base?: InputMaybe<StringQueryOperatorInput>;
	birthTime?: InputMaybe<DateQueryOperatorInput>;
	birthtime?: InputMaybe<DateQueryOperatorInput>;
	birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
	changeTime?: InputMaybe<DateQueryOperatorInput>;
	children?: InputMaybe<NodeFilterListInput>;
	ctime?: InputMaybe<DateQueryOperatorInput>;
	ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
	dev?: InputMaybe<IntQueryOperatorInput>;
	dir?: InputMaybe<StringQueryOperatorInput>;
	ext?: InputMaybe<StringQueryOperatorInput>;
	extension?: InputMaybe<StringQueryOperatorInput>;
	gid?: InputMaybe<IntQueryOperatorInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	ino?: InputMaybe<FloatQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	mode?: InputMaybe<IntQueryOperatorInput>;
	modifiedTime?: InputMaybe<DateQueryOperatorInput>;
	mtime?: InputMaybe<DateQueryOperatorInput>;
	mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
	name?: InputMaybe<StringQueryOperatorInput>;
	nlink?: InputMaybe<IntQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	prettySize?: InputMaybe<StringQueryOperatorInput>;
	rdev?: InputMaybe<IntQueryOperatorInput>;
	relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
	relativePath?: InputMaybe<StringQueryOperatorInput>;
	root?: InputMaybe<StringQueryOperatorInput>;
	size?: InputMaybe<IntQueryOperatorInput>;
	sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
	uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryPrismicEmbedTypeArgs = {
	children?: InputMaybe<NodeFilterListInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	parent?: InputMaybe<NodeFilterInput>;
};

export type QueryPrismicPageArgs = {
	_previewable?: InputMaybe<IdQueryOperatorInput>;
	alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
	children?: InputMaybe<NodeFilterListInput>;
	data?: InputMaybe<PrismicPageDataTypeFilterInput>;
	dataRaw?: InputMaybe<JsonQueryOperatorInput>;
	first_publication_date?: InputMaybe<DateQueryOperatorInput>;
	gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
	href?: InputMaybe<StringQueryOperatorInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	lang?: InputMaybe<StringQueryOperatorInput>;
	last_publication_date?: InputMaybe<DateQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	prismicId?: InputMaybe<IdQueryOperatorInput>;
	tags?: InputMaybe<StringQueryOperatorInput>;
	type?: InputMaybe<StringQueryOperatorInput>;
	uid?: InputMaybe<StringQueryOperatorInput>;
	url?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryPrismicTypePathTypeArgs = {
	children?: InputMaybe<NodeFilterListInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	kind?: InputMaybe<StringQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	path?: InputMaybe<StringQueryOperatorInput>;
	type?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySiteArgs = {
	buildTime?: InputMaybe<DateQueryOperatorInput>;
	children?: InputMaybe<NodeFilterListInput>;
	host?: InputMaybe<StringQueryOperatorInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	pathPrefix?: InputMaybe<StringQueryOperatorInput>;
	polyfill?: InputMaybe<BooleanQueryOperatorInput>;
	port?: InputMaybe<IntQueryOperatorInput>;
	siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type QuerySiteBuildMetadataArgs = {
	buildTime?: InputMaybe<DateQueryOperatorInput>;
	children?: InputMaybe<NodeFilterListInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	parent?: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
	absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
	children?: InputMaybe<NodeFilterListInput>;
	functionRoute?: InputMaybe<StringQueryOperatorInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	matchPath?: InputMaybe<StringQueryOperatorInput>;
	originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
	originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	pluginName?: InputMaybe<StringQueryOperatorInput>;
	relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
	children?: InputMaybe<NodeFilterListInput>;
	component?: InputMaybe<StringQueryOperatorInput>;
	componentChunkName?: InputMaybe<StringQueryOperatorInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	internalComponentName?: InputMaybe<StringQueryOperatorInput>;
	matchPath?: InputMaybe<StringQueryOperatorInput>;
	pageContext?: InputMaybe<JsonQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	path?: InputMaybe<StringQueryOperatorInput>;
	pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
	browserAPIs?: InputMaybe<StringQueryOperatorInput>;
	children?: InputMaybe<NodeFilterListInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	name?: InputMaybe<StringQueryOperatorInput>;
	nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
	packageJson?: InputMaybe<JsonQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
	pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
	resolve?: InputMaybe<StringQueryOperatorInput>;
	ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
	version?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
	buildTime?: Maybe<Scalars["Date"]>;
	children: Array<Node>;
	host?: Maybe<Scalars["String"]>;
	id: Scalars["ID"];
	internal: Internal;
	jsxRuntime?: Maybe<Scalars["String"]>;
	parent?: Maybe<Node>;
	pathPrefix?: Maybe<Scalars["String"]>;
	polyfill?: Maybe<Scalars["Boolean"]>;
	port?: Maybe<Scalars["Int"]>;
	siteMetadata?: Maybe<SiteSiteMetadata>;
};

export type SiteBuildTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
	buildTime?: Maybe<Scalars["Date"]>;
	children: Array<Node>;
	id: Scalars["ID"];
	internal: Internal;
	parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
	difference?: InputMaybe<Scalars["String"]>;
	formatString?: InputMaybe<Scalars["String"]>;
	fromNow?: InputMaybe<Scalars["Boolean"]>;
	locale?: InputMaybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<SiteBuildMetadataEdge>;
	group: Array<SiteBuildMetadataGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<SiteBuildMetadata>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
	field: SiteBuildMetadataFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
	next?: Maybe<SiteBuildMetadata>;
	node: SiteBuildMetadata;
	previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
	BuildTime = "buildTime",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
}

export type SiteBuildMetadataFilterInput = {
	buildTime?: InputMaybe<DateQueryOperatorInput>;
	children?: InputMaybe<NodeFilterListInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<SiteBuildMetadataEdge>;
	field: Scalars["String"];
	fieldValue?: Maybe<Scalars["String"]>;
	group: Array<SiteBuildMetadataGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<SiteBuildMetadata>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
	field: SiteBuildMetadataFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
	fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<SiteEdge>;
	group: Array<SiteGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<Site>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type SiteConnectionDistinctArgs = {
	field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
	field: SiteFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteConnectionMaxArgs = {
	field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
	field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
	field: SiteFieldsEnum;
};

export type SiteEdge = {
	next?: Maybe<Site>;
	node: Site;
	previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
	BuildTime = "buildTime",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Host = "host",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	JsxRuntime = "jsxRuntime",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PathPrefix = "pathPrefix",
	Polyfill = "polyfill",
	Port = "port",
	SiteMetadataDescription = "siteMetadata___description",
	SiteMetadataSiteUrl = "siteMetadata___siteUrl",
	SiteMetadataTitle = "siteMetadata___title",
}

export type SiteFilterInput = {
	buildTime?: InputMaybe<DateQueryOperatorInput>;
	children?: InputMaybe<NodeFilterListInput>;
	host?: InputMaybe<StringQueryOperatorInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	pathPrefix?: InputMaybe<StringQueryOperatorInput>;
	polyfill?: InputMaybe<BooleanQueryOperatorInput>;
	port?: InputMaybe<IntQueryOperatorInput>;
	siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
	absoluteCompiledFilePath: Scalars["String"];
	children: Array<Node>;
	functionRoute: Scalars["String"];
	id: Scalars["ID"];
	internal: Internal;
	matchPath?: Maybe<Scalars["String"]>;
	originalAbsoluteFilePath: Scalars["String"];
	originalRelativeFilePath: Scalars["String"];
	parent?: Maybe<Node>;
	pluginName: Scalars["String"];
	relativeCompiledFilePath: Scalars["String"];
};

export type SiteFunctionConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<SiteFunctionEdge>;
	group: Array<SiteFunctionGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<SiteFunction>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type SiteFunctionConnectionDistinctArgs = {
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
	field: SiteFunctionFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteFunctionConnectionMaxArgs = {
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
	next?: Maybe<SiteFunction>;
	node: SiteFunction;
	previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
	AbsoluteCompiledFilePath = "absoluteCompiledFilePath",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	FunctionRoute = "functionRoute",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	MatchPath = "matchPath",
	OriginalAbsoluteFilePath = "originalAbsoluteFilePath",
	OriginalRelativeFilePath = "originalRelativeFilePath",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PluginName = "pluginName",
	RelativeCompiledFilePath = "relativeCompiledFilePath",
}

export type SiteFunctionFilterInput = {
	absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
	children?: InputMaybe<NodeFilterListInput>;
	functionRoute?: InputMaybe<StringQueryOperatorInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	matchPath?: InputMaybe<StringQueryOperatorInput>;
	originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
	originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	pluginName?: InputMaybe<StringQueryOperatorInput>;
	relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<SiteFunctionEdge>;
	field: Scalars["String"];
	fieldValue?: Maybe<Scalars["String"]>;
	group: Array<SiteFunctionGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<SiteFunction>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
	field: SiteFunctionFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
	field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
	fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<SiteEdge>;
	field: Scalars["String"];
	fieldValue?: Maybe<Scalars["String"]>;
	group: Array<SiteGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<Site>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type SiteGroupConnectionDistinctArgs = {
	field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
	field: SiteFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteGroupConnectionMaxArgs = {
	field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
	field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
	field: SiteFieldsEnum;
};

export type SitePage = Node & {
	children: Array<Node>;
	component: Scalars["String"];
	componentChunkName: Scalars["String"];
	id: Scalars["ID"];
	internal: Internal;
	internalComponentName: Scalars["String"];
	matchPath?: Maybe<Scalars["String"]>;
	pageContext?: Maybe<Scalars["JSON"]>;
	parent?: Maybe<Node>;
	path: Scalars["String"];
	pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<SitePageEdge>;
	group: Array<SitePageGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<SitePage>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type SitePageConnectionDistinctArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
	field: SitePageFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePageConnectionMaxArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageEdge = {
	next?: Maybe<SitePage>;
	node: SitePage;
	previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Component = "component",
	ComponentChunkName = "componentChunkName",
	Id = "id",
	InternalComponentName = "internalComponentName",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	MatchPath = "matchPath",
	PageContext = "pageContext",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	Path = "path",
	PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
	PluginCreatorChildren = "pluginCreator___children",
	PluginCreatorChildrenChildren = "pluginCreator___children___children",
	PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
	PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
	PluginCreatorChildrenId = "pluginCreator___children___id",
	PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
	PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
	PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
	PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
	PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
	PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
	PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
	PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
	PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
	PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
	PluginCreatorId = "pluginCreator___id",
	PluginCreatorInternalContent = "pluginCreator___internal___content",
	PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
	PluginCreatorInternalDescription = "pluginCreator___internal___description",
	PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
	PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
	PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
	PluginCreatorInternalOwner = "pluginCreator___internal___owner",
	PluginCreatorInternalType = "pluginCreator___internal___type",
	PluginCreatorName = "pluginCreator___name",
	PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
	PluginCreatorPackageJson = "pluginCreator___packageJson",
	PluginCreatorParentChildren = "pluginCreator___parent___children",
	PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
	PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
	PluginCreatorParentId = "pluginCreator___parent___id",
	PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
	PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
	PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
	PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
	PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
	PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
	PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
	PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
	PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
	PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
	PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
	PluginCreatorPluginOptions = "pluginCreator___pluginOptions",
	PluginCreatorResolve = "pluginCreator___resolve",
	PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
	PluginCreatorVersion = "pluginCreator___version",
}

export type SitePageFilterInput = {
	children?: InputMaybe<NodeFilterListInput>;
	component?: InputMaybe<StringQueryOperatorInput>;
	componentChunkName?: InputMaybe<StringQueryOperatorInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	internalComponentName?: InputMaybe<StringQueryOperatorInput>;
	matchPath?: InputMaybe<StringQueryOperatorInput>;
	pageContext?: InputMaybe<JsonQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	path?: InputMaybe<StringQueryOperatorInput>;
	pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<SitePageEdge>;
	field: Scalars["String"];
	fieldValue?: Maybe<Scalars["String"]>;
	group: Array<SitePageGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<SitePage>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type SitePageGroupConnectionDistinctArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
	field: SitePageFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePageGroupConnectionMaxArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
	fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
	browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
	children: Array<Node>;
	id: Scalars["ID"];
	internal: Internal;
	name?: Maybe<Scalars["String"]>;
	nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
	packageJson?: Maybe<Scalars["JSON"]>;
	parent?: Maybe<Node>;
	pluginFilepath?: Maybe<Scalars["String"]>;
	pluginOptions?: Maybe<Scalars["JSON"]>;
	resolve?: Maybe<Scalars["String"]>;
	ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
	version?: Maybe<Scalars["String"]>;
};

export type SitePluginConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<SitePluginEdge>;
	group: Array<SitePluginGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<SitePlugin>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type SitePluginConnectionDistinctArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
	field: SitePluginFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePluginConnectionMaxArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
	next?: Maybe<SitePlugin>;
	node: SitePlugin;
	previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
	BrowserApIs = "browserAPIs",
	Children = "children",
	ChildrenChildren = "children___children",
	ChildrenChildrenChildren = "children___children___children",
	ChildrenChildrenChildrenChildren = "children___children___children___children",
	ChildrenChildrenChildrenId = "children___children___children___id",
	ChildrenChildrenId = "children___children___id",
	ChildrenChildrenInternalContent = "children___children___internal___content",
	ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
	ChildrenChildrenInternalDescription = "children___children___internal___description",
	ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
	ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
	ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
	ChildrenChildrenInternalOwner = "children___children___internal___owner",
	ChildrenChildrenInternalType = "children___children___internal___type",
	ChildrenChildrenParentChildren = "children___children___parent___children",
	ChildrenChildrenParentId = "children___children___parent___id",
	ChildrenId = "children___id",
	ChildrenInternalContent = "children___internal___content",
	ChildrenInternalContentDigest = "children___internal___contentDigest",
	ChildrenInternalDescription = "children___internal___description",
	ChildrenInternalFieldOwners = "children___internal___fieldOwners",
	ChildrenInternalIgnoreType = "children___internal___ignoreType",
	ChildrenInternalMediaType = "children___internal___mediaType",
	ChildrenInternalOwner = "children___internal___owner",
	ChildrenInternalType = "children___internal___type",
	ChildrenParentChildren = "children___parent___children",
	ChildrenParentChildrenChildren = "children___parent___children___children",
	ChildrenParentChildrenId = "children___parent___children___id",
	ChildrenParentId = "children___parent___id",
	ChildrenParentInternalContent = "children___parent___internal___content",
	ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
	ChildrenParentInternalDescription = "children___parent___internal___description",
	ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
	ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
	ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
	ChildrenParentInternalOwner = "children___parent___internal___owner",
	ChildrenParentInternalType = "children___parent___internal___type",
	ChildrenParentParentChildren = "children___parent___parent___children",
	ChildrenParentParentId = "children___parent___parent___id",
	Id = "id",
	InternalContent = "internal___content",
	InternalContentDigest = "internal___contentDigest",
	InternalDescription = "internal___description",
	InternalFieldOwners = "internal___fieldOwners",
	InternalIgnoreType = "internal___ignoreType",
	InternalMediaType = "internal___mediaType",
	InternalOwner = "internal___owner",
	InternalType = "internal___type",
	Name = "name",
	NodeApIs = "nodeAPIs",
	PackageJson = "packageJson",
	ParentChildren = "parent___children",
	ParentChildrenChildren = "parent___children___children",
	ParentChildrenChildrenChildren = "parent___children___children___children",
	ParentChildrenChildrenId = "parent___children___children___id",
	ParentChildrenId = "parent___children___id",
	ParentChildrenInternalContent = "parent___children___internal___content",
	ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
	ParentChildrenInternalDescription = "parent___children___internal___description",
	ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
	ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
	ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
	ParentChildrenInternalOwner = "parent___children___internal___owner",
	ParentChildrenInternalType = "parent___children___internal___type",
	ParentChildrenParentChildren = "parent___children___parent___children",
	ParentChildrenParentId = "parent___children___parent___id",
	ParentId = "parent___id",
	ParentInternalContent = "parent___internal___content",
	ParentInternalContentDigest = "parent___internal___contentDigest",
	ParentInternalDescription = "parent___internal___description",
	ParentInternalFieldOwners = "parent___internal___fieldOwners",
	ParentInternalIgnoreType = "parent___internal___ignoreType",
	ParentInternalMediaType = "parent___internal___mediaType",
	ParentInternalOwner = "parent___internal___owner",
	ParentInternalType = "parent___internal___type",
	ParentParentChildren = "parent___parent___children",
	ParentParentChildrenChildren = "parent___parent___children___children",
	ParentParentChildrenId = "parent___parent___children___id",
	ParentParentId = "parent___parent___id",
	ParentParentInternalContent = "parent___parent___internal___content",
	ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
	ParentParentInternalDescription = "parent___parent___internal___description",
	ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
	ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
	ParentParentInternalMediaType = "parent___parent___internal___mediaType",
	ParentParentInternalOwner = "parent___parent___internal___owner",
	ParentParentInternalType = "parent___parent___internal___type",
	ParentParentParentChildren = "parent___parent___parent___children",
	ParentParentParentId = "parent___parent___parent___id",
	PluginFilepath = "pluginFilepath",
	PluginOptions = "pluginOptions",
	Resolve = "resolve",
	SsrApIs = "ssrAPIs",
	Version = "version",
}

export type SitePluginFilterInput = {
	browserAPIs?: InputMaybe<StringQueryOperatorInput>;
	children?: InputMaybe<NodeFilterListInput>;
	id?: InputMaybe<StringQueryOperatorInput>;
	internal?: InputMaybe<InternalFilterInput>;
	name?: InputMaybe<StringQueryOperatorInput>;
	nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
	packageJson?: InputMaybe<JsonQueryOperatorInput>;
	parent?: InputMaybe<NodeFilterInput>;
	pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
	pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
	resolve?: InputMaybe<StringQueryOperatorInput>;
	ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
	version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
	distinct: Array<Scalars["String"]>;
	edges: Array<SitePluginEdge>;
	field: Scalars["String"];
	fieldValue?: Maybe<Scalars["String"]>;
	group: Array<SitePluginGroupConnection>;
	max?: Maybe<Scalars["Float"]>;
	min?: Maybe<Scalars["Float"]>;
	nodes: Array<SitePlugin>;
	pageInfo: PageInfo;
	sum?: Maybe<Scalars["Float"]>;
	totalCount: Scalars["Int"];
};

export type SitePluginGroupConnectionDistinctArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
	field: SitePluginFieldsEnum;
	limit?: InputMaybe<Scalars["Int"]>;
	skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePluginGroupConnectionMaxArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
	fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
	description?: Maybe<Scalars["String"]>;
	siteUrl?: Maybe<Scalars["String"]>;
	title?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
	description?: InputMaybe<StringQueryOperatorInput>;
	siteUrl?: InputMaybe<StringQueryOperatorInput>;
	title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
	fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
	order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
	Asc = "ASC",
	Desc = "DESC",
}

export type StringQueryOperatorInput = {
	eq?: InputMaybe<Scalars["String"]>;
	glob?: InputMaybe<Scalars["String"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
	ne?: InputMaybe<Scalars["String"]>;
	nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
	regex?: InputMaybe<Scalars["String"]>;
};

export type GatsbyImgixFluidFragment = {
	aspectRatio: number;
	src: string;
	srcWebp: string;
	srcSet: string;
	srcSetWebp: string;
	sizes: string;
	base64: string;
};

export type GatsbyImgixFluid_NoBase64Fragment = {
	aspectRatio: number;
	src: string;
	srcWebp: string;
	srcSet: string;
	srcSetWebp: string;
	sizes: string;
};

export type GatsbyImgixFixedFragment = {
	base64: string;
	width: number;
	height: number;
	src: string;
	srcSet: string;
	srcWebp: string;
	srcSetWebp: string;
};

export type GatsbyImgixFixed_NoBase64Fragment = {
	width: number;
	height: number;
	src: string;
	srcSet: string;
	srcWebp: string;
	srcSetWebp: string;
};

export type PageTemplateQueryVariables = Exact<{
	id: Scalars["String"];
}>;

export type PageTemplateQuery = {
	prismicPage?:
		| {
				_previewable: string;
				data: {
					title?: { text?: string | undefined } | undefined;
					body: Array<{
						slice_type: string;
						primary: {
							text?:
								| { richText: import("@prismicio/types").RichTextField }
								| undefined;
						};
					}>;
				};
		  }
		| undefined;
};

export type PageDataBodyTextFragment = {
	slice_type: string;
	primary: {
		text?: { richText: import("@prismicio/types").RichTextField } | undefined;
	};
};
