import datetime
import subprocess
import sys
from pathlib import Path


def main():
    while True:
        print("请选择一个选项:")
        print("1) 创建新文章")
        print("2) Push 更改")
        choice = input("输入选项编号 (1 或 2): ")
        if choice == "1":
            create_new_article()
            return
        elif choice == "2":
            push_changes()
            return
        else:
            print("无效选项，请重试。")


def create_new_article():
    now = datetime.datetime.now()
    year = now.year
    month = now.month
    filename = input("请输入新文章的文件名（不含扩展名）: ")
    article_path = (
        Path("docs") / "posts" / str(year) / f"{month:02d}" / f"{filename}.md"
    )
    article_path.parent.mkdir(parents=True, exist_ok=True)
    if article_path.exists():
        print(f"文件 {article_path} 已存在。")
        sys.exit(1)
    with article_path.open("w", encoding="utf-8") as f:
        f.write("---\n")
        f.write(f"date: {now.strftime('%Y-%m-%d')}\n")
        f.write("---\n\n")
        f.write(f"# {filename}\n\n")
    print(f"已创建新文章: {article_path}")
    subprocess.run(["code", str(article_path)], shell=True)


def push_changes():
    subprocess.run(["git", "add", "."])
    subprocess.run(["git", "commit", "-m", "Push"])
    subprocess.run(["git", "push"])
    print("更改已推送到远程仓库。")


if __name__ == "__main__":
    main()
