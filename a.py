def is_perfect_cube(n):
    """判断一个整数是否为完全立方数，并返回其立方根（若存在）"""
    if n >= 0:
        root = round(n ** (1 / 3))
        # 调整可能的浮点误差
        for r in [root - 1, root, root + 1]:
            if r**3 == n:
                return True, r
    else:
        root = round(abs(n) ** (1 / 3))
        for r in [root - 1, root, root + 1]:
            if (-r) ** 3 == n:
                return True, -r
    return False, None


def find_integer_solutions():
    """寻找 2x^3 + y^3 = 2020 的整数解"""
    solutions = []
    # 设置合理的搜索范围
    for x in range(-1000000, 1000001):
        y_cubed = 1919810 - 2 * (x**3)
        is_cube, y = is_perfect_cube(y_cubed)
        if is_cube:
            solutions.append((x, y))
    return solutions


# 主程序
if __name__ == "__main__":
    print("正在搜索方程 2x³ + y³ = 2020 的整数解...\n")
    solutions = find_integer_solutions()

    if solutions:
        print(f"共找到 {len(solutions)} 组整数解：\n")
        for x, y in solutions:
            print(f"x = {x:4d}, y = {y:4d}")
            print(f"验证: 2×({x})³ + ({y})³ = {2*(x**3) + y**3}")
            print("-" * 40)
    else:
        print("未找到整数解。")
