-- CreateTable
CREATE TABLE "Post" (
    "id" UUID NOT NULL,
    "content" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");
