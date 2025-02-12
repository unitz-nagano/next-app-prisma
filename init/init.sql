-- データベースの作成
CREATE DATABASE IF NOT EXISTS dev_work_stats_db;
CREATE DATABASE IF NOT EXISTS dev_work_stats_shadowdb;

-- ユーザーの作成
CREATE USER IF NOT EXISTS 'work-stats-user'@'%' IDENTIFIED BY 'xmBXFQsRQv3C';

-- ユーザーに対するデータベースの全権限付与
GRANT ALL PRIVILEGES ON dev_work_stats_db.* TO 'work-stats-user'@'%';
GRANT ALL PRIVILEGES ON dev_work_stats_shadowdb.* TO 'work-stats-user'@'%';


FLUSH PRIVILEGES;
