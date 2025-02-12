-- CreateTable
CREATE TABLE `Account` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `e_mail` VARCHAR(191) NOT NULL,
    `user_type` INTEGER NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
