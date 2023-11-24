import time

class Benchmark:
    def __init__(self, consoleName="Python"):
        print("### " + consoleName + " ###\n-------------------")
        self.tests = []

    def it(self, name, func):
        self.tests.append({"name": name, "func": func})
        return self

    def run(self, runs):
        for test in self.tests:
            name = test["name"]
            func = test["func"]
            total_time = 0

            for i in range(runs):
                start_time = time.perf_counter()

                func()

                end_time = time.perf_counter()
                total_time += end_time - start_time

            ops_per_sec = runs / total_time
            print(f"{name} - {ops_per_sec:.2f} ops/sec - ({runs} runs sampled)")

        return self